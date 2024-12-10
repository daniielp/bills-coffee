"use client";
import { Button } from "@/components/ui/button";
import { getGuide, getQuiz } from "@/lib/api";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import Link from "next/link";
import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";

interface GateProps {
  id: string;
  type: string;
}

export function Gate({ children, id, type }: PropsWithChildren<GateProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any>();

  const backgroundImage = useMemo(() => {
    let path = "";

    switch (type) {
      case "quiz":
        path = "/coffee-bean.svg";
        break;
      case "guide":
        path = "/coffee-bean.svg";
        break;
      case "coupon":
        path = "/coupon.svg";
        break;
      default:
        path = "/coffee-bean.svg";
        break;
    }

    return path;
  }, [type]);

  useEffect(() => {
    (async () => {
      switch (type) {
        case "quiz":
          const quizResponse = await getQuiz(id);
          setData(quizResponse);
          break;
        case "guide":
          const guideResponse = await getGuide(id);
          setData(guideResponse);
          break;
        case "coupon":
          break;
        default:
          break;
      }
    })();
  }, []);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="w-80 h-80 relative">
        <div
          className={cn(
            "pointer-events-none w-full z-20 absolute inset-0 border-4 border-l-transparent border-dashed bg-bill-lime border-bill-orange rotate-y-0 origin-[0] transition-all	duration-1000",
            isOpen && "origin-[0_50%_0] rotate-y-120 w-[20%]"
          )}
        ></div>
        <div className="w-full h-full relative flex flex-col justify-center items-center bg-white gap-2">
          <div className="flex flex-col justify-center items-center z-10">
            <p className="text-base">{id.replace("-", " ")}</p>
            <h2 className="text-5xl font-bold">{type}</h2>
            <p className="text-sm mt-4">
              Optjen {data?.points ?? 0} points{" "}
            </p>
          </div>
          <img src={backgroundImage} className="w-40 h-40 absolute z-0 " />
        </div>
      </button>
      <div
        className={cn(
          isOpen ? "opacity-100" : "opacity-0",
          "flex items-center gap-2 transition-all duration-1000"
        )}
      >
        <InfoIcon size={40} />
        <p className="text-xs">
          Gennemfør udfordringen og bliv belønnet med points, du kan bruge til
          fordele.
        </p>
      </div>
      <Button
        className={cn(
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none cursor-none",
          "transition-all duration-1000"
        )}
        asChild
      >
        <Link href={`/${type}/${id}`}>Start udfordring</Link>
      </Button>
    </>
  );
}
