/**
 * Сборка путей с учётом `base` из astro.config.mjs.
 *
 * На GitHub Pages сайт может лежать не в корне домена (например /resume/),
 * поэтому все внутренние ссылки и ассеты обязаны проходить через `withBase`.
 * Иначе при смене `base` они молча сломаются.
 */

const BASE = import.meta.env.BASE_URL;

/** `withBase('Resume.pdf')` → `/Resume.pdf` или `/resume/Resume.pdf`. */
export function withBase(path: string): string {
  const base = BASE.endsWith('/') ? BASE : `${BASE}/`;
  return `${base}${path.replace(/^\//, '')}`;
}

/** Абсолютный URL для og:url, canonical и JSON-LD. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(withBase(path), site).href;
}
