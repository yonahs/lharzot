import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();

  const content = {
    title: {
      he: "הבית לטיפול בהשמנת יתר",
      en: "Home for Obesity Treatment"
    },
    subtitle: {
      he: "מרשם דיגיטלי מהיר - רק 599 ש\"ח*",
      en: "Fast Digital Prescription - Only 599 NIS*"
    },
    description: {
      he: "ייעוץ טלרפואה מקוון לניהול משקל - קבלו מרשם ל-וגובי (Wegovy) או אוזמפיק (Ozempic) ב-599 ש\"ח בלבד!",
      en: "Online telemedicine consultation for weight management - get a prescription for Wegovy or Ozempic for only 599 NIS!"
    },
    benefits: {
      he: [
        "ירידה במשקל של עד 15% תוך 68 שבועות",
        "שיפור בלחץ דם ורמות סוכר",
        "תמיכה רפואית מקצועית"
      ],
      en: [
        "Weight loss of up to 15% within 68 weeks",
        "Improvement in blood pressure and sugar levels",
        "Professional medical support"
      ]
    },
    cta: {
      he: "התחל את השאלון עכשיו",
      en: "Start Questionnaire Now"
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
            <Button 
              className="bg-brand-primary hover:bg-brand-primary/90 text-lg px-8 py-6"
              size="lg"
            >
              {content.cta[language]}
              <ArrowRight className={`ml-2 ${language === 'he' ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Digital Health Consultation"
              className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;