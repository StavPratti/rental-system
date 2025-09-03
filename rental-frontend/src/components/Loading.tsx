import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="p-6 flex flex-col items-center justify-center text-muted-foreground">
      <Loader2 className="h-6 w-6 animate-spin mb-2" />
      <span>Loading…</span>
    </div>
  );
}

