// [날짜/돈 포맷 관련 함수] - 상세정보 조회에서 사용

export function formatDate(isoString: string) {
  const date = new Date(isoString);
  return date.toISOString().split('T')[0];
}

// 오늘부터 몇일전?
export function getDaysAgo(isoString: string) {
  const today = new Date();
  const target = new Date(isoString);

  // 날짜 단위 비교를 위해 시각 제거
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);

  const diffMs = today.getTime() - target.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export function formatDateTime(isoString: string) {
    const date = new Date(isoString);

    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Seoul',
    }).format(date);
}

export function formatKRW(amount: number) {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    maximumFractionDigits: 0,
  }).format(amount);
}
