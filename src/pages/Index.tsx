import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyMilluSection from "@/components/WhyMilluSection";
import AboutSection from "@/components/AboutSection";
import MarketSection from "@/components/MarketSection";
import TargetProfileSection from "@/components/TargetProfileSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FormatsSection from "@/components/FormatsSection";
import LocationsSection from "@/components/LocationsSection";
import BenefitsSection from "@/components/BenefitsSection";
import InvestmentSection from "@/components/InvestmentSection";
import LeadFormSection from "@/components/LeadFormSection";

import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <WhyMilluSection />
    <AboutSection />
    <MarketSection />
    <TargetProfileSection />
    <HowItWorksSection />
    <FormatsSection />
    <BenefitsSection />
    <InvestmentSection />
    <LeadFormSection />
    
    <FinalCtaSection />
    <Footer />
  </div>
);

export default Index;
