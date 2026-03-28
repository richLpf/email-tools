import { translations } from '../i18n/translations.js';

const STORAGE_KEY = 'mailtools-lang';

/** @returns {'en' | 'zh'} */
export function getLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'zh' || stored === 'en') return stored;
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

/** @param {'en' | 'zh'} lang */
export function setLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

/**
 * @param {string} key
 * @param {'en' | 'zh'} [lang]
 */
export function t(key, lang) {
  const l = lang ?? getLang();
  const table = translations[l] || translations.en;
  return table[key] ?? translations.en[key] ?? key;
}

/** @param {string} page 'home' | 'request' */
export function applyMeta(page) {
  const lang = getLang();
  const titleKey = page === 'home' ? 'meta.home.title' : 'meta.request.title';
  const descKey = page === 'home' ? 'meta.home.desc' : 'meta.request.desc';
  document.title = t(titleKey, lang);
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', t(descKey, lang));
}
