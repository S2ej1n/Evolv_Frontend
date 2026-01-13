// React Query Provider 설정
// layout.tsx 에서 사용됩니다

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";

export default function Providers({children} : {children: React.ReactNode}){
    // 재렌더링 방지
    const [queryClient] = useState(() => new QueryClient ({
        defaultOptions:{
            queries: {
                staleTime: 70 * 1000 // 70초동안 fresh
            }
        }
    }));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}