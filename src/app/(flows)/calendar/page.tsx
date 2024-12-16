"use client"
import Link from "next/link";
import { toast } from "sonner"
import ShareButton from "@/components/share-button";

export default function CalenderPage() {
  return (
    <main>
      <div className="flex p-4">
        <Link href={"/calendar/1"}><img className="w-20 h-20 fixed top-50 left-12" src="/cup1.png" alt="kalender" /></Link>
        <Link href={"/calendar/2"}><img className="w-20 h-20 fixed top-50 left-32" src="/cup2.png" alt="kalender" /></Link>
        <Link href={"/calendar/3"}><img className="w-20 h-20 fixed top-50 right-32 animate" src="/cup3.png" alt="kalender" /></Link>
        <Link href={"/calendar/4"}><img className="w-20 h-20 fixed top-56 right-20" src="/cup4.png" alt="kalender" /></Link>
        <div onClick={() => toast("Det er vidst ikke dagens dato du har valgt ;)")}>
          <img src="/julekalender.png" alt="kalender" />
        </div>
      </div>
      <ShareButton text={`https://${process.env.NEXT_PUBLIC_VERCEL_URL ?? "localhost:3000"}`} />
    </main>


  )
}