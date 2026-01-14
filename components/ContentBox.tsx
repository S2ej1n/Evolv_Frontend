// [공통 UI 컴포넌트] 컨텐츠 박스
import { ReactNode } from "react"

// 컴포넌트 타입은 컴포넌트에서 관리하는게 편리하다 생각해서 함께 작성했습니다.
type ContentBoxProps = {
    children: ReactNode;
}

export default function ContentBox({children}: ContentBoxProps) {
  return (
    <div className="bg-white border border-[#EEEEEE]
    shadow-[0_5px_9.3px_rgba(188,188,188,0.25)] p-6">
        {children}
    </div>
  )
}
