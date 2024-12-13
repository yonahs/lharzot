import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-brand-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`flex-1 text-${language === 'he' ? 'right' : 'left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heebo">
              {t('hero_title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('hero_subtitle')}
            </p>
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-lg px-8 py-6">
              {language === 'he' ? 'התחל עכשיו' : 'Start Now'}
              <ArrowRight className={`ml-2 ${language === 'he' ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Medical Weight Loss"
              className="rounded-lg shadow-2xl animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;