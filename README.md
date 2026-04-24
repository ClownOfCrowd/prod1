# Arcstone Construct - Portfolio Website

Продакшн-портфолио для премиальной строительной компании.

Проект собран на Next.js App Router и ориентирован на демонстрацию кейсов: жилые виллы, коммерческие объекты и архитектурная реновация.

## Технологии

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (точечно, для легких анимаций)

## Быстрый старт

Требования:

- Node.js 20+
- npm 10+

Установка и запуск:

```bash
npm install
npm run dev
```

Приложение будет доступно по адресу http://localhost:3000.

## Скрипты

```bash
npm run dev      # локальная разработка
npm run lint     # проверка ESLint
npm run build    # production build
npm run start    # запуск production-сборки
```

## Структура

- app - страницы и роуты App Router
- app/projects/[slug] - карточка проекта (SSG)
- components - UI-компоненты и секции
- lib - данные, типы и утилиты

## Что важно в реализации

- Адаптивный mobile-first интерфейс
- Sticky navbar с поведением на скролле
- Фильтрация проектов по категориям
- Skeleton loading для каталога проектов
- ARIA-атрибуты в контактной форме
- Cookie consent (localStorage)
- Оптимизация изображений через next/image

## Сборка перед деплоем

```bash
npm run lint
npm run build
```

Если оба шага проходят без ошибок, проект готов к выкладке.
