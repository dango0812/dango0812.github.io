'use client';

import { Fragment, useCallback, useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { m } from 'motion/react';
import Image from 'next/image';

import type { WorkItem } from '@/types/portfolio';

import ImageModal from './ImageModal';

interface WorkCardProps {
  work: WorkItem;
  index: number;
}

/** 설명 텍스트 내 [1], [2] 등 이미지 참조 및 [텍스트](url) 형태의 링크를 파싱하여 클릭 가능한 요소로 렌더링 */
function DescriptionWithRefs({ text, onImageRef }: { text: string; onImageRef: (index: number) => void }) {
  // [1], [2] 이미지 참조와 [텍스트](url) 링크를 모두 매칭
  const parts = text.split(/(\[\d+\]|\[.*?\]\(.*?\))/g);

  return (
    <>
      {parts.map((part, i) => {
        // 이미지 참조 [1], [2] 매칭
        const imageMatch = part.match(/^\[(\d+)\]$/);
        if (imageMatch) {
          const refIndex = parseInt(imageMatch[1], 10) - 1;
          return (
            <button
              key={i}
              type="button"
              className="inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-blue-600 bg-blue-50 rounded ml-0.5 hover:bg-blue-100 transition-colors cursor-pointer align-top"
              onClick={() => onImageRef(refIndex)}
            >
              {imageMatch[1]}
            </button>
          );
        }

        // 링크 [텍스트](url) 매칭
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          const [, linkText, url] = linkMatch;
          return (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              {linkText}
              <ExternalLink size={11} className="shrink-0" />
            </a>
          );
        }

        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

export default function WorkCard({ work, index }: WorkCardProps) {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);

  const handleImageRef = useCallback(
    (refIndex: number) => {
      if (work.images && work.images[refIndex]) {
        setModalImage(work.images[refIndex]);
      }
    },
    [work.images]
  );

  return (
    <>
      <m.div
        className="py-6 first:pt-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* 제목 & 기간 */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-5">
          <h4 className="text-xl font-semibold text-gray-900">{work.title}</h4>
          <span className="text-sm text-gray-400 whitespace-nowrap">{work.period}</span>
        </div>

        {/* 설명 목록 */}
        <ul className="space-y-2 mb-5">
          {work.descriptions.map((desc, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[15px] text-gray-600 leading-7">
              <span className="mt-3 w-1 h-1 rounded-full bg-gray-300 shrink-0" aria-hidden="true" />
              <span>
                <DescriptionWithRefs text={desc} onImageRef={handleImageRef} />
              </span>
            </li>
          ))}
        </ul>

        {/* 이미지 갤러리 (작은 썸네일, 한 줄) */}
        {work.images && work.images.length > 0 && (
          <div className="flex gap-3 mb-4 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {work.images.map((img, i) => (
              <figure
                key={i}
                className="relative w-[200px] sm:w-[240px] shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 cursor-zoom-in group"
                onClick={() => setModalImage(img)}
              >
                {/* 번호 뱃지 */}
                <span className="absolute top-1.5 left-1.5 z-10 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-blue-600 bg-white/90 rounded shadow-sm pointer-events-none">
                  {i + 1}
                </span>

                {/* 이미지 */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={200}
                  height={160}
                  className="w-full h-[160px] object-cover transition-all duration-300 group-hover:brightness-75"
                />

                {/* Hover 시 돋보기 아이콘 */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Search size={20} className="text-gray-700" />
                  </div>
                </div>

                {img.caption && (
                  <figcaption className="px-2 py-1 text-[12px] text-gray-400 text-center truncate bg-gray-50">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {/* 링크 목록 */}
        {work.links && work.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {work.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 transition-colors duration-200"
              >
                {link.label}
                <ExternalLink size={12} className="text-gray-400" />
              </a>
            ))}
          </div>
        )}
      </m.div>

      {/* 이미지 모달 */}
      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          caption={modalImage.caption}
          isOpen={Boolean(modalImage)}
          onClose={() => setModalImage(null)}
        />
      )}
    </>
  );
}
