# Leharazot - Online Medical Consultation Platform

## Overview

This is a bilingual (Hebrew/English) medical consultation platform that connects patients with licensed physicians for weight management consultations. The platform provides a streamlined process for medical evaluations and treatment recommendations.

## Project Structure

```
src/
├── components/           # React components
│   ├── BenefitsSection/    # Benefits overview
│   ├── ContactSection/     # Contact form
│   ├── FAQSection/        # Frequently asked questions
│   ├── Footer/           # Site footer
│   ├── Header/           # Site header
│   ├── HeroSection/      # Main landing section
│   ├── HowItWorksSection/ # Process explanation
│   ├── LanguageContext/   # Bilingual support
│   ├── SuccessStoriesSection/ # Patient testimonials
│   └── ui/               # shadcn/ui components
├── pages/               # Page components
└── utils/              # Utility functions
```

## Features

- **Bilingual Support**: Full Hebrew and English language support
- **Responsive Design**: Mobile-first approach ensuring compatibility across devices
- **Medical Consultation**: Online booking system for medical evaluations
- **User Education**: Comprehensive FAQ and process explanation
- **Success Stories**: Real patient testimonials
- **Professional UI**: Built with shadcn/ui components
- **Modern Stack**: React, TypeScript, Tailwind CSS, Vite

## Technical Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context (Language)
- **Routing**: React Router
- **Form Handling**: React Hook Form
- **Icons**: Lucide React

## Development Guidelines

### Adding New Features

1. Create new components in `src/components/`
2. Update CHANGELOG.md with changes
3. Ensure bilingual support in LanguageContext
4. Follow existing code style and TypeScript types
5. Test responsive design

### Code Style

- Use TypeScript for type safety
- Follow React functional component patterns
- Implement responsive design with Tailwind
- Use shadcn/ui components when possible
- Keep components focused and small

### Bilingual Support

All user-facing text should be provided in both Hebrew and English using the LanguageContext:

```typescript
const { t, language } = useLanguage();
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Visit `http://localhost:5173`

## Deployment

The site can be deployed through the Lovable platform or manually to any static hosting service.

## Contributing

1. Create a feature branch
2. Make changes
3. Update CHANGELOG.md
4. Submit pull request

## License

All rights reserved. This is a proprietary project.