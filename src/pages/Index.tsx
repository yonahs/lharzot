import React from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FAQSection from '../components/FAQSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white" dir="auto">
        <Header />
        <HeroSection />
        <HowItWorksSection />
        <SuccessStoriesSection />
        <FAQSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;