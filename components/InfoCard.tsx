// [공용 컴포넌트] 상세조회 정보 박스
//  아이콘, 라벨, 컨텐츠
'use client';
import { cn } from '@/lib/utils';

type InfoCardProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  className?: string;
};

export default function InfoCard({ icon, label, value, className }: InfoCardProps) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl px-6 py-4 bg-[#F9FAFB]",
        className
      )}
    >
      <div className="flex items-center gap-5">
        <div className="shrink-0 text-zinc-500">{icon}</div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-zinc-500">{label}</p>
          <p className="mt-1 text-sm font-medium text-zinc-900">
            {value}
          </p>
        </div>
      </div>
    </div>
  )
}
