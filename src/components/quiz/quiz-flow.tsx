"use client";

import { useSearchParams } from "next/navigation";

interface QuizFlowProps {
  data: any;
}

export function QuizFlow({ data }: QuizFlowProps) {
  const search = useSearchParams();
  const step = search.get("step");

  const steps = Object.entries(data.steps).map(([key, value], index) => ({
    id: index,
    ...value as any,
}));

  return <div>{JSON.stringify(steps)}</div>;
}
