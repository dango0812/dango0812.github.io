'use client';

import type { CompanyWork } from '@/types/portfolio';

import SectionTitle from './SectionTitle';
import WorkCard from './WorkCard';

interface WorkSectionProps {
  works: CompanyWork[];
}

export default function WorkSection({ works }: WorkSectionProps) {
  if (works.length === 0) {
    return null;
  }

  const allProjects = works.flatMap(group => group.projects);

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>Selected Work</SectionTitle>

        <div className="space-y-12">
          {allProjects.map((work, index) => (
            <WorkCard key={`${work.title}-${work.period}`} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
