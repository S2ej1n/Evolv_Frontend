// Main 고객 리스트 페이지
'use client';

import { useState } from 'react';
import ContentBox from "@/components/ContentBox";
import Pagination from "@/components/Pagination";
// -- 목데이터로 페이지네이션 테스트
import { MOCK_CUSTOMERS } from '@/mocks/customers';
import CustomerTable from './_components/CustomerTable';
import SearchBar from './_components/SearchBar';
import { getPagination } from '@/util/pagination';

export default function Customers() {
  const [prePage, setprePage] = useState(1);
  const PAGE_SIZE = 9;
  
  const { pageData, totalPages, total, from, to } = getPagination({
    data: MOCK_CUSTOMERS, prePage:prePage, PAGE_SIZE: PAGE_SIZE,
  });


  return (
    <main>
      <h1 className="text-lg font-bold">고객 리스트 조회</h1>

      <SearchBar className='my-3' />

      <ContentBox>
        <p className="text-sm w- text-gray-500">
            전체 {total}명 중 {from}-{to}명 표시
        </p>

        <CustomerTable rows={pageData}/>

        <Pagination prePage={prePage} totalPages={totalPages} onChange={setprePage}/>

      </ContentBox>
    </main>
  );
}
