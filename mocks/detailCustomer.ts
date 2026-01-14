import type { CustomerDetail } from "@/types/detail";

export const customer: CustomerDetail = {
    customer_id: 'C002',
    name: '이영희',
    email: 'younghee.lee@example.com',
    phone: '010-2345-6789',
    company: '이노베이션랩',
    created_at: '2025-02-20T14:20:00Z',
    details: {
      detail_id: 'D002',
      customer_id: 'C002',
      address: '서울특별시 서초구 서초대로 456',
      industry: 'IT 컨설팅',
      annual_revenue: '3000000000',
      employee_count: 30,
      last_contact_date: '2025-11-15T14:00:00Z',
      notes: '신규 프로젝트 논의 중',
    },
  };