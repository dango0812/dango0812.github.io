"use client";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface ReactQueryProviderProps {
    children: React.ReactNode;
}

export default function ReactQueryProvider({
    children
}: ReactQueryProviderProps) {
    return (
        <QueryClientProvider
            client={queryClient}
        >
            {children}
        </QueryClientProvider>
    )
}