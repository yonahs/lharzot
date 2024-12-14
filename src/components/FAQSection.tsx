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
        en: "What is Ozempic?",
        he: "מהו אוזמפיק?"
      },
      answer: {
        en: "Ozempic (semaglutide) is an FDA-approved medication primarily used for type 2 diabetes and weight management. It works by mimicking a hormone that regulates appetite and blood sugar levels.",
        he: "אוזמפיק (סמגלוטיד) היא תרופה מאושרת FDA המשמשת בעיקר לטיפול בסוכרת סוג 2 וניהול משקל. היא פועלת על ידי חיקוי הורמון המווסת תיאבון ורמות סוכר בדם."
      }
    },
    {
      question: {
        en: "What is semaglutide compound in Ozempic?",
        he: "מהו החומר הפעיל סמגלוטיד באוזמפיק?"
      },
      answer: {
        en: "Semaglutide is the active ingredient in Ozempic that belongs to a class of medications called GLP-1 receptor agonists. It helps regulate blood sugar and appetite by mimicking the effects of natural hormones.",
        he: "סמגלוטיד הוא החומר הפעיל באוזמפיק השייך לקבוצת תרופות הנקראות אגוניסטים של קולטן GLP-1. הוא עוזר לווסת סוכר בדם ותיאבון על ידי חיקוי השפעות של הורמונים טבעיים."
      }
    },
    {
      question: {
        en: "How does semaglutide work?",
        he: "כיצד פועל סמגלוטיד?"
      },
      answer: {
        en: "Semaglutide works by mimicking GLP-1, a hormone that targets areas of the brain that regulate appetite and food intake. It helps reduce hunger, increase feelings of fullness, and slow down digestion.",
        he: "סמגלוטיד פועל על ידי חיקוי GLP-1, הורמון המתמקד באזורי המוח המווסתים תיאבון וצריכת מזון. הוא עוזר להפחית רעב, להגביר תחושת שובע ולהאט את העיכול."
      }
    },
    {
      question: {
        en: "How to get Semaglutide for weight loss?",
        he: "כיצד להשיג סמגלוטיד לירידה במשקל?"
      },
      answer: {
        en: "Semaglutide requires a prescription from a licensed healthcare provider. Through our platform, you can consult with our medical professionals who will evaluate your eligibility and provide a prescription if appropriate.",
        he: "סמגלוטיד דורש מרשם מספק שירותי בריאות מורשה. דרך הפלטפורמה שלנו, תוכלו להתייעץ עם הרופאים שלנו שיעריכו את התאמתכם ויספקו מרשם במידת הצורך."
      }
    },
    {
      question: {
        en: "How long can I stay on Semaglutide?",
        he: "כמה זמן אפשר להישאר על סמגלוטיד?"
      },
      answer: {
        en: "The duration of Semaglutide treatment varies by individual and should be determined by your healthcare provider based on your progress and goals. Many patients continue treatment as long as they're experiencing benefits and tolerating the medication well.",
        he: "משך הטיפול בסמגלוטיד משתנה מאדם לאדם ויש לקבוע אותו עם הרופא המטפל בהתאם להתקדמות והמטרות שלך. מטופלים רבים ממשיכים בטיפול כל עוד הם חווים יתרונות ומגיבים טוב לתרופה."
      }
    },
    {
      question: {
        en: "What foods should I avoid while taking Semaglutide?",
        he: "אילו מאכלים יש להימנע מהם בזמן נטילת סמגלוטיד?"
      },
      answer: {
        en: "While on Semaglutide, it's recommended to avoid high-fat and high-sugar foods as they may increase gastrointestinal side effects. Focus on balanced, nutritious meals with lean proteins, vegetables, and whole grains.",
        he: "בזמן נטילת סמגלוטיד, מומלץ להימנע ממאכלים עתירי שומן וסוכר שעלולים להגביר תופעות לוואי במערכת העיכול. התמקדו בארוחות מאוזנות ומזינות עם חלבונים רזים, ירקות ודגנים מלאים."
      }
    },
    {
      question: {
        en: "How to store Semaglutide?",
        he: "כיצד לאחסן סמגלוטיד?"
      },
      answer: {
        en: "Store Semaglutide in the refrigerator between 2°C to 8°C (36°F to 46°F). After first use, it can be stored at room temperature for up to 30 days.",
        he: "יש לאחסן את הסמגלוטיד במקרר בטמפרטורה של 2-8 מעלות צלזיוס. לאחר השימוש הראשון, ניתן לאחסן אותו בטמפרטורת החדר עד 30 יום."
      }
    },
    {
      question: {
        en: "Can I use Semaglutide and alcohol at the same time?",
        he: "האם ניתן להשתמש בסמגלוטיד ואלכוהול באותו זמן?"
      },
      answer: {
        en: "While there are no direct interactions between Semaglutide and alcohol, it's recommended to limit alcohol consumption during treatment as it may increase the risk of low blood sugar and gastrointestinal side effects.",
        he: "למרות שאין אינטראקציה ישירה בין סמגלוטיד לאלכוהול, מומלץ להגביל צריכת אלכוהול במהלך הטיפול מכיוון שהיא עלולה להגביר את הסיכון לרמת סוכר נמוכה בדם ותופעות לוואי במערכת העיכול."
      }
    },
    {
      question: {
        en: "How much weight can I lose with Semaglutide in 1 month?",
        he: "כמה משקל אפשר לרדת עם סמגלוטיד בחודש?"
      },
      answer: {
        en: "Weight loss results vary by individual, but many people lose 5-10% of their body weight within the first few months of treatment when combined with lifestyle changes. Individual results may vary based on various factors.",
        he: "תוצאות הירידה במשקל משתנות מאדם לאדם, אך אנשים רבים מאבדים 5-10% ממשקל גופם במהלך החודשים הראשונים לטיפול בשילוב עם שינויים באורח החיים. התוצאות האישיות עשויות להשתנות בהתאם לגורמים שונים."
      }
    },
    {
      question: {
        en: "Can I use Ozempic while pregnant or breastfeeding?",
        he: "האם ניתן להשתמש באוזמפיק בזמן הריון או הנקה?"
      },
      answer: {
        en: "Semaglutide is not recommended during pregnancy or while breastfeeding. If you become pregnant or are planning to become pregnant, consult your healthcare provider immediately.",
        he: "לא מומלץ להשתמש בסמגלוטיד במהלך ההיריון או ההנקה. אם את בהריון או מתכננת להיכנס להריון, התייעצי עם הרופא המטפל באופן מיידי."
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