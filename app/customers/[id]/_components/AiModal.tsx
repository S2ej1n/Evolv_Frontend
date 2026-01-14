// AI 분석 모달
'use client';

import { useMemo, useState } from 'react';
import { Modal } from '@/components/Modal';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

// -- 목데이터 불러오기
import { MOCK_AI_RESULT } from '@/mocks/aiAnalysis';

// 모달창의 UI를 단계별로 쪼개기 위해
type Step = 'input_level' | 'loading_level' | 'result_level';

export default function AiModal() {
  const [step, setStep] = useState<Step>('input_level');
  const [input, setInput] = useState('고객 이탈률 분석 요청'); // 기본값

  const description = useMemo(() => {
    if (step === 'result_level') return '요청하신 AI 분석 결과는 다음과 같습니다.';
    return 'AI 분석에는 30초에서 1분 사이의 시간이 소요됩니다.'
  }, [step]);

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
        title="AI 분석 결과 조회"
        description={description}
      >
        
        <section className="text-sm">
         
        </section>
      </Modal>
    </main>
  );
}
