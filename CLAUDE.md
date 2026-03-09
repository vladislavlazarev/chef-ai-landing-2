# CLAUDE.md

## Project: Chef AI Landing Page

Landing page for AI Chef — a mobile app for personalized recipe generation using AI (photo, voice, text input).

## Tech Stack

- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` plugin, `@import "tailwindcss"` syntax)
- **Animations:** Framer Motion
- **Icons:** Lucide React (NO emojis as icons)
- **Utilities:** clsx + tailwind-merge (`src/lib/cn.ts`)
- **Deploy:** Vercel (zero config for Vite)

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview production build

## Multilingual (i18n)

Three languages: **RU / UZ / EN**

- Default language auto-detected from `navigator.language` (fallback: EN)
- Manual switcher in navbar (persisted to `localStorage` key `chef-ai-lang`)
- All texts via `useTranslation()` hook — NEVER hardcode strings in components
- Translations file: `src/i18n/translations.ts`
- Context: `src/i18n/LanguageContext.tsx`

## Brand Design Tokens

| Token | Value | Use |
|-------|-------|-----|
| Brand Gold | `#F5C518` | Primary accent |
| Brand Amber | `#F59E0B` | Buttons, hover |
| Brand Orange | `#EA580C` | Gradient accent |
| Brand Cream | `#FFFBEB` | Section backgrounds |
| Stone 900 | `#1C1917` | Headings |
| Stone 700 | `#44403C` | Body text |
| Stone 500 | `#78716C` | Muted text |

## Font Stack

- **Body:** Inter (Google Fonts, Cyrillic subset)
- **Logo:** Pacifico (cursive, Google Fonts)

## Component Structure

```
src/
  components/
    layout/   — Navbar.tsx, Footer.tsx
    sections/ — Hero.tsx, Features.tsx, HowItWorks.tsx, Screenshots.tsx, DownloadCTA.tsx
    ui/       — BackgroundGradient.tsx, StoreButtons.tsx, PhoneMockup.tsx, LanguageSwitcher.tsx
  i18n/       — translations.ts, LanguageContext.tsx, useTranslation.ts
  lib/        — cn.ts
  assets/screenshots/ — app screenshots
```

## Design Guidelines

- Background gradient animation (warm gold/amber/orange blobs) used in Hero and CTA sections
- Store download buttons appear in 3 places: navbar, hero, CTA section
- Mobile-first responsive design (375px → 768px → 1024px → 1440px)
- Touch targets minimum 44x44px
- `prefers-reduced-motion` respected for all animations
- Floating navbar with backdrop-blur
- No dark mode (light theme only)

## UI/UX Skill

Design intelligence skill available at `.claude/skills/ui-ux-pro-max/SKILL.md`

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>
```

## Store Links

Currently placeholder `#` — replace with real URLs when available.
