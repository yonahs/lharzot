import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm" dir="ltr">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <img 
            src="/lovable-uploads/3852605e-e9d5-4729-9b1a-a8cce61e8a9d.png" 
            alt="להרזות - אבחון רפואי מקוון" 
            className="h-10" 
          />
        </div>
        
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
            {language === 'he' ? 'קבע ייעוץ' : 'Book Consultation'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;