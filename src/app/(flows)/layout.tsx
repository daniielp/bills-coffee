import { Logo } from "@/components/logo";
import React, { PropsWithChildren } from "react";

export default function FlowsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Logo className="mx-auto" />
      {children}
    </>
  );
}
