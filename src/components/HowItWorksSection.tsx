
import React from 'react';
import { useLanguage } from './LanguageContext';
import { ClipboardList, UserCheck, FileText } from 'lucide-react';

const HowItWorksSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'he';

  const steps = [
    {
      icon: <ClipboardList className="w-12 h-12 text-brand-primary" />,
      title: { 
        he: "שאלון רפואי", 
        en: "Medical Questionnaire" 
      },
      description: {
        he: "מילוי שאלון רפואי מקיף להערכת מצבך הרפואי",
        en: "Complete a comprehensive medical questionnaire for evaluation"
      }
    },
    {
      icon: <UserCheck className="w-12 h-12 text-brand-primary" />,
      title: { 
        he: "ייעוץ רפואי", 
        en: "Medical Consultation" 
      },
      description: {
        he: "ייעוץ מקוון עם רופא מומחה להערכת התאמתך לטיפול",
        en: "Online consultation with a specialist to assess treatment eligibility"
      }
    },
    {
      icon: <FileText className="w-12 h-12 text-brand-primary" />,
      title: { 
        he: "המלצת טיפול", 
        en: "Treatment Recommendation" 
      },
      description: {
        he: "קבלת המלצת טיפול מותאמת אישית בהתאם לשיקול דעת רפואי*",
        en: "Receive personalized treatment recommendation based on medical assessment*"
      }
    }
  ];

  return (
    <section className="py-20 bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t('how_it_works_title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {language === 'he' 
            ? "תהליך הייעוץ הרפואי שלנו - מקצועי, בטוח ומותאם אישית"
            : "Our medical consultation process - professional, secure, and personalized"
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
              ? "*המלצת טיפול ומרשם יינתנו רק למטופלים מתאימים, בהתאם לשיקול דעת רפואי מקצועי של הרופא המטפל. השירות אינו כולל אספקת תרופות."
              : "*Treatment recommendation and prescription will only be provided to eligible patients, according to the treating physician's professional medical discretion. Service does not include medication supply."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
