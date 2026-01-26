'use client';

import { ArrowRight, BookOpen, Calendar, Code2, Flame, Lightbulb } from 'lucide-react';
import { m } from 'motion/react';
import Link from 'next/link';

import { Badge, ColumnFlex, RowFlex, Typography } from '@/components/base';
import { fadeInUp } from '@/constants/animations';
import { cn } from '@/lib/tailwind';
import type { BlogPost } from '@/types/blogPost';

interface BlogCardProps {
  post: BlogPost;
  isLatest: boolean;
}

export default function BlogCard({ post, isLatest }: BlogCardProps) {
  return (
    <m.article variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Link
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-row gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        {/* 최신 글 뱃지 */}
        {isLatest && (
          <div className="absolute -top-2 -right-2 z-10">
            <Badge color="red" className="gap-1.5">
              <Flame size={16} className="text-inherit" />
              최신 글
            </Badge>
          </div>
        )}

        {/* 카테고리 아이콘 */}
        <div className="flex-shrink-0">
          <div
            className={cn(`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg`, {
              'bg-blue-50': post.tag === 'Tech',
              'bg-purple-50': post.tag === 'Insight',
              'bg-amber-50': post.tag === 'Life',
            })}
          >
            {(() => {
              switch (post.tag) {
                case 'Tech': {
                  return <Code2 size={28} className="text-blue-500" />;
                }
                case 'Insight': {
                  return <Lightbulb size={28} className="text-purple-500" />;
                }
                case 'Life': {
                  return <BookOpen size={28} className="text-amber-500" />;
                }
              }
            })()}
          </div>
        </div>

        {/* 콘텐츠 */}
        <ColumnFlex className="flex-1 gap-3">
          <RowFlex align={'center'} className="gap-3" wrap={'wrap'}>
            <Badge
              size="sm"
              className={cn({
                'bg-blue-100 ': post.tag === 'Tech',
                'bg-purple-100 ': post.tag === 'Insight',
                'bg-amber-100 ': post.tag === 'Life',
              })}
            >
              {post.tag}
            </Badge>

            <RowFlex align={'center'} className="gap-1.5 text-gray-400">
              <Calendar size={14} />
              <Typography size={'sm'} className="text-inherit">
                {post.date} · {post.readTime}분 읽기
              </Typography>
            </RowFlex>
          </RowFlex>

          <Typography
            as="h4"
            size="lg"
            weight={700}
            className="group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2"
          >
            {post.title}
          </Typography>

          <Typography size="sm" color="gray" className="leading-relaxed line-clamp-2 h-12 min-h-12 max-h-12">
            {post.description}
          </Typography>

          <RowFlex align={'center'} className="gap-1.5 text-indigo-600 mt-auto pt-2">
            <Typography size="sm" weight={500} className="text-inherit">
              글 읽기
            </Typography>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </RowFlex>
        </ColumnFlex>
      </Link>
    </m.article>
  );
}
