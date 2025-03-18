
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from './LanguageContext';

interface PopupProps {
  delayMs?: number;
}

const Popup: React.FC<PopupProps> = ({ delayMs = 5000 }) => {
  // Use lazy state initialization to avoid unnecessary rerenders
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  
  const handleButtonClick = () => {
    window.location.href = "https://rx.lharzot.co.il/";
    setIsOpen(false);
  };

  useEffect(() => {
    // Use more efficient approach with cleanup
    let mounted = true;
    const timer = setTimeout(() => {
      if (mounted) {
        setIsOpen(true);
      }
    }, delayMs);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [delayMs]);

  const isRtl = language === 'he';

  // Only render the Dialog when it's open
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg animate-fade-in"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <DialogTitle className="sr-only">{t('popup_title')}</DialogTitle>
        <DialogDescription className="sr-only">Promotional popup</DialogDescription>
        <DialogClose className={`absolute ${isRtl ? 'left-4' : 'right-4'} top-4`}>
          <X className="h-4 w-4" />
        </DialogClose>
        
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-brand-primary">{t('popup_title')}</h3>
          
          <div className={`space-y-2 text-${isRtl ? 'right' : 'left'}`}>
            <p>{t('popup_step1')}</p>
            <p>{t('popup_step2')}</p>
            <p>{t('popup_step3')}</p>
          </div>
          
          <p className="font-semibold text-brand-accent mt-4">{t('popup_cta')}</p>
          
          <Button 
            className="w-full bg-brand-primary text-white hover:bg-brand-primary/90 mt-2"
            onClick={handleButtonClick}
          >
            {t('book_appointment')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
