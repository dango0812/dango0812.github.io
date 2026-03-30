import VideoPlayer from './components/VideoPlayer';

export default function VideoBottomSheetPage() {
  return (
    <main className="relative h-dvh overflow-hidden bg-black min-[700px]:bg-white">
      <div className="absolute inset-0 flex items-center justify-center">
        {/*
          < 700px  : 전체 화면 채움 (h-full w-full)
          >= 700px : 높이 100dvh 고정, 너비 16:9 비율로 자동 계산 (height-driven)
        */}
        <div className="h-full w-full min-[700px]:h-dvh min-[700px]:w-auto min-[700px]:aspect-video">
          <VideoPlayer src="/bottom-sheet.mp4" />
        </div>
      </div>

      {/* 제목: 700px 이상에서만 표시 */}
      <div className="absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-0.5 min-[700px]:flex">
        <span className="text-base uppercase tracking-widest text-gray-400">Demo</span>
        <p className="text-2xl font-semibold leading-snug text-gray-700">
          Bottom Sheet
          <br />
          구현 영상
        </p>
      </div>
    </main>
  );
}
