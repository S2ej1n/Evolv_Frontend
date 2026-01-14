// 검색창
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Props = {
    className?: string;
    placeholder?: string;
}

export default function SearchBar({className, placeholder = '검색어를 입력하세요...'}:Props) {
  return (
    <div className={cn(
        'flex items-center gap-3 rounded-xl border border-[#EEEEEE] bg-white px-4 py-3 shadow-[0_5px_9.3px_rgba(188,188,188,0.25)]',
        className
      )}
    >
        <Search className="size-5 text-gray-400" />
        <Input 
            placeholder={placeholder}
            className="h-auto border-0 p-0 shadow-none focus-visible:ring-0"
        />
        <span className="ml-auto whitespace-nowrap text-sm text-gray-500">
            results
      </span>
    </div>
  )
}
