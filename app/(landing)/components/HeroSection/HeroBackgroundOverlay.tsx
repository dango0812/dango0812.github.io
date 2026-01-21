export default function HeroBackground() {
  return (
    <>
      {/* 메인 그라데이션 */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139, 92, 246, 0.10) 0%, transparent 50%)
          `,
        }}
      />
      {/* 상단 블러 오버레이 */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
    </>
  );
}
