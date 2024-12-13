import React from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white" dir="auto">
        <Header />
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FAQSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;