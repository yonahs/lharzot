import React from 'react';
import { useLanguage } from './LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { t, language } = useLanguage();

  const faqs = [
    {
      question: {
        en: "What is Semaglutide?",
        he: "מהו סמגלוטיד?"
      },
      answer: {
        en: "Semaglutide is an FDA-approved medication that helps with weight management by regulating appetite and reducing food cravings.",
        he: "סמגלוטיד הוא תרופה מאושרת FDA המסייעת בניהול משקל על ידי ויסות התיאבון והפחתת התשוקה למזון."
      }
    },
    {
      question: {
        en: "How does Semaglutide work?",
        he: "כיצד פועל סמגלוטיד?"
      },
      answer: {
        en: "Semaglutide works by mimicking a hormone that targets areas of the brain that regulate appetite and food intake.",
        he: "סמגלוטיד פועל על ידי חיקוי הורמון שמתמקד באזורי המוח המווסתים תיאבון וצריכת מזון."
      }
    },
    {
      question: {
        en: "How long does it take to see results?",
        he: "כמה זמן לוקח לרדת במשקל עם סמגלוטיד?"
      },
      answer: {
        en: "Most patients begin to see results within the first few weeks of treatment, with significant results typically observed within 2-3 months.",
        he: "רוב המטופלים מתחילים לראות תוצאות תוך מספר שבועות מתחילת הטיפול, עם תוצאות משמעותיות בדרך כלל תוך 2-3 חודשים."
      }
    },
    {
      question: {
        en: "What is the mechanism of Semaglutide?",
        he: "מהו המנגנון של סמגלוטיד?"
      },
      answer: {
        en: "Semaglutide works by mimicking GLP-1, a hormone that regulates appetite and food intake. It helps reduce hunger and increase feelings of fullness.",
        he: "סמגלוטיד פועל על ידי חיקוי GLP-1, הורמון המווסת תיאבון וצריכת מזון. הוא עוזר להפחית רעב ולהגביר תחושת שובע."
      }
    },
    {
      question: {
        en: "How long can I stay on Semaglutide?",
        he: "כמה זמן אפשר להישאר על סמגלוטיד?"
      },
      answer: {
        en: "The duration of Semaglutide treatment varies by individual and should be determined by your healthcare provider based on your progress and goals.",
        he: "משך הטיפול בסמגלוטיד משתנה מאדם לאדם ויש לקבוע אותו עם הרופא המטפל בהתאם להתקדמות והמטרות שלך."
      }
    },
    {
      question: {
        en: "Can I stop Semaglutide treatment?",
        he: "כיצד לאחסן סמגלוטיד?"
      },
      answer: {
        en: "Yes, but it should be done under medical supervision. Your healthcare provider will help you develop a plan to safely discontinue treatment when appropriate.",
        he: "יש לאחסן את הסמגלוטיד במקרר בטמפרטורה של 2-8 מעלות צלזיוס. לאחר השימוש הראשון, ניתן לאחסן אותו בטמפרטורת החדר עד 30 יום."
      }
    },
    {
      question: {
        en: "Is Semaglutide available at Lharzot?",
        he: "האם סמגלוטיד זמין ב-lharzot?"
      },
      answer: {
        en: "Yes, Semaglutide is available through Lharzot with a valid prescription from our licensed physicians.",
        he: "כן, סמגלוטיד זמין דרך lharzot עם מרשם תקף מהרופאים המורשים שלנו."
      }
    },
    {
      question: {
        en: "What side effects should I be aware of?",
        he: "מהן תופעות הלוואי של סמגלוטיד?"
      },
      answer: {
        en: "Common side effects may include nausea, diarrhea, vomiting, and constipation. These typically improve over time as your body adjusts to the medication.",
        he: "תופעות לוואי נפוצות כוללות בחילה, שלשול, הקאות ועצירות. אלה בדרך כלל משתפרות עם הזמן כאשר הגוף מסתגל לתרופה."
      }
    },
    {
      question: {
        en: "Can I use alcohol while on Semaglutide?",
        he: "האם ניתן לשתות אלכוהול בזמן הטיפול בסמגלוטיד?"
      },
      answer: {
        en: "While there are no direct interactions between Semaglutide and alcohol, it's recommended to limit alcohol consumption during treatment.",
        he: "למרות שאין אינטראקציה ישירה בין סמגלוטיד לאלכוהול, מומלץ להגביל צריכת אלכוהול במהלך הטיפול."
      }
    },
    {
      question: {
        en: "Can Semaglutide be prescribed to patients under 18?",
        he: "האם ניתן לרשום סמגלוטיד למטופלים מתחת לגיל 18?"
      },
      answer: {
        en: "Semaglutide is not currently approved for use in patients under 18 years of age.",
        he: "סמגלוטיד אינו מאושר כרגע לשימוש במטופלים מתחת לגיל 18."
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t('faq_title')}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {t('faq_subtitle')}
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-right">
                {faq.question[language]}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer[language]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;