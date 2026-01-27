'use client';

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { m, useInView } from 'motion/react';
import Link from 'next/link';

import { useGetBlogPosts } from '@/api/posts';
import { Button, ColumnFlex, Container, RowFlex } from '@/components/base';
import { ErrorRetry, Section, SectionHeader } from '@/components/common';
import { LoadingDot } from '@/components/common';
import { BLOG_URL } from '@/constants/routes';

import BlogCard from './BlogCard';

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { data, isLoading, refetch } = useGetBlogPosts();

  return (
    <Section
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      <Container className="relative z-10 px-5">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeader
            head="기록"
            title="최근 작성한 글"
            description="기술, 경험 등 자유롭게 다양한 기록을 남깁니다."
          />
        </m.div>

        {(() => {
          if (isLoading) {
            return <LoadingDot />;
          }

          if (Array.isArray(data) && data?.length > 0) {
            return (
              <ColumnFlex className="gap-10">
                <m.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15 },
                    },
                  }}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="max-w-3xl mx-auto space-y-4"
                >
                  {data.slice(0, 3).map((post, _, arr) => (
                    <BlogCard key={post.title} post={post} isLatest={arr.indexOf(post) === 0} />
                  ))}
                </m.div>

                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <RowFlex align={'center'} justify={'center'}>
                    <Button variant={'outline'} color={'gray'} size="sm">
                      <Link
                        href={BLOG_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5"
                      >
                        더 많은 글 보기 <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </RowFlex>
                </m.div>
              </ColumnFlex>
            );
          }

          return <ErrorRetry error="블로그" onRetry={refetch} />;
        })()}
      </Container>
    </Section>
  );
}
