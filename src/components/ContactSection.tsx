import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    toast({
      title: language === 'he' ? "הטופס נשלח בהצלחה" : "Form submitted successfully",
      description: language === 'he' ? "ניצור איתך קשר בקרוב" : "We'll contact you soon",
    });
  };

  return (
    <section className="py-20 bg-brand-secondary">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t('contact_title')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder={language === 'he' ? "שם מלא" : "Full Name"}
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder={language === 'he' ? "טלפון" : "Phone"}
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder={language === 'he' ? "אימייל" : "Email"}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90">
            {t('book_appointment')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;