import React from 'react';
import { useLanguage } from './LanguageContext';
import { ClipboardList, UserCheck, FileText } from 'lucide-react';

const HowItWorksSection = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      icon: <ClipboardList className="w-12 h-12 text-brand-primary" />,
      title: { 
        en: "Medical Questionnaire", 
        he: "שאלון רפואי" 
      },
      description: {
        en: "Complete our comprehensive medical assessment",
        he: "מלא את השאלון הרפואי המקיף שלנו"
      }
    },
    {
      icon: <UserCheck className="w-12 h-12 text-brand-primary" />,
      title: { 
        en: "Doctor Consultation", 
        he: "ייעוץ רפואי" 
      },
      description: {
        en: "Virtual consultation with a licensed physician",
        he: "ייעוץ וירטואלי עם רופא מורשה"
      }
    },
    {
      icon: <FileText className="w-12 h-12 text-brand-primary" />,
      title: { 
        en: "Treatment Plan", 
        he: "תוכנית טיפול" 
      },
      description: {
        en: "Receive personalized treatment recommendations if eligible",
        he: "קבל המלצות טיפול מותאמות אישית אם נמצאת מתאים"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t('how_it_works_title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {language === 'he' 
            ? "תהליך הייעוץ הרפואי שלנו - פשוט, מקצועי ומותאם אישית"
            : "Our medical consultation process - simple, professional, and personalized"
          }
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-white rounded-full p-4 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step.title[language]}
              </h3>
              <p className="text-gray-600">
                {step.description[language]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p className="max-w-3xl mx-auto">
            {language === 'he' 
              ? "*הערכה רפואית וטיפול יינתנו רק למטופלים מתאימים, בהתאם לשיקול דעת רפואי מקצועי."
              : "*Medical evaluation and treatment will only be provided to eligible patients, according to professional medical discretion."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;