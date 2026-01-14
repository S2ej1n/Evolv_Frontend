// Main 고객 리스트 페이지
'use client';

import { useState, useMemo } from 'react';
import ContentBox from "@/components/ContentBox";
import Pagination from "@/components/Pagination";
// -- 목데이터로 페이지네이션 테스트
import { MOCK_CUSTOMERS } from '@/mocks/customers';
import CustomerTable from './_components/CustomerTable';
import SearchBar from './_components/SearchBar';
import { getPagination } from '@/util/pagination';

export default function Customers() {
  const [prePage, setprePage] = useState(1);

  // 타이핑으로 입력 받는 값 -> 이걸 searchKey에 넣어줄것임
  const [inputValue, setInputValue] = useState('')
  const [searchKey, setSearchKey] = useState(''); // 검색어 (실제 반영)

  const PAGE_SIZE = 9;
  
  // 검색어 필터링 - 새로운 data 배열 만들어 리턴
  const filterCustomers = useMemo(()=>{
    // 공백 제거, 대소문자 구분 제거
    const keyword = searchKey.trim().toLocaleLowerCase()
    if (!keyword) return MOCK_CUSTOMERS;

    return MOCK_CUSTOMERS.filter((p) => {
      const name = String(p.name ?? '').toLowerCase();
      const email = String(p.email ?? '').toLowerCase();
      const phone = String(p.phone ?? '').toLowerCase();
      const company = String(p.company ?? '').toLowerCase();
      const created_at = String(p.created_at ?? '').toLowerCase();

      return(
        name.includes(keyword) || email.includes(keyword) || 
        phone.includes(keyword) ||company.includes(keyword) || 
        created_at.includes(keyword)
      );
    }
    );

  },[searchKey])

  // 검색창에서 엔터를 처야 반영되게하는 함수
  const handleEnterSearchValue = () => {
    setSearchKey(inputValue);
  }

  const { pageData, totalPages, total, from, to } = getPagination({
    data: filterCustomers, prePage:prePage, PAGE_SIZE: PAGE_SIZE,
  });


  return (
    <main>
      <h1 className="text-lg font-bold">고객 리스트 조회</h1>

      <SearchBar className='my-3'
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleEnterSearchValue}
        total={total}
      />

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
