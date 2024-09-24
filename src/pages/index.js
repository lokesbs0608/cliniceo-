
import AboutProduct from "./home/aboutProduct";
import Clients from "./home/clients";
import HeroSection from "./home/heroSection";
import SuccessStories from "./home/successStories";
import Testimonials from "./home/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutProduct />
      <Clients />
      <Testimonials />
      <SuccessStories />
    </div>
  );
}
