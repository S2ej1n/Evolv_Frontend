// api 통신을 위한 Axios
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
});
// ** AI 분석 요청 API에서만 타임아웃을 길게 오버라이드함. (analysis.ts에서 설정)