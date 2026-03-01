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
  return (
    <main>
      <HeroSection profile={profile} />

      {/* 구분선 */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      <ExperienceSection careers={careers} />

      {/* <YearTimelineSection year={YEAR_TIMELINE_YEAR} items={yearTimelineItems} /> */}

      {/* 구분선 */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      <WorkSection works={works} />

      {/* 구분선 */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      <SpeakingSection items={speakingItems} />

      {/* 구분선 */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      <ContactSection items={contactItems} />

      <PortfolioFooter />
    </main>
  );
}
