import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import DailySpecials from '../components/DailySpecials';
import Testimonials from '../components/Testimonials';
import CTABand from '../components/CTABand';

function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <DailySpecials />
      <Testimonials />
      <CTABand />
    </>
  );
}

export default Home;
