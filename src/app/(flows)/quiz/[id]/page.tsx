import { Mascot } from "@/components/mascot";
import { QuizFlow } from "@/components/quiz/quiz-flow";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { getQuiz } from "@/lib/api";

interface QuizPageProps {
  params: Promise<{ id: string }>;
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = await params;
  const data = await getQuiz(id);

  if (!data) {
    return (
      <Alert variant="destructive">
        <Mascot className="h-8 w-8" />
        <AlertTitle>Der opstod en fejl</AlertTitle>
        <AlertDescription>
          Bill kunne ikke hente de nødvendige oplysninger
        </AlertDescription>
      </Alert>
    );
  }

  return <QuizFlow data={data} />;
}
