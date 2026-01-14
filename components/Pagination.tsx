// [공통 UI 컴포넌트] 페이지네이션 (제작)
'use client';

import { 
    Pagination as MAINPagination, 
    PaginationContent, PaginationItem, 
    PaginationLink, PaginationNext, PaginationPrevious 
} from "./ui/pagination";

export default function Pagination() {
  return (
    <MAINPagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious />
            </PaginationItem>

            <PaginationItem>
                <PaginationLink isActive>1</PaginationLink>
            </PaginationItem>


            <PaginationItem>
                <PaginationNext />
            </PaginationItem>
        </PaginationContent>
    </MAINPagination>
  )
}
