// 페이지네이션 함수 정의

// 리턴 타입 정의
export type PaginationReturn<T> = {
    start: number;
    end: number;
    pageData: T[];
    totalPages: number;
    total: number;
    from: number;
    to: number;
}

// props 타입 정의
export type PaginationProps<T> = {
    data: T[];  // 타입요소 배열 ; 목데이터 등 데이터 리스트
    prePage: number;
    PAGE_SIZE: number;
}

export function getPagination<T>(
    {prePage, data, PAGE_SIZE}: PaginationProps<T>):PaginationReturn<T> 
    {

    const start = (prePage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    
    const pageData = data.slice(start, end);
    const totalPages = Math.ceil(data.length / PAGE_SIZE);
    
    // 상단 표시 문구
    const total = data.length;
    const from = total === 0 ? 0 : start + 1;
    const to = Math.min(end, total);

  return {
    start, end, pageData, totalPages, 
    total, from, to
  }
}
