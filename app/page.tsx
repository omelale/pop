import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import FeatureSection from "@/components/FeatureSection";
import CardGrid from "@/components/CardGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main id="home">
        <Hero />
        <IntroSection />
        {siteConfig.featureSections.map((section) => (
          <FeatureSection key={section.id} {...section} />
        ))}
        <CardGrid />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
