import { tools } from '../data/tools.js';
import { getLang, setLang, t, applyMeta } from './i18n.js';

function escapeHtml(str) {
  const el = document.createElement('div');
  el.textContent = str;
  return el.innerHTML;
}

/** @type {'en' | 'zh'} */
let lang = getLang();
let searchQuery = '';
/** @type {string} */
let activeCategory = 'all';
/** @type {import('../data/tools.js').tools[0] | null} */
let selectedTool = null;

const categoryKeys = [
  'all',
  'blacklist',
  'dns',
  'warmup',
  'design',
  'deliverability',
];

function pricingLabel(p) {
  return t(`pricing.${p}`, lang);
}

function badgeKey(cat) {
  return `badge.${cat}`;
}

function filteredTools() {
  const q = searchQuery.trim().toLowerCase();
  return tools.filter((tool) => {
    if (activeCategory !== 'all' && tool.category !== activeCategory) return false;
    if (!q) return true;
    const name = tool.name.toLowerCase();
    const desc = t(tool.descriptionKey, lang).toLowerCase();
    return name.includes(q) || desc.includes(q);
  });
}

function renderNav() {
  const toolsLink = document.getElementById('nav-tools');
  const requestLink = document.getElementById('nav-request');
  const langBtn = document.getElementById('nav-lang-toggle');
  if (toolsLink) toolsLink.textContent = t('nav.tools', lang);
  if (requestLink) requestLink.textContent = t('nav.request', lang);
  if (langBtn) {
    langBtn.innerHTML = `<span class="inline-block w-5 text-center" aria-hidden="true">🌐</span> ${lang === 'en' ? t('nav.lang.zh', lang) : t('nav.lang.en', lang)}`;
    langBtn.setAttribute('aria-label', lang === 'en' ? 'Switch to Chinese' : 'Switch to English');
  }
}

function renderHero() {
  const h1 = document.getElementById('hero-title');
  const sub = document.getElementById('hero-subtitle');
  if (h1) h1.textContent = t('hero.title', lang);
  if (sub) sub.textContent = t('hero.subtitle', lang);
}

function renderFooter() {
  const el = document.querySelector('[data-i18n-footer]');
  if (el) el.textContent = t('footer.note', lang);
}

function renderFilters() {
  const search = document.getElementById('search-input');
  if (search) {
    search.placeholder = t('search.placeholder', lang);
    search.value = searchQuery;
  }
  const container = document.getElementById('category-filters');
  if (!container) return;
  container.innerHTML = '';
  categoryKeys.forEach((key) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className =
      'shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ' +
      (activeCategory === key
        ? 'bg-blue-600 text-white shadow-sm'
        : 'bg-slate-100 text-slate-700 hover:bg-slate-200');
    btn.textContent = t(`filter.${key}`, lang);
    btn.dataset.category = key;
    btn.addEventListener('click', () => {
      activeCategory = key;
      renderFilters();
      renderGrid();
    });
    container.appendChild(btn);
  });
}

function renderGrid() {
  const grid = document.getElementById('tools-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const list = filteredTools();
  list.forEach((tool) => {
    const article = document.createElement('article');
    article.className =
      'group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-md';
    article.setAttribute('role', 'button');
    article.setAttribute('tabindex', '0');
    article.dataset.toolId = tool.id;

    const badge = document.createElement('span');
    badge.className =
      'absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-600 shadow-sm';
    badge.textContent = t(badgeKey(tool.category), lang);

    const imgWrap = document.createElement('div');
    imgWrap.className = 'relative aspect-[16/10] overflow-hidden bg-slate-100';
    const img = document.createElement('img');
    img.src = tool.image;
    img.alt = '';
    img.className = 'h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]';
    img.loading = 'lazy';
    img.decoding = 'async';
    imgWrap.appendChild(badge);
    imgWrap.appendChild(img);

    const body = document.createElement('div');
    body.className = 'flex flex-1 flex-col p-4';
    const title = document.createElement('h3');
    title.className = 'text-lg font-bold text-slate-900';
    title.textContent = tool.name;
    const desc = document.createElement('p');
    desc.className = 'mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600';
    desc.textContent = t(tool.descriptionKey, lang);
    const linkRow = document.createElement('a');
    linkRow.className = 'mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline';
    linkRow.href = tool.link;
    linkRow.target = '_blank';
    linkRow.rel = 'noopener noreferrer';
    linkRow.innerHTML = `<span>${escapeHtml(t('card.visit', lang))}</span><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`;
    linkRow.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(linkRow);

    article.appendChild(imgWrap);
    article.appendChild(body);

    const open = () => {
      selectedTool = tool;
      renderDrawer();
    };
    article.addEventListener('click', (e) => {
      e.preventDefault();
      open();
    });
    article.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });

    grid.appendChild(article);
  });
}

