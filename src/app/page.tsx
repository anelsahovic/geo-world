import AboutUs from '@/sections/AboutUs';
import CardFlip from '@/sections/CardFlip';
import ExploreContinents from '@/sections/ExploreContinents';
import FAQ from '@/sections/FAQ';
import FeaturedCountries from '@/sections/FeaturedCountries';
import Hero from '@/sections/Hero';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <FeaturedCountries />
      <ExploreContinents />
      <CardFlip />
      <AboutUs />
      <FAQ />
    </div>
  );
}
