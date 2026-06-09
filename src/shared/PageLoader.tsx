import { Loader2 } from 'lucide-react';

export function PageLoader() {
  return (
    <div className="flex h-screen items-center justify-center" role="status" aria-label="페이지 로딩 중">
      <Loader2 className="size-8 animate-spin text-gray-400" />
    </div>
  );
}
