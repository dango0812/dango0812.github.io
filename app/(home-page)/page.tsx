// components
import Wave from "@assets/background/Wave";

import HomeTableOfContents from "./components/HomeTableOfContents";
import HomeHeroSection from "./components/HomeHeroSection";
import HomeCoreCompetenciesSection from "./components/HomeCoreCompetenciesSection";
import HomeCareerSection from "./components/HomeCareerSection";

export default function Home() {
  return (
    <main className="relative">
      <Wave />

      <HomeHeroSection />
      <HomeCoreCompetenciesSection />
      <HomeCareerSection />
      <HomeTableOfContents />
    </main>
  );
}
