import React from 'react';
import { useLanguage } from './LanguageContext';
import { Scale, Heart, Brain, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const { t, language } = useLanguage();
  
  const benefits = [
    {
      icon: <Scale className="w-12 h-12 text-brand-primary" />,
      title: { en: "Effective Weight Loss", he: "ירידה יעילה במשקל" },
      description: { 
        en: "Achieve sustainable weight loss with proven medical treatment",
        he: "השג ירידה במשקל בת-קיימא עם טיפול רפואי מוכח"
      }
    },
    {
      icon: <Heart className="w-12 h-12 text-brand-primary" />,
      title: { en: "Improved Health", he: "שיפור הבריאות" },
      description: {
        en: "Experience better overall health and well-being",
        he: "חווה שיפור בבריאות הכללית ובאיכות החיים"
      }
    },
    {
      icon: <Brain className="w-12 h-12 text-brand-primary" />,
      title: { en: "Expert Support", he: "תמיכה מקצועית" },
      description: {
        en: "Get guidance from medical professionals",
        he: "קבל הדרכה מאנשי מקצוע רפואיים"
      }
    },
    {
      icon: <Clock className="w-12 h-12 text-brand-primary" />,
      title: { en: "Long-lasting Results", he: "תוצאות לטווח ארוך" },
      description: {
        en: "Maintain your results with our comprehensive program",
        he: "שמור על התוצאות עם התוכנית המקיפה שלנו"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('benefits_title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-brand-secondary hover:shadow-lg transition-shadow"
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {benefit.title[language]}
              </h3>
              <p className="text-gray-600">
                {benefit.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;