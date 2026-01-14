// Main 고객 리스트 페이지
'use client';

import { useState } from 'react';
import ContentBox from "@/components/ContentBox";
import Pagination from "@/components/Pagination";

export default function Customers() {
  const [prePage, setprePage] = useState(1);
  const totalPages = 5;

  return (
    <main>
      <ContentBox>
        <h1 className="text-lg font-semibold">고객 리스트</h1>

        <Pagination prePage={prePage} totalPages={totalPages} onChange={setprePage}/>
      </ContentBox>
    </main>
  );
}
