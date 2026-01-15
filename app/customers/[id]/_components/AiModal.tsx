// AI 분석 모달
'use client';

import { useMemo, useState } from 'react';
import { Modal } from '@/components/Modal';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import InputStep from './InputStep';
import ResultStep from './ResultStep';

// -- 목데이터 불러오기
// import { MOCK_AI_RESULT } from '@/mocks/aiAnalysis';

// -- api 연결
import { postAiAnalysis } from '@/apis/analysis';
import { AiAnalysisResult } from '@/types/analysis';

// 모달창의 UI를 단계별로 쪼개기 위해
type Step = 'input_level' | 'loading_level' | 'result_level';

export default function AiModal() {
  const [step, setStep] = useState<Step>('input_level');
  const [input, setInput] = useState(''); // 전송할 때 기본값은 고객 이탈률 분석 요청
  const [result, setResult] = useState<AiAnalysisResult | null>(null);
  const [errorText, setErrorText] = useState<string>(''); // 타임 초과시 에러메세지

  const title = useMemo(() => {
    if (step === 'input_level') return 'AI 분석 요청';
    if (step === 'loading_level') return 'AI 분석 요청중';
    return 'AI 분석 결과 조회';
  }, [step]);

  const description = useMemo(() => {
    if (step === 'result_level') return '요청하신 AI 분석 결과는 다음과 같습니다.';
    return 'AI 분석에는 30초에서 1분 사이의 시간이 소요됩니다.'
  }, [step]);

  // 분석 요청 전송
  const handleAnalysisRequest = async () => {
    setErrorText('');

    const input_value = input.trim() || '고객 이탈률 분석 요청';

    setStep('loading_level');

    try {
      const data = await postAiAnalysis(input_value);
      setResult(data);
      setStep('result_level');
    } catch (e) {
      setErrorText('AI 분석 요청 중 오류가 발생했습니다. 다시 시도해주세요.')
      setStep('input_level');
    }
  };

  const handleReset = () => {
    setInput('');
    setResult(null);
    setErrorText('');
    setStep('input_level');
  };

  return (
    <main className="shrink-0 text-right">
      <Modal
        trigger={
          <Button
            className="text-white rounded-xl
            bg-gradient-to-r from-[#3d7eff] via-[#3288e4] to-[#6d87d7]
            px-3 shadow-sm cursor-pointer
            transition hover:brightness-120 active:scale-[0.98]"
          >
            <Sparkles className="h-4 w-4" />
            AI 분석
          </Button>
        }
        title={title}
        description={description}
      >
        <Separator className=" bg-gray-200"/>

        {/* 에러가 있을경우 */}
        {errorText && (
          <div className="text-left text-sm text-red-500">
            * {errorText}
          </div>
        )}
        
        {step === 'input_level' && (
          <InputStep input={input} onChange={setInput} onClick={handleAnalysisRequest}/>
        )}

        
        {step === 'loading_level' && (
          <section className="text-sm">
            <div className="flex flex-col items-center justify-center py-10 gap-3">
              <Loader2 className="h-6 w-6 animate-spin" />
              <p className="text-sm font-medium">분석 데이터를 생성 중입니다…</p>
              <p className="text-xs text-muted-foreground">잠시만 기다려주세요.</p>
            </div>
          </section>
        )}

        {step === 'result_level' && result && (
          <ResultStep result={result} onClick={handleReset} />
        )}
        
      </Modal>
    </main>
  );
}
