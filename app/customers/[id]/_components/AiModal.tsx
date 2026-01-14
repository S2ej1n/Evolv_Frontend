// AI 분석 모달
'use client';

import { Modal } from '@/components/Modal';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function AiModal() {
  return (
    <div className="shrink-0 text-right">
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
        description="AI 분석에는 30초에서 1분 사이의 시간이 소요됩니다. 잠시만 기다려주세요."
      >
        
        <div className="text-sm">
          rrr
        </div>
      </Modal>
    </div>
  );
}
