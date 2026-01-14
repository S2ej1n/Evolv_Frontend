import { Button } from '@/components/ui/button';
import { CircleArrowUp } from 'lucide-react';

type InputStepProps = {
    input: string;
    onChange: (e: string) => void;
    onClick: () => void;
}

export default function InputStep({ input, onChange, onClick }: InputStepProps) {
    return (
        <section className="text-sm space-y-3 text-left">
            <div className="space-y-2">
                <p className="text-xs text-muted-foreground">분석 요청 내용 (선택)</p>

                <input
                    value={input}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="예) 고객 이탈률 분석 요청"
                    className="w-full rounded-lg border border-[#EEEEEE] bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-offset-0"
                />

                <p className="text-xs text-muted-foreground">
                    입력을 비우면 기본 분석으로 진행됩니다.
                </p>
            </div>

            <div className="flex justify-end">
                <Button onClick={onClick} variant="outline" className="rounded-xl cursor-pointer">
                    <CircleArrowUp className="h-4 w-4 mr-1" />
                    분석 요청
                </Button>
            </div>
        </section>
    )
}
