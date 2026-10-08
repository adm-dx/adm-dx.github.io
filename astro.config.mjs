// @ts-check
import { defineConfig } from 'astro/config';

// Деплой на GitHub Pages.
//
// Сейчас заложен вариант "user site": репозиторий называется adm-dx.github.io,
// сайт лежит в корне домена, поэтому base = '/'.
//
// Если репозиторий будет называться иначе (например resume), сайт окажется по адресу
// https://adm-dx.github.io/resume/ — тогда добавь сюда base: '/resume/'.
// Все ссылки и ассеты в коде собираются через хелперы из src/lib/url.ts,
// так что менять нужно только эту строку.
export default defineConfig({
  site: 'https://adm-dx.github.io',
  base: '/',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
});
