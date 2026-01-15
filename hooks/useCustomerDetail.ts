'use client';

import { useQuery } from '@tanstack/react-query';
import { getCustomerDetail } from '@/apis/customer';

export const useCustomerDetail = (customerId: string) => {
  return useQuery({
    queryKey: ['customers', customerId],
    queryFn: () => getCustomerDetail(customerId),
    enabled: !!customerId,
  });
};
