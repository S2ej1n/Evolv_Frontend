// Main 고객리스트 페이지에서만 사용되는 고객 조회 테이블
'use client';

import type { Customer } from '@/types/customer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Props = {
  rows: Customer[];
};

export default function CustomerTable({ rows }: Props) {
  return (
    <div className="w-full overflow-hidden border border-[#EEEEEE] bg-white mt-3 mb-5">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#EEEEEE] bg-[#F9F9F9]">
            <TableHead className="font-semibold">이름</TableHead>
            <TableHead className="font-semibold">이메일</TableHead>
            <TableHead className="font-semibold">전화번호</TableHead>
            <TableHead className="font-semibold">회사</TableHead>
            <TableHead className="font-semibold">가입일</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((c) => (
            <TableRow key={c.customer_id} className="border-b border-[#EEEEEE] last:border-b-0">
              <TableCell className="font-semibold">{c.name}</TableCell>
              <TableCell className="text-gray-600">{c.email}</TableCell>
              <TableCell className="text-gray-600">{c.phone}</TableCell>
              <TableCell className="text-gray-600">{c.company}</TableCell>
              <TableCell className="text-gray-600">{formatDate(c.created_at)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}
