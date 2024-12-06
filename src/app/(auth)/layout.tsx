import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-bill-orange">
        {children}
      <main className="flex w-full -translate-x-1/2 -translate-y-1/2 items-center lg:static lg:left-0 lg:top-0 lg:flex lg:translate-x-0 lg:translate-y-0">
      </main>
    </div>
  );
}
