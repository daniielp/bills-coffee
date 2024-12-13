
import { auth } from "@clerk/nextjs/server";
import { getCoupons, getPoints } from "@/lib/api";
import KuponClient from "./kupon-client";

export default async function KuponPage() {
    const { userId } = await auth();
    
    if (!userId) {
        return <div>Please log in</div>;
    }

    const couponsData = await getCoupons();
    const currentPoints = await getPoints(userId);

    const coupons = couponsData 
        ? Object.entries(couponsData).map(([key, value]) => ({
            id: key,
            ...(value as any)
        }))
        : [];

    return <KuponClient initialCoupons={coupons} initialPoints={currentPoints} userId={userId} />;
}



/* "use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, TicketIcon } from "lucide-react";
import Storecard from "@/components/Storecard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mascot } from "@/components/mascot";
import Coupon from "@/components/kupon";

interface Coupon {
    id: string;
    text: string;
    cost: string;
}

export default function KuponPage() {
    const [purchasedCoupons, setPurchasedCoupons] = useState<Coupon[]>([]);
    const [currentPoints, setCurrentPoints] = useState(1000); 

    const coupons = [
        { id: 'beans', text: 'Kaffe Bønner', cost: '100' },
        { id: 'chai', text: 'Chai Latte', cost: '150' },
        { id: 'coffee-date', text: 'Kaffe Date', cost: '200' },
        { id: 'combo', text: 'Kombination', cost: '250' },
        { id: 'croissant', text: 'Croissant', cost: '75' },
        { id: 'cup', text: 'Kop', cost: '50' }
    ];

    const handlePurchase = (coupon: Coupon) => {
        const cost = parseInt(coupon.cost);
        if (currentPoints >= cost) {
            setPurchasedCoupons([...purchasedCoupons, coupon]);
            setCurrentPoints(currentPoints - cost);
        } else {
            alert("Ikke nok point til at købe dette kupon!");
        }
    };

    return (
        <main className="flex flex-col items-center gap-2 pt-6 py-4 w-full">
            <div className="w-full pl-4">
                <p className="font-serif font-bold text-2xl text-left">Mine Kuponer</p>
            </div>
            
            {/* Purchased Coupons Section */
            /*
            {purchasedCoupons.length > 0 && (
                <div className="w-full px-4">
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
                    {coupons.map((coupon) => (
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
} */