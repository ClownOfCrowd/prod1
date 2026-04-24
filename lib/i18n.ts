import { ProjectCategory } from "@/lib/types";

export type Language = "en" | "ru" | "es";

export const languageOptions: Array<{ code: Language; label: string }> = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "es", label: "ES" },
];

export interface I18nDictionary {
  nav: {
    home: string;
    projects: string;
    services: string;
    about: string;
    contact: string;
    menu: string;
    openMenuAria: string;
    primaryNavAria: string;
    mobileNavAria: string;
  };
  languageToggle: {
    ariaLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  home: {
    featured: {
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
    };
    performance: {
      eyebrow: string;
      title: string;
      description: string;
    };
    process: {
      eyebrow: string;
      title: string;
    };
    testimonials: {
      eyebrow: string;
      title: string;
    };
  };
  projectFilters: {
    all: string;
    residential: string;
    commercial: string;
    renovation: string;
  };
  categories: Record<ProjectCategory, string>;
  projectsPage: {
    eyebrow: string;
    title: string;
    description: string;
    loadingDescription: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    description: string;
    methodEyebrow: string;
    methodTitle: string;
    methodDescription: string;
    services: Array<{ title: string; description: string; points: string[] }>;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    description: string;
    positioningTitle: string;
    p1: string;
    p2: string;
    valuesTitle: string;
    values: string[];
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    officeTitle: string;
    country: string;
  };
  contactForm: {
    formAria: string;
    fullName: string;
    businessEmail: string;
    company: string;
    projectType: string;
    projectTypes: {
      villa: string;
      commercial: string;
      renovation: string;
    };
    projectBrief: string;
    sendInquiry: string;
    success: string;
  };
  footer: {
    description: string;
    office: string;
  };
  cookie: {
    text: string;
    accept: string;
  };
  timeline: Array<{ title: string; description: string }>;
  testimonials: Array<{ quote: string; author: string; role: string }>;
  stats: Array<{ label: string; value: number; suffix?: string }>;
  projectDetail: {
    challenge: string;
    solution: string;
    scope: string;
    projectData: string;
    client: string;
    year: string;
    builtArea: string;
    outcomes: string;
  };
  projectNotFound: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
}

export const dictionaries: Record<Language, I18nDictionary> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      about: "About",
      contact: "Contact",
      menu: "Menu",
      openMenuAria: "Open navigation menu",
      primaryNavAria: "Primary navigation",
      mobileNavAria: "Mobile navigation",
    },
    languageToggle: {
      ariaLabel: "Language switcher",
    },
    hero: {
      eyebrow: "Design-Led Construction Across Europe",
      title: "Building architecture that stays relevant for decades.",
      description:
        "Arcstone Construct delivers premium villas, commercial buildings, and complex renovations with disciplined project governance and craftsmanship-first execution.",
      primaryCta: "View Projects",
      secondaryCta: "Discuss Your Project",
    },
    home: {
      featured: {
        eyebrow: "Featured Projects",
        title: "Selected work delivered with architectural rigor",
        description:
          "Recent projects demonstrate our focus on proportion, material quality, and execution discipline across different scales and typologies.",
        cta: "Explore all projects",
      },
      performance: {
        eyebrow: "Performance",
        title: "Measured outcomes, not marketing claims",
        description:
          "We track delivery quality with tangible indicators spanning execution reliability, safety, and client retention.",
      },
      process: {
        eyebrow: "How We Work",
        title: "A process built to reduce risk and preserve design intent",
      },
      testimonials: {
        eyebrow: "Client Perspective",
        title: "Long-term partnerships built on trust",
      },
    },
    projectFilters: {
      all: "All",
      residential: "Residential",
      commercial: "Commercial",
      renovation: "Renovation",
    },
    categories: {
      residential: "Residential Villas",
      commercial: "Commercial Buildings",
      renovation: "Architectural Renovation",
    },
    projectsPage: {
      eyebrow: "Selected Portfolio",
      title: "Built work that balances design ambition and delivery certainty.",
      description:
        "A selection of residential, commercial, and renovation projects delivered through integrated planning, technical precision, and long-term value thinking.",
      loadingDescription: "Preparing project overview.",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Integrated construction services for high-value architecture.",
      description:
        "From first feasibility studies to handover and aftercare, we provide a single accountable framework for quality, cost, and schedule control.",
      methodEyebrow: "Method",
      methodTitle: "A transparent process from strategy to execution",
      methodDescription:
        "Each phase has measurable deliverables, clear ownership, and coordinated communication between all stakeholders.",
      services: [
        {
          title: "Residential Villas",
          description:
            "Private residences crafted with architectural precision, discreet engineering, and bespoke material execution.",
          points: [
            "Site-sensitive concept and feasibility",
            "Premium envelope and interior detailing",
            "End-to-end construction management",
          ],
        },
        {
          title: "Commercial Buildings",
          description:
            "High-performance office and mixed-use assets delivered with schedule certainty and investor-grade quality.",
          points: [
            "Design-build coordination",
            "Cost and risk control across phases",
            "Tenant-ready fit-out delivery",
          ],
        },
        {
          title: "Architectural Renovation",
          description:
            "Careful transformation of existing architecture, combining heritage respect with contemporary performance.",
          points: [
            "Conservation-informed interventions",
            "Structural upgrades and systems modernization",
            "Adaptive reuse planning",
          ],
        },
      ],
    },
    aboutPage: {
      eyebrow: "About",
      title: "A construction partner trusted for precision, discipline, and architectural sensitivity.",
      description:
        "Arcstone Construct is a European team of engineers, site leaders, and project strategists committed to delivering long-term value through rigorous execution.",
      positioningTitle: "Our Positioning",
      p1: "We focus on projects where architectural intent and construction discipline must operate at the same level. Our teams are structured to reduce decision latency, manage technical risk early, and protect design quality through every stage of delivery.",
      p2: "Over nearly two decades, we have worked with private clients, institutional investors, and leading architectural studios across Belgium, Germany, Switzerland, France, and Italy.",
      valuesTitle: "Values in Practice",
      values: [
        "Clear governance and weekly reporting cadence",
        "Engineering decisions aligned with lifecycle value",
        "Craftsmanship benchmarks documented before execution",
        "Safety and quality culture shared by every trade partner",
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let us review your project brief with clarity and speed.",
      description:
        "Share your objectives, timeline, and location. Our team will provide a first strategic response and proposed next steps.",
      officeTitle: "Brussels Headquarters",
      country: "Belgium",
    },
    contactForm: {
      formAria: "Contact Arcstone Construct",
      fullName: "Full name",
      businessEmail: "Business email",
      company: "Company",
      projectType: "Project type",
      projectTypes: {
        villa: "Residential Villa",
        commercial: "Commercial Building",
        renovation: "Architectural Renovation",
      },
      projectBrief: "Project brief",
      sendInquiry: "Send inquiry",
      success: "Thank you. Our team will respond within one business day.",
    },
    footer: {
      description:
        "Premium construction partner for architecture-led villas, commercial assets, and sensitive renovations across Europe.",
      office: "Office",
    },
    cookie: {
      text: "We use essential cookies to keep this site secure and to understand anonymous traffic patterns. No marketing trackers are used.",
      accept: "Accept cookies",
    },
    timeline: [
      {
        title: "Discovery & Brief",
        description:
          "We define priorities, budget boundaries, and success criteria with complete transparency from day one.",
      },
      {
        title: "Design Integration",
        description:
          "Architectural, structural, and technical disciplines are aligned into one constructible roadmap.",
      },
      {
        title: "Execution Planning",
        description:
          "Procurement, sequencing, and quality checkpoints are fixed before mobilization to reduce uncertainty.",
      },
      {
        title: "Construction Delivery",
        description:
          "Our site teams deliver with precision, weekly reporting, and strict safety and craftsmanship standards.",
      },
      {
        title: "Handover & Aftercare",
        description:
          "Commissioning, documentation, and post-completion support ensure long-term operational confidence.",
      },
    ],
    testimonials: [
      {
        quote:
          "Their team translated complex design intentions into construction reality with unusual rigor. The result is timeless and exceptionally well executed.",
        author: "Elena Varga",
        role: "Principal Architect, Varga Atelier",
      },
      {
        quote:
          "What stood out was reliability: transparent reporting, disciplined site management, and zero compromise on detail quality.",
        author: "Marcus Feld",
        role: "Asset Director, Aster Capital Partners",
      },
      {
        quote:
          "They approached renovation with both technical intelligence and respect for the building's original character.",
        author: "Claire Mertens",
        role: "Program Lead, City Cultural Council",
      },
    ],
    stats: [
      { label: "Projects Delivered", value: 74 },
      { label: "Years in Operation", value: 19 },
      { label: "Average Client Return", value: 67, suffix: "%" },
      { label: "Safety Score", value: 99, suffix: ".4" },
    ],
    projectDetail: {
      challenge: "Challenge",
      solution: "Solution",
      scope: "Scope of Work",
      projectData: "Project Data",
      client: "Client",
      year: "Year",
      builtArea: "Built area",
      outcomes: "Key Outcomes",
    },
    projectNotFound: {
      eyebrow: "Project not found",
      title: "This project page is unavailable.",
      description: "The project may have been archived or the link is outdated.",
      cta: "Return to projects",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      projects: "Проекты",
      services: "Услуги",
      about: "О компании",
      contact: "Контакты",
      menu: "Меню",
      openMenuAria: "Открыть меню навигации",
      primaryNavAria: "Основная навигация",
      mobileNavAria: "Мобильная навигация",
    },
    languageToggle: {
      ariaLabel: "Переключение языка",
    },
    hero: {
      eyebrow: "Архитектурное строительство по всей Европе",
      title: "Строим архитектуру, актуальную десятилетиями.",
      description:
        "Arcstone Construct реализует премиальные виллы, коммерческие здания и сложные реновации с дисциплиной управления и вниманием к деталям.",
      primaryCta: "Смотреть проекты",
      secondaryCta: "Обсудить проект",
    },
    home: {
      featured: {
        eyebrow: "Избранные проекты",
        title: "Реализованные объекты с архитектурной точностью",
        description:
          "Недавние кейсы показывают наш подход к пропорциям, материалам и дисциплине исполнения в разных масштабах и типологиях.",
        cta: "Все проекты",
      },
      performance: {
        eyebrow: "Показатели",
        title: "Подтвержденные результаты, а не маркетинг",
        description:
          "Мы измеряем качество реализации по конкретным метрикам: надежность сроков, безопасность и возврат клиентов.",
      },
      process: {
        eyebrow: "Как мы работаем",
        title: "Процесс, который снижает риски и сохраняет замысел",
      },
      testimonials: {
        eyebrow: "Мнение клиентов",
        title: "Долгосрочные партнерства на доверии",
      },
    },
    projectFilters: {
      all: "Все",
      residential: "Жилые",
      commercial: "Коммерческие",
      renovation: "Реновация",
    },
    categories: {
      residential: "Жилые виллы",
      commercial: "Коммерческие здания",
      renovation: "Архитектурная реновация",
    },
    projectsPage: {
      eyebrow: "Портфолио",
      title: "Объекты, где амбиция архитектуры сочетается с управляемой реализацией.",
      description:
        "Подборка жилых, коммерческих и реновационных проектов, выполненных с точным планированием и инженерной дисциплиной.",
      loadingDescription: "Подготавливаем каталог проектов.",
    },
    servicesPage: {
      eyebrow: "Услуги",
      title: "Комплексные строительные услуги для архитектурных проектов высокого уровня.",
      description:
        "От первичного технико-экономического анализа до передачи объекта и постподдержки мы ведем проект в единой системе ответственности.",
      methodEyebrow: "Метод",
      methodTitle: "Прозрачный процесс от стратегии до реализации",
      methodDescription:
        "Каждый этап имеет измеримые результаты, понятные зоны ответственности и синхронизированную коммуникацию участников.",
      services: [
        {
          title: "Жилые виллы",
          description:
            "Частные резиденции с архитектурной точностью, аккуратной инженерией и индивидуальной проработкой материалов.",
          points: [
            "Концепция и оценка с учетом участка",
            "Премиальная оболочка и интерьерные узлы",
            "Полное управление строительным циклом",
          ],
        },
        {
          title: "Коммерческие здания",
          description:
            "Офисные и mixed-use объекты высокого класса с прогнозируемыми сроками и инвестиционной надежностью.",
          points: [
            "Координация design-build",
            "Контроль стоимости и рисков по фазам",
            "Готовность помещений под арендатора",
          ],
        },
        {
          title: "Архитектурная реновация",
          description:
            "Деликатная трансформация существующих зданий с уважением к наследию и современными стандартами.",
          points: [
            "Интервенции на основе анализа наследия",
            "Усиление конструкций и модернизация систем",
            "Сценарии адаптивного переиспользования",
          ],
        },
      ],
    },
    aboutPage: {
      eyebrow: "О компании",
      title: "Строительный партнер, которому доверяют за точность, дисциплину и архитектурную чувствительность.",
      description:
        "Arcstone Construct - европейская команда инженеров, руководителей площадок и проектных стратегов, ориентированная на долгосрочную ценность.",
      positioningTitle: "Наша позиция",
      p1: "Мы работаем там, где архитектурный замысел и строительная дисциплина должны находиться на одном уровне. Наша структура ускоряет принятие решений, снижает технические риски и защищает качество реализации на каждом этапе.",
      p2: "Почти за два десятилетия мы реализовали проекты для частных клиентов, институциональных инвесторов и ведущих архитектурных бюро Бельгии, Германии, Швейцарии, Франции и Италии.",
      valuesTitle: "Ценности в работе",
      values: [
        "Прозрачное управление и регулярная отчетность",
        "Инженерные решения с учетом жизненного цикла",
        "Стандарты качества, зафиксированные до старта работ",
        "Культура безопасности и качества у всех подрядчиков",
      ],
    },
    contactPage: {
      eyebrow: "Контакты",
      title: "Оценим ваш проект быстро и предметно.",
      description:
        "Опишите задачи, сроки и локацию. Наша команда подготовит первичный ответ со следующими шагами.",
      officeTitle: "Штаб-квартира в Брюсселе",
      country: "Бельгия",
    },
    contactForm: {
      formAria: "Форма связи с Arcstone Construct",
      fullName: "Имя и фамилия",
      businessEmail: "Рабочий email",
      company: "Компания",
      projectType: "Тип проекта",
      projectTypes: {
        villa: "Жилая вилла",
        commercial: "Коммерческое здание",
        renovation: "Архитектурная реновация",
      },
      projectBrief: "Описание проекта",
      sendInquiry: "Отправить запрос",
      success: "Спасибо. Мы свяжемся с вами в течение одного рабочего дня.",
    },
    footer: {
      description:
        "Премиальный строительный партнер для архитектурных вилл, коммерческих объектов и деликатной реновации по всей Европе.",
      office: "Офис",
    },
    cookie: {
      text: "Мы используем только необходимые cookies для безопасности сайта и анонимной аналитики посещаемости. Маркетинговые трекеры не применяются.",
      accept: "Принять cookies",
    },
    timeline: [
      {
        title: "Аналитика и бриф",
        description:
          "Определяем приоритеты, бюджетные рамки и критерии успеха с полной прозрачностью с первого дня.",
      },
      {
        title: "Интеграция проекта",
        description:
          "Архитектурные, конструктивные и инженерные разделы собираются в единую реализуемую модель.",
      },
      {
        title: "Планирование реализации",
        description:
          "До мобилизации фиксируем закупки, очередность работ и контрольные точки качества.",
      },
      {
        title: "Строительное выполнение",
        description:
          "Площадочные команды работают с точностью, регулярной отчетностью и жесткими стандартами безопасности.",
      },
      {
        title: "Сдача и сопровождение",
        description:
          "Пусконаладка, исполнительная документация и постподдержка обеспечивают уверенную эксплуатацию.",
      },
    ],
    testimonials: [
      {
        quote:
          "Команда с редкой точностью перевела сложный архитектурный замысел в строительную реальность. Результат выглядит вне времени.",
        author: "Елена Варга",
        role: "Главный архитектор, Varga Atelier",
      },
      {
        quote:
          "Ключевое достоинство - надежность: прозрачные отчеты, дисциплина на площадке и нулевые компромиссы по деталям.",
        author: "Маркус Фельд",
        role: "Директор по активам, Aster Capital Partners",
      },
      {
        quote:
          "В реновации они объединили техническую глубину и уважение к оригинальному характеру здания.",
        author: "Клер Мертенс",
        role: "Руководитель программы, City Cultural Council",
      },
    ],
    stats: [
      { label: "Реализовано проектов", value: 74 },
      { label: "Лет на рынке", value: 19 },
      { label: "Повторные клиенты", value: 67, suffix: "%" },
      { label: "Индекс безопасности", value: 99, suffix: ".4" },
    ],
    projectDetail: {
      challenge: "Задача",
      solution: "Решение",
      scope: "Объем работ",
      projectData: "Данные проекта",
      client: "Клиент",
      year: "Год",
      builtArea: "Площадь",
      outcomes: "Ключевые результаты",
    },
    projectNotFound: {
      eyebrow: "Проект не найден",
      title: "Страница проекта недоступна.",
      description: "Проект мог быть архивирован или ссылка устарела.",
      cta: "Вернуться к проектам",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      menu: "Menú",
      openMenuAria: "Abrir menú de navegación",
      primaryNavAria: "Navegación principal",
      mobileNavAria: "Navegación móvil",
    },
    languageToggle: {
      ariaLabel: "Selector de idioma",
    },
    hero: {
      eyebrow: "Construcción guiada por diseño en Europa",
      title: "Construimos arquitectura vigente durante décadas.",
      description:
        "Arcstone Construct desarrolla villas premium, edificios comerciales y renovaciones complejas con gobernanza rigurosa y ejecución de alto detalle.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Hablar sobre su proyecto",
    },
    home: {
      featured: {
        eyebrow: "Proyectos destacados",
        title: "Obras seleccionadas con rigor arquitectónico",
        description:
          "Nuestros proyectos recientes reflejan enfoque en proporción, materiales y disciplina de ejecución en distintas escalas y tipologías.",
        cta: "Explorar todos los proyectos",
      },
      performance: {
        eyebrow: "Rendimiento",
        title: "Resultados medibles, no promesas de marketing",
        description:
          "Medimos la entrega con indicadores concretos de cumplimiento, seguridad y fidelidad de clientes.",
      },
      process: {
        eyebrow: "Cómo trabajamos",
        title: "Un proceso diseñado para reducir riesgos y proteger la intención de diseño",
      },
      testimonials: {
        eyebrow: "Perspectiva del cliente",
        title: "Relaciones de largo plazo basadas en confianza",
      },
    },
    projectFilters: {
      all: "Todos",
      residential: "Residencial",
      commercial: "Comercial",
      renovation: "Renovación",
    },
    categories: {
      residential: "Villas residenciales",
      commercial: "Edificios comerciales",
      renovation: "Renovación arquitectónica",
    },
    projectsPage: {
      eyebrow: "Portafolio seleccionado",
      title: "Obras que equilibran ambición de diseño y certeza de ejecución.",
      description:
        "Selección de proyectos residenciales, comerciales y de renovación entregados con planificación integrada y precisión técnica.",
      loadingDescription: "Preparando la vista de proyectos.",
    },
    servicesPage: {
      eyebrow: "Servicios",
      title: "Servicios de construcción integrados para arquitectura de alto valor.",
      description:
        "Desde la viabilidad inicial hasta la entrega y el soporte posterior, ofrecemos un marco único de calidad, costo y plazo.",
      methodEyebrow: "Método",
      methodTitle: "Un proceso transparente de estrategia a ejecución",
      methodDescription:
        "Cada fase tiene entregables medibles, responsabilidades claras y comunicación coordinada entre todas las partes.",
      services: [
        {
          title: "Villas residenciales",
          description:
            "Residencias privadas con precisión arquitectónica, ingeniería discreta y ejecución material a medida.",
          points: [
            "Concepto y viabilidad sensibles al sitio",
            "Envolvente premium y detalle interior",
            "Gestión integral de la construcción",
          ],
        },
        {
          title: "Edificios comerciales",
          description:
            "Activos de oficinas y uso mixto de alto rendimiento entregados con seguridad de plazos y calidad de inversión.",
          points: [
            "Coordinación design-build",
            "Control de costos y riesgos por fases",
            "Entrega lista para ocupación",
          ],
        },
        {
          title: "Renovación arquitectónica",
          description:
            "Transformación cuidadosa de edificios existentes, combinando respeto patrimonial y rendimiento contemporáneo.",
          points: [
            "Intervenciones informadas por conservación",
            "Refuerzos estructurales y modernización técnica",
            "Planificación de reutilización adaptativa",
          ],
        },
      ],
    },
    aboutPage: {
      eyebrow: "Nosotros",
      title: "Un socio constructor de confianza por su precisión, disciplina y sensibilidad arquitectónica.",
      description:
        "Arcstone Construct es un equipo europeo de ingenieros, jefes de obra y estrategas de proyecto comprometidos con valor a largo plazo.",
      positioningTitle: "Nuestro posicionamiento",
      p1: "Nos enfocamos en proyectos donde la intención arquitectónica y la disciplina constructiva deben operar al mismo nivel. Nuestra estructura reduce tiempos de decisión, anticipa riesgos técnicos y protege la calidad en cada etapa.",
      p2: "Durante casi dos décadas hemos colaborado con clientes privados, inversores institucionales y estudios líderes en Bélgica, Alemania, Suiza, Francia e Italia.",
      valuesTitle: "Valores en práctica",
      values: [
        "Gobernanza clara y reportes semanales",
        "Decisiones de ingeniería alineadas al valor del ciclo de vida",
        "Estándares de ejecución definidos antes de obra",
        "Cultura compartida de seguridad y calidad con todos los contratistas",
      ],
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Revisemos su proyecto con claridad y rapidez.",
      description:
        "Comparta objetivos, plazos y ubicación. Nuestro equipo responderá con una primera estrategia y próximos pasos.",
      officeTitle: "Sede de Bruselas",
      country: "Bélgica",
    },
    contactForm: {
      formAria: "Contacto con Arcstone Construct",
      fullName: "Nombre completo",
      businessEmail: "Email profesional",
      company: "Empresa",
      projectType: "Tipo de proyecto",
      projectTypes: {
        villa: "Villa residencial",
        commercial: "Edificio comercial",
        renovation: "Renovación arquitectónica",
      },
      projectBrief: "Resumen del proyecto",
      sendInquiry: "Enviar consulta",
      success: "Gracias. Nuestro equipo le responderá dentro de un día hábil.",
    },
    footer: {
      description:
        "Socio constructor premium para villas de arquitectura, activos comerciales y renovaciones sensibles en toda Europa.",
      office: "Oficina",
    },
    cookie: {
      text: "Usamos cookies esenciales para mantener este sitio seguro y entender patrones anónimos de tráfico. No usamos rastreadores de marketing.",
      accept: "Aceptar cookies",
    },
    timeline: [
      {
        title: "Diagnóstico y briefing",
        description:
          "Definimos prioridades, límites presupuestarios y criterios de éxito con total transparencia desde el inicio.",
      },
      {
        title: "Integración de diseño",
        description:
          "Arquitectura, estructura e instalaciones se alinean en una hoja de ruta constructiva única.",
      },
      {
        title: "Plan de ejecución",
        description:
          "Fijamos compras, secuencia de obra y control de calidad antes de la movilización para reducir incertidumbre.",
      },
      {
        title: "Entrega de obra",
        description:
          "Nuestros equipos ejecutan con precisión, reportes semanales y altos estándares de seguridad y oficio.",
      },
      {
        title: "Entrega y postventa",
        description:
          "Puesta en marcha, documentación y soporte posterior aseguran confianza operativa de largo plazo.",
      },
    ],
    testimonials: [
      {
        quote:
          "Su equipo tradujo intenciones de diseño complejas a una ejecución real con un rigor poco común. El resultado es atemporal.",
        author: "Elena Varga",
        role: "Arquitecta principal, Varga Atelier",
      },
      {
        quote:
          "Lo más valioso fue su fiabilidad: reportes transparentes, obra disciplinada y cero concesiones en calidad de detalle.",
        author: "Marcus Feld",
        role: "Director de activos, Aster Capital Partners",
      },
      {
        quote:
          "En la renovación combinaron inteligencia técnica y respeto por el carácter original del edificio.",
        author: "Claire Mertens",
        role: "Líder de programa, City Cultural Council",
      },
    ],
    stats: [
      { label: "Proyectos entregados", value: 74 },
      { label: "Años de operación", value: 19 },
      { label: "Clientes recurrentes", value: 67, suffix: "%" },
      { label: "Índice de seguridad", value: 99, suffix: ".4" },
    ],
    projectDetail: {
      challenge: "Desafío",
      solution: "Solución",
      scope: "Alcance del trabajo",
      projectData: "Datos del proyecto",
      client: "Cliente",
      year: "Año",
      builtArea: "Superficie construida",
      outcomes: "Resultados clave",
    },
    projectNotFound: {
      eyebrow: "Proyecto no encontrado",
      title: "Esta página de proyecto no está disponible.",
      description: "El proyecto puede haber sido archivado o el enlace está desactualizado.",
      cta: "Volver a proyectos",
    },
  },
};

export function localeForLanguage(language: Language): string {
  if (language === "ru") return "ru-RU";
  if (language === "es") return "es-ES";
  return "en-GB";
}
