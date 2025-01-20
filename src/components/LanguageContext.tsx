import React, { createContext, useContext, useState } from 'react';

type Language = 'he' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  hero_title: {
    en: "Online Medical Diagnosis for Obesity",
    he: "אבחון רפואי מקוון להשמנת יתר"
  },
  hero_subtitle: {
    en: "Professional Medical Consultation",
    he: "ייעוץ רפואי מקצועי"
  },
  how_it_works_title: {
    en: "How It Works",
    he: "איך זה עובד?"
  },
  how_it_works_subtitle: {
    en: "Our simple process for medical consultation",
    he: "התהליך הפשוט שלנו לייעוץ רפואי"
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
    en: "Book Consultation",
    he: "קבע ייעוץ"
  },
  medical_disclaimer: {
    en: "Treatment recommendations will be provided only to eligible patients based on professional medical evaluation.",
    he: "המלצות טיפול יינתנו רק למטופלים מתאימים על בסיס הערכה רפואית מקצועית."
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
