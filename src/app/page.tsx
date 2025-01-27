import Hero from "@/components/Hero";
import CategoryGrid from "@/components/category-grid";
import TrendingDeals from "@/components/trending-deal";
import FeatureProducts from "@/components/feature-products";
import HowItWorks from "@/components/how-it-work";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
   <div className="flex flex-col gap-12 py-8">
      <Hero /> 
      <CategoryGrid />
      <TrendingDeals />
      <FeatureProducts />
      <HowItWorks />
      <Testimonials />
   </div>
  );
}
