# 📊 Evolv Assignment
상단의 `<>Code` 버튼을 눌러 git clone을 하거나, Download ZIP을 통해 확인할 수 있습니다.

## 🚀 프로젝트 로컬 실행 방법
```
pnpm install
pnpm dev
```
#### ✅ 환경변수 .env 추가
```
NEXT_PUBLIC_API_BASE_URL=http://quest.sellday.kr:17384/api
```

## ⚒️ 사용 기술 스택
- `React.js` / `Next.js`
- `Tailwind CSS`
- `React Query`
- `pnpm`
- `shadcn/ui` : 스타일과 접근성이 검증된 컴포넌트를 사용하여 생산성을 향상하기 위해 사용했습니다.

## 📁 프로젝트 구조
```
.
├── apis
│   ├── analysis.ts        # AI 분석 관련 API 요청
│   ├── axios.ts           # Axios 인스턴스 / 공통 설정
│   └── customer.ts        # 고객 관련 API 요청
│
├── app                    
│   ├── _components        # 고객 리스트 메인 페이지의 컴포넌트 (테이블, 검색창)
│   │
│   ├── customers
│   │   └── [id]
│   │       ├── _components # 고객 상세 페이지 전용 컴포넌트 (AI 분석 모달, 결과창)
│   │       └── page.tsx    # 고객 상세 정보 조회 페이지
│   │
│   ├── favicon.ico
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 고객 리스트 메인 페이지
│   └── providers.tsx      # React Query - 전역 Provider 설정
│
├── components            # 공용 UI 컴포넌트
│   ├── ui                # shadcn/ui
│   ├── ContentBox.tsx    # 공통 레이아웃 박스
│   ├── Error.tsx         # 에러 상태 UI (API 연결시 상태 처리)
│   ├── Header.tsx        # 공용 헤더
│   ├── InfoCard.tsx      # 이모지 + 라벨 + 값 형태 정보 카드 (상세 페이지에서 사용)
│   ├── Loading.tsx       # 로딩 상태 UI (API 연결시 상태 처리)
│   ├── Modal.tsx         # 공통 모달 컴포넌트
│   └── Pagination.tsx    # 페이지네이션 UI
│
├── hooks
│   ├── useCustomer.ts         # 고객 리스트 조회 훅
│   └── useCustomerDetail.ts   # 고객 상세 조회 훅
│
├── mocks                  # Mock 데이터
├── store                  # 전역 상태 관리
├── types                  # TypeScript 타입 정의
├── util                   # 공통 유틸 함수 (페이지네이션, 검색 함수 등)
├── public                 
└── node_modules
```
#### 컴포넌트 분리
- `components/` : 공용 컴포넌트. 카드, 모달, 페이지네이션 등 재사용 가능한 UI로 구성
- `_components/` : 페이지에 종속되는 UI 컴포넌트. **재사용 범위가 명확하도록** 분리해 설계했습니다.

#### API 요청 로직
- `apis/` : 도메인 단위 별로 API 요청 분리. Axios 설정을 공통화한 **axiosInstance**를 사용하여 일관성을 유지할 수 있도록 했습니다.
- `hooks/` : TanStack Query 기반 **데이터 요청 로직을 커스텀 훅으로 분리**해 설계했습니다.

## 🎨 Figma
#### 요구 사항 분석 및 도출 (구체화) | 화면 와이어 프레임 설계
https://www.figma.com/design/78L8dX48uPM86RG5yi2Icx/%EC%9D%B4%EB%B3%BC%EB%B8%8C-%EA%B3%BC%EC%A0%9C?node-id=0-1&t=YxLpSXgXHBNlcQHB-1

## 🤔 구현하면서 고민했던 부분

### ✅ AI 분석 모달 구현에 대한 고민 : 3단계 스탭 분리
post 요청 파라미터에 input 변수가 존재하여, **사용자가 직접 요구사항을 입력할 수 있다** 이해하고 흐름을 구상했습니다.
- **흐름구상** : 
`AI 분석 요청 버튼 클릭 -> 해당 모달창 안에서 원하는 input 내용 입력 -> 분석 요청 버튼을 한번 더 클릭 -> (로딩창) -> 결과 도출`
- **흐름 구체화** : 동일 모달 내에서 `input/loading/result`의 `3단계 스탭`으로 분리
  - AI 분석 버튼 클릭 → 모달 오픈
  - 모달 상단에 “무엇을 분석할까요?” 같은 안내 + 텍스트 입력(input, 선택)
    - 보조설명: 입력은 선택입니다. 비워도 기본 분석을 진행해요.
  - 분석 요청 버튼 클릭
  - 모달 내부 상태가 `로딩` UI로 전환
  - 응답 오면 `결과 화면`으로 전환
  - 응답이 오지 않을 경우 `메세지 출력`
  
### ✅ 고객 상세 정보 조회 구성에 대한 고민 : UI/UX
주어진 데이터를 어떻게 시각화 하는것이 좋을지 고민했습니다.<br/>
일반 클라이언트가 아니라, **기업에서 확인**하는 페이지라고 생각하고 <br/>
사용자의 기본 인적사항, AI분석 버튼, 최근 컨텍일, 메모(특이사항)을 가장 최우선으로 보일 수 있도록 상단에 배치했습니다.
- 또한 사용자의 편의를 위해 `메일주소를 눌렀을 경우 메일 작성 페이지`로 연결, `회사 주소를 눌렀을 경우 지도로 연결`되는 기능을 추가했습니다.

## 🤖 AI 도구 사용 여부 및 활용 방식
- **사용 여부** : 사용
- **활용 방식** :
  - 과제 요구사항 구체화
  - ui 디자인 참고
  - shadecn/ui 사용 방식 정리
  - 목데이터 제작
  - 코드 개선 포인트 검토
- 단, 모든 코드와 구조는 직접 검토 및 수정하여 적용했습니다.

## 😅 아쉬운 점 / 개선하고 싶은 부분

## 🚀 (선택) 시간이 더 있었다면 추가하고 싶은 기능
- 고객 리스트 조회에서 컬럼별 오름차순 내림차순 정렬
