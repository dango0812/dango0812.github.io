'use client';

import { FileDown } from 'lucide-react';

import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  PortfolioFooter,
  SpeakingSection,
  WorkSection,
} from './portfolio/components';
import { careers, contactItems, profile, speakingItems, works } from './portfolio/data';

export default function PortfolioPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main>
      {/* 우측 하단 고정 PDF 다운로드 버튼 */}
      <button
        onClick={handlePrint}
        className="fixed bottom-8 right-8 z-50 print:hidden w-14 h-14 rounded-full bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group cursor-pointer"
        aria-label="PDF로 저장"
      >
        <FileDown size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      <HeroSection profile={profile} />

      {/* 구분선 */}
      <div className="max-w-3xl mx-auto px-6 print:hidden">
        <hr className="border-gray-100" />
      </div>

      <ExperienceSection careers={careers} />

      {/* PDF 페이지 구분: Hero + Timeline | WorkSection */}
      <div className="hidden print:block print-page-break" aria-hidden="true" />

      {/* 구분선 */}
      <div className="max-w-3xl mx-auto px-6 print:hidden">
        <hr className="border-gray-100" />
      </div>

      <WorkSection works={works} />

      {/* PDF 페이지 구분: WorkSection | Activities + Contact */}
      <div className="hidden print:block print-page-break" aria-hidden="true" />

      {/* 구분선 */}
      <div className="max-w-3xl mx-auto px-6 print:hidden">
        <hr className="border-gray-100" />
      </div>

      <SpeakingSection items={speakingItems} />

      {/* 구분선 */}
      <div className="max-w-3xl mx-auto px-6 print:hidden">
        <hr className="border-gray-100" />
      </div>

      <ContactSection items={contactItems} />

      <div className="print:hidden">
        <PortfolioFooter />
      </div>
    </main>
  );
}
