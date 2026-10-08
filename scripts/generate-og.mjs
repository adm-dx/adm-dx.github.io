/**
 * Генерирует public/og.png — превью 1200×630 для соцсетей и мессенджеров.
 *
 * Запуск: npm run og
 *
 * Картинка собирается один раз и коммитится в репозиторий: на CI её не строят,
 * чтобы не зависеть от набора шрифтов в раннере. Перезапускать нужно, только если
 * поменялись имя, должность или фото.
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const W = 1200;
const H = 630;
const AVATAR = 300;
const AVATAR_X = 96;
const TEXT_X = AVATAR_X + AVATAR + 64;

// Те же токены, что и в тёмной теме сайта (src/styles/global.css).
const BG = '#0f1216';
const SURFACE = '#161b22';
const TEXT = '#e6eaf0';
const ACCENT = '#6aa6e8';
const MUTED = '#a3adba';
const FAINT = '#7a8593';

const name = 'Roman Miller';
const title = 'Senior QA Engineer';
const tagline = '7 years in QA · fintech and B2B SaaS';
const site = 'adm-dx.github.io';

const font = "'Segoe UI', 'Noto Sans', 'DejaVu Sans', sans-serif";

const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BG}"/>
      <stop offset="100%" stop-color="${SURFACE}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="8" fill="${ACCENT}"/>

  <text x="${TEXT_X}" y="226" font-family="${font}" font-size="68" font-weight="600" fill="${TEXT}">${name}</text>
  <text x="${TEXT_X}" y="294" font-family="${font}" font-size="40" font-weight="500" fill="${ACCENT}">${title}</text>
  <text x="${TEXT_X}" y="354" font-family="${font}" font-size="27" fill="${MUTED}">${tagline}</text>
  <text x="${TEXT_X}" y="416" font-family="${font}" font-size="25" fill="${FAINT}">${site}</text>
</svg>
`);

// Круглая маска для аватара: альфа-канал круга вырезает фото по форме.
const mask = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${AVATAR}" height="${AVATAR}">
  <circle cx="${AVATAR / 2}" cy="${AVATAR / 2}" r="${AVATAR / 2}" fill="#fff"/>
</svg>
`);

const avatar = await sharp(join(root, 'src/assets/roman-miller.jpg'))
  .resize(AVATAR, AVATAR)
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer();

const out = join(root, 'public/og.png');

const info = await sharp(background)
  .composite([{ input: avatar, left: AVATAR_X, top: Math.round((H - AVATAR) / 2) }])
  .png({ compressionLevel: 9, palette: true })
  .toFile(out);

console.log(`public/og.png — ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
