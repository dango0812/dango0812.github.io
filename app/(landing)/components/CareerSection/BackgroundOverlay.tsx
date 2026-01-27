export default function BackgroundOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background: `
            radial-gradient(ellipse 60% 40% at 10% 30%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 90% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)
          `,
      }}
    />
  );
}
