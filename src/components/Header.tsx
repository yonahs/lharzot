import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm" dir="ltr">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/lovable-uploads/21ea8878-5388-47f7-9265-478e05a21484.png" 
            alt="Lharzot" 
            className="h-12" 
          />
        </div>
        
        {/* Navigation and buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
            className="flex items-center gap-2 min-w-[100px] justify-center"
          >
            <Globe className="h-4 w-4" />
            <span className="whitespace-nowrap">
              {language === 'he' ? 'English' : 'עברית'}
            </span>
          </Button>
          
          <Button 
            className="bg-brand-primary hover:bg-brand-primary/90 min-w-[120px]"
          >
            {language === 'he' ? 'קבע תור' : 'Book Appointment'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;