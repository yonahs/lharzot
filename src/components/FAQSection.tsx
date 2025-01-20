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
        en: "What type of medical consultation do you provide?",
        he: "איזה סוג של ייעוץ רפואי אתם מספקים?"
      },
      answer: {
        en: "We provide online medical consultations with licensed physicians who specialize in weight management. The consultation includes a comprehensive medical evaluation to determine appropriate treatment options.",
        he: "אנחנו מספקים ייעוץ רפואי מקוון עם רופאים מורשים המתמחים בניהול משקל. הייעוץ כולל הערכה רפואית מקיפה לקביעת אפשרויות טיפול מתאימות."
      }
    },
    {
      question: {
        en: "What are GLP-1 medications?",
        he: "מהן תרופות GLP-1?"
      },
      answer: {
        en: "GLP-1 medications are a class of prescription medications that may be prescribed for weight management in eligible patients. These medications work by affecting appetite regulation and blood sugar levels. The suitability of any medication can only be determined through proper medical evaluation.",
        he: "תרופות GLP-1 הן קבוצת תרופות מרשם שעשויות להירשם לניהול משקל במטופלים מתאימים. תרופות אלה פועלות על ידי השפעה על ויסות התיאבון ורמות הסוכר בדם. ההתאמה לכל תרופה יכולה להיקבע רק באמצעות הערכה רפואית מתאימה."
      }
    },
    {
      question: {
        en: "What happens during the consultation?",
        he: "מה קורה במהלך הייעוץ?"
      },
      answer: {
        en: "The consultation includes completing a medical questionnaire and an online meeting with a licensed physician who will evaluate your medical condition. Based on this evaluation, the physician will determine appropriate treatment options, if any.",
        he: "הייעוץ כולל מילוי שאלון רפואי ופגישה מקוונת עם רופא מורשה שיעריך את מצבך הרפואי. בהתבסס על הערכה זו, הרופא יקבע אפשרויות טיפול מתאימות, אם בכלל."
      }
    },
    {
      question: {
        en: "Will I definitely receive a prescription?",
        he: "האם אני בהכרח אקבל מרשם?"
      },
      answer: {
        en: "No. Prescriptions are only provided if deemed medically appropriate by the consulting physician, based on their professional evaluation of your specific situation and medical history. Not all patients will qualify for prescription medications.",
        he: "לא. מרשמים ניתנים רק אם נמצאו מתאימים מבחינה רפואית על ידי הרופא המייעץ, בהתבסס על הערכה מקצועית של מצבך הספציפי וההיסטוריה הרפואית שלך. לא כל המטופלים יהיו זכאים לתרופות מרשם."
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
    }
  ];

  return (
    <section className="py-20 bg-brand-background-subtle" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {language === 'he' ? 'שאלות נפוצות' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-brand-text-secondary text-lg">
            {language === 'he' 
              ? 'מצאו תשובות לשאלות הנפוצות ביותר' 
              : 'Find answers to the most common questions'}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium text-brand-text-primary">
                  {faq.question[language]}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-brand-text-secondary">
                  {faq.answer[language]}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;