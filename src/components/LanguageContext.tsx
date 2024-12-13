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
    he: "איך זה עובד"
  },
  faq_title: {
    en: "Frequently Asked Questions",
    he: "שאלות נפוצות"
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