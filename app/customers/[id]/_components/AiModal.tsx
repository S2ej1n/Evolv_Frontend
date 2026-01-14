// AI 분석 모달
'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Sparkles } from 'lucide-react';

type Props = {
  customerId: string; // 나중에 분석 API에 쓰려고 미리 받음
};

export default function AiModal({ customerId }: Props) {
  return (
    <div className="shrink-0 text-right">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="text-white rounded-xl
            bg-gradient-to-r from-[#3d7eff] via-[#3288e4] to-[#6d87d7]
            px-3 shadow-sm cursor-pointer
            transition hover:brightness-120 active:scale-[0.98]"
          >
            <Sparkles className="h-4 w-4" />
            AI 분석
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader>
            <DialogTitle>AI 분석</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              AI 분석에는 30초에서 1분 사이의 랜덤한 시간이 소요됩니다. 잠시만 기다려주세요
            </DialogDescription>
          </DialogHeader>

          <div className="text-sm">분석 내용 영역</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
