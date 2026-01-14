import { RefreshCcw, Hash, SearchCheck } from 'lucide-react';
import InfoCard from '@/components/InfoCard';
import { Button } from '@/components/ui/button';
import { AiAnalysisResult } from '@/types/analysis';

type ResultProps = {
    result: AiAnalysisResult;
    onClick: () => void;
}

export default function ResultStep({result, onClick}:ResultProps) {
    return (
        <section className="text-sm space-y-4 text-left">
            <div className="grid grid-cols-2">
                <InfoCard
                    icon={<Hash className="h-5 w-5" />}
                    label="분석 ID"
                    value={result.analysis_id}
                />

                <InfoCard
                    icon={<SearchCheck className="h-5 w-5" />}
                    label="분석 유형"
                    value={result.type}
                />
            </div>

            <div className="rounded-xl border border-[#EEEEEE] bg-white p-4 leading-6">
                {result.content}
            </div>

            <div className="flex items-center justify-end gap-2">
                <Button
                    variant="outline"
                    onClick={onClick}
                    className="rounded-xl cursor-pointer"
                >
                    <RefreshCcw className="h-4 w-4 mr-1" />
                    다시 분석
                </Button>
            </div>
        </section>
    )
}
