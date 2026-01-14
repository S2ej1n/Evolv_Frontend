// [검색어 필터 함수]
import type { Customer } from "@/types/customer";

export function searchFilter(data: Customer[], searchKey: string): Customer[] {

    const keyword = searchKey.trim().toLocaleLowerCase()
    if (!keyword) return data;
    
    return data.filter((p) => {
        const name = String(p.name ?? '').toLowerCase();
        const email = String(p.email ?? '').toLowerCase();
        const phone = String(p.phone ?? '').toLowerCase();
        const company = String(p.company ?? '').toLowerCase();
        const created_at = String(p.created_at ?? '').toLowerCase();
    
        return(
            name.includes(keyword) || email.includes(keyword) || 
            phone.includes(keyword) ||company.includes(keyword) || 
            created_at.includes(keyword)
        );
    });
}
