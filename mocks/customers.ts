// [목데이터] 고객 정보 목데이터
import type { Customer } from "@/types/customer";

export const MOCK_CUSTOMERS: Customer[] = Array.from(
  { length: 42 },
  (_, i) => ({
    customer_id: `C${String(i + 1).padStart(3, "0")}`,
    name: `고객 ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `010-${1000 + i}-${2000 + i}`,
    company: i % 2 === 0 ? "테크" : "이노베이션",
    created_at: new Date(
      2025,
      i % 12,
      (i % 28) + 1,
      9,
      30
    ).toISOString(),
  })
);