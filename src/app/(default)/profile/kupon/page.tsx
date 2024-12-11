import { Button } from "@/components/ui/button";
import { ChevronRightIcon, TicketIcon } from "lucide-react";
import Link from "next/link";
import Storecard from "@/components/Storecard";
import { getCoupons } from "@/lib/api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mascot } from "@/components/mascot";
import { useMemo } from "react";


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
            <div>
                <p>Mine Kuponer</p>

            </div>
            <div className="bg-[#E0E476] p-4 w-full h-1/2 rounded-2xl fixed bottom-10 left-0">
                <p className="font-mono">Point Kiosken</p>
                <div className='flex justify-between rounded-2xl bg-[#FFFCD4] w-44'>
                    <p className=' px-2 rounded-2xl'>Antal point</p>
                    <p className="bg-white rounded-2xl px-2">150</p>
                </div>
                <div className="grid grid-cols-3 gap-6 p-4">
                    {coupons.map((coupon) =>
                        <Storecard id={coupon.id} title={coupon.text} cost={coupon.cost} />
                    )}
                </div>
            </div>

        </main>
    );
}


