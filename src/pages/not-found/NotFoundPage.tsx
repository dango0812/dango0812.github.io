import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center gap-4">
      <h1 className="text-6xl font-bold text-gray-900">404 Error</h1>
      <p className="text-gray-500">페이지를 찾을 수 없습니다.</p>
      <Link to="/" className="mt-2 text-sm text-gray-400 underline underline-offset-4">
        홈으로 돌아가기
      </Link>
    </main>
  );
}
