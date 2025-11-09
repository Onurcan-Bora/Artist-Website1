import VideoBackground from '@/components/VideoBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import UpcomingSongs from '@/components/UpcomingSongs';
import Events from '@/components/Events';
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
      <Events />
      <About />
      <Works />
      <Footer />
    </div>
  );
}
