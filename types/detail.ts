// [고객 리스트 상세 조회 타입]

export type CustomerDetail = {
  customer_id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  created_at: string;
  details: {
    detail_id: string;
    customer_id: string;
    address: string;
    industry: string;
    annual_revenue: string;
    employee_count: number;
    last_contact_date: string;
    notes: string;
  };
};