// AI 분석 관련 API

import { axiosInstance } from './axios';
import type { AiAnalysisResult } from '@/types/analysis';

export const getAiAnalysis= async (input: string): Promise<AiAnalysisResult> => {
  const res = await axiosInstance.post('/ai-analysis', 
    { input },  // body로 전달하는 부분
    { timeout: 80000 }
  );

  return res.data.data;
};
