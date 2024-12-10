import { Button } from "@/components/ui/button";
import { ChevronRightIcon, TicketIcon } from "lucide-react";
import Link from "next/link";

export default function profile() {
    return (
        <main className="flex flex-col items-center gap-16 p-4 pt-6 py-4 w-full">
            <div className="flex flex-row space-between items-center">
                <div className="w-20 h-16 bg-gray-200 rounded-full"></div>
                <div className="">
                    <p className="font-mono text-2xl pl-4">Anders Andersen</p>
                    <p className="text-xs pl-4">Ret adgangskode, sikkerhed, personlige oplysninger</p>
                </div>
                <ChevronRightIcon strokeWidth={1.5} size={60} className="text-bill-orange" />
            </div>

            <div className="h-0.5 w-full bg-bill-green"></div>

            
            <Link href="/kupon" className="flex flex-row justify-between items-center w-full">
                <TicketIcon />
                <p className="font-mono">Dine kuponer</p>
                <ChevronRightIcon strokeWidth={1.5} size={60} className="text-bill-orange" />
              
            </Link>



            <div className="flex flex-row justify-between items-center w-full">
                <img src="preference.svg" alt="preference" />
                <p className="font-mono">Præferencer</p>
                <ChevronRightIcon strokeWidth={1.5} size={60} className="text-bill-orange" />
            </div>
        </main>
    );
}


