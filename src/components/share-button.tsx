"use client";

import { Button } from "@/components/ui/button";
import { ShareIcon } from "lucide-react";
import { toast } from "sonner";

interface ShareComponentProps {
  text: string;
}

function ShareButton({ text }: ShareComponentProps) {
  return (
    <Button
      className="flex fixed bottom-4 right-4"
      onClick={() => {
        navigator.clipboard.writeText(text);
        toast("Link kopieret til udklipsholderen");
      }}
    >
      <ShareIcon /> Del
    </Button>
  );
}

export default ShareButton;
