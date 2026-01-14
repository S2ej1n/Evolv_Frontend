// [공통 UI 컴포넌트] 컨텐츠 박스
import { ReactNode } from "react"
import { cn } from '@/lib/utils';

// 컴포넌트 타입은 컴포넌트에서 관리하는게 편리하다 생각해서 함께 작성했습니다.
type ContentBoxProps = {
    children: ReactNode;
    className?: string; // 자유로운 커스텀 가능
}

export default function ContentBox({children, className}: ContentBoxProps) {
  return (
    <div className={cn(
        "bg-white border border-[#EEEEEE] shadow-[0_5px_9.3px_rgba(188,188,188,0.25)] p-6 my-3",
        className
      )}
    >
        {children}
    </div>
  )
}