function renderDrawer() {
  const backdrop = document.getElementById('drawer-backdrop');
  const panel = document.getElementById('drawer-panel');
  const root = document.getElementById('drawer-content');
  if (!backdrop || !panel || !root) return;

  if (!selectedTool) {
    backdrop.classList.add('hidden');
    panel.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
    return;
  }

  const tool = selectedTool;
  backdrop.classList.remove('hidden');
  panel.classList.remove('translate-x-full');
  document.body.classList.add('overflow-hidden');

  root.replaceChildren();
  const wrap = document.createElement('div');
  wrap.className = 'space-y-6';

  const head = document.createElement('div');
  const badge = document.createElement('p');
  badge.className = 'text-xs font-semibold uppercase tracking-wide text-blue-600';
  badge.textContent = t(badgeKey(tool.category), lang);
  const h2 = document.createElement('h2');
  h2.className = 'mt-1 text-2xl font-bold text-slate-900';
  h2.id = 'drawer-heading';
  h2.textContent = tool.name;
  head.appendChild(badge);
  head.appendChild(h2);

  const purposeBlock = document.createElement('div');
  const hPurpose = document.createElement('h3');
  hPurpose.className = 'text-sm font-semibold text-slate-800';
  hPurpose.textContent = t('drawer.purpose', lang);
  const pPurpose = document.createElement('p');
  pPurpose.className = 'mt-1 text-sm leading-relaxed text-slate-600';
  pPurpose.textContent = t(tool.descriptionKey, lang);
  purposeBlock.appendChild(hPurpose);
  purposeBlock.appendChild(pPurpose);

  const linkBlock = document.createElement('div');
  const hLink = document.createElement('h3');
  hLink.className = 'text-sm font-semibold text-slate-800';
  hLink.textContent = t('drawer.link', lang);
  const a = document.createElement('a');
  a.href = tool.link;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.className = 'mt-1 inline-flex break-all text-sm font-medium text-blue-600 hover:underline';
  a.textContent = tool.link;
  linkBlock.appendChild(hLink);
  linkBlock.appendChild(a);

  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-2 gap-4';
  const catCell = document.createElement('div');
  const hCat = document.createElement('h3');
  hCat.className = 'text-sm font-semibold text-slate-800';
  hCat.textContent = t('drawer.category', lang);
  const pCat = document.createElement('p');
  pCat.className = 'mt-1 text-sm text-slate-600';
  pCat.textContent = t(`filter.${tool.category}`, lang);
  catCell.appendChild(hCat);
  catCell.appendChild(pCat);
  const priceCell = document.createElement('div');
  const hPrice = document.createElement('h3');
  hPrice.className = 'text-sm font-semibold text-slate-800';
  hPrice.textContent = t('drawer.pricing', lang);
  const pPrice = document.createElement('p');
  pPrice.className = 'mt-1 text-sm text-slate-600';
  pPrice.textContent = pricingLabel(tool.pricing);
  priceCell.appendChild(hPrice);
  priceCell.appendChild(pPrice);
  grid.appendChild(catCell);
  grid.appendChild(priceCell);

  const usageBlock = document.createElement('div');
  const hUsage = document.createElement('h3');
  hUsage.className = 'text-sm font-semibold text-slate-800';
  hUsage.textContent = t('drawer.usage', lang);
  const pUsage = document.createElement('p');
  pUsage.className = 'mt-1 text-sm leading-relaxed text-slate-600';
  pUsage.textContent = t(tool.usageInstructionsKey, lang);
  usageBlock.appendChild(hUsage);
  usageBlock.appendChild(pUsage);

  wrap.appendChild(head);
  wrap.appendChild(purposeBlock);
  wrap.appendChild(linkBlock);
  wrap.appendChild(grid);
  wrap.appendChild(usageBlock);
  root.appendChild(wrap);

  const closeBtn = document.getElementById('drawer-close');
  if (closeBtn) closeBtn.textContent = t('drawer.close', lang);
}

function closeDrawer() {
  selectedTool = null;
  renderDrawer();
}

export function initHome() {
  lang = getLang();
  setLang(lang);
  applyMeta('home');

  renderNav();
  renderHero();
  renderFooter();
  renderFilters();
  renderGrid();

  const search = document.getElementById('search-input');
  if (search) {
    search.addEventListener('input', (e) => {
      const t = /** @type {HTMLInputElement} */ (e.target);
      searchQuery = t.value;
      renderGrid();
    });
  }

  const langBtn = document.getElementById('nav-lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      lang = lang === 'en' ? 'zh' : 'en';
      setLang(lang);
      applyMeta('home');
      renderNav();
      renderHero();
      renderFooter();
      renderFilters();
      renderGrid();
      if (selectedTool) renderDrawer();
    });
  }

  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('drawer-close');
  backdrop?.addEventListener('click', closeDrawer);
  closeBtn?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && selectedTool) closeDrawer();
  });

}
