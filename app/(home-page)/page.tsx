// components
import Wave from "@assets/background/Wave";

import HomeHeroSection from "./components/HomeHeroSection";
import HomeCoreCompetenciesSection from "./components/HomeCoreCompetenciesSection";
import HomeCareerSection from "./components/HomeCareerSection";
import HomeBlogSection from "./components/HomeBlogSection";
import HomeTimeline from "./components/HomeTimeline";
import HomeTableOfContents from "./components/HomeTableOfContents";

export default function Home() {
  return (
    <main className="relative">
      <Wave />

      <HomeHeroSection />
      <HomeCoreCompetenciesSection />
      <HomeCareerSection />
      <HomeBlogSection />
      <HomeTimeline />
      
      <HomeTableOfContents />
    </main>
  );
}
