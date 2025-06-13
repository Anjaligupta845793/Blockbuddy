import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import Services from "@/component/Servics";
import Results from "@/component/Results";
import Partener from "@/component/Partener";
import Creator from "@/component/Creator";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import TestimonialSection from "@/component/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Results />
      <Partener />
      {/* <Creator /> */}
      {/* <Contact /> */}

      <TestimonialSection />
      <Footer />
      {/* 
      
      
      
       */}
    </div>
  );
}
