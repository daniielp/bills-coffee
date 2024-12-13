"use client"
import Link from "next/link";
import { toast } from "sonner"

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
      </div><div className="fixed bottom-4 right-4 flex flex-row w-24 h-12 bg-bill-orange rounded-full items-center p-4">
        <img src="/share-icon.svg" alt="share" />
        <p className="text-white">Del</p>
      </div>
    </main>


  )
}