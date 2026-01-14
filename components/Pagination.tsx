// [공통 UI 컴포넌트] 페이지네이션 (제작)
'use client';

import { 
    Pagination as MAINPagination, 
    PaginationContent, PaginationItem, 
    PaginationLink, PaginationNext, PaginationPrevious 
} from "./ui/pagination";

type Props = {
    prePage: number;    // 현재 페이지
    totalPages: number  // 전체 페이지 수
    onChange: (p: number) => void;  // 현재 페이지 변경
}

export default function Pagination({ prePage, totalPages, onChange }:Props) {

    if (totalPages <= 1) return null;
    
    // 페이지 번호 목록 (total로 계산하도록 수정예정)
    const pages = [1,2,3,4,5]

    // 이전과 다음 버튼 제한
    const canPrev = prePage > 1;    // 1보다 크면 이동가능
    const canNext = prePage < totalPages;   // 토탈보다 작으면 이동가능

    return (
    <MAINPagination>
        <PaginationContent>
            {/* 이전 버튼 */}
            <PaginationItem>
                <button
                    onClick={() => onChange(prePage - 1)}
                    disabled={!canPrev}
                    className={!canPrev ? "pointer-events-none opacity-50" : ""}
                >
                    <PaginationPrevious />
                </button>
            </PaginationItem>

            {/* 번호 선택 */}
            {pages.map((p) => (
                <PaginationItem key={p}>
                    <button onClick={() => onChange(p)}>
                        <PaginationLink isActive={p==prePage}>
                            {p}
                        </PaginationLink>
                    </button>
                </PaginationItem>
            ))}


            {/* 다음 버튼 */}
            <PaginationItem>
                <button
                    onClick={() => onChange(prePage + 1)}
                    disabled={!canNext}
                    className={!canNext ? "pointer-events-none opacity-50" : ""}
                >
                    <PaginationNext />
                </button>
            </PaginationItem>

        </PaginationContent>
    </MAINPagination>
  )
}
