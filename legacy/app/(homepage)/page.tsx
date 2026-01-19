// components
import Wave from "@assets/background/Wave";

import HomeHeroSection from "@home/components/HomeHeroSection";
import HomeCoreCompetenciesSection from "@home/components/HomeCoreCompetenciesSection";
import HomeCareerSection from "@home/components/HomeCareerSection";
import HomeBlogSection from "@home/components/HomeBlogSection";
import HomeTimeline from "@home/components/HomeTimeline";
import HomeTableOfContents from "@home/components/HomeTableOfContents";
import HomeContactSection from "@home/components/HomeContactSection";

export default function Home() {
  return (
    <main className="relative">
      <Wave />

      <HomeHeroSection />
      <HomeCoreCompetenciesSection />
      <HomeCareerSection />
      <HomeBlogSection />
      <HomeTimeline />
      <HomeContactSection />
      <HomeTableOfContents />
    </main>
  );
}
