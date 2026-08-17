export type ProjectStatus = "live" | "mvp" | "paused" | "plan";

export type ProjectSection = {
  title: string;
  intro?: string;
  bullets?: string[];
  paragraphs?: string[];
};

export type ProjectLink = {
  label: string;
  url: string;
  note?: string;
  kind?: "primary" | "secondary";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  status: ProjectStatus;
  url?: string;
  description: string;
  stack: string[];
  shots?: string[];
  highlights?: string[];
  sections?: ProjectSection[];
  links?: ProjectLink[];
  install?: {
    ios?: string[];
    android?: string[];
    note?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "pickappme",
    name: "PickAppMe",
    tagline: "Знакомства в кальянных, барах и лаунжах — новый формат HoReCa",
    role: "Founder",
    status: "live",
    url: "https://pickappme.ru",
    description:
      "PickAppMe — это дейтинг с привязкой к конкретному заведению. Ты пришёл в кальянную или бар — видишь только тех, кто прямо сейчас тоже здесь, за соседним столом. Никаких свайпов по всему городу и «поехали ко мне через пробки». Первое сообщение → «Приложи руку к столу №4» — и всё, вы уже пересеклись.",
    stack: ["PWA", "React", "Supabase-совместимый бэкенд", "ЮKassa", "Telegram Bot", "Node.js", "Python (finance)"],
    sections: [
      {
        title: "Что уже сделано",
        intro: "MVP работает в проде почти год. Ниже — крупные вехи, всё это уже в бою и через это прошли реальные клиенты.",
        bullets: [
          "Верифицированный кабинет ЮKassa на ИП Корзун — сплит-платежи, СБП, T-Pay, банковские карты",
          "4 отдельных SPA-роута: гость (/), хостес (/hostess), владелец (/owner), панель работника (/work)",
          "Telegram-бот с двухфакторной регистрацией и уведомлениями",
          "Служба поддержки прямо в приложении (openSupport в TG in-app-browser)",
          "Юридический пакет для регуляторов: оферта, возвраты, приватность, контакты",
          "Финансовые страницы /finance/ с версиями инвестиционной модели через собственный Python-API",
          "Первые пилотные заведения в Москве, категория premium HoReCa со средним чеком 2 500+ ₽",
          "Кабинет проверяющих ЮKassa с тестовым логином — прошли модерацию",
        ],
      },
      {
        title: "Куда движемся",
        intro: "Приложение временно на паузе — доработка продукта и переход в мобильные сторы. Порядок работ:",
        bullets: [
          "Capacitor-обёртка над существующим Vite-билдом → IPA/APK за пару дней без переписывания",
          "TestFlight-бета для клиентов и модератора ЮKassa",
          "Публикация в App Store и Google Play (в качестве сервиса оффлайн-мероприятий, а не цифрового контента → без комиссии Apple 30%)",
          "Push-уведомления через APNs + собственный send-push endpoint",
          "Расширение по географии Москвы: ЮАО, ЦАО и «пояс» вокруг МЦК",
          "Возможный SDK-виджет для сайтов самих заведений («пусто у нас в среду — забронируй столик с кем-то новым»)",
          "Через 6-12 мес — регионы (Санкт-Петербург, Казань, Екатеринбург)",
        ],
      },
      {
        title: "Целевая аудитория заведений",
        intro: "Не все бары одинаковые. Модель работает там, где посетитель проводит 1.5-3 часа и готов платить за атмосферу.",
        bullets: [
          "Premium кальянные — стартовая точка, средний чек 2 500-5 000 ₽",
          "Лаунж-бары с креслами и мягкими зонами",
          "Ресторан-бары с террасой и живой музыкой",
          "Boutique-отели с лобби-барами",
        ],
      },
      {
        title: "Про паузу",
        paragraphs: [
          "Сайт временно закрыт паролем — идёт этап переработки MVP и подготовки к сторам. Если хочешь посмотреть работу приложения изнутри — напиши мне, дам временный доступ и проведу демо.",
        ],
      },
    ],
    install: {
      ios: [
        "Открой pickappme.ru в Safari",
        "Тапни «Поделиться» (квадратик со стрелкой)",
        "Свайп вниз → «Добавить на экран „Домой“»",
        "Дай имя «PickAppMe» → «Добавить»",
        "Иконка появится на главном экране iPhone",
      ],
      android: [
        "Открой pickappme.ru в Chrome",
        "Меню (⋮) справа сверху → «Добавить на главный экран»",
        "Подтверди установку",
        "Иконка появится в меню приложений",
      ],
      note: "Работает как обычное приложение, полноэкранное, без адресной строки браузера. Push-уведомления доступны на iOS 16.4+ и Android.",
    },
    links: [
      {
        label: "Приложение",
        url: "https://pickappme.ru",
        note: "сейчас на паузе — доступ по логину/паролю",
        kind: "primary",
      },
      {
        label: "Калькулятор инвест-модели",
        url: "https://pickappme.ru/finance/",
        note: "версионированная финансовая модель для инвесторов",
      },
      {
        label: "Питч-презентация (PDF)",
        url: "/pickappme-deck.pdf",
        note: "8.9 МБ · продуктовая часть + рынок + юнит-экономика",
      },
    ],
  },
  {
    slug: "posporty",
    name: "Posporty",
    tagline: "Маркетплейс мест на футбольных матчах",
    role: "Founder",
    status: "mvp",
    url: "https://posporty.ru",
    description:
      "Организатор публикует матч в открытую ленту, игроки записываются и оплачивают своё место картой. Мы решаем проблему пустых слотов на футбольных полях и одиноких игроков без команды.",
    stack: ["React", "Vite", "Supabase", "ЮKassa"],
    highlights: [
      "15 экранов приложения, 9 backend-функций",
      "Комиссия 10%, юнит-экономика проверена в презе",
      "На модерации в ЮKassa, готовы к запуску пилота",
    ],
  },
  {
    slug: "voice",
    name: "Voice",
    tagline: "Свой голосовой архив с транскрипцией",
    role: "Founder",
    status: "mvp",
    description:
      "Личное приложение для записи разговоров с последующей транскрипцией и разделением по говорящим. Альтернатива Plaud и Limitless — вся аудио- и текстовая база лежит у меня, а не у сервиса.",
    stack: ["Next.js", "Deepgram Nova-3", "Cloudflare Tunnel", "PWA"],
    highlights: [
      "Работает через петличку Hollyland Lark A1",
      "Транскрипция за 2-4 секунды на матч",
      "Раздельные каналы для говорящих",
    ],
  },
  {
    slug: "allsew",
    name: "AllSew Studio",
    tagline: "AI-генератор карточек для швейных выкроек",
    role: "Founder",
    status: "mvp",
    url: "https://allsew-studio.vercel.app",
    description:
      "Швейному бизнесу нужны красивые карточки товара — фото на модели, инструкции, размеры. AllSew делает это одним промптом через fal.ai — модели, стеки моделей, инфографика.",
    stack: ["Next.js", "fal.ai", "flux-pro", "Tailwind"],
  },
  {
    slug: "korzun-canvas",
    name: "Корзун на холстах",
    tagline: "Бренд картин на маркетплейсах",
    role: "Owner",
    status: "live",
    description:
      "AI генерирует сюжеты — я подписываю холст своей фамилией «Корзун» и выставляю на Ozon. В инфографике карточек — я сам как ролевая модель бренда. План: WB, ЯндексМаркет, собственный сайт-каталог.",
    stack: ["Ozon", "AI-generation", "Print-on-demand"],
  },
  {
    slug: "fight-it",
    name: "fight-it — Давай выйдем?",
    tagline: "PWA спарринг-клуб — «BlaBlaCar для ринга»",
    role: "Founder",
    status: "paused",
    description:
      "Найти соперника на ринг — сложнее чем найти партнёра для секса. Fight-it делает это одним тапом — вызов, приглашение, площадка. Underground эстетика, магнитная петличка.",
    stack: ["Next.js", "Tailwind", "PWA"],
  },
  {
    slug: "matchmatch",
    name: "МячМетч",
    tagline: "Побочный спорт-сервис",
    role: "Owner",
    status: "live",
    url: "https://matchmatch-web.vercel.app",
    description: "Спорт-сервис на Vercel, работает как быстрый проект под конкретную задачу.",
    stack: ["Web", "Vercel"],
  },
  {
    slug: "ivanchick",
    name: "IvanChick",
    tagline: "Теннис, корты и модель монетизации",
    role: "Advisor",
    status: "mvp",
    description:
      "Теннисные корты — сложный бизнес с высокой стоимостью аренды и переменной загрузкой. Помогаю посчитать unit-экономику и первый лендинг.",
    stack: ["Excel-modeling", "Web"],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
