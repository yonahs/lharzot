import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Lharzot" className="h-10" />
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            {language === 'he' ? 'English' : 'עברית'}
          </Button>
          
          <Button className="bg-brand-primary hover:bg-brand-primary/90">
            {language === 'he' ? 'קבע תור' : 'Book Appointment'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;