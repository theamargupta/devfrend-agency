import Navbar from "@/components/navigation/Navbar";
import HeroContent from "@/components/hero/HeroContent";
import ScrollMarquee from "@/components/marquee/ScrollMarquee";
import AwardsRow from "@/components/awards/AwardsRow";
import ServicesSection from "@/components/services/ServicesSection";
import ProcessSection from "@/components/process/ProcessSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import Testimonials from "@/components/testimonials/Testimonials";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import FloatingCta from "@/components/navigation/FloatingCta";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <main id="main" className="relative flex flex-1 flex-col overflow-hidden">
      <Navbar />
      <HeroContent />
      <ScrollMarquee />
      <AwardsRow />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <Testimonials />
      <AboutSection />
      <ContactSection />
      <FloatingCta />
      <Footer />
    </main>
  );
}
