// [공용 UI 페이지] 에러화면 : 데이터 요청 에러시 사용
import { Frown } from "lucide-react";

type ErrorProps = {
  message?: string;
};

export default function Error({ message }:ErrorProps) {
  return (
    <main className="flex flex-col items-center justify-center py-20 text-sm text-muted-foreground">
        <Frown className="h-6 w-6" />
        <p className="text-s font-medium mt-5">{message}</p>
    </main>
  )
}
