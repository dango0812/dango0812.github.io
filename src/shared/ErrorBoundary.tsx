import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-restricted-syntax
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  reset = () => {
    this.setState({ error: null });
  };

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error !== null) {
      if (fallback) {
        return fallback(error, this.reset);
      }

      return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-6xl font-bold text-gray-900">오류 발생</h1>
          <p className="text-gray-500">알 수 없는 오류가 발생했습니다.</p>
          <Link to="/" className="mt-2 text-sm text-gray-400 underline underline-offset-4">
            홈으로 돌아가기
          </Link>
        </main>
      );
    }

    return children;
  }
}
