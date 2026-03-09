# Chef AI Landing Page — Lovable Brief

> **Инструкция:** Вставляй промпты в Lovable по одному, начиная с Master Prompt. После каждой секции проверяй результат в превью, подправляй если нужно, и только потом переходи к следующей.

---

## 0. MASTER PROMPT (вставить первым)

```
Build a premium, conversion-optimized mobile app landing page for "Chef AI" — an AI-powered recipe app that lets users snap photos of ingredients, use voice input, or type to get personalized recipe suggestions instantly.

TECH STACK: React + TypeScript + Tailwind CSS + shadcn/ui. Mobile-first responsive design (375px, 768px, 1024px, 1440px).

DESIGN SYSTEM:

Fonts:
- "Sora" from Google Fonts (with Cyrillic subset) for ALL text — headings, body, buttons, everything.
- "Pacifico" from Google Fonts for the logo text ONLY.

Colors:
- Primary accent (CTA buttons): #E8930C
- Primary hover: #D97706
- Gold highlight (badges, decorative): #F5C518
- Page background: #FFFDF7 (warm off-white)
- Alternate section background: #FEF7ED (warm cream)
- Heading text: #1A1612 (warm near-black)
- Body text: #4A4540
- Muted/secondary text: #8A8480
- Card backgrounds: #FFFFFF with 1px border #F0EBE4
- Footer background: #1A1612

Spacing & Radius:
- Border radius: 16px for cards, 12px for buttons, 999px for pills/badges
- Section padding: 96px vertical on desktop, 64px on mobile
- Max content width: 1200px, centered with 16px side padding on mobile, 24px on tablet+
- Card padding: 24-32px
- Card gap: 16-24px

Typography scale:
- H1 (hero): 48px mobile / 56px tablet / 64px desktop, weight 800, line-height 1.08
- H2 (section titles): 32px mobile / 40px desktop, weight 700, line-height 1.15
- H3 (card titles): 20-24px, weight 600
- Body: 16-18px, weight 400, line-height 1.6
- Caption/small: 13-14px, weight 500
- CTA button text: 16px, weight 600

GLOBAL RULES:
- Light theme only, no dark mode.
- All animations respect prefers-reduced-motion.
- Touch targets minimum 44x44px.
- No emoji as icons — use Lucide React icons exclusively.
- Single conversion goal: download the app (App Store + Google Play).
- Store links are placeholder "#" for now.
- The page must feel warm, appetizing, premium, and trustworthy — like a high-end food brand, not a tech startup.

i18n SYSTEM (CRITICAL — implement from the start):
- All user-facing text stored in a translations object, NEVER hardcoded.
- Create src/i18n/translations.ts with structure: { en: { nav: {...}, hero: {...}, ... }, ru: {...}, uz: {...} }
- Create a LanguageContext (React Context) storing active locale.
- Create a useTranslation() hook returning the active locale's strings.
- Auto-detect language from navigator.language on first visit (ru → RU, uz → UZ, else → EN).
- Persist manual selection to localStorage key "chef-ai-lang".
- Language switcher in navbar and footer.
- Three languages: Russian (RU), Uzbek (UZ), English (EN).

The page has 10 sections in this order:
1. Floating Navbar
2. Hero
3. Social Proof Bar
4. How It Works (3 steps)
5. Features (Bento Grid)
6. Testimonials
7. App Screenshots Gallery
8. FAQ
9. Final CTA
10. Footer

I will describe each section in the next messages. Build them sequentially.
```

---

## 1. NAVBAR

