export default function BackgroundOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background: `
            radial-gradient(ellipse 70% 50% at 30% 20%, rgba(147, 51, 234, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 70% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 50%)
          `,
      }}
    />
  );
}
