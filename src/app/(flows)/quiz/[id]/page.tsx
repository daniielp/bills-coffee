import { Logo } from "@/components/mascot";
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
        <Logo className="h-8 w-8" />
        <AlertTitle>Der opstod en fejl</AlertTitle>
        <AlertDescription>
          Bill kunne ikke hente de nødvendige oplysninger
        </AlertDescription>
      </Alert>
    );
  }

  return <div>
    <pre>{JSON.stringify(data)}</pre>
  </div>;
}