```
Build Section 1: Floating Navbar.

Position: Fixed, top: 16px, left: 16px, right: 16px, z-index: 50.
Style: Glassmorphism — white background at 85% opacity (bg-white/85), backdrop-blur-xl, border: 1px solid #F0EBE4, box-shadow: 0 1px 3px rgba(0,0,0,0.05).
Border radius: 16px.
Inner content max-width: 1200px, centered with auto margins, padding: 12px 20px.

Desktop layout (lg+):
- LEFT: Logo text "Chef AI" in Pacifico font, 24px. "Chef" in #1A1612, "AI" in #E8930C. No space between — it reads as "Chef AI".
- RIGHT: Language switcher + Download button, flex row, gap 12px.
  - Language switcher: 3 small pill buttons (RU / UZ / EN). Active one: background #E8930C, text white, font-weight 600. Inactive: transparent background, text #8A8480, hover text #1A1612. Each pill: padding 6px 12px, rounded-full, 13px font.
  - Download button: background #E8930C, text white, rounded-full, padding 10px 24px, font-weight 600, 14px. Hover: background #D97706. Text from translations:
    EN: "Download"
    RU: "Скачать"
    UZ: "Yuklab olish"

Mobile layout (below lg):
- LEFT: Logo "Chef AI" (same styling, 20px).
- RIGHT: Language switcher (compact, same pills but 12px font) + hamburger menu icon (Lucide Menu, 24px, #1A1612).
- Hamburger opens a dropdown panel below navbar: white bg, rounded-16px, shadow-lg, padding 20px. Contains:
  - "Download App" heading (14px, muted, uppercase, letter-spacing 0.05em)
  - App Store button (full width, black bg, white text, Apple logo + "App Store", rounded-12px, h-48px)
  - Google Play button (full width, black bg, white text, Play logo + "Google Play", rounded-12px, h-48px)
  - Gap 10px between buttons
  - Smooth height animation on open/close (200ms ease)

On scroll past 80px: increase shadow to shadow-md (transition 200ms).
Navbar appears with a subtle fade-in + slide-down on page load (opacity 0→1, translateY -8px→0, 400ms).
```

---

## 2. HERO

```
Build Section 2: Hero.

Container: min-height 100vh (desktop) / auto (mobile), padding-top: 120px (to clear navbar), padding-bottom: 80px. Background: #FFFDF7. No animated gradients, no blobs.

Desktop (lg+): Two-column layout, items vertically centered.
- Left column: 55% width, text content.
- Right column: 45% width, phone visual.

Mobile: Single column, text centered above, phone below.

LEFT COLUMN (text):

1. Social proof badge (above headline):
   Pill shape, inline-flex, items-center, gap 6px.
   Background: rgba(245, 197, 24, 0.12). Border: 1px solid rgba(245, 197, 24, 0.25). Rounded-full.
   Padding: 6px 14px.
   Content: Lucide Star icon (14px, fill #F5C518, stroke #F5C518) + text "4.8 Rating · 50K+ Downloads"
   Text: 13px, weight 500, color #92700A.
   Translations:
   EN: "4.8 Rating · 50K+ Downloads"
   RU: "Рейтинг 4.8 · 50K+ скачиваний"
   UZ: "4.8 Reyting · 50K+ yuklab olishlar"

2. Headline (margin-top 20px):
   Font: Sora, weight 800, color #1A1612. Line-height 1.08. Letter-spacing: -0.02em.
   Size: 40px (mobile) / 48px (sm) / 56px (md) / 64px (lg+).
   EN: "What's in your fridge?\nAI knows the recipe."
   RU: "Что в холодильнике?\nAI знает рецепт."
   UZ: "Muzlatgichda nima bor?\nAI retseptni biladi."
   Note: Use \n to break into two lines. Second line same styling.

3. Subtitle (margin-top 20px):
   Font: Sora, weight 400, 18px, color #8A8480, line-height 1.6. Max-width: 480px.
   EN: "Snap a photo, say it out loud, or just type — Chef AI creates personalized recipes from your ingredients in seconds."
   RU: "Сфотографируйте продукты, скажите вслух или просто напишите — Chef AI создаст персональные рецепты из ваших ингредиентов за секунды."
   UZ: "Mahsulotlarni suratga oling, ovoz bilan ayting yoki yozing — Chef AI sizning ingredientlaringizdan bir necha soniyada retsept yaratadi."

4. Store buttons (margin-top 32px):
   Flex row, gap 12px. On mobile: full width, stacked vertically.
   Each button: black background (#111), white text, rounded-12px, height 48px, padding 0 20px.
   - App Store: Apple logo (white, 20px) + column of text: "Download on the" (10px, opacity 80%) over "App Store" (16px, weight 600).
   - Google Play: Play triangle logo (white, 20px) + column: "GET IT ON" (10px, opacity 80%) over "Google Play" (16px, weight 600).
   Hover: translateY(-2px) + shadow-md. Transition 200ms. Active: scale(0.98).

5. Trust line (margin-top 16px):
   Text: 13px, weight 400, color #8A8480.
   EN: "Free · No ads · Works offline"
   RU: "Бесплатно · Без рекламы · Работает офлайн"
   UZ: "Bepul · Reklamasiz · Oflayn ishlaydi"

RIGHT COLUMN (phone):
- Single phone mockup image. Width: 280px (mobile, centered) / 320px (md) / 360px (lg+).
- Behind the phone: a static radial gradient circle — background: radial-gradient(circle at center, rgba(245,197,24,0.08) 0%, transparent 70%). Width/height: 500px, centered behind phone. NOT animated.
- Phone has a realistic shadow: 0 20px 60px rgba(0,0,0,0.10).
- Subtle floating animation: translateY oscillating ±6px, 6s duration, ease-in-out, infinite loop. Only if prefers-reduced-motion is not set.

MOBILE ALIGNMENT: All text centered. Badge centered. Buttons centered/full-width. Phone centered below with 40px margin-top.

Entry animations (staggered fade-up):
- Badge: delay 0ms, duration 500ms, translateY(16px→0) + opacity(0→1)
- Headline: delay 100ms
- Subtitle: delay 200ms
- Buttons: delay 300ms
- Phone: delay 400ms
Use CSS transitions or Framer Motion. Respect prefers-reduced-motion.
```

