"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { ChevronRightIcon, TicketIcon } from "lucide-react";
import Link from "next/link";

export default function profile() {
    const { user } = useUser();

    return (
        <main className="flex flex-col items-center gap-16 p-4 pt-6 py-4 w-full">
            <div className="flex flex-row space-between items-center">
                <div className="w-20 h-16 bg-gray-200 rounded-full"></div>
                <div className="">
                    <p className="font-mono text-2xl pl-4"></p>
                    <p className="text-xs pl-4">Ret adgangskode, sikkerhed, personlige oplysninger</p>
                </div>
                <ChevronRightIcon strokeWidth={1.5} size={60} className="text-bill-orange" />
            </div>

            <div className="h-0.5 w-full bg-bill-green"></div>

            <Link href="/profile/kupon" className="flex flex-row justify-between items-center w-full">
                <TicketIcon />
                <p className="font-mono">Dine kuponer</p>
                <ChevronRightIcon strokeWidth={1.5} size={60} className="text-bill-orange" />

            </Link>




            <div className="flex flex-row justify-between items-center w-full">
                <img src="/preference.svg" alt="preference" />
                <p className="font-mono">Præferencer</p>
                <ChevronRightIcon strokeWidth={1.5} size={60} className="text-bill-orange" />
            </div>
        </main>
    );
}


