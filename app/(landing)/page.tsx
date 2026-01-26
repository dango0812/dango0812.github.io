import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import HeroSection from './components/HeroSection';
// import CareerSection from './components/CareerSection';
import ProfileSection from './components/ProfileSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ProfileSection />
      {/*
      <CareerSection />
       */}
    </>
  );
}
