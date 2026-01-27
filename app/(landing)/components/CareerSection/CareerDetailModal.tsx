import { Award, Briefcase, Calendar, MapPin, X } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import { createPortal } from 'react-dom';

import { Badge, Button, ColumnFlex, RowFlex, Typography } from '@/components/base';
import { useModalOverlay } from '@/hooks/useModalOverlay';
import type { Career } from '@/types/career';
import { calculateDuration, formatDateRange } from '@/utils/date';

interface CareerDetailModalProps {
  item: Career;
  isOpen: boolean;
  onClose: () => void;
}

export default function CareerDetailModal({ item, isOpen, onClose }: CareerDetailModalProps) {
  useModalOverlay(isOpen);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/60 backdrop-blur-xs"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[85vh] rounded-3xl shadow-2xl"
          >
            {/* 헤더 */}
            <div className="relative h-32 bg-blue-500 rounded-t-3xl overflow-hidden">
              <RowFlex
                align={'center'}
                justify={'center'}
                className="absolute -bottom-2 left-8 w-16 h-16 rounded-t-2xl bg-white shadow-lg"
              >
                <Briefcase size={30} className="text-blue-600" />
              </RowFlex>

              <Button
                type="button"
                variant={'primary'}
                aria-label="닫기"
                size={'sm'}
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-transparent hover:bg-gray-300/20 active:bg-gray-300/20 transition-colors"
              >
                <RowFlex align={'center'} justify={'center'}>
                  <X size={24} className="text-white" />
                </RowFlex>
              </Button>
            </div>

            {/* 콘텐츠 */}
            <div className="p-8 bg-white rounded-b-3xl max-h-[calc(85dvh-8rem)] overflow-y-auto">
              <ColumnFlex className="gap-2.5">
                {/** 회사명 + 직무 */}
                <ColumnFlex justify={'center'} className="gap-0.5">
                  <Typography as="h4" weight={700} color={'black'}>
                    {item.company}
                  </Typography>
                  <Typography as="span" color="blue" weight={600}>
                    {item.position}
                  </Typography>
                </ColumnFlex>

                {/** 근무 기간 + 위치*/}
                <RowFlex align={'center'} wrap={'wrap'} className="gap-2.5 text-gray-600 font-semibold">
                  <RowFlex align={'center'} className="gap-1.5 text-inherit">
                    <Calendar size={14} />
                    <Typography size="sm" className="text-inherit">
                      {formatDateRange(item.startDate, item.endDate)} •{' '}
                      {calculateDuration(item.startDate, item.endDate)}
                    </Typography>
                  </RowFlex>

                  <RowFlex align={'center'} className="gap-1.5 text-inherit">
                    <MapPin size={14} />
                    <Typography size="sm" className="text-inherit">
                      {item.location}
                    </Typography>
                  </RowFlex>
                </RowFlex>

                {/** 개요 */}
                <Typography color={'gray'} className="whitespace-pre-line">
                  {item.description}
                </Typography>
              </ColumnFlex>

              {/** 상세 내용 */}
              <ColumnFlex justify={'center'} className="pt-8 gap-8">
                {/* 주요 성과 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {item.details?.achievements.map(achievement => (
                    <div
                      key={achievement.title}
                      className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl text-center"
                    >
                      {achievement?.value && (
                        <Typography as="h4" weight={700} color={'blue'}>
                          {achievement.value}
                        </Typography>
                      )}
                      <Typography weight={600} color={'gray'}>
                        {achievement.title}
                      </Typography>
                      <Typography size="sm" color={'gray'} className="whitespace-pre-line">
                        {achievement.description}
                      </Typography>
                    </div>
                  ))}
                </div>

                {/* 주요 업무 */}
                <ColumnFlex className="gap-4">
                  <RowFlex align={'center'} className="gap-2">
                    <Award size={20} className="text-indigo-500" />
                    <Typography as="h5" size="lg" weight={600}>
                      주요 업무
                    </Typography>
                  </RowFlex>

                  <ul className="space-y-2">
                    {item.details?.responsibilities.map((text, idx) => {
                      // 정규식을 사용해 앞 뒤 [ ] 로 감싸진 태그와 내용을 분리
                      const match = text.match(/^\[(.*?)\]\s*(.*)$/);
                      const tag = match?.[1];

                      if (tag) {
                        return (
                          <li key={idx} className="pt-4">
                            <Typography as="span" color={'black'} weight={600}>
                              {tag}
                            </Typography>
                          </li>
                        );
                      }

                      return (
                        <li key={idx}>
                          <Typography
                            as="span"
                            className="flex items-center gap-2.5 relative pl-6 before:absolute before:left-0.5 before:top-0 before:content-['→'] before:text-indigo-500 text-neutral-900 whitespace-pre-line"
                          >
                            {text}
                          </Typography>
                        </li>
                      );
                    })}
                  </ul>
                </ColumnFlex>

                {/* 기술 스택 */}
                <ColumnFlex className="gap-4">
                  <Typography as="h5" size="lg" weight={600}>
                    기술 스택
                  </Typography>
                  <RowFlex align={'center'} wrap={'wrap'} className="gap-2.5">
                    {item.details?.techStack.map(tech => (
                      <Badge key={tech} color="blue" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </RowFlex>
                </ColumnFlex>
              </ColumnFlex>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
