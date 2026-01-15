// 고객 상세 정보 조회
'use client';

import ContentBox from "@/components/ContentBox"
import { Building2, Mail, Phone, FileText, MapPin, BriefcaseBusiness, DollarSign, Users, Calendar, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import InfoCard from "@/components/InfoCard";
import { formatDate, getDaysAgo, formatDateTime, formatKRW } from "@/util/format";
import AiModal from "./_components/AiModal";
// -- api 연결 
import { useParams } from "next/navigation";
import { useCustomerDetail } from "@/hooks/useCustomerDetail";
import Loading from '@/components/Loading';
import Error from '@/components/Error';

export default function Detail() {
  const params = useParams<{ id: string }>();
  const customerId = params?.id;

  const { data: customer, isLoading, isError } = useCustomerDetail(customerId);

  if (isLoading) return <Loading message='고객의 상세 정보를 조회중입니다...' />;
  if (isError || !customer) return <Error message='고객 상세 정보 조회 중 에러가 발생했습니다.'/>;


  return (
    <main>
      <h1 className="text-xl font-extrabold">고객 상세 정보 조회</h1>

      {/* 1) 고객 요약 박스 */}
      <ContentBox>
        <div className="flex items-start justify-between gap-6 px-2">
          {/* 좌측 */}
          <div className="min-w-0">
            <Badge className="rounded-full bg-blue-50 text-blue-700 hover:bg-blue-50 py-1 px-3 font-bold">
              {customer.customer_id}
            </Badge>

            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight">{customer.name}</h1>
              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span className="text-sm font-medium">{customer.company}</span>
              </div>
            </div>
          </div>

          {/* 우측 */}
          <div className="shrink-0 text-right">
            <AiModal />

            <div className="mt-4">
              <p className="text-xs text-muted-foreground">최근 컨택일</p>
              <p className="mt-1 font-bold">
                 {formatDate(customer.details.last_contact_date)}
              </p>
              <p className="mt-1 text-xs font-semibold text-orange-500">
                {getDaysAgo(customer.details.last_contact_date)}일 전
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={<Mail className="h-5 w-5 text-muted-foreground" />}
            label="이메일"
            value={customer.email}
          />
          <InfoCard
            icon={<Phone className="h-5 w-5 text-muted-foreground" />}
            label="전화번호"
            value={customer.phone}
          />
        </div>

        <InfoCard className="mt-4 border border-blue-100 bg-gradient-to-r from-blue-50/70 to-sky-50/40 text-blue-600"
            icon={<FileText className="h-5 w-5 text-blue-600" />}
            label="메모"
            value={customer.details.notes ?? ''}
        />
      </ContentBox>

      {/* 2) 회사 상세 정보 박스 */}
      <ContentBox>
        <section className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          <h2 className="text-lg font-bold">회사 상세 정보</h2>
        </section>

        <div className="mt-6 space-y-4">
          <InfoCard
            icon={<MapPin className="h-5 w-5 text-muted-foreground" />}
            label="주소"
            value={customer.details.address}
          />

          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard
              icon={<BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />}
              label="산업"
              value={customer.details.industry}
            />
            <InfoCard
              icon={<DollarSign className="h-5 w-5 text-muted-foreground" />}
              label="연간 매출"
              value={formatKRW(customer.details.annual_revenue)}
            />
            <InfoCard
              icon={<Users className="h-5 w-5 text-muted-foreground" />}
              label="직원 수"
              value={`${customer.details.employee_count}명`}
            />
          </div>
        </div>
      </ContentBox>

      {/* 3) 식별자 및 메타 정보 */}
      <ContentBox>
        <Collapsible defaultOpen>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-muted-foreground">
              식별자 및 메타 정보
            </h3>

            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-xl cursor-pointer">
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>
            <InfoCard className="mt-2"
              icon={<Calendar className="h-5 w-5 text-muted-foreground" />}
              label="고객 등록일"
              value={formatDateTime(customer.created_at)}
            />

            <div className="mt-2 flex flex-wrap items-center justify-between gap-6 text-sm px-3">
              <div className="text-muted-foreground">
                Customer ID:{' '}
                <span className="font-semibold text-foreground">
                  {customer.customer_id}
                </span>
              </div>
              <div className="text-muted-foreground">
                Detail ID:{' '}
                <span className="font-semibold text-foreground">
                  {customer.details.detail_id}
                </span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ContentBox>

    </main>
  )
}
