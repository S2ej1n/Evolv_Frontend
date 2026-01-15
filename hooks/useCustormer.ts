'use client';

import { useQuery } from '@tanstack/react-query';
import { getCustomerList } from '@/apis/customer';

export const useCustomerList = () => {
  return useQuery({
    queryKey: ['customers'],
    queryFn: getCustomerList,
  });
};