---

## 3. SOCIAL PROOF BAR

```
Build Section 3: Social Proof Bar.

Background: #FEF7ED. Padding: 40px vertical (desktop), 32px (mobile).

Desktop: Single horizontal row of 4 stats, centered within max-width 900px. Items evenly spaced with subtle vertical dividers between them (1px solid #E8D5C0, height 40px, vertical-align middle).

Mobile: 2x2 grid, gap 24px, no dividers.

Each stat item (flex column, items-center, text-center):
- Icon: Lucide icon, 22px, color #E8930C, margin-bottom 8px.
- Number: 28px (mobile) / 32px (desktop), weight 700, color #1A1612. Animated counter: counts from 0 to target value over 1.5 seconds when scrolled into viewport (use Intersection Observer). Format numbers with "+" suffix where applicable.
- Label: 13px, weight 500, color #8A8480, margin-top 4px.

4 stats:

1. Icon: Download (Lucide)
   Number: "50,000+"
   EN: "Downloads" / RU: "Скачиваний" / UZ: "Yuklab olishlar"

2. Icon: Star (Lucide)
   Number: "4.8"
   EN: "App Store Rating" / RU: "Рейтинг App Store" / UZ: "App Store reytingi"

3. Icon: ChefHat (Lucide)
   Number: "10,000+"
   EN: "Recipes Created" / RU: "Рецептов создано" / UZ: "Retseptlar yaratildi"

4. Icon: Globe (Lucide)
   Number: "3"
   EN: "Languages" / RU: "Языка" / UZ: "Til"

Entire section fades up on scroll into view (opacity 0→1, translateY 20px→0, 600ms).
```

---

## 4. HOW IT WORKS

