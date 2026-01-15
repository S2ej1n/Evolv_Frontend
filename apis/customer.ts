// 고객 관련 API
import { axiosInstance } from './axios';
import type { Customer } from '@/types/customer';
import type { CustomerDetail } from '@/types/detail'

export const getCustomerList = async (): Promise<Customer[]> => {
  const res = await axiosInstance.get('/customers');
  return res.data.data;
};

export const getCustomerDetail = async (customerId: string): Promise<CustomerDetail> => {
  const res = await axiosInstance.get(`/customers/${customerId}`);
  return res.data.data;
};
