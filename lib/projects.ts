export type ProjectStatus = "live" | "mvp" | "paused" | "plan";

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
};

export const PROJECTS: Project[] = [
  {
    slug: "pickappme",
    name: "PickAppMe",
    tagline: "Знакомства в кальянных, барах и лаунжах",
    role: "Founder",
    status: "live",
    url: "https://pickappme.ru",
    description:
      "Дейтинг-приложение для конкретного места — сидишь в баре, видишь кто ещё сейчас там, общаешься с ними. PWA, потом App Store. Работаю с premium HoReCa: кальянные, лаунжи со средним чеком 2 500+ ₽.",
    stack: ["PWA", "Supabase", "ЮKassa", "TelegramBot"],
    highlights: [
      "Верифицированный кабинет ЮKassa (сплит-платежи)",
      "Тестовый режим для проверяющих",
      "Финансовые страницы для регуляторов",
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
