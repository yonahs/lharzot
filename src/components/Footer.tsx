
import React from 'react';
import { useLanguage } from './LanguageContext';
import TermsAndConditions from './TermsAndConditions';

const Footer = () => {
  const { language } = useLanguage();
  const isRtl = language === 'he';
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            © {currentYear} {language === 'he' ? 'להרזות - אבחון רפואי מקוון' : 'Leharazot - Online Medical Diagnosis'}
          </div>
          
          <div className={`flex items-center space-x-6 ${isRtl ? 'space-x-reverse' : ''}`}>
            <TermsAndConditions />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
