// [고객 리스트 전체 조회 타입]

export type Customer = {
  customer_id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  created_at: string; // ISO 2025-01-15T09:30:00Z 형식
};