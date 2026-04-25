import { Language } from "@/lib/i18n";

export interface EnterpriseContent {
  quoteCta: string;
  engineeringApproach: {
    eyebrow: string;
    title: string;
    description: string;
    principles: Array<{ title: string; description: string }>;
  };
  extendedProcess: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{ phase: string; title: string; description: string }>;
  };
  caseStudies: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      name: string;
      sector: string;
      challenge: string;
      solution: string;
      result: string;
      timeline: string;
      budget: string;
      size: string;
    }>;
  };
  companyKpis: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ label: string; value: string; note: string }>;
  };
  servicesDeepDive: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string; bullets: string[] }>;
  };
  industries: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  clients: {
    eyebrow: string;
    title: string;
    description: string;
    partners: Array<{ name: string; context: string }>;
  };
  certifications: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  sustainability: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: Array<{ title: string; description: string }>;
  };
  insights: {
    eyebrow: string;
    title: string;
    articles: Array<{ tag: string; title: string; excerpt: string; date: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  contactEnhancement: {
    budgetRange: string;
    timeline: string;
    budgetOptions: string[];
    timelineOptions: string[];
    sending: string;
    submittedTitle: string;
    submittedBody: string;
  };
}

const enterpriseContent: Record<Language, EnterpriseContent> = {
  en: {
    quoteCta: "Request a quote",
    engineeringApproach: {
      eyebrow: "Engineering Approach",
      title: "Execution principles built for high-value construction",
      description:
        "Our delivery model combines architectural sensitivity with strict engineering controls across every stage.",
      principles: [
        {
          title: "Front-Loaded Technical Validation",
          description:
            "We resolve structural, envelope, and MEP interfaces before procurement to reduce redesign during construction.",
        },
        {
          title: "Risk-Weighted Planning",
          description:
            "Sequencing, long-lead materials, and critical subcontract packages are managed through scenario-based planning.",
        },
        {
          title: "Transparent Cost Governance",
          description:
            "Commercial controls are updated weekly with clear visibility on committed cost, exposure, and forecast outcomes.",
        },
        {
          title: "Quality at Detail Level",
          description:
            "Mock-ups, benchmark approvals, and hold-point inspections are used to protect finish quality and technical compliance.",
        },
      ],
    },
    extendedProcess: {
      eyebrow: "Extended Project Process",
      title: "Seven-stage framework from feasibility to operational handover",
      description:
        "Each stage includes defined deliverables, decision gates, and accountability across client, consultant, and contractor teams.",
      steps: [
        { phase: "01", title: "Strategic Brief", description: "Define scope, business case, target quality, and delivery constraints." },
        { phase: "02", title: "Feasibility & Cost Study", description: "Run technical feasibility, planning checks, and baseline cost scenarios." },
        { phase: "03", title: "Integrated Design Coordination", description: "Align architecture, structure, MEP, and specialist packages into a constructible model." },
        { phase: "04", title: "Procurement & Preconstruction", description: "Tender critical packages, validate long-lead items, and lock execution strategy." },
        { phase: "05", title: "Construction Delivery", description: "Execute works with weekly reporting, QA/QC checkpoints, and safety controls." },
        { phase: "06", title: "Commissioning & Validation", description: "Test systems, complete snag closure, and verify compliance documentation." },
        { phase: "07", title: "Handover & Aftercare", description: "Transfer operations manuals, train facility teams, and monitor early performance." },
      ],
    },
    caseStudies: {
      eyebrow: "Case Studies",
      title: "Project outcomes backed by engineering discipline",
      description: "Examples of how technical planning and on-site control converted project risk into measurable performance.",
      items: [
        {
          name: "Lakeside Executive Campus",
          sector: "Commercial Development",
          challenge: "Compressed delivery window with simultaneous tenant fit-out requirements.",
          solution: "Introduced phased handover zones and prefabricated MEP corridors coordinated in BIM level 350.",
          result: "Main shell delivered ahead of lease commitments with zero critical rework events.",
          timeline: "22 months",
          budget: "EUR 61M",
          size: "18,900 m2",
        },
        {
          name: "Valmont Heritage Quarter",
          sector: "Architectural Renovation",
          challenge: "Upgrade heritage assets to current safety and comfort standards without facade compromise.",
          solution: "Applied selective reinforcement and hidden service shafts with conservation-led sequencing.",
          result: "Protected elements retained while achieving modern performance and occupancy targets.",
          timeline: "16 months",
          budget: "EUR 24M",
          size: "7,400 m2",
        },
        {
          name: "Sierra Crest Residences",
          sector: "Residential Villas",
          challenge: "High-end multi-villa program on sloped terrain with strict logistics access limits.",
          solution: "Created staggered concrete frames and off-site fabricated facade components to reduce site congestion.",
          result: "Premium finish quality delivered with consistent schedule performance across all units.",
          timeline: "20 months",
          budget: "EUR 33M",
          size: "9,600 m2",
        },
      ],
    },
    companyKpis: {
      eyebrow: "Company Statistics",
      title: "Operational KPIs used by clients and investors",
      description: "Performance metrics tracked at portfolio level to support decision-making and governance confidence.",
      items: [
        { label: "On-time milestone delivery", value: "94%", note: "Across the last 5 years" },
        { label: "Average cost variance", value: "2.8%", note: "Against approved budget" },
        { label: "Defect closure at handover", value: "97%", note: "Before practical completion" },
        { label: "Repeat client contracts", value: "67%", note: "By revenue share" },
      ],
    },
    servicesDeepDive: {
      eyebrow: "Services Deep Dive",
      title: "Expanded service scope for complex capital projects",
      description: "Beyond construction, we provide commercial, technical, and operational services that de-risk delivery.",
      items: [
        {
          title: "Preconstruction Intelligence",
          description: "Early advisory for scope reliability and procurement strategy.",
          bullets: [
            "Constructability and sequencing workshops",
            "Cost plan stress-testing under market scenarios",
            "Tender strategy for critical work packages",
          ],
        },
        {
          title: "Project Controls",
          description: "Integrated controls framework for cost, schedule, and risk.",
          bullets: [
            "Baseline schedule and critical path management",
            "Change-control board and exposure register",
            "Weekly earned-value and progress analytics",
          ],
        },
        {
          title: "Technical Delivery",
          description: "Execution of structure, envelope, and interiors under one governance model.",
          bullets: [
            "MEP coordination and commissioning oversight",
            "Quality benchmarks and mock-up approvals",
            "Digital handover packs and O&M documentation",
          ],
        },
      ],
    },
    industries: {
      eyebrow: "Industries Served",
      title: "Built environments across multiple sectors",
      items: [
        { title: "Luxury Residential", description: "Private villas, multi-residence compounds, and high-spec urban living assets." },
        { title: "Commercial Offices", description: "Headquarters, mixed-use office campuses, and investor-owned business properties." },
        { title: "Hospitality", description: "Boutique hotels and serviced properties requiring premium finish and operational reliability." },
        { title: "Public & Cultural", description: "Adaptive reuse and civic facilities with strict compliance and stakeholder scrutiny." },
      ],
    },
    clients: {
      eyebrow: "Clients & Partners",
      title: "Trusted by private investors, institutions, and design leaders",
      description: "Representative partners across development, architecture, and technical consulting.",
      partners: [
        { name: "Aster Capital", context: "Commercial asset investor" },
        { name: "Varga Atelier", context: "Architecture and design partner" },
        { name: "Montclair Hospitality", context: "Hospitality developer" },
        { name: "Nordic Structures", context: "Structural engineering consultant" },
        { name: "Orion Facilities", context: "Post-handover operations partner" },
        { name: "Novum Technologies", context: "Corporate occupier" },
      ],
    },
    certifications: {
      eyebrow: "Certifications & Compliance",
      title: "Governance standards aligned with enterprise procurement",
      description: "Compliance framework maintained for safety, quality, and environmental responsibility.",
      items: [
        "ISO 9001:2015 - Quality Management Systems",
        "ISO 45001:2018 - Occupational Health and Safety",
        "ISO 14001:2015 - Environmental Management",
        "EN 1090 Execution Class 3 coordination capability",
        "EU Construction Products Regulation traceability workflow",
      ],
    },
    sustainability: {
      eyebrow: "Sustainability",
      title: "Carbon-aware construction without compromising quality",
      description: "We integrate sustainability into material choices, logistics, and lifecycle performance decisions.",
      pillars: [
        { title: "Low-Carbon Materials", description: "Prioritizing low-carbon concrete mixes, recycled steel content, and certified timber sources." },
        { title: "Resource Efficiency", description: "Waste segregation targets, modular prefabrication, and water use controls on site." },
        { title: "Operational Performance", description: "Envelope detailing and commissioning standards designed for long-term energy efficiency." },
      ],
    },
    insights: {
      eyebrow: "Insights",
      title: "Engineering and delivery intelligence",
      articles: [
        {
          tag: "Project Controls",
          title: "How early package strategy protects schedule certainty",
          excerpt: "A practical framework for reducing long-lead procurement risk in high-spec construction projects.",
          date: "March 2026",
        },
        {
          tag: "Renovation",
          title: "Modernizing heritage assets without losing architectural character",
          excerpt: "Lessons from combining conservation workflows with contemporary MEP upgrades.",
          date: "February 2026",
        },
        {
          tag: "Sustainability",
          title: "Embodied carbon decisions that hold under commercial pressure",
          excerpt: "Where low-carbon material strategy can deliver real impact without cost instability.",
          date: "January 2026",
        },
        {
          tag: "Quality",
          title: "Mock-up governance as a risk control tool",
          excerpt: "Why pre-approval benchmarks reduce defect cycles in premium interior packages.",
          date: "December 2025",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions from project owners and investors",
      items: [
        {
          question: "At which stage should we engage your team?",
          answer: "Ideally at feasibility or early design so we can align cost, constructability, and procurement strategy before commitments are locked.",
        },
        {
          question: "Can you work with our existing architect and consultants?",
          answer: "Yes. Our model is designed for integrated delivery with external design teams, specialist engineers, and client-side PMs.",
        },
        {
          question: "How do you manage cost overruns?",
          answer: "Through strict change control, exposure tracking, and weekly variance reporting tied to decision authority.",
        },
        {
          question: "What project sizes do you typically deliver?",
          answer: "Most projects range from EUR 8M to EUR 80M, across residential, commercial, and renovation programs.",
        },
        {
          question: "Do you provide post-handover support?",
          answer: "Yes. We provide commissioning follow-through, defect closeout, and operational readiness support.",
        },
        {
          question: "How is quality controlled on site?",
          answer: "We use hold points, benchmark samples, and documented QA inspections at every major work package.",
        },
      ],
    },
    contactEnhancement: {
      budgetRange: "Budget range",
      timeline: "Target timeline",
      budgetOptions: ["Under EUR 5M", "EUR 5M - EUR 15M", "EUR 15M - EUR 40M", "Above EUR 40M"],
      timelineOptions: ["0-6 months", "6-12 months", "12-24 months", "24+ months"],
      sending: "Sending...",
      submittedTitle: "Request received",
      submittedBody: "Thank you. We will contact you with a technical follow-up within one business day.",
    },
  },
  ru: {
    quoteCta: "Запросить смету",
    engineeringApproach: {
      eyebrow: "Инженерный подход",
      title: "Принципы реализации для проектов высокого класса",
      description:
        "Наша модель объединяет архитектурную чувствительность и жесткий инженерный контроль на всех этапах проекта.",
      principles: [
        {
          title: "Ранняя техническая валидация",
          description:
            "Ключевые узлы конструкций, фасадов и инженерных систем закрываются до закупок, чтобы избежать переработок на площадке.",
        },
        {
          title: "Планирование на основе рисков",
          description:
            "График, long-lead позиции и критичные подрядные пакеты управляются через сценарный анализ.",
        },
        {
          title: "Прозрачное бюджетное управление",
          description:
            "Коммерческие показатели обновляются еженедельно: обязательства, риски и прогнозы видны всем стейкхолдерам.",
        },
        {
          title: "Качество на уровне деталей",
          description:
            "Mock-up проверки, эталонные согласования и hold-point инспекции защищают качество отделки и соответствие нормам.",
        },
      ],
    },
    extendedProcess: {
      eyebrow: "Расширенный процесс",
      title: "Семь этапов от технико-экономики до эксплуатационной передачи",
      description:
        "Каждый этап имеет конкретные результаты, контрольные точки и закрепленную ответственность сторон.",
      steps: [
        { phase: "01", title: "Стратегический бриф", description: "Формируем границы проекта, бизнес-цели, целевое качество и ограничения." },
        { phase: "02", title: "ТЭО и стоимостной анализ", description: "Проверяем реализуемость, планировочные условия и базовые сценарии стоимости." },
        { phase: "03", title: "Интеграция проектных разделов", description: "Собираем архитектуру, конструктив и MEP в единую реализуемую модель." },
        { phase: "04", title: "Закупки и preconstruction", description: "Тендерим критичные пакеты, подтверждаем long-lead поставки и стратегию производства работ." },
        { phase: "05", title: "Строительная реализация", description: "Ведем строительство с недельной отчетностью, QA/QC и контролем безопасности." },
        { phase: "06", title: "Пусконаладка и верификация", description: "Проводим испытания систем, закрываем замечания и формируем комплаенс-пакет." },
        { phase: "07", title: "Передача и сопровождение", description: "Передаем эксплуатационную документацию, обучаем FM-команды и сопровождаем старт эксплуатации." },
      ],
    },
    caseStudies: {
      eyebrow: "Case Studies",
      title: "Результаты проектов, подтвержденные инженерной дисциплиной",
      description: "Примеры того, как техническое планирование и контроль на площадке конвертируют риски в измеримый результат.",
      items: [
        {
          name: "Lakeside Executive Campus",
          sector: "Коммерческая девелоперская программа",
          challenge: "Сжатые сроки реализации при параллельной подготовке под арендаторов.",
          solution: "Организовали поэтапную передачу зон и применили префаб-MEP коридоры в BIM-модели уровня 350.",
          result: "Корпус сдан раньше арендных обязательств без критичного rework.",
          timeline: "22 месяца",
          budget: "EUR 61M",
          size: "18 900 м2",
        },
        {
          name: "Valmont Heritage Quarter",
          sector: "Архитектурная реновация",
          challenge: "Модернизировать исторический фонд до текущих стандартов без компромисса по фасадам.",
          solution: "Применили выборочное усиление и скрытые инженерные шахты с conservation-последовательностью работ.",
          result: "Охраняемые элементы сохранены, эксплуатационные и коммерческие KPI достигнуты.",
          timeline: "16 месяцев",
          budget: "EUR 24M",
          size: "7 400 м2",
        },
        {
          name: "Sierra Crest Residences",
          sector: "Жилые виллы",
          challenge: "Многовилловая luxury-программа на сложном рельефе с ограниченной логистикой.",
          solution: "Использовали ступенчатые ж/б каркасы и офф-сайт префаб-фасады для разгрузки площадки.",
          result: "Премиальное качество отделки и стабильное выполнение сроков по всем юнитам.",
          timeline: "20 месяцев",
          budget: "EUR 33M",
          size: "9 600 м2",
        },
      ],
    },
    companyKpis: {
      eyebrow: "Статистика компании",
      title: "Операционные KPI, на которые смотрят заказчики и инвесторы",
      description: "Метрики уровня портфеля, поддерживающие управленческие решения и доверие к реализации.",
      items: [
        { label: "Сдача этапов в срок", value: "94%", note: "За последние 5 лет" },
        { label: "Среднее отклонение по бюджету", value: "2.8%", note: "От утвержденной сметы" },
        { label: "Закрытие дефектов к сдаче", value: "97%", note: "До practical completion" },
        { label: "Повторные контракты", value: "67%", note: "В структуре выручки" },
      ],
    },
    servicesDeepDive: {
      eyebrow: "Глубина услуг",
      title: "Расширенный контур сервисов для сложных капитальных проектов",
      description: "Помимо строительства мы закрываем коммерческие, технические и эксплуатационные задачи проекта.",
      items: [
        {
          title: "Preconstruction аналитика",
          description: "Раннее сопровождение для надежности scope и закупочной стратегии.",
          bullets: [
            "Constructability и sequencing воркшопы",
            "Стресс-тест cost plan в рыночных сценариях",
            "Тендерная стратегия по критичным пакетам",
          ],
        },
        {
          title: "Project Controls",
          description: "Интегрированная система управления стоимостью, сроками и рисками.",
          bullets: [
            "Базовый график и контроль critical path",
            "Change-control комитет и реестр рисков",
            "Еженедельная аналитика прогресса и earned value",
          ],
        },
        {
          title: "Техническая реализация",
          description: "Единая модель управления конструктивом, фасадом и интерьерами.",
          bullets: [
            "Координация MEP и контроль пусконаладки",
            "Эталонные узлы и контроль качества",
            "Цифровая исполнительная документация и O&M пакеты",
          ],
        },
      ],
    },
    industries: {
      eyebrow: "Отрасли",
      title: "Сектора, в которых мы работаем",
      items: [
        { title: "Премиальное жилье", description: "Частные виллы, клубные резиденции и high-spec городские комплексы." },
        { title: "Офисная недвижимость", description: "Штаб-квартиры, mixed-use кампусы и инвестиционные коммерческие объекты." },
        { title: "Гостеприимство", description: "Бутик-отели и сервисные форматы с высокими требованиями к отделке и надежности." },
        { title: "Публичные и культурные объекты", description: "Адаптивное переиспользование и общественные здания с повышенным контролем соответствия." },
      ],
    },
    clients: {
      eyebrow: "Клиенты и партнеры",
      title: "Нам доверяют инвесторы, институты и ведущие проектные команды",
      description: "Репрезентативные партнеры из девелопмента, архитектуры и инженерного консалтинга.",
      partners: [
        { name: "Aster Capital", context: "Инвестор коммерческой недвижимости" },
        { name: "Varga Atelier", context: "Архитектурный партнер" },
        { name: "Montclair Hospitality", context: "Гостиничный девелопер" },
        { name: "Nordic Structures", context: "Конструктивный консультант" },
        { name: "Orion Facilities", context: "Операционный партнер после ввода" },
        { name: "Novum Technologies", context: "Корпоративный заказчик" },
      ],
    },
    certifications: {
      eyebrow: "Сертификация и комплаенс",
      title: "Стандарты управления для enterprise-закупок",
      description: "Система соответствия поддерживается по направлениям безопасности, качества и экологии.",
      items: [
        "ISO 9001:2015 - система менеджмента качества",
        "ISO 45001:2018 - охрана труда и безопасность",
        "ISO 14001:2015 - экологический менеджмент",
        "Координация по EN 1090 Execution Class 3",
        "Прослеживаемость по EU Construction Products Regulation",
      ],
    },
    sustainability: {
      eyebrow: "Устойчивое строительство",
      title: "Низкоуглеродный подход без компромиссов по качеству",
      description: "Экологические решения внедряются в материалы, логистику и эксплуатационные параметры объекта.",
      pillars: [
        { title: "Низкоуглеродные материалы", description: "Используем low-carbon бетон, сталь с переработанным содержанием и сертифицированную древесину." },
        { title: "Ресурсная эффективность", description: "Цели по сортировке отходов, модульная префабрикация и контроль водопотребления на площадке." },
        { title: "Эксплуатационная эффективность", description: "Точная проработка оболочки и commissioning для долгосрочной энергоэффективности." },
      ],
    },
    insights: {
      eyebrow: "Инсайты",
      title: "Практика инженерии и управления реализацией",
      articles: [
        {
          tag: "Project Controls",
          title: "Как стратегия закупок на раннем этапе защищает сроки",
          excerpt: "Практическая схема снижения long-lead рисков в high-spec строительных проектах.",
          date: "Март 2026",
        },
        {
          tag: "Renovation",
          title: "Модернизация heritage-объектов без потери архитектурного характера",
          excerpt: "Выводы из проектов, где conservation-подход совмещается с современной инженерией.",
          date: "Февраль 2026",
        },
        {
          tag: "Sustainability",
          title: "Решения по embodied carbon под коммерческим давлением",
          excerpt: "Где стратегия низкоуглеродных материалов дает эффект без ценовой турбулентности.",
          date: "Январь 2026",
        },
        {
          tag: "Quality",
          title: "Mock-up управление как инструмент контроля рисков",
          excerpt: "Почему эталонные узлы сокращают дефектные циклы в премиальных пакетах отделки.",
          date: "Декабрь 2025",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Частые вопросы от заказчиков и инвесторов",
      items: [
        {
          question: "На каком этапе лучше подключать вашу команду?",
          answer: "Оптимально на стадии ТЭО или раннего проектирования, чтобы синхронизировать стоимость, реализуемость и закупочную стратегию.",
        },
        {
          question: "Работаете ли вы с нашим текущим архитектором и консультантами?",
          answer: "Да. Наша модель рассчитана на интеграцию с внешними проектировщиками, инженерами и клиентским PM.",
        },
        {
          question: "Как вы контролируете перерасход бюджета?",
          answer: "Через жесткий change-control, реестр рисков и еженедельную отчетность по отклонениям.",
        },
        {
          question: "Какой бюджетный масштаб проектов вы обычно ведете?",
          answer: "Типовой диапазон - от EUR 8M до EUR 80M в жилых, коммерческих и реновационных программах.",
        },
        {
          question: "Есть ли сопровождение после сдачи?",
          answer: "Да, мы обеспечиваем постпусконаладочное сопровождение, закрытие дефектов и поддержку операционной готовности.",
        },
        {
          question: "Как контролируется качество на площадке?",
          answer: "Через hold points, эталонные образцы и документированные QA-инспекции по каждому ключевому пакету работ.",
        },
      ],
    },
    contactEnhancement: {
      budgetRange: "Бюджет проекта",
      timeline: "Целевой срок",
      budgetOptions: ["До EUR 5M", "EUR 5M - EUR 15M", "EUR 15M - EUR 40M", "Свыше EUR 40M"],
      timelineOptions: ["0-6 месяцев", "6-12 месяцев", "12-24 месяца", "24+ месяцев"],
      sending: "Отправляем...",
      submittedTitle: "Запрос принят",
      submittedBody: "Спасибо. В течение одного рабочего дня вернемся с техническим фоллоу-апом.",
    },
  },
  es: {
    quoteCta: "Solicitar presupuesto",
    engineeringApproach: {
      eyebrow: "Enfoque de ingeniería",
      title: "Principios de ejecución para construcción de alto valor",
      description:
        "Nuestro modelo combina sensibilidad arquitectónica con control técnico riguroso durante todo el ciclo de entrega.",
      principles: [
        {
          title: "Validación técnica temprana",
          description:
            "Resolvemos interfaces estructurales, de envolvente y MEP antes de compras para reducir rediseños en obra.",
        },
        {
          title: "Planificación basada en riesgos",
          description:
            "Secuencia, materiales de largo plazo y paquetes críticos se gestionan con planificación por escenarios.",
        },
        {
          title: "Gobernanza transparente de costos",
          description:
            "Los controles comerciales se actualizan semanalmente con visibilidad de costos comprometidos y exposición.",
        },
        {
          title: "Calidad al nivel del detalle",
          description:
            "Usamos mock-ups, aprobaciones benchmark e inspecciones de control para asegurar acabados y cumplimiento técnico.",
        },
      ],
    },
    extendedProcess: {
      eyebrow: "Proceso ampliado",
      title: "Siete etapas desde factibilidad hasta entrega operativa",
      description:
        "Cada etapa incluye entregables definidos, puertas de decisión y responsabilidades claras entre todas las partes.",
      steps: [
        { phase: "01", title: "Brief estratégico", description: "Definimos alcance, caso de negocio, nivel de calidad y restricciones." },
        { phase: "02", title: "Factibilidad y costos", description: "Validamos factibilidad técnica, normativa y escenarios base de costo." },
        { phase: "03", title: "Coordinación de diseño", description: "Integramos arquitectura, estructura y MEP en un modelo construible." },
        { phase: "04", title: "Compras y preconstrucción", description: "Licitamos paquetes críticos y cerramos estrategia de ejecución." },
        { phase: "05", title: "Entrega de obra", description: "Ejecutamos con reportes semanales, QA/QC y control de seguridad." },
        { phase: "06", title: "Comisionamiento", description: "Probamos sistemas, cerramos observaciones y validamos cumplimiento." },
        { phase: "07", title: "Handover y postventa", description: "Transferimos documentación, entrenamos operación y monitoreamos desempeño inicial." },
      ],
    },
    caseStudies: {
      eyebrow: "Casos de estudio",
      title: "Resultados de proyecto respaldados por disciplina técnica",
      description: "Ejemplos de cómo la planificación técnica y el control en obra convierten riesgo en rendimiento medible.",
      items: [
        {
          name: "Lakeside Executive Campus",
          sector: "Desarrollo comercial",
          challenge: "Plazo de entrega comprimido con requisitos de fit-out simultáneo para inquilinos.",
          solution: "Aplicamos entregas por zonas y corredores MEP prefabricados coordinados en BIM nivel 350.",
          result: "El casco principal se entregó antes de compromisos de leasing sin retrabajos críticos.",
          timeline: "22 meses",
          budget: "EUR 61M",
          size: "18.900 m2",
        },
        {
          name: "Valmont Heritage Quarter",
          sector: "Renovación arquitectónica",
          challenge: "Actualizar activos patrimoniales a normas actuales sin comprometer la fachada histórica.",
          solution: "Implementamos refuerzo selectivo y shafts técnicos ocultos con secuencia orientada a conservación.",
          result: "Se preservaron elementos protegidos logrando objetivos modernos de operación y ocupación.",
          timeline: "16 meses",
          budget: "EUR 24M",
          size: "7.400 m2",
        },
        {
          name: "Sierra Crest Residences",
          sector: "Villas residenciales",
          challenge: "Programa de villas premium en terreno inclinado con acceso logístico restringido.",
          solution: "Diseñamos marcos escalonados de hormigón y componentes de fachada prefabricados fuera de obra.",
          result: "Se entregó calidad premium con cumplimiento consistente de plazos en todas las unidades.",
          timeline: "20 meses",
          budget: "EUR 33M",
          size: "9.600 m2",
        },
      ],
    },
    companyKpis: {
      eyebrow: "Estadísticas de empresa",
      title: "KPIs operativos para clientes e inversores",
      description: "Indicadores de cartera que soportan gobernanza y decisiones de inversión.",
      items: [
        { label: "Hitos entregados a tiempo", value: "94%", note: "Últimos 5 años" },
        { label: "Desviación media de costo", value: "2.8%", note: "Contra presupuesto aprobado" },
        { label: "Cierre de defectos en entrega", value: "97%", note: "Antes de finalización práctica" },
        { label: "Contratos con clientes recurrentes", value: "67%", note: "Sobre ingresos totales" },
      ],
    },
    servicesDeepDive: {
      eyebrow: "Detalle de servicios",
      title: "Alcance ampliado para proyectos de capital complejos",
      description: "Además de construir, cubrimos frentes comerciales, técnicos y operativos para reducir riesgo.",
      items: [
        {
          title: "Inteligencia preconstructiva",
          description: "Asesoría temprana para robustecer alcance y estrategia de compras.",
          bullets: [
            "Talleres de constructabilidad y secuenciación",
            "Stress-testing del plan de costos",
            "Estrategia de licitación para paquetes críticos",
          ],
        },
        {
          title: "Project controls",
          description: "Marco integrado para costo, plazo y riesgo.",
          bullets: [
            "Cronograma base y gestión de ruta crítica",
            "Comité de cambios y registro de exposición",
            "Analítica semanal de avance y earned value",
          ],
        },
        {
          title: "Entrega técnica",
          description: "Ejecución de estructura, envolvente e interiores bajo un modelo de gobernanza único.",
          bullets: [
            "Coordinación MEP y supervisión de commissioning",
            "Benchmark de calidad y aprobación de mock-ups",
            "Entrega digital de documentación O&M",
          ],
        },
      ],
    },
    industries: {
      eyebrow: "Industrias atendidas",
      title: "Entornos construidos en múltiples sectores",
      items: [
        { title: "Residencial premium", description: "Villas privadas, complejos residenciales y activos urbanos de alta especificación." },
        { title: "Oficinas comerciales", description: "Sedes corporativas, campus mixtos y propiedades de inversión." },
        { title: "Hospitalidad", description: "Hoteles boutique y activos de servicio con altos requisitos de acabado." },
        { title: "Público y cultural", description: "Reutilización adaptativa y equipamientos cívicos con estricta supervisión normativa." },
      ],
    },
    clients: {
      eyebrow: "Clientes y socios",
      title: "Confianza de inversores, instituciones y líderes de diseño",
      description: "Socios representativos de desarrollo, arquitectura e ingeniería.",
      partners: [
        { name: "Aster Capital", context: "Inversor de activos comerciales" },
        { name: "Varga Atelier", context: "Socio de arquitectura" },
        { name: "Montclair Hospitality", context: "Desarrollador hotelero" },
        { name: "Nordic Structures", context: "Consultor estructural" },
        { name: "Orion Facilities", context: "Socio operativo post-entrega" },
        { name: "Novum Technologies", context: "Ocupante corporativo" },
      ],
    },
    certifications: {
      eyebrow: "Certificaciones y cumplimiento",
      title: "Estándares de gobernanza para compras corporativas",
      description: "Marco de cumplimiento activo en seguridad, calidad y desempeño ambiental.",
      items: [
        "ISO 9001:2015 - Gestión de calidad",
        "ISO 45001:2018 - Seguridad y salud ocupacional",
        "ISO 14001:2015 - Gestión ambiental",
        "Capacidad de coordinación EN 1090 Execution Class 3",
        "Trazabilidad bajo EU Construction Products Regulation",
      ],
    },
    sustainability: {
      eyebrow: "Sostenibilidad",
      title: "Construcción baja en carbono sin comprometer calidad",
      description: "Integramos decisiones sostenibles en materiales, logística y desempeño del ciclo de vida.",
      pillars: [
        { title: "Materiales de baja huella", description: "Priorizamos hormigones de baja emisión, acero reciclado y madera certificada." },
        { title: "Eficiencia de recursos", description: "Objetivos de segregación de residuos, prefabricación modular y control de consumo de agua." },
        { title: "Rendimiento operativo", description: "Detalles de envolvente y commissioning para eficiencia energética de largo plazo." },
      ],
    },
    insights: {
      eyebrow: "Insights",
      title: "Inteligencia de ingeniería y ejecución",
      articles: [
        {
          tag: "Project Controls",
          title: "Cómo la estrategia temprana de paquetes protege el cronograma",
          excerpt: "Marco práctico para reducir riesgo en compras de largo plazo en proyectos high-spec.",
          date: "Marzo 2026",
        },
        {
          tag: "Renovation",
          title: "Modernizar patrimonio sin perder carácter arquitectónico",
          excerpt: "Lecciones al combinar conservación con modernización MEP contemporánea.",
          date: "Febrero 2026",
        },
        {
          tag: "Sustainability",
          title: "Decisiones de carbono incorporado bajo presión comercial",
          excerpt: "Dónde la estrategia de materiales bajos en carbono genera impacto real sin inestabilidad de costo.",
          date: "Enero 2026",
        },
        {
          tag: "Quality",
          title: "Governanza de mock-ups como control de riesgo",
          excerpt: "Por qué los benchmarks previos reducen ciclos de defectos en interiores premium.",
          date: "Diciembre 2025",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes de propietarios e inversores",
      items: [
        {
          question: "¿En qué etapa conviene involucrar a su equipo?",
          answer: "Idealmente en factibilidad o diseño temprano para alinear costo, constructabilidad y estrategia de compras antes de compromisos.",
        },
        {
          question: "¿Pueden trabajar con nuestro arquitecto y consultores actuales?",
          answer: "Sí. Nuestro modelo está diseñado para entrega integrada con equipos externos de diseño e ingeniería.",
        },
        {
          question: "¿Cómo controlan desviaciones de presupuesto?",
          answer: "Con control de cambios estricto, registro de exposición y reportes semanales de variación.",
        },
        {
          question: "¿Qué escala de proyectos suelen entregar?",
          answer: "La mayoría de nuestros proyectos se sitúa entre EUR 8M y EUR 80M en residencial, comercial y renovación.",
        },
        {
          question: "¿Ofrecen soporte después de la entrega?",
          answer: "Sí. Incluye seguimiento de commissioning, cierre de defectos y soporte de readiness operativo.",
        },
        {
          question: "¿Cómo se controla la calidad en obra?",
          answer: "Aplicamos hold points, muestras benchmark e inspecciones QA documentadas por paquete de trabajo.",
        },
      ],
    },
    contactEnhancement: {
      budgetRange: "Rango de presupuesto",
      timeline: "Plazo objetivo",
      budgetOptions: ["Menos de EUR 5M", "EUR 5M - EUR 15M", "EUR 15M - EUR 40M", "Más de EUR 40M"],
      timelineOptions: ["0-6 meses", "6-12 meses", "12-24 meses", "24+ meses"],
      sending: "Enviando...",
      submittedTitle: "Solicitud recibida",
      submittedBody: "Gracias. Nuestro equipo le responderá con seguimiento técnico en un día hábil.",
    },
  },
};

export function getEnterpriseContent(language: Language): EnterpriseContent {
  return enterpriseContent[language];
}
