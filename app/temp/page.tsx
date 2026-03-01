import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import CareerSection from './components/CareerSection';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <BlogSection />
      <ProfileSection />
    </>
  );
}
