import { Logo } from "@/components/logo";
import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Logo className="mx-auto"/>
      <main>{children}</main>
      <Navbar />
    </>
  );
}
