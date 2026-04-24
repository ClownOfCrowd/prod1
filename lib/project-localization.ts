import { Language } from "@/lib/i18n";
import { Project } from "@/lib/types";

type ProjectCopy = {
  title?: string;
  location?: string;
  client?: string;
  summary: string;
  challenge: string;
  solution: string;
  scope: string[];
  metrics: Array<{ label: string; value: string }>;
};

type ProjectCopyMap = Record<string, ProjectCopy>;

const projectCopyByLanguage: Partial<Record<Exclude<Language, "en">, ProjectCopyMap>> = {
  ru: {
    "amber-cliff-villa": {
      location: "Порто-Черво, Италия",
      client: "Частный семейный офис",
      summary:
        "Вилла на склоне, собранная как последовательность каменных террас и остекленных жилых павильонов с видом на Средиземное море.",
      challenge:
        "Интегрировать крупную частную резиденцию в крутой рельеф при строгих ограничениях по визуальному воздействию и высокой ветровой нагрузке.",
      solution:
        "Мы разработали ступенчатый несущий каркас из фактурного монолитного бетона, облицованный местным известняком, и согласовали глубокие солнцезащитные узлы для панорамного остекления.",
      scope: [
        "Концепция и техническое проектирование",
        "Конструктив и инженерия фасада",
        "Реализация под ключ",
        "Благоустройство и внешние работы",
      ],
      metrics: [
        { label: "Снижение энергопотребления", value: "42%" },
        { label: "Срок строительства", value: "18 месяцев" },
        { label: "Инциденты на площадке", value: "0" },
      ],
    },
    "north-harbor-business-house": {
      location: "Гамбург, Германия",
      client: "Aster Capital Partners",
      summary:
        "Многофункциональное коммерческое здание с точной стально-стеклянной фасадной системой и гибкими офисными пространствами.",
      challenge:
        "Обеспечить премиальный уровень рабочих пространств при сжатом графике строительства в активной городской среде.",
      solution:
        "За счет поэтапной логистики и сборных фасадных модулей мы сократили объем работ на площадке и стабилизировали качество отделки.",
      scope: [
        "Предпроектная и строительная подготовка",
        "Core & shell реализация",
        "Премиальный fit-out",
        "Координация инженерных систем",
      ],
      metrics: [
        { label: "Экономия по графику", value: "11 недель" },
        { label: "Доля префаб-фасада", value: "78%" },
        { label: "Арендовано до сдачи", value: "92%" },
      ],
    },
    "st-anne-heritage-renovation": {
      location: "Брюссель, Бельгия",
      client: "Montclair Hospitality",
      summary:
        "Реставрация и расширение исторического здания конца XIX века с преобразованием в бутик-объект гостеприимства.",
      challenge:
        "Сохранить фасадные элементы наследия при интеграции современных требований по пожарной безопасности, акустике и комфорту.",
      solution:
        "Мы объединили работу реставраторов и современных инженерных команд, сохранив историческую геометрию и добавив деликатные технические слои.",
      scope: [
        "Обмеры и стратегия реставрации",
        "Консервация фасадов",
        "Усиление конструкций",
        "Модернизация инженерных систем",
      ],
      metrics: [
        { label: "Сохранено охраняемых элементов", value: "96%" },
        { label: "Рост энергоэффективности", value: "2 класса" },
        { label: "Оценка гостей после открытия", value: "4.8/5" },
      ],
    },
    "cedar-garden-residences": {
      location: "Цюрих, Швейцария",
      client: "Waldner Developments",
      summary:
        "Коллекция городских вилл, где приватность, естественный свет и общие зеленые зоны сбалансированы в единой композиции.",
      challenge:
        "Создать уровень luxury-жилья на компактном участке при строгих ограничениях по инсоляции соседних зданий.",
      solution:
        "Мы сформировали ступенчатые объемы и глубокие лоджии, которые защищают приватность и усиливают солнечное освещение квартир.",
      scope: [
        "Мастер-планирование",
        "Гибридный бетонно-деревянный каркас",
        "Интерьеры общих зон",
        "Ландшафтные работы",
      ],
      metrics: [
        { label: "Средний daylight factor", value: "3.9%" },
        { label: "Переработка строительных отходов", value: "84%" },
        { label: "Продано до завершения", value: "76%" },
      ],
    },
    "atlas-court-campus": {
      location: "Лион, Франция",
      client: "Novum Technologies",
      summary:
        "Штаб-квартира кампусного типа с человекомасштабными дворами, долговечными материалами и низким операционным углеродным следом.",
      challenge:
        "Согласовать архитектурную амбицию с жесткими сроками ввода и целями по снижению embodied carbon.",
      solution:
        "Интегрированный design-build процесс позволил выбрать низкоуглеродный бетон, оптимизировать пролеты и синхронизировать подрядчиков без потери темпа.",
      scope: [
        "Координация design-build",
        "Низкоуглеродная конструктивная стратегия",
        "Фасад и солнцезащитные системы",
        "Благоустроенные атриумы",
      ],
      metrics: [
        { label: "Снижение embodied carbon", value: "31%" },
        { label: "Фаз реализации", value: "3" },
        { label: "Ввод в эксплуатацию", value: "100% в срок" },
      ],
    },
    "riverside-archive-revival": {
      location: "Прага, Чехия",
      client: "City Cultural Council",
      summary:
        "Адаптивное переиспользование бывшего архивного здания в общественный культурно-исследовательский центр.",
      challenge:
        "Модернизировать конструктив и климатические системы без ущерба для архитектурной идентичности памятника.",
      solution:
        "За счет внутренних стальных усилений и точного зонирования HVAC мы сохранили оболочку здания и открыли новые общественные сценарии использования.",
      scope: [
        "Стратегия адаптивного переиспользования",
        "Выборочный демонтаж и усиление",
        "Интеграция технических систем",
        "Общественные интерьеры и выставочные пространства",
      ],
      metrics: [
        { label: "Повторно использованных конструкций", value: "68%" },
        { label: "Посетителей в первый год", value: "240k" },
        { label: "Операционная экономия", value: "27%" },
      ],
    },
  },
  es: {
    "amber-cliff-villa": {
      location: "Porto Cervo, Italia",
      client: "Family Office privado",
      summary:
        "Villa en ladera concebida como una secuencia de terrazas de piedra y pabellones acristalados con vistas al Mediterráneo.",
      challenge:
        "Integrar una residencia privada de gran escala en un terreno inclinado con fuertes restricciones visuales y exposición al viento.",
      solution:
        "Desarrollamos una estructura escalonada de hormigón visto, revestida en piedra caliza local, y coordinamos carpinterías de alto desempeño con protección solar profunda.",
      scope: [
        "Concepto y diseño técnico",
        "Ingeniería estructural y de envolvente",
        "Ejecución llave en mano",
        "Paisajismo y obras exteriores",
      ],
      metrics: [
        { label: "Reducción de demanda energética", value: "42%" },
        { label: "Duración de obra", value: "18 meses" },
        { label: "Incidentes en obra", value: "0" },
      ],
    },
    "north-harbor-business-house": {
      location: "Hamburgo, Alemania",
      client: "Aster Capital Partners",
      summary:
        "Edificio comercial de uso mixto con fachada precisa de acero y vidrio y plantas de oficina altamente adaptables.",
      challenge:
        "Entregar calidad premium de espacios de trabajo manteniendo un cronograma exigente en un entorno urbano activo.",
      solution:
        "Con logística por fases y módulos de fachada prefabricados, acortamos operaciones en sitio y aseguramos acabados de alto nivel.",
      scope: [
        "Planificación preconstructiva",
        "Ejecución de core & shell",
        "Fit-out interior de alta especificación",
        "Coordinación MEP",
      ],
      metrics: [
        { label: "Ganancia de plazo", value: "11 semanas" },
        { label: "Prefabricación de fachada", value: "78%" },
        { label: "Alquilado antes de entrega", value: "92%" },
      ],
    },
    "st-anne-heritage-renovation": {
      location: "Bruselas, Bélgica",
      client: "Montclair Hospitality",
      summary:
        "Restauración y ampliación de un edificio de finales del siglo XIX para transformarlo en un activo hotelero boutique.",
      challenge:
        "Conservar elementos patrimoniales de fachada e incorporar normativas actuales de incendio, acústica y confort.",
      solution:
        "Coordinamos artesanos de conservación con sistemas constructivos contemporáneos, manteniendo la geometría histórica e incorporando capas técnicas discretas.",
      scope: [
        "Levantamiento y estrategia de restauración",
        "Conservación de fachada",
        "Refuerzo estructural",
        "Modernización MEP",
      ],
      metrics: [
        { label: "Elementos protegidos preservados", value: "96%" },
        { label: "Mejora de clase energética", value: "2 niveles" },
        { label: "Satisfacción de huéspedes", value: "4.8/5" },
      ],
    },
    "cedar-garden-residences": {
      location: "Zúrich, Suiza",
      client: "Waldner Developments",
      summary:
        "Conjunto de villas urbanas que equilibran privacidad, luz natural y áreas verdes compartidas.",
      challenge:
        "Crear calidad residencial de lujo en un terreno compacto bajo estrictas normas de asoleamiento vecinal.",
      solution:
        "Diseñamos volúmenes escalonados y balcones profundos para reforzar privacidad y maximizar la entrada de luz en cada unidad.",
      scope: [
        "Plan maestro",
        "Estructura híbrida hormigón-madera",
        "Interiores de áreas comunes",
        "Obras exteriores y paisajismo",
      ],
      metrics: [
        { label: "Factor de luz natural medio", value: "3.9%" },
        { label: "Residuos reciclados", value: "84%" },
        { label: "Unidades vendidas antes de terminar", value: "76%" },
      ],
    },
    "atlas-court-campus": {
      location: "Lyon, Francia",
      client: "Novum Technologies",
      summary:
        "Campus corporativo centrado en patios a escala humana, materiales robustos y baja huella operativa de carbono.",
      challenge:
        "Alinear ambición arquitectónica con hitos de ocupación exigentes y objetivos estrictos de carbono incorporado.",
      solution:
        "El flujo integrado design-build permitió seleccionar hormigón de baja huella, optimizar luces estructurales y sincronizar oficios manteniendo el ritmo.",
      scope: [
        "Coordinación design-build",
        "Estrategia estructural baja en carbono",
        "Envolvente y control solar",
        "Ejecución de atrio ajardinado",
      ],
      metrics: [
        { label: "Reducción de carbono incorporado", value: "31%" },
        { label: "Fases del proyecto", value: "3" },
        { label: "Ocupación lograda", value: "100% a tiempo" },
      ],
    },
    "riverside-archive-revival": {
      location: "Praga, República Checa",
      client: "City Cultural Council",
      summary:
        "Reutilización adaptativa de un antiguo archivo para convertirlo en un equipamiento cultural y de investigación.",
      challenge:
        "Actualizar estructura y climatización sin comprometer la identidad patrimonial del inmueble.",
      solution:
        "Con refuerzos interiores de acero y zonificación HVAC de precisión, preservamos la envolvente y habilitamos nuevos programas públicos.",
      scope: [
        "Estrategia de reutilización adaptativa",
        "Demolición selectiva y refuerzo",
        "Integración de sistemas técnicos",
        "Interiores públicos y zonas expositivas",
      ],
      metrics: [
        { label: "Elementos estructurales reutilizados", value: "68%" },
        { label: "Visitantes el primer año", value: "240k" },
        { label: "Ahorro operativo", value: "27%" },
      ],
    },
  },
};

export function getLocalizedProjectCopy(project: Project, language: Language): ProjectCopy {
  const localized = projectCopyByLanguage[language as Exclude<Language, "en">]?.[project.slug];

  if (!localized) {
    return {
      title: project.title,
      location: project.location,
      client: project.client,
      summary: project.summary,
      challenge: project.challenge,
      solution: project.solution,
      scope: project.scope,
      metrics: project.metrics,
    };
  }

  return localized;
}