```
Build Section 4: How It Works.

Background: #FFFDF7. Padding: 96px vertical (desktop), 64px (mobile).

Section header (centered, margin-bottom 64px desktop / 48px mobile):
- Title: H2 size (32px mobile / 40px desktop), weight 700, color #1A1612.
  EN: "How It Works" / RU: "Как это работает" / UZ: "Qanday ishlaydi"
- Subtitle: 18px, weight 400, color #8A8480, margin-top 12px, max-width 500px, centered.
  EN: "Three simple steps to your perfect meal"
  RU: "Три простых шага к идеальному блюду"
  UZ: "Mukammal taomga uch oddiy qadam"

3 steps displayed vertically with alternating layout on desktop:

DESKTOP LAYOUT (lg+):
- Step 1: Text LEFT (50%), Phone mockup RIGHT (50%)
- Step 2: Phone mockup LEFT (50%), Text RIGHT (50%)
- Step 3: Text LEFT (50%), Phone mockup RIGHT (50%)
- Each step: flex row, items-center, gap 64px, margin-bottom 80px (except last).

MOBILE LAYOUT:
- All steps stacked: text above, phone below, centered, margin-bottom 56px.

Each step's TEXT block:
- Step number: 48px circle, background #F5C518, color white, font-weight 700, font-size 18px. Content: "01" / "02" / "03". Margin-bottom 20px.
- Title: 24px (mobile) / 28px (desktop), weight 600, color #1A1612, margin-bottom 12px.
- Description: 16px, weight 400, color #4A4540, line-height 1.6, max-width 400px.

Each step's PHONE MOCKUP:
- Width: 240px (mobile) / 280px (desktop).
- Rounded corners (2.5rem) with subtle shadow (0 12px 40px rgba(0,0,0,0.08)).
- Shows an app screenshot image (placeholder for now — use a colored rectangle with text describing the screen if no image available).

Step content:

Step 1:
  EN title: "Snap, speak, or type"
  EN desc: "Take a photo of your ingredients, tell the AI what you have, or simply type them in. Chef AI understands all three."
  RU title: "Сфотографируйте, скажите или напишите"
  RU desc: "Сделайте фото продуктов, скажите AI что у вас есть, или просто введите текстом. Chef AI понимает все три способа."
  UZ title: "Suratga oling, ayting yoki yozing"
  UZ desc: "Ingredientlarni suratga oling, AI ga ayting yoki matn kiriting. Chef AI uchala usulni ham tushunadi."
  Screenshot: Ingredient input screen

Step 2:
  EN title: "AI finds perfect recipes"
  EN desc: "Our AI analyzes your ingredients and instantly matches them with thousands of recipes, creating personalized suggestions just for you."
  RU title: "AI подбирает идеальные рецепты"
  RU desc: "AI анализирует ваши продукты и мгновенно находит подходящие рецепты из тысяч вариантов, создавая персональные рекомендации."
  UZ title: "AI mukammal retseptlarni topadi"
  UZ desc: "AI ingredientlaringizni tahlil qiladi va minglab retseptlar orasidan sizga mos variantlarni bir zumda topadi."
  Screenshot: Recipe results list

Step 3:
  EN title: "Cook with confidence"
  EN desc: "Follow step-by-step instructions crafted just for you. Every recipe is tailored to your available ingredients and preferences."
  RU title: "Готовьте с уверенностью"
  RU desc: "Следуйте пошаговым инструкциям, созданным специально для вас. Каждый рецепт адаптирован под ваши продукты и предпочтения."
  UZ title: "Ishonch bilan pishiring"
  UZ desc: "Siz uchun maxsus yaratilgan bosqichma-bosqich ko'rsatmalarga amal qiling. Har bir retsept ingredientlaringizga moslashtirilgan."
  Screenshot: Recipe detail with steps

Each step animates in on scroll: fade-up + slight slide from left (odd steps) or right (even steps), 500ms, staggered by 150ms.
```

---

## 5. FEATURES (BENTO GRID)

