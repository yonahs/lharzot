import React from 'react';
import { useLanguage } from './LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TermsAndConditions = () => {
  const { language } = useLanguage();

  const terms = {
    title: {
      en: "Terms and Conditions",
      he: "תקנון השימוש באתר"
    },
    content: {
      en: [
        "1. Service Description",
        "The website provides online medical consultation services for weight management. This service includes medical diagnosis and evaluation only. The website does not provide, sell, or distribute any medications.",
        
        "2. Medical Consultation",
        "The consultation is provided by licensed physicians who will evaluate your medical condition. Any prescription will be issued solely at the physician's professional discretion, based on medical evaluation.",
        
        "3. Prescription Disclaimer",
        "- Not all consultations will result in a prescription",
        "- Prescriptions are issued only to eligible patients based on medical evaluation",
        "- The website is not responsible for medication availability at pharmacies",
        "- We do not guarantee prescription fulfillment or medication availability",
        
        "4. Medical Information Accuracy",
        "Patients must provide accurate medical information. The website is not liable for incorrect diagnoses resulting from inaccurate information provided by patients.",
        
        "5. Pharmacy Services",
        "- The website does not operate pharmacies or dispense medications",
        "- We are not responsible for pharmacy errors or medication quality",
        "- Medication availability and pricing are determined by individual pharmacies",
        
        "6. Refund Policy",
        "The consultation fee covers medical evaluation services only. No refunds will be issued based on prescription eligibility or medication availability.",
        
        "7. Liability Limitations",
        "The website is not liable for:",
        "- Medication availability or pricing",
        "- Pharmacy dispensing errors",
        "- Medication side effects or efficacy",
        "- Treatment outcomes",
        
        "8. Privacy",
        "All medical information is confidential and protected according to applicable privacy laws."
      ],
      he: [
        "1. תיאור השירות",
        "האתר מספק שירותי ייעוץ רפואי מקוון לניהול משקל. שירות זה כולל אבחון והערכה רפואית בלבד. האתר אינו מספק, מוכר או מפיץ תרופות כלשהן.",
        
        "2. ייעוץ רפואי",
        "הייעוץ ניתן על ידי רופאים מורשים אשר יעריכו את מצבך הרפואי. כל מרשם יונפק אך ורק על פי שיקול דעתו המקצועי של הרופא, בהתבסס על הערכה רפואית.",
        
        "3. הבהרה לגבי מרשמים",
        "- לא כל הייעוצים יובילו למתן מרשם",
        "- מרשמים ניתנים רק למטופלים מתאימים על בסיס הערכה רפואית",
        "- האתר אינו אחראי לזמינות תרופות בבתי מרקחת",
        "- איננו מבטיחים מילוי מרשם או זמינות תרופות",
        
        "4. דיוק מידע רפואי",
        "על המטופלים לספק מידע רפואי מדויק. האתר אינו אחראי לאבחונים שגויים הנובעים ממידע לא מדויק שסופק על ידי המטופלים.",
        
        "5. שירותי בית מרקחת",
        "- האתר אינו מפעיל בתי מרקחת ואינו מנפק תרופות",
        "- איננו אחראים לטעויות בית מרקחת או לאיכות התרופות",
        "- זמינות ומחירי התרופות נקבעים על ידי בתי המרקחת הבודדים",
        
        "6. מדיניות החזרים",
        "דמי הייעוץ מכסים שירותי הערכה רפואית בלבד. לא יינתנו החזרים על בסיס זכאות למרשם או זמינות תרופות.",
        
        "7. הגבלות אחריות",
        "האתר אינו אחראי ל:",
        "- זמינות או מחירי תרופות",
        "- טעויות בניפוק בבית המרקחת",
        "- תופעות לוואי או יעילות התרופות",
        "- תוצאות הטיפול",
        
        "8. פרטיות",
        "כל המידע הרפואי הוא חסוי ומוגן בהתאם לחוקי הפרטיות החלים."
      ]
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="text-sm text-gray-600 hover:text-gray-900">
        {terms.title[language]}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">
            {terms.title[language]}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-brand-text-secondary">
          {terms.content[language].map((section, index) => (
            <p key={index} className={section.startsWith('- ') ? 'pl-4' : ''}>
              {section}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditions;