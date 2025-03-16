
import React from 'react';
import { LanguageProvider, useLanguage } from '../components/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FAQSection from '../components/FAQSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Popup from '../components/Popup';

const IndexContent = () => {
  const { language } = useLanguage();
  const isRtl = language === 'he';
  
  return (
    <div className="min-h-screen bg-white flex flex-col" dir={isRtl ? "rtl" : "ltr"}>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <SuccessStoriesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <Popup />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