```
Build Section 5: Features as a Bento Grid.

Background: #FEF7ED. Padding: 96px vertical (desktop), 64px (mobile).

Section header (centered, margin-bottom 56px):
- Title: H2.
  EN: "What makes Chef AI special" / RU: "Чем Chef AI особенный" / UZ: "Chef AI nimasi bilan ajralib turadi"
- Subtitle: 18px, muted.
  EN: "Powerful features that make cooking effortless"
  RU: "Мощные функции, которые делают готовку лёгкой"
  UZ: "Pishirishni osonlashtiradigan kuchli funksiyalar"

BENTO GRID LAYOUT:

Desktop (lg+): 3-column grid, gap 16px.
- Row 1: Card 1 (spans 2 columns) | Card 2 (1 column)
- Row 2: Card 3 (1 column) | Card 4 (spans 2 columns)
- Row 3: Card 5 (1 column) | Card 6 (1 column) | (empty or card 5+6 span differently)

Tablet (md): 2-column grid, all cards 1 column.
Mobile: 1-column stack, full width.

Each card:
- Background: white (#FFFFFF). Border: 1px solid #F0EBE4. Border-radius: 16px. Padding: 28px.
- Hover: translateY(-4px) + shadow (0 8px 30px rgba(0,0,0,0.06)). Transition 300ms ease.
- Icon container: 48px circle with light tinted background. Icon 24px in center.
- Title: 20px, weight 600, color #1A1612, margin-top 16px.
- Description: 15px, weight 400, color #4A4540, line-height 1.6, margin-top 8px.

6 cards:

1. LARGE (2 cols) — Icon: Camera (Lucide), bg: #FEF3C7, icon color: #D97706
   EN: "Photo Recognition" / "Snap any ingredient — our AI identifies it instantly with 95% accuracy. Just point your camera and let Chef AI do the rest."
   RU: "Распознавание по фото" / "Сфотографируйте любой продукт — AI определит его мгновенно с точностью 95%. Просто наведите камеру."
   UZ: "Foto orqali aniqlash" / "Istalgan ingredientni suratga oling — AI uni 95% aniqlik bilan bir zumda aniqlaydi."

2. STANDARD (1 col) — Icon: Mic (Lucide), bg: #FFEDD5, icon color: #EA580C
   EN: "Voice Input" / "Just say what you have. Works in Russian, Uzbek, and English."
   RU: "Голосовой ввод" / "Просто скажите что есть. Работает на русском, узбекском и английском."
   UZ: "Ovozli kiritish" / "Nima borligini ayting. Rus, o'zbek va ingliz tillarida ishlaydi."

3. STANDARD (1 col) — Icon: Search (Lucide), bg: #FEF9C3, icon color: #CA8A04
   EN: "Smart Search" / "Type any ingredient and get instant recipe matches from our database."
   RU: "Умный поиск" / "Введите любой продукт и мгновенно получите подходящие рецепты."
   UZ: "Aqlli qidiruv" / "Istalgan ingredientni yozing va bazamizdan mos retseptlarni toping."

4. LARGE (2 cols) — Icon: Sparkles (Lucide), bg: #FFE4E6, icon color: #E11D48
   EN: "AI-Powered Recipes" / "Not just search — AI creates brand new recipes tailored to your exact ingredients and taste preferences."
   RU: "AI-рецепты" / "Не просто поиск — AI создаёт совершенно новые рецепты, адаптированные под ваши продукты и вкусовые предпочтения."
   UZ: "AI retseptlar" / "Oddiy qidiruv emas — AI ingredientlaringiz va ta'm afzalliklaringizga moslashtirilgan yangi retseptlar yaratadi."

5. STANDARD (1 col) — Icon: WifiOff (Lucide), bg: #DBEAFE, icon color: #2563EB
   EN: "Works Offline" / "Download recipes and cook anywhere — no internet needed."
   RU: "Работает офлайн" / "Сохраняйте рецепты и готовьте где угодно — без интернета."
   UZ: "Oflayn ishlaydi" / "Retseptlarni yuklab oling va istalgan joyda pishiring — internetsiz."

6. STANDARD (1 col) — Icon: Heart (Lucide), bg: #FCE7F3, icon color: #DB2777
   EN: "Diet Preferences" / "Vegan, halal, gluten-free — set your needs and AI adapts every recipe."
   RU: "Диетические предпочтения" / "Веган, халяль, без глютена — задайте потребности, и AI адаптирует каждый рецепт."
   UZ: "Dietik afzalliklar" / "Vegan, halol, glutensiz — ehtiyojlaringizni belgilang, AI har bir retseptni moslashtiradi."

Cards animate in staggered on scroll: fade-up, 100ms delay between each, 500ms duration.
```

---

## 6. TESTIMONIALS

```
Build Section 6: Testimonials.

Background: #FFFDF7. Padding: 96px vertical (desktop), 64px (mobile).

Section header (centered, margin-bottom 48px):
- Title: H2.
  EN: "Loved by home cooks" / RU: "Нас любят домашние повара" / UZ: "Uy oshpazlari sevgan ilova"
- Subtitle: 18px, muted.
  EN: "Join thousands of happy users"
  RU: "Присоединяйтесь к тысячам довольных пользователей"
  UZ: "Minglab mamnun foydalanuvchilarga qo'shiling"

3 testimonial cards:

Desktop (lg+): Horizontal row, 3 equal cards, gap 20px.
Tablet (md): 2 + 1 grid or horizontal scroll.
Mobile: Vertical stack, full width, gap 16px.

Each card:
- Background: white. Border: 1px solid #F0EBE4. Border-radius: 16px. Padding: 28px.
- Top-right corner: Large decorative quote mark " — font-size 60px, color rgba(245,197,24,0.15), position absolute, top 16px, right 20px. Font: serif.
- Stars row: 5 stars, each 16px, filled, color #F5C518. Margin-bottom 16px.
- Quote text: 15px, weight 400, color #4A4540, line-height 1.7, font-style italic. Margin-bottom 20px.
- Author name: 15px, weight 600, color #1A1612.
- Author location: 13px, weight 400, color #8A8480.

Testimonials change based on active language:

ENGLISH:
1. "I used to waste so much food. Now I just take a photo and Chef AI tells me exactly what to cook!" — Sarah, London
2. "The voice input is a game-changer. I just tell it what's in my fridge while my hands are busy." — Mike, New York
3. "Finally an app that actually understands my ingredients and gives me real recipes, not just links." — Priya, Dubai

RUSSIAN:
1. "Раньше продукты просто пропадали. Теперь фоткаю — и AI сразу говорит, что приготовить!" — Мария, Москва
2. "Голосовой ввод — это находка. Говорю что есть в холодильнике, пока руки заняты." — Алексей, Санкт-Петербург
3. "Наконец приложение, которое реально понимает мои продукты и даёт настоящие рецепты, а не ссылки." — Динара, Казань

UZBEK:
1. "Oldin mahsulotlar isrof bo'lardi. Endi suratga olaman — AI nima pishirishni aytadi!" — Nilufar, Toshkent
2. "Ovozli kiritish juda qulay. Qo'llarim band bo'lganda ham muzlatgichdagini aytaman." — Bobur, Samarqand
3. "Nihoyat ingredientlarimni tushunadigan va haqiqiy retseptlar beradigan ilova topildi!" — Dilnoza, Buxoro

Cards animate in staggered fade-up on scroll.
```

