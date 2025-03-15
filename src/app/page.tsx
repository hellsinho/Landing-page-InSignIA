// app/page.tsx
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import DemoSection from "@/components/DemoSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechSection />
      <DemoSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}