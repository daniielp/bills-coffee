"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { ChevronRightIcon, TicketIcon } from "lucide-react";
import Link from "next/link";

export default function profile() {
    const { user} = useUser();

    return (
        <main className="flex flex-col items-center gap-16 p-4 pt-6 py-4 w-full">
            <div className="flex flex-row space-between items-center">
                <Avatar className="w-20 h-20">
                    <AvatarImage src={user?.imageUrl} alt="profile" />
                    <AvatarFallback>{user?.fullName ?? "Anders Andersen"}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-mono text-2xl pl-4">{user?.fullName ?? "Anders Andersen"}</p>
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


