import { Button } from "@/components/ui/button";
import { ChevronRightIcon, TicketIcon } from "lucide-react";
import Link from "next/link";
import Storecard from "@/components/Storecard";
import { getCoupons } from "@/lib/api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mascot } from "@/components/mascot";
import { useMemo } from "react";
import Coupon from "@/components/kupon";


export default async function kupon() {

    const data = await getCoupons();
    const coupons = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...(value as any)
    }))

    if (!data) {
        return (
            <Alert variant="destructive">
                <Mascot className="h-8 w-8" />
                <AlertTitle>Der opstod en fejl</AlertTitle>
                <AlertDescription>
                    Bill kunne ikke hente de nødvendige oplysninger
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <main className="flex flex-col items-center gap-16 pt-6 py-4 w-full">
            <div className="w-full pl-4">
                <p className="font-serif font-bold text-2xl text-left">Mine Kuponer</p>
                <Coupon title={""} id={""} cost={""} />
            </div>
            <div className="bg-[#E0E476] p-4 w-full h-3/5 rounded-2xl font-serif fixed bottom-2 left-0">
                <p className="text-2xl font-bold pb-4">Point Kiosken</p>
                <div className='flex font-semibold justify-between rounded-2xl bg-[#FFFCD4] w-44'>
                    <p className=' px-2 rounded-2xl'>Antal point</p>
                    <p className="bg-white rounded-2xl px-2">150</p>
                </div>
                <div className="grid grid-cols-3 justi-center gap-2 pt-4">
                    {coupons.map((coupon) =>
                        <Storecard id={coupon.id} title={coupon.text} cost={coupon.cost} />
                    )}
                </div>
            </div>

        </main>
    );
}
