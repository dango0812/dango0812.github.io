// components
import Wave from "@assets/background/Wave";

import HomeHeroSection from "./components/HomeHeroSection";
import HomeCoreCompetenciesSection from "./components/HomeCoreCompetenciesSection";
import HomeCareerSection from "./components/HomeCareerSection";

export default function Home() {
  return (
    <main>
      <Wave />

      <HomeHeroSection />
      <HomeCoreCompetenciesSection />
      <HomeCareerSection />
    </main>
  );
}
