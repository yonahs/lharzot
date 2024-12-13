import React from 'react';
import { useLanguage } from './LanguageContext';
import { ClipboardCheck, CalendarCheck, Stethoscope, LineChart } from 'lucide-react';

const HowItWorksSection = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-brand-primary" />,
      title: { en: "Initial Consultation", he: "ייעוץ ראשוני" },
      description: {
        en: "Complete a medical assessment to determine eligibility",
        he: "השלם הערכה רפואית לקביעת התאמה"
      }
    },
    {
      icon: <CalendarCheck className="w-12 h-12 text-brand-primary" />,
      title: { en: "Treatment Plan", he: "תוכנית טיפול" },
      description: {
        en: "Receive your personalized treatment schedule",
        he: "קבל את לוח הזמנים המותאם אישית לטיפול שלך"
      }
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-brand-primary" />,
      title: { en: "Medical Support", he: "תמיכה רפואית" },
      description: {
        en: "Regular check-ins with medical professionals",
        he: "מעקב קבוע עם אנשי מקצוע רפואיים"
      }
    },
    {
      icon: <LineChart className="w-12 h-12 text-brand-primary" />,
      title: { en: "Track Progress", he: "מעקב התקדמות" },
      description: {
        en: "Monitor your results and adjust as needed",
        he: "עקוב אחר התוצאות והתאם לפי הצורך"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('how_it_works_title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative flex flex-col items-center text-center p-6"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-brand-primary/20 transform translate-y-[-50%]" />
              )}
              <div className="relative z-10 bg-white rounded-full p-4 mb-4">
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
      </div>
    </section>
  );
};

export default HowItWorksSection;