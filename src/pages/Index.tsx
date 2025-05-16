
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResearchInterests from "@/components/ResearchInterests";
import Publications from "@/components/Publications";
import TeachingSection from "@/components/TeachingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ResearchInterests />
      <Publications />
      <TeachingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
