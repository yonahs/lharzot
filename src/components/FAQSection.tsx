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
        he: "מה זה סמגלוטייד?"
      },
      answer: {
        en: "Semaglutide is an FDA-approved medication that helps with weight management by regulating appetite and reducing food cravings.",
        he: "סמגלוטייד הוא תרופה מאושרת FDA המסייעת בניהול משקל על ידי ויסות התיאבון והפחתת התשוקה למזון."
      }
    },
    {
      question: {
        en: "How long does the program last?",
        he: "כמה זמן נמשכת התוכנית?"
      },
      answer: {
        en: "The program duration varies based on individual needs and goals, typically ranging from 3 to 12 months.",
        he: "משך התוכנית משתנה בהתאם לצרכים וליעדים האישיים, בדרך כלל בין 3 ל-12 חודשים."
      }
    },
    {
      question: {
        en: "Is medical supervision required?",
        he: "האם נדרש פיקוח רפואי?"
      },
      answer: {
        en: "Yes, our program includes regular medical supervision to ensure safety and optimize results.",
        he: "כן, התוכנית שלנו כוללת פיקוח רפואי קבוע להבטחת הבטיחות ומיטוב התוצאות."
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('faq_title')}
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
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