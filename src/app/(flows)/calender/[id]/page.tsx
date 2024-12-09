import { Gate } from "@/components/gate";
import { Mascot } from "@/components/mascot";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getCalenderDoor } from "@/lib/api";
import { AlertCircle } from "lucide-react";

interface ChristmasDoorPageProps {
  params: Promise<{ id: string }>;
}

export default async function ChristmasDoorPage({
  params,
}: ChristmasDoorPageProps) {
  const { id } = await params;
  const data = await getCalenderDoor(id);

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

  return (
    <div className="flex flex-col gap-16 items-center py-16">
      <Gate>
        Hejsa
      </Gate>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
