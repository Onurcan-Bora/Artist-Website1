import VideoBackground from '@/components/VideoBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import UpcomingSongs from '@/components/UpcomingSongs';
import About from '@/components/About';
import Works from '@/components/Works';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <VideoBackground />
      <Navigation />
      <Hero />
      <UpcomingSongs />
      <About />
      <Works />
      <Footer />
    </div>
  );
}
