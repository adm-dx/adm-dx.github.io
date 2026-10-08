/**
 * Единая форма резюме. Каждая языковая версия (`resume.en.ts`, `resume.ru.ts`)
 * реализует этот интерфейс, поэтому вёрстка пишется один раз, а структуры
 * невозможно рассинхронизировать — TypeScript не даст.
 */

export interface Contact {
  /** Что видит пользователь: "adm.dx@outlook.com", "github.com/adm-dx". */
  label: string;
  /** Полный href: "mailto:…", "https://…". */
  href: string;
  /** Имя иконки из src/components/Icon.astro. */
  icon: IconName;
  /** Пометка рядом со ссылкой, например "preferred". */
  note?: string;
}

export type IconName =
  | 'mail'
  | 'github'
  | 'telegram'
  | 'linkedin'
  | 'link'
  | 'download'
  | 'sun'
  | 'moon';

export interface Profile {
  name: string;
  /** Должность под именем: "Senior QA Engineer". */
  title: string;
  /** Короткая строка о локации и формате работы. */
  location: string;
  /** Юридический статус, формат занятости и прочие условия — по строке на пункт. */
  availability: string[];
  contacts: Contact[];
}

export interface Job {
  company: string;
  /** Роль в компании: "Senior QA Engineer (Manual), release owner". */
  role: string;
  /** Период: "February 2025 — present". */
  period: string;
  /** Город и формат: "Vienna, Austria (remote)". */
  location: string;
  /** Домен бизнеса: "PropTech, B2B SaaS". */
  industry?: string;
  /** Абзац о компании или о команде. */
  about?: string;
  achievements: string[];
}

export interface SkillGroup {
  /** Название группы: "Testing", "Automation". */
  label: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  /** Технологии проекта — рендерятся чипами. */
  stack: string[];
  /** Ссылка на исходники. Пока не указана, карточка рендерится без ссылок. */
  repo?: string;
  /** Ссылка на живое демо. */
  demo?: string;
}

export interface EducationEntry {
  /** Учебное заведение или платформа. */
  institution: string;
  /** Специальность, степень или название курса. */
  qualification: string;
  /** Год или статус: "2006", "in progress". */
  period: string;
}

export interface LanguageSkill {
  language: string;
  /** Уровень: "native", "B1 (Intermediate)". */
  level: string;
}

/** Подписи интерфейса — всё, что не берётся из текста резюме. */
export interface UiStrings {
  downloadPdf: string;
  /** Подпись переключателя языка: название *другого* языка. */
  switchLanguage: string;
  toggleTheme: string;
  /** Заголовки секций. */
  sections: {
    summary: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    languages: string;
  };
  /** Подписи ссылок в карточке проекта. */
  projectRepo: string;
  projectDemo: string;
  /** Текст в подвале, {year} подставляется при рендере. */
  footer: string;
}

export interface ResumeData {
  /** Код языка для атрибута lang и hreflang. */
  lang: 'en' | 'ru';
  /** Корневой путь языковой версии относительно base: '' для EN, 'ru/' для RU. */
  path: '' | 'ru/';
  /** Тег <title> и og:title. */
  pageTitle: string;
  /** meta description и og:description. */
  pageDescription: string;
  profile: Profile;
  /** Абзацы блока Summary. */
  summary: string[];
  /** Заголовок секции опыта с указанием стажа: "Work experience — 7 years". */
  experienceHeading: string;
  jobs: Job[];
  projects: Project[];
  skills: SkillGroup[];
  education: EducationEntry[];
  /** Строка с курсами под списком образования. */
  courses?: string;
  languages: LanguageSkill[];
  ui: UiStrings;
}