---

## 7. SCREENSHOTS GALLERY

```
Build Section 7: App Screenshots Gallery.

Background: #FEF7ED. Padding: 80px vertical (desktop), 56px (mobile).

Section header (centered, margin-bottom 48px):
- Title: H2.
  EN: "See Chef AI in action" / RU: "Посмотрите Chef AI в действии" / UZ: "Chef AI ni amalda ko'ring"

Gallery: Horizontal scrolling row of 5 phone mockups.

Desktop (lg+): All 5 phones visible, centered, evenly spaced within max-width 1100px. No scrolling needed.
Mobile/Tablet: Horizontal scroll with CSS scroll-snap-type: x mandatory. Overflow-x: auto. Hide scrollbar (-ms-overflow-style: none, scrollbar-width: none, ::-webkit-scrollbar display none).

Each phone mockup:
- Width: 200px (mobile) / 220px (desktop).
- Container: aspect-ratio 9/19.5 (iPhone proportions).
- Background: #F5F5F5 (placeholder gray if no image).
- Border-radius: 2rem (simulates phone corners).
- Border: 3px solid #1A1612 (phone bezel).
- Box-shadow: 0 8px 32px rgba(0,0,0,0.08).
- Inside: show app screenshot image (or placeholder rectangle with screen description text).
- Gap between phones: 20px.

5 screens to show:
1. Home / Ingredient input screen
2. Camera / Photo recognition view
3. Recipe results list
4. Recipe detail with step-by-step instructions
5. Generated recipe card

Below gallery: 5 small dot indicators, centered. Active dot: #E8930C (8px circle). Inactive: #E0D5C8 (6px circle). Only visible on mobile when scrolling.

Optional: very subtle parallax — each phone has a slight translateY offset creating a wave effect (0, -8px, 0, -8px, 0). Static, not animated.

Fade-in animation on scroll for the whole gallery.
```

---

## 8. FAQ

