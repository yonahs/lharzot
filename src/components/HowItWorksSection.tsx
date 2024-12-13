import React from 'react';
import { useLanguage } from './LanguageContext';
import { ClipboardCheck, UserCheck, Stethoscope, Calendar } from 'lucide-react';

const HowItWorksSection = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-brand-primary" />,
      title: { en: "Start Your Weight Loss Journey", he: "התחל לרדת במשקל" },
      description: {
        en: "Get your personalized weight loss program with clear guidelines and expert support.",
        he: "קבל את תוכנית הירידה במשקל שלך בנוחות, משולבת ירידת בית, עם הוראות מפורטות."
      }
    },
    {
      icon: <UserCheck className="w-12 h-12 text-brand-primary" />,
      title: { en: "Complete Registration", he: "מרשם והדרכה לסמגלוטיד" },
      description: {
        en: "Fill out your medical information securely and get approved by our physicians.",
        he: "קבל את המרשם להתחלת ירידה במשקל שלך באופן מקוון. הרופא יספק הוראות מפורטות כיצד להשתמש בתרופה בצורה בטוחה ויעילה."
      }
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-brand-primary" />,
      title: { en: "Medical Consultation", he: "התייעצות עם רופא לירידה במשקל" },
      description: {
        en: "Connect with our medical team virtually for personalized guidance.",
        he: "התחבר באופן וירטואלי ודון במצב הרפואי שלך, ובכל שאלה או חשש שיש לך. הרופא יערוך את התאמתך לסמגלוטיד ויספק מרשם אם מתאים."
      }
    },
    {
      icon: <Calendar className="w-12 h-12 text-brand-primary" />,
      title: { en: "Book Appointment", he: "קבע תור" },
      description: {
        en: "Schedule your consultation with our medical team through our platform.",
        he: "קבע תור עם רופא מורשה דרך לפלטפורמת lharzot. הפלטפורמה המוצפנת שלנו מבטיחה שכל המידע הרפואי שלך בטוח, מאובטח וחסוי."
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t('how_it_works_title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('how_it_works_subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-brand-primary/20 transform translate-y-[-50%]" />
              )}
              <div className="relative z-10 bg-brand-secondary rounded-full p-4 mb-4">
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