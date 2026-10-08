# Сайт-визитка — Roman Miller, Senior QA Engineer

Статический сайт на [Astro](https://astro.build/). Две языковые версии (EN и RU),
тёмная тема, кнопка скачивания PDF. Деплоится на GitHub Pages.

## Запуск

```bash
npm install
npm run dev        # http://localhost:4321/
```

Другие команды:

| Команда | Что делает |
|---|---|
| `npm run build` | собирает прод-версию в `dist/` |
| `npm run preview` | локально отдаёт собранный `dist/` |
| `npm run check` | проверка типов и шаблонов (`astro check`) |
| `npm run og` | пересобирает `public/og.png` — превью для соцсетей |

## Как обновлять контент

**Разметку трогать не нужно.** Весь текст резюме лежит в двух файлах:

- `src/data/resume.en.ts` — английская версия;
- `src/data/resume.ru.ts` — русская.

Оба подчиняются интерфейсу `ResumeData` из `src/data/types.ts`. Если добавить поле в одну
версию и забыть про другую, `npm run check` упадёт — структуры нельзя рассинхронизировать.

Добавить место работы — новый объект в массив `jobs`. Добавить проект — объект в `projects`
(поля `repo` и `demo` необязательные: без них карточка просто рендерится без ссылок).

Обновить PDF — положить новый файл в `public/Resume.pdf`.

## Структура

```
src/
  data/           контент резюме + типы — единственный источник правды
  components/     Hero, Section, JobCard, SkillGroup, ProjectCard, Icon, ThemeToggle
                  ResumePage.astro — вся страница целиком
  layouts/        Base.astro — head, SEO, JSON-LD, анти-FOUC скрипт темы
  lib/url.ts      хелперы путей с учётом base
  styles/         global.css — токены палитры, светлая и тёмная темы
  pages/
    index.astro      EN, передаёт resumeEn в ResumePage
    ru/index.astro   RU, передаёт resumeRu
public/           Resume.pdf, favicon.svg, robots.txt
```

## Тема оформления

Палитра — CSS-переменные на `:root` в `src/styles/global.css`. По умолчанию берётся системная
настройка (`prefers-color-scheme`); явный выбор пользователя пишется в `localStorage` и
перебивает систему через `data-theme` на `<html>`.

Чтобы при тёмной теме не мигало белым, начальное значение `data-theme` ставит маленький
инлайн-скрипт в `<head>` (`src/layouts/Base.astro`) — до первой отрисовки.

## Деплой

Workflow `.github/workflows/deploy.yml` собирает сайт и публикует на GitHub Pages при каждом
пуше в `main`.

Что нужно сделать один раз:

1. Создать репозиторий на GitHub и запушить ветку `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. Проверить `base` в `astro.config.mjs`:
   - репозиторий `adm-dx.github.io` → `base: '/'` (так настроено сейчас);
   - любое другое имя, например `resume` → `base: '/resume/'`.

   Все внутренние ссылки собираются через `withBase()` из `src/lib/url.ts`, поэтому менять
   нужно только эту строку в конфиге.

## Фото

`src/assets/roman-miller.jpg` — квадрат 1000×1000, подключён через `<Image>` из
`astro:assets` в `src/components/Hero.astro`. Astro сам режет его в WebP под 1x и 2x,
в итоге около 1.4 и 3.8 КБ.

Чтобы заменить: положить новый квадратный файл (от 800×800) и поправить импорт в `Hero.astro`.
Оптимизацией занимается `sharp` — он приходит зависимостью Astro, ставить отдельно не нужно.

## Превью для соцсетей

`public/og.png` (1200×630) — то, что показывают Telegram, LinkedIn и Slack при вставке
ссылки. Собирается скриптом `scripts/generate-og.mjs` из того же фото и тех же цветов,
что и тёмная тема сайта.

Картинка закоммичена в репозиторий, на CI её не строят — иначе результат зависел бы от
набора шрифтов в раннере. После смены имени, должности или фото пересобрать:

```bash
npm run og
```
