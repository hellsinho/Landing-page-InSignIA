// app/page.tsx
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import DemoSection from "@/components/DemoSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PitchSection from "@/components/PitchSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechSection />
      <PitchSection />
      <DemoSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}