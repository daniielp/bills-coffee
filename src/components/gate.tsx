import React, { PropsWithChildren } from "react";

interface GateProps {
}

export function Gate({ children }: PropsWithChildren<GateProps>) {
  return <div className="w-80 h-80">
    <div className="w-full h-full border-4 border-l-transparent border-dashed border-bill-orange"></div>
    
  </div>;
}
