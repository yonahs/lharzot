
import React, { lazy, Suspense } from 'react';
import { LanguageProvider, useLanguage } from '../components/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
// Lazy load components that aren't visible in the initial viewport
const HowItWorksSection = lazy(() => import('../components/HowItWorksSection'));
const FAQSection = lazy(() => import('../components/FAQSection'));
const SuccessStoriesSection = lazy(() => import('../components/SuccessStoriesSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const Footer = lazy(() => import('../components/Footer'));
const Popup = lazy(() => import('../components/Popup'));

// Simple loading fallback
const LoadingFallback = () => <div className="min-h-[200px] flex items-center justify-center">
  <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
</div>;

const IndexContent = () => {
  const { language } = useLanguage();
  const isRtl = language === 'he';
  
  return (
    <div className="min-h-screen bg-white flex flex-col" dir={isRtl ? "rtl" : "ltr"}>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <HowItWorksSection />
          <SuccessStoriesSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<></>}>
        <Footer />
        <Popup />
      </Suspense>
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
