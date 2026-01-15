// Main 고객 리스트 페이지
'use client';

import { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import ContentBox from "@/components/ContentBox";
import Pagination from "@/components/Pagination";
import CustomerTable from './_components/CustomerTable';
import SearchBar from './_components/SearchBar';
import { getPagination } from '@/util/pagination';
import { searchFilter } from '@/util/searchFilter';
import type { Customer } from '@/types/customer';
// -- api 호출
import { useCustomerList } from '@/hooks/useCustormer';
import Loading from '@/components/Loading';
import Error from '@/components/Error';

export default function Customers() {
  const router = useRouter();

  const [prePage, setprePage] = useState(1);
  // 타이핑으로 입력 받는 값 -> 이걸 searchKey에 넣어줄것임
  const [inputValue, setInputValue] = useState('')
  const [searchKey, setSearchKey] = useState(''); // 검색어 (실제 반영)

  const PAGE_SIZE = 9;
  

  // 서버 연결
  const { data: customers = [], isLoading, isError } = useCustomerList();

  // 검색어 필터링 - 새로운 data 배열 만들어 리턴
  const filterCustomers = useMemo(()=>{
    return searchFilter(customers, searchKey);
  },[customers, searchKey])

  // 검색창에서 엔터를 처야 반영되게하는 함수
  const handleEnterSearchValue = () => {
    setSearchKey(inputValue);
    setprePage(1); // 검색어 초기화시 페이지 1로 초기화
  }

  const { pageData, totalPages, total, from, to } = getPagination({
    data: filterCustomers, prePage:prePage, PAGE_SIZE: PAGE_SIZE,
  });

  // 페이지 이동 함수 (push 사용)
  const handleRowClick = useCallback((row: Customer) => {
    router.push(`/customers/${row.customer_id}`);
  }, [router]);

  // 로딩 순서
  if (isLoading) return <Loading message='고객 리스트를 조회중입니다...' />;
  if (isError) return <Error message='고객 리스트 조회 중 에러가 발생했습니다.'/>;

  return (
    <main>
      <h1 className="text-xl font-extrabold">고객 리스트 조회</h1>

      <SearchBar className='mt-3'
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleEnterSearchValue}
        total={total}
      />

      <ContentBox>
        <p className="text-sm w- text-gray-500">
            전체 {total}명 중 {from}-{to}명 표시
        </p>

        <CustomerTable rows={pageData} onRowClick={handleRowClick}/>

        <Pagination prePage={prePage} totalPages={totalPages} onChange={setprePage}/>

      </ContentBox>
    </main>
  );
}
