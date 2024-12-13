import React from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white" dir="auto">
        <Header />
        <HeroSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;