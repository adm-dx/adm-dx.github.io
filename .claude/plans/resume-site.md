# Сайт-визитка Романа Миллера

## Контекст

Персональная веб-визитка на основе `Resume.pdf` (Senior QA Engineer, 7 лет, fintech + B2B SaaS,
remote из Сербии). Публичная страница, которую можно дать рекрутеру вместо/вместе с PDF.

Решения:

| | |
|---|---|
| Стек | Astro 7 + TypeScript (strict), без UI-фреймворков и CSS-библиотек |
| Языки | EN (основной) + RU, переключатель в шапке |
| Хостинг | GitHub Pages через GitHub Actions |
| Блоки | кнопка «Скачать PDF», фото, секция «Проекты», тёмная тема |

Ключевая идея: весь контент резюме лежит в типизированных data-файлах
(`src/data/resume.en.ts`, `resume.ru.ts`), оба подчиняются одному интерфейсу `ResumeData`.
Вёрстка пишется один раз, обе языковые версии — один шаблон с разными данными.
Рассинхронизировать структуры нельзя — TypeScript не даст.

## Чеклист

### Этап 1 — каркас проекта
- [x] `package.json`, `tsconfig.json` (extends `astro/tsconfigs/strict`), `.gitignore`
- [x] `astro.config.mjs` (`site` + `base`)
- [x] `npm install`
- [x] удалить скаффолд `src/index.ts`

### Этап 2 — контент
- [x] `src/data/types.ts` — `ResumeData`, `Job`, `SkillGroup`, `Project`, …
- [x] `src/data/resume.en.ts` — дословный перенос из PDF (5 позиций, 7 групп скиллов)
- [x] `src/data/resume.ru.ts` — перевод, та же структура

### Этап 3 — вёрстка
- [x] `src/styles/global.css` — CSS-переменные, светлая/тёмная палитра
- [x] `src/layouts/Base.astro` — head, OG, JSON-LD Person, hreflang, анти-FOUC скрипт темы
- [x] `src/components/Hero.astro` — фото, контакты, PDF, переключатели языка и темы
- [x] `src/components/Section.astro`, `JobCard.astro`, `SkillGroup.astro`, `ProjectCard.astro`
- [x] `src/pages/index.astro` (EN), `src/pages/ru/index.astro` (RU)

### Этап 4 — ассеты
- [x] `public/Resume.pdf`
- [x] `public/favicon.svg`
- [x] фото в `src/assets/roman-miller.jpg` + `<Image>` из `astro:assets`
- [ ] `public/og.png` — карточка для соцсетей

### Этап 5 — деплой
- [x] `.github/workflows/deploy.yml`
- [x] `README.md`
- [x] репозиторий adm-dx/adm-dx.github.io, remote добавлен, ветка `main`
- [x] `base: '/'` — user-site в корне домена, менять не потребовалось
- [ ] Settings → Pages → Source: GitHub Actions — **за пользователем**
- [ ] `git push -u origin main`

### Этап 6 — проверка
- [x] `npx astro check` — ноль ошибок
- [x] `npm run build` — без ошибок
- [x] `npm run preview`: `/` → 200, `/ru/` → 200, `/Resume.pdf` → 200
- [ ] визуальная проверка в браузере: переключатели, мобильная ширина 375px — **за пользователем**
- [ ] Lighthouse: 100 по Performance / Accessibility / SEO

## Ждём от пользователя (доработки)

1. ~~**Имя GitHub-репозитория.**~~ adm-dx/adm-dx.github.io — user-site, `base: '/'` подошёл как есть.
2. ~~**Фото**~~ Готово: `src/assets/roman-miller.jpg`, 1000×1000.
3. ~~**Expense Tracker** — ссылка на репо, демо, описание, стек.~~ Готово:
   github.com/adm-dx/expense-tracker, стек и описание вытащены из README.
   Живого демо у проекта нет — если появится, добавить поле `demo` в `projects`.
4. Телефон и почта со страницы убраны (спам-боты); в PDF остаются.
   Прямой контакт на странице — Telegram @adm_dx.
5. **LinkedIn** — ссылка не прислана, иконка и тип готовы.
6. Свой домен, аналитика, акцентный цвет — дефолты заложены, можно менять.
