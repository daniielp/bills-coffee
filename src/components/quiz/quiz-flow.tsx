"use client";

import { Mascot } from "@/components/mascot";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface QuizFlowProps {
  data: any;
}

export function QuizFlow({ data }: QuizFlowProps) {
  const search = useSearchParams();
  const currentStep = parseInt(search.get("step") ?? "0");
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);

  useEffect(() => {
    setHasAnswered(false);
  }, [currentStep]);

  const steps = useMemo(() => {
    return Object.entries(data.steps).map(([_, value], index) => ({
      id: index,
      ...(value as any),
    }));
  }, [data]);

  const currentQuestion = useMemo(() => {
    return steps[currentStep];
  }, [currentStep]);

  const options = useMemo(() => {
    if (!currentQuestion) return;
    return Object.entries(currentQuestion.answers).map(([_, value], index) => ({
      ...(value as any),
    }));
  }, [currentStep]);

  if (currentStep >= steps.length) {
    return (
      <main className="flex flex-col justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl text-center">Tillykke!</h2>
          <p className="text-base text-center">
            Vi har tilføjet {data.points} points til din konto
          </p>
        </div>
        <Button asChild>
          <Link href="/profile/kupon">Se dine points</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-8 p-4">
      <div className="flex items-center justify-center gap-2">
        {steps.map((_, index) => (
          <div className="flex justify-center items-center border-2 border-bill-orange h-20 w-20 rounded-full">
            {index < currentStep && (
              <Mascot variant="dark" className="h-16 w-16 text-bill-orange" />
            )}
          </div>
        ))}
      </div>

      <h2 className="text-2xl">Spørgsmål {currentStep + 1}</h2>
      <p>{currentQuestion.text}</p>
      <div className="flex flex-col gap-4">
        {options &&
          options.map((option, index) => (
            <Button
              variant={
                hasAnswered
                  ? option.isCorrect
                    ? "success"
                    : "destructive"
                  : "default"
              }
              onClick={() => setHasAnswered(true)}
              key={index}
            >
              {option.text}
            </Button>
          ))}
      </div>
      <Button className={cn(hasAnswered ? "block" : "hidden")} asChild>
        <Link href={`?step=${currentStep + 1}`}>
          Spørgsmål {currentStep + 2} <ArrowRight />
        </Link>
      </Button>
      <pre>{JSON.stringify(steps)}</pre>
    </main>
  );
}