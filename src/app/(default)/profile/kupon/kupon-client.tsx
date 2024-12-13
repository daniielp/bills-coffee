"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Storecard from "@/components/Storecard";
import Coupon from "@/components/kupon";
import { updatePoints } from "@/lib/api";
import { toast } from "sonner";

interface Coupon {
    id: string;
    text: string;
    cost: string;
}

interface KuponClientProps {
    initialCoupons: Coupon[];
    initialPoints: number;
    userId: string;
}

export default function KuponClient({ 
    initialCoupons, 
    initialPoints, 
    userId 
}: KuponClientProps) {
    const [purchasedCoupons, setPurchasedCoupons] = useState<Coupon[]>([]);
    const [currentPoints, setCurrentPoints] = useState(initialPoints);
    const [availableCoupons, setAvailableCoupons] = useState(initialCoupons);

    const handlePurchase = async (coupon: Coupon) => {
        const cost = parseInt(coupon.cost);
        
        if (currentPoints >= cost) {
            try {
           
                const updatedPoints = await updatePoints(userId, -cost);
                
                setCurrentPoints(updatedPoints);
                setPurchasedCoupons([...purchasedCoupons, coupon]);
                
                setAvailableCoupons(availableCoupons.filter(c => c.id !== coupon.id));
            } catch (error) {
                console.error("Failed to purchase coupon", error);
                toast.error("Kunne ikke købe kuponen. Prøv venligst igen.");
            }
        } else {
            toast.error("Ikke nok point til at købe dette kupon!");
        }
    };

    return (
        <main className="flex flex-col items-center gap-2 pt-6 py-4 w-full">
            <div className="w-full pl-4">
                <p className="font-serif font-bold text-2xl text-left">Mine Kuponer</p>
            </div>
            
            {/* Purchased Coupons Section */}
            {purchasedCoupons.length > 0 && (
                <div className="w-full px-4 mb-4">
                    <div className="grid grid-cols-3 gap-2">
                        {purchasedCoupons.map((coupon) => (
                            <Coupon 
                                key={coupon.id}
                                id={coupon.id}
                                title={coupon.text}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div className="bg-[#E0E476] p-4 w-full h-auto rounded-2xl font-serif fixed bottom-14 pb-16 left-0">
                <p className="text-2xl font-bold pb-4">Point Kiosken</p>
                <div className='flex font-semibold justify-between rounded-2xl bg-[#FFFCD4] w-44'>
                    <p className=' px-2 rounded-2xl'>Antal point</p>
                    <p className="bg-white rounded-2xl px-2">{currentPoints}</p>
                </div>
                <div className="grid grid-cols-3 justi-center gap-2 pt-4">
                    {availableCoupons.map((coupon) => (
                        <Storecard 
                            key={coupon.id} 
                            id={coupon.id} 
                            title={coupon.text} 
                            cost={coupon.cost}
                            onPurchase={() => handlePurchase(coupon)}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