```
Build Section 8: FAQ.

Background: #FFFDF7. Padding: 96px vertical (desktop), 64px (mobile).

Section header (centered, margin-bottom 48px):
- Title: H2.
  EN: "Frequently Asked Questions" / RU: "Часто задаваемые вопросы" / UZ: "Ko'p so'raladigan savollar"
- Subtitle: 18px, muted.
  EN: "Everything you need to know"
  RU: "Всё, что нужно знать"
  UZ: "Bilishingiz kerak bo'lgan hamma narsa"

Accordion component: max-width 720px, centered. Using shadcn/ui Accordion.

Each item:
- Border-bottom: 1px solid #F0EBE4.
- Question (trigger): padding 20px 0, font 16px (mobile) / 17px (desktop), weight 600, color #1A1612. Flex row, justify-between. Right side: Lucide ChevronDown icon (20px, #8A8480), rotates 180° on open (transition 200ms).
- Answer (content): 15px, weight 400, color #4A4540, line-height 1.7, padding-bottom 20px. Smooth height animation 300ms ease.
- Only one item open at a time.

7 FAQ items (all trilingual):

Q1:
  EN: "Is Chef AI free to use?" / "Yes! Chef AI is completely free to download and use. We may introduce optional premium features in the future, but the core experience will always remain free."
  RU: "Chef AI бесплатный?" / "Да! Chef AI полностью бесплатен для скачивания и использования. В будущем могут появиться опциональные премиум-функции, но основной функционал навсегда останется бесплатным."
  UZ: "Chef AI bepulmi?" / "Ha! Chef AI ni yuklab olish va foydalanish mutlaqo bepul. Kelajakda ixtiyoriy premium funksiyalar paydo bo'lishi mumkin, lekin asosiy imkoniyatlar doimo bepul bo'lib qoladi."

Q2:
  EN: "How does photo recognition work?" / "Simply point your camera at your ingredients. Our AI model identifies each item with over 95% accuracy and immediately suggests recipes you can make."
  RU: "Как работает распознавание по фото?" / "Просто наведите камеру на продукты. Наша AI-модель определяет каждый продукт с точностью более 95% и сразу предлагает рецепты."
  UZ: "Foto orqali aniqlash qanday ishlaydi?" / "Kamerangizni ingredientlarga yo'naltiring. AI modelimiz har bir mahsulotni 95% dan yuqori aniqlik bilan aniqlaydi va darhol retseptlar taklif qiladi."

Q3:
  EN: "What languages are supported?" / "Chef AI works in Russian, Uzbek, and English — including voice input in all three languages. We're planning to add more languages soon."
  RU: "Какие языки поддерживаются?" / "Chef AI работает на русском, узбекском и английском — включая голосовой ввод на всех трёх языках. Мы планируем добавить больше языков."
  UZ: "Qaysi tillar qo'llab-quvvatlanadi?" / "Chef AI rus, o'zbek va ingliz tillarida ishlaydi — barcha uch tilda ovozli kiritish ham mavjud. Tez orada ko'proq tillar qo'shishni rejalashtirmoqdamiz."

Q4:
  EN: "Can I use it without internet?" / "Yes! Once you've saved recipes, you can access them offline. Photo recognition and AI recipe generation require an internet connection."
  RU: "Можно использовать без интернета?" / "Да! Сохранённые рецепты доступны офлайн. Распознавание фото и генерация AI-рецептов требуют подключения к интернету."
  UZ: "Internetsiz foydalanish mumkinmi?" / "Ha! Saqlangan retseptlarga oflayn kirish mumkin. Foto aniqlash va AI retsept yaratish uchun internet kerak."

Q5:
  EN: "What cuisines does Chef AI cover?" / "We cover cuisines from around the world — Central Asian, European, Asian, Middle Eastern, and more. Our AI can also create unique fusion recipes combining different culinary traditions."
  RU: "Какие кухни поддерживает Chef AI?" / "Мы поддерживаем кухни со всего мира — центральноазиатскую, европейскую, азиатскую, ближневосточную и другие. AI также создаёт уникальные фьюжн-рецепты."
  UZ: "Chef AI qaysi oshxonalarni qo'llab-quvvatlaydi?" / "Butun dunyo oshxonalarini qo'llab-quvvatlaymiz — Markaziy Osiyo, Yevropa, Osiyo, Yaqin Sharq va boshqalar. AI turli an'analarni birlashtirgan noyob retseptlar ham yaratadi."

Q6:
  EN: "Is my data private?" / "Absolutely. We don't store your photos or personal data on our servers. All processing is done securely, and we never share your information with third parties."
  RU: "Мои данные в безопасности?" / "Безусловно. Мы не храним ваши фото или личные данные на серверах. Вся обработка безопасна, и мы никогда не передаём информацию третьим лицам."
  UZ: "Ma'lumotlarim xavfsizmi?" / "Albatta. Biz suratlaringiz yoki shaxsiy ma'lumotlaringizni serverlarimizda saqlamaymiz. Barcha jarayonlar xavfsiz va ma'lumotlaringiz uchinchi tomonlarga berilmaydi."

Q7:
  EN: "How accurate is the AI?" / "Our photo recognition achieves 95%+ accuracy on common ingredients. Recipe suggestions improve continuously as our AI learns from user feedback and new culinary data."
  RU: "Насколько точен AI?" / "Распознавание фото достигает точности 95%+ на распространённых продуктах. Рекомендации рецептов постоянно улучшаются благодаря обратной связи пользователей."
  UZ: "AI qanchalik aniq?" / "Foto aniqlash keng tarqalgan ingredientlarda 95% dan yuqori aniqlikka erishadi. Retsept takliflari foydalanuvchilar fikrlari asosida doimiy ravishda yaxshilanadi."

FAQ items animate in staggered on scroll (50ms delay between each).
```

---

## 9. FINAL CTA

```
Build Section 9: Final CTA.

Background: A static, subtle warm gradient — linear-gradient(135deg, #FFFDF7 0%, #FEF3C7 50%, #FDE68A 100%) at 40% opacity over #FFFDF7 base. Very soft, barely visible warmth. NOT animated. No blobs. Clean and calm.

Padding: 96px vertical (desktop), 72px (mobile).

Content: All centered, max-width 600px.

1. Headline: 36px (mobile) / 44px (desktop), weight 800, color #1A1612, line-height 1.12.
   EN: "Start cooking smarter today"
   RU: "Начните готовить умнее уже сегодня"
   UZ: "Bugundan aqlliroq pishirishni boshlang"

2. Subtitle (margin-top 16px): 18px, weight 400, color #8A8480.
   EN: "Free to download. No credit card needed."
   RU: "Бесплатное скачивание. Без привязки карты."
   UZ: "Bepul yuklab olish. Bank kartasi kerak emas."

3. Store buttons (margin-top 32px): Same as hero — App Store + Google Play, side by side, centered. Same exact styling.

4. Trust badges (margin-top 24px): Flex row, gap 12px, centered.
   3 small pills: each has a Lucide Check icon (14px, #16A34A) + text.
   Pill styling: border 1px solid #E0D5C8, rounded-full, padding 6px 14px, 13px text, color #8A8480.
   EN: "Free" / "No Ads" / "Works Offline"
   RU: "Бесплатно" / "Без рекламы" / "Офлайн"
   UZ: "Bepul" / "Reklamasiz" / "Oflayn"

Fade-up + scale animation on scroll (scale 0.97→1, opacity 0→1, 600ms).
```

---

## 10. FOOTER

```
Build Section 10: Footer.

Background: #1A1612. Padding: 64px top, 32px bottom. Color: white.

Max-width: 1200px centered.

TOP ROW (desktop: flex, justify-between, items-start. Mobile: stacked, centered, gap 40px):

LEFT block:
- Logo: "Chef AI" in Pacifico, 24px, color white. "AI" in #F5C518.
- Tagline below (margin-top 8px): 14px, color #8A8480.
  EN: "Your AI-powered personal cook"
  RU: "Ваш персональный AI-повар"
  UZ: "Sizning AI oshpazingiz"

CENTER block (desktop only, hidden on mobile):
- Column of links, gap 12px. Each link: 14px, weight 400, color #8A8480, hover: white, transition 200ms.
  EN: Privacy Policy / Terms of Service / Support / Contact
  RU: Политика конфиденциальности / Условия использования / Поддержка / Контакты
  UZ: Maxfiylik siyosati / Foydalanish shartlari / Yordam / Aloqa
  All links href="#" (placeholder).

RIGHT block:
- Store buttons: Smaller variant — width 130px each, height 40px. Same black design as hero but compact. Flex row, gap 10px.
- Social icon below (margin-top 16px): Instagram icon (Lucide Instagram, 20px, color #8A8480, hover white). Links to https://www.instagram.com/chefai_uz/

MOBILE LAYOUT:
- Logo centered
- Links in 2x2 grid, centered
- Store buttons stacked, full width (max-width 280px)
- Social icon centered
- All text centered

DIVIDER: 1px solid #2A2520, margin-top 40px desktop / 32px mobile.

BOTTOM ROW (margin-top 20px, flex, justify-between on desktop, stacked centered on mobile):
- Left: "© 2026 Chef AI. All rights reserved." / "© 2026 Chef AI. Все права защищены." / "© 2026 Chef AI. Barcha huquqlar himoyalangan." — 13px, color #6A6460.
- Right: Language switcher — small inline text links: "RU | UZ | EN", 13px, color #6A6460. Active one: color white. Click changes language.
```

---

## Tips for Best Results in Lovable

1. **Вставляй Master Prompt первым** — он задаёт дизайн-систему для всего проекта.
2. **После каждой секции** проверяй в превью — подправляй промптом если что-то не так.
3. **Не вставляй все секции разом** — Lovable лучше работает по одной секции за раз.
4. **Если что-то выглядит не так**, пиши конкретно: "Change the background to #FEF7ED" вместо "I don't like the colors".
5. **Скриншоты приложения** — загрузи свои реальные скриншоты из папки `src/assets/screenshots/` после сборки каркаса. Замени placeholder'ы.
6. **Адаптивность** — после сборки всех секций, протестируй на мобиле и попроси Lovable: "Fix responsive layout for mobile 375px width for all sections".
