import React from 'react';
import { useLanguage } from './LanguageContext';
import { ClipboardList, UserCheck, FileText } from 'lucide-react';

const HowItWorksSection = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      icon: <FileText className="w-12 h-12 text-black" />,
      title: { 
        en: "Digital Prescription Ready", 
        he: "מרשם דיגיטלי מוכן" 
      },
      description: {
        en: "Prescription will be sent to your home within 72 hours",
        he: "המרשם ישלח לבית מרקחת תוך 72 שעות"
      }
    },
    {
      icon: <UserCheck className="w-12 h-12 text-black" />,
      title: { 
        en: "Medical Review", 
        he: "העברת השאלון לרופא" 
      },
      description: {
        en: "The doctor will review your medical condition",
        he: "הרופא יבדוק את התיק הרפואי שלכם"
      }
    },
    {
      icon: <ClipboardList className="w-12 h-12 text-black" />,
      title: { 
        en: "Fill Questionnaire", 
        he: "מילוי שאלון" 
      },
      description: {
        en: "Fill out our short questionnaire",
        he: "ענו על השאלון הקצר שלנו"
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
          {t('how_it_works_subtitle')}
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
            {language === 'he' ? 
              "*לאחר השלמת השאלון הרופא יבדוק את התיק והמרשם ישלח לבית מרקחת תוך 72 שעות." :
              "*After completing the questionnaire, the doctor will review your file and the prescription will be sent to the pharmacy within 72 hours."
            }
          </p>
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-lg max-w-4xl mx-auto">
          <p className="text-sm leading-relaxed">
            {language === 'he' ? 
              "ב-lharzot, אנו מבינים את החשיבות של גישה קלה ובמחיר סביר לתרופות כמו Ozempic או Wegovy. הפלטפורמה שלנו מקלה על קבלת המרשם שלך באופן מקוון ומשלוח אותו עד לדלת ביתך. ספקי שירותי בריאות מורשים בפלטפורמת lharzot, המתמחים בירידה במשקל, יחזרו אותך בהמשך ויענו על כל שאלה שתהיה לך." :
              "At lharzot, we understand the importance of easy and affordable access to medications like Ozempic or Wegovy. Our platform makes it easy to get your prescription online and have it delivered to your door. Licensed healthcare providers on the lharzot platform, specializing in weight loss, will follow up with you and answer any questions you may have."
            }
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            {language === 'he' ? 
              "אם אושרת, תוכל לרכוש מנות תרופת GLP-1 לירידה במשקל באופן מקוון. בעוד שמרשם לסמגלוטיד עשוי לא להיות מכוסה על ידי מבטחות, אנו מציעים אפשרויות חלופיות כדי לעזור להפוך אותו ליותר יותר עבורך. עשה את הצעד הראשון לקראת מסע ירידה במשקל שלך וקבל Ozempic או Wegovy באופן מקוון עם lharzot. הצוות שלנו כאן כדי לענות על כל שאלה שיש לך לגבי ביטוח או תהליך קבלת מרשם לסמגלוטיד באופן מקוון." :
              "If approved, you can purchase GLP-1 weight loss medication doses online. While Semaglutide prescriptions may not be covered by insurers, we offer alternative options to help make it more accessible for you. Take the first step towards your weight loss journey and get Ozempic or Wegovy online with lharzot. Our team is here to answer any questions you have about insurance or the process of getting a Semaglutide prescription online."
            }
          </p>
          <p className="mt-4 text-sm font-medium">
            {language === 'he' ? 
              "הערה: חשוב לעקוב אחר המינון שנרשם ולהתייעץ עם הרופא שלך באופן קבוע כדי לעקוב אחר ההתקדמות שלך ולטפל בכל חשש." :
              "Note: It's important to follow the prescribed dosage and consult with your doctor regularly to track your progress and address any concerns."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;