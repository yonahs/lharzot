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
        en: "What is the consultation process?",
        he: "מהו תהליך הייעוץ?"
      },
      answer: {
        en: "The consultation process includes completing a medical questionnaire, followed by an online consultation with a licensed physician who will evaluate your medical condition and determine appropriate treatment options.",
        he: "תהליך הייעוץ כולל מילוי שאלון רפואי, ולאחר מכן ייעוץ מקוון עם רופא מורשה שיעריך את מצבך הרפואי ויקבע אפשרויות טיפול מתאימות."
      }
    },
    {
      question: {
        en: "How long does the consultation take?",
        he: "כמה זמן נמשך הייעוץ?"
      },
      answer: {
        en: "The online consultation typically takes 15-30 minutes, depending on your medical history and specific needs.",
        he: "הייעוץ המקוון נמשך בדרך כלל 15-30 דקות, בהתאם להיסטוריה הרפואית והצרכים הספציפיים שלך."
      }
    },
    {
      question: {
        en: "What happens after the consultation?",
        he: "מה קורה לאחר הייעוץ?"
      },
      answer: {
        en: "After the consultation, if deemed appropriate by the physician, you may receive a treatment recommendation and prescription. This is based on professional medical assessment and individual suitability.",
        he: "לאחר הייעוץ, אם נמצא מתאים על ידי הרופא, תוכל לקבל המלצת טיפול ומרשם. זאת בהתבסס על הערכה רפואית מקצועית והתאמה אישית."
      }
    },
    {
      question: {
        en: "Is the consultation confidential?",
        he: "האם הייעוץ חסוי?"
      },
      answer: {
        en: "Yes, all consultations are completely confidential and comply with medical privacy regulations. Your medical information is securely stored and protected.",
        he: "כן, כל הייעוצים הם חסויים לחלוטין ועומדים בתקנות פרטיות רפואית. המידע הרפואי שלך מאוחסן ומוגן באופן מאובטח."
      }
    },
    {
      question: {
        en: "What is the cost of consultation?",
        he: "מה עלות הייעוץ?"
      },
      answer: {
        en: "The consultation fee is 599 NIS. This includes the medical evaluation and, if appropriate, treatment recommendations.",
        he: "עלות הייעוץ היא 599 ש\"ח. זה כולל את ההערכה הרפואית ובמידת הצורך, המלצות טיפול."
      }
    },
    {
      question: {
        en: "Who are the consulting physicians?",
        he: "מי הם הרופאים המייעצים?"
      },
      answer: {
        en: "Our physicians are licensed medical professionals with expertise in obesity management and general medicine.",
        he: "הרופאים שלנו הם אנשי מקצוע מורשים עם מומחיות בניהול השמנת יתר ורפואה כללית."
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