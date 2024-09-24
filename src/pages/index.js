
import AboutProduct from "./home/aboutProduct";
import Clients from "./home/clients";
import HeroSection from "./home/heroSection";
import ProductSwiper from "./home/productSwipers";
import SuccessStories from "./home/successStories";
import Testimonials from "./home/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutProduct />
      <ProductSwiper />
      <Clients />
      <Testimonials />
      <SuccessStories />
    </div>
  );
}
