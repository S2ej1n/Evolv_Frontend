// [공통 레이아웃 컴포넌트] 헤더
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 h-16  w-full border-b border-[#E3E3E3] flex items-center bg-white px-8">
      <div className="flex h-full max-w-6xl items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-color.png"
            alt="EVOLV"
            width={120}
            height={32}
            priority
          />
          <h1 className='px-2 text-lg font-semibold'>고객 정보 조회 서비스 </h1>
        </Link>
      </div>
    </header>
  )
}
