import { Logo } from "@/components/logo";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { getGuide } from "@/lib/api";
interface GuidePageProps {
  params: Promise<{ id: string }>;
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { id } = await params;

  const data = await getGuide(id);

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

  console.log(data);

  return <div>
    <pre>{JSON.stringify(data)}</pre>
  </div>;
}
