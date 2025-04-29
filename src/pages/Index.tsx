
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Collections from "@/components/Collections";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-jewelry-cream min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <Collections />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
