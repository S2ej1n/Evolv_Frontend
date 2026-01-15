// [공용 UI] 로딩화면
import { Loader2 } from "lucide-react";

type LoadingProps = {
  message?: string;
};

export default function Loading({ message }: LoadingProps) {
  return (
    <main className="flex flex-col items-center justify-center py-20 text-sm text-muted-foreground">
        <Loader2 className="h-6 w-6 animate-spin" />
        <p className="text-s font-medium mt-5">{message}</p>
    </main>
  )
}
