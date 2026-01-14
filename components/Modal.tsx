// [공통 컴포넌트] 모달창

import { Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription } from "@/components/ui/dialog"

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>모달 열기</button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>AI 분석</DialogTitle>
          <DialogDescription>
            AI 분석에는 30초에서 1분 사이의 랜덤한 시간이 소요됩니다. 잠시만 기다려주세요
          </DialogDescription>
        </DialogHeader>

        <div>여기에 컨텐츠</div>
      </DialogContent>
    </Dialog>
  )
}
