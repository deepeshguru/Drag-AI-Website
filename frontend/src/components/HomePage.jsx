import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import CapabilitiesSection from "./CapabilitiesSection";
import PortfolioSection from "./PortfolioSection";
import StatsSection from "./StatsSection";
import TeamSection from "./TeamSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CapabilitiesSection />
      <PortfolioSection />
      <StatsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;