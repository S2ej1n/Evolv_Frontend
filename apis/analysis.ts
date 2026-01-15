// AI 분석 관련 API
// 수정 더 헤야함

import { axiosInstance } from './axios';
import type { AiAnalysisResult } from '@/types/analysis';

export const getCustomerList = async (): Promise<AiAnalysisResult> => {
  const res = await axiosInstance.get('/ai-analysis');
  return res.data.data;
};
