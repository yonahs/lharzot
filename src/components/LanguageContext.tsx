import React, { createContext, useContext, useState } from 'react';

type Language = 'he' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  hero_title: {
    en: "Medical Weight Loss Program with Semaglutide",
    he: "תוכנית ירידה במשקל רפואית עם סמגלוטייד"
  },
  hero_subtitle: {
    en: "Safe, Effective, and Medically Supervised",
    he: "בטוח, יעיל ובפיקוח רפואי"
  },
  benefits_title: {
    en: "Program Benefits",
    he: "יתרונות התוכנית"
  },
  how_it_works_title: {
    en: "How It Works",
    he: "איך זה עובד?"
  },
  how_it_works_subtitle: {
    en: "Answer our short questionnaire so we can provide you with the best weight loss treatment.",
    he: "ענו על השאלון הקצר שלנו, כדי שנוכל להתאים לכם את הטיפול הטוב ביותר לירידה במשקל."
  },
  step_1_title: {
    en: "Start Your Weight Loss Journey",
    he: "התחל לרדת במשקל"
  },
  step_1_description: {
    en: "Get your personalized weight loss program with clear guidelines and expert support.",
    he: "קבל את תוכנית הירידה במשקל שלך בנוחות, משולבת ירידת בית, עם הוראות מפורטות."
  },
  step_2_title: {
    en: "Complete Registration",
    he: "מרשם והדרכה לסמגלוטיד"
  },
  step_2_description: {
    en: "Fill out your medical information securely and get approved by our physicians.",
    he: "קבל את המרשם להתחלת ירידה במשקל שלך באופן מקוון. הרופא יספק הוראות מפורטות כיצד להשתמש בתרופה בצורה בטוחה ויעילה."
  },
  step_3_title: {
    en: "Medical Consultation",
    he: "התייעצות עם רופא לירידה במשקל"
  },
  step_3_description: {
    en: "Connect with our medical team virtually for personalized guidance.",
    he: "התחבר באופן וירטואלי ודון במצב הרפואי שלך, ובכל שאלה או חשש שיש לך. הרופא יערוך את התאמתך לסמגלוטיד ויספק מרשם אם מתאים."
  },
  step_4_title: {
    en: "Book Appointment",
    he: "קבע תור"
  },
  step_4_description: {
    en: "Schedule your consultation with our medical team through our platform.",
    he: "קבע תור עם רופא מורשה דרך לפלטפורמת lharzot. הפלטפורמה המוצפנת שלנו מבטיחה שכל המידע הרפואי שלך בטוח, מאובטח וחסוי."
  },
  faq_title: {
    en: "Frequently Asked Questions",
    he: "שאלות נפוצות: סמגלוטיד 101"
  },
  faq_subtitle: {
    en: "Find answers to common questions about Semaglutide for weight loss.",
    he: "להלן תשובות לשאלות נפוצות הקשורות לשימוש בסמגלוטיד לירידה במשקל."
  },
  success_stories_title: {
    en: "Success Stories",
    he: "סיפורי הצלחה"
  },
  contact_title: {
    en: "Start Your Journey Today",
    he: "התחל את המסע שלך היום"
  },
  book_appointment: {
    en: "Book Appointment",
    he: "קבע תור"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('he');

  const t = (key: string) => {
    return translations[key as keyof typeof translations]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};