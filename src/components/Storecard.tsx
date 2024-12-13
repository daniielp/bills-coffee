"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { updateUserCoupons } from "@/lib/api";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

interface StorecardProps {
  title: string;
  id: string;
  cost: string;
}

const Storecard = ({ title, id, cost }: StorecardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useUser();

  let imageURL;
  switch (id) {
    case "beans":
      imageURL = "/kupon-beans.svg";
      break;
    case "chai":
      imageURL = "/kupon-chai.svg";
      break;
    case "coffee-date":
      imageURL = "/kupon-date.svg";
      break;
    case "combo":
      imageURL = "/kupon-combo.svg";
      break;
    case "croissant":
      imageURL = "/kupon-croissant.svg";
      break;
    case "cup":
      imageURL = "/kupon-kop.svg";
      break;
    default:
      imageURL = "/kupon-kop.svg";
      break;
  }

  const handleBuyClick = () => {
    setIsDialogOpen(true);
  };

  const handleConfirmPurchase = async () => {
    try {
      const res = await updateUserCoupons(user?.id!, id, parseInt(cost));
      console.log(res)
      setIsDialogOpen(false);
      window.location.reload();
    } catch (error) {
      setIsDialogOpen(false);
      toast.error("Du har ikke nok points til at købe denne kupon");
    }
  };

  const handleCancelPurchase = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div
        className="bg-[#FF7A4A] w-32 font-serif max-h-52 rounded-xl p-2 flex flex-col items-center justify-between cursor-pointer hover:opacity-90"
        onClick={handleBuyClick}
      >
        <h2 className="text-white font-semibold">{title}</h2>
        <img className="" src={imageURL} alt={title} />
        <div className="font-medium flex items-baseline pr-2 gap-2 border-bill-lime border-2 rounded-2xl">
          <p className="bg-bill-lime px-2 rounded-2xl">Køb</p>
          <p>{cost}</p>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bekræft køb</DialogTitle>
            <DialogDescription>
              Vil du købe {title} for {cost}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-4">
            <Button variant="outline" onClick={handleCancelPurchase}>
              Nej
            </Button>
            <Button onClick={handleConfirmPurchase}>Ja</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Storecard;
