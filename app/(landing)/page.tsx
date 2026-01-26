import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
// import BlogSection from './components/BlogSection';
// import CareerSection from './components/CareerSection';
import ProfileSection from './components/ProfileSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProfileSection />
      {/*
      <CareerSection />
       <BlogSection />
       */}
    </>
  );
}
