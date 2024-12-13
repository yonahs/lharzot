import React from 'react';
import { useLanguage } from './LanguageContext';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const SuccessStoriesSection = () => {
  const { t, language } = useLanguage();

  const stories = [
    {
      name: { en: "Rachel L.", he: "רונית ל." },
      text: {
        en: "Lost 15kg in 3 months with the program. Changed my life!",
        he: "הצליחה להוריד 15 קג בתוך 3 חודשים שינתה את חיי."
      }
    },
    {
      name: { en: "Joseph C.", he: "יוסי כ." },
      text: {
        en: "For the first time, I'm in control of my eating habits. Great program!",
        he: "לראשונה בחיי אני מרגיש שליטה על האכילה שלי. מדהים!"
      }
    },
    {
      name: { en: "Michael S.", he: "מיכל ש." },
      text: {
        en: "The guidance helped me reach my weight loss goals. Highly recommended!",
        he: "ההדרכה עזרה לי להגיע למשקל היעד שלי."
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('success_stories_title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="bg-brand-secondary border-none">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-accent fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{story.text[language]}</p>
                <p className="font-semibold text-brand-primary">{story.name[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;