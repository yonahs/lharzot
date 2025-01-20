import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();

  const content = {
    title: {
      he: "אבחון רפואי מקוון להשמנת יתר",
      en: "Online Medical Diagnosis for Obesity"
    },
    subtitle: {
      he: "ייעוץ רפואי מקוון",
      en: "Online Medical Consultation"
    },
    description: {
      he: "ייעוץ טלרפואה מקוון עם רופא מומחה להערכת מצבך הרפואי והתאמת טיפול אישי.",
      en: "Online telemedicine consultation with a specialist doctor to assess your medical condition and determine appropriate treatment."
    },
    benefits: {
      he: [
        "הערכה רפואית מקצועית",
        "ייעוץ מותאם אישית",
        "מעקב רפואי מקצועי"
      ],
      en: [
        "Professional medical evaluation",
        "Personalized consultation",
        "Professional medical follow-up"
      ]
    },
    disclaimer: {
      he: "*המרשם יונפק רק למטופלים מתאימים, בהתאם לשיקול דעת רפואי של הרופא המטפל",
      en: "*Prescription will only be issued to eligible patients, according to the treating physician's medical discretion"
    },
    cta: {
      he: "קבע ייעוץ עכשיו",
      en: "Schedule Consultation Now"
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-brand-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`flex-1 text-${language === 'he' ? 'right' : 'left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {content.title[language]}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">
              {content.subtitle[language]}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {content.description[language]}
            </p>
            <ul className="space-y-3 mb-8">
              {content.benefits[language].map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-primary rounded-full" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mb-6">
              {content.disclaimer[language]}
            </p>
            <Button 
              className="bg-brand-primary hover:bg-brand-primary/90 text-lg px-8 py-6"
              size="lg"
              onClick={() => window.location.href = 'https://rx.lharzot.co.il'}
            >
              {content.cta[language]}
              <ArrowRight className={`ml-2 ${language === 'he' ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          <div className="flex-1">
            <img 
              src="/lovable-uploads/5a91bbf5-d6f0-4992-a761-d4b70cf2aad3.png"
              alt="Online Medical Consultation"
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;