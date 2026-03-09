export const translations = {
  ru: {
    nav: {
      download: "Скачать",
    },
    hero: {
      title: "AI Шеф — ваш персональный повар",
      subtitle:
        "Сфотографируйте продукты, скажите голосом или напишите — и AI подберёт лучшие рецепты за секунды",
      downloadApp: "Скачать приложение",
    },
    features: {
      title: "Возможности",
      photo: {
        title: "Распознавание по фото",
        description:
          "Сфотографируйте продукты — AI определит каждый и подберёт рецепты",
      },
      voice: {
        title: "Голосовой ввод",
        description:
          "Просто скажите, что у вас есть — AI поймёт и найдёт подходящие блюда",
      },
      search: {
        title: "Умный поиск",
        description:
          "Мгновенный подбор из тысяч рецептов по вашим ингредиентам",
      },
      recipes: {
        title: "Уникальные рецепты",
        description:
          "AI создаст персональный рецепт специально для вас и ваших продуктов",
      },
    },
    howItWorks: {
      title: "Как это работает",
    },
    cta: {
      title: "Скачайте AI Шеф прямо сейчас",
      subtitle: "Бесплатно. Ваш персональный повар в кармане.",
    },
    footer: {
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      support: "Поддержка",
      rights: "Все права защищены",
    },
  },
  uz: {
    nav: {
      download: "Yuklab olish",
    },
    hero: {
      title: "AI Chef — shaxsiy oshpazingiz",
      subtitle:
        "Mahsulotlarni suratga oling, ovoz bilan ayting yoki yozing — AI bir necha soniyada eng yaxshi retseptlarni topadi",
      downloadApp: "Ilovani yuklab olish",
    },
    features: {
      title: "Imkoniyatlar",
      photo: {
        title: "Foto orqali aniqlash",
        description:
          "Mahsulotlarni suratga oling — AI har birini aniqlab, retseptlarni tanlaydi",
      },
      voice: {
        title: "Ovozli kiritish",
        description:
          "Nima borligini ayting — AI tushunadi va mos taomlarni topadi",
      },
      search: {
        title: "Aqlli qidiruv",
        description:
          "Ingredientlaringiz bo'yicha minglab retseptlardan bir zumda tanlash",
      },
      recipes: {
        title: "Noyob retseptlar",
        description:
          "AI siz va mahsulotlaringiz uchun maxsus retsept yaratadi",
      },
    },
    howItWorks: {
      title: "Qanday ishlaydi",
    },
    cta: {
      title: "AI Chefni hoziroq yuklab oling",
      subtitle: "Bepul. Shaxsiy oshpazingiz cho'ntagingizda.",
    },
    footer: {
      privacy: "Maxfiylik siyosati",
      terms: "Foydalanish shartlari",
      support: "Qo'llab-quvvatlash",
      rights: "Barcha huquqlar himoyalangan",
    },
  },
  en: {
    nav: {
      download: "Download",
    },
    hero: {
      title: "AI Chef — Your Personal Cook",
      subtitle:
        "Snap a photo of your ingredients, speak, or type — AI finds the best recipes in seconds",
      downloadApp: "Download the app",
    },
    features: {
      title: "Features",
      photo: {
        title: "Photo Recognition",
        description:
          "Take a photo of your ingredients — AI identifies each one and finds recipes",
      },
      voice: {
        title: "Voice Input",
        description:
          "Just say what you have — AI understands and finds matching dishes",
      },
      search: {
        title: "Smart Search",
        description:
          "Instant matching from thousands of recipes based on your ingredients",
      },
      recipes: {
        title: "Unique Recipes",
        description:
          "AI creates a personalized recipe just for you and your ingredients",
      },
    },
    howItWorks: {
      title: "How It Works",
    },
    cta: {
      title: "Download AI Chef Now",
      subtitle: "Free. Your personal cook in your pocket.",
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support",
      rights: "All rights reserved",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type Translations = (typeof translations)[Locale];
