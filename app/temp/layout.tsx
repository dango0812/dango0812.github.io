import { Header } from '@/components/layouts';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
