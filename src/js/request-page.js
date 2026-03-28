import { getLang, setLang, t, applyMeta } from './i18n.js';

/** @type {'en' | 'zh'} */
let lang = getLang();
/** @type {'suggest' | 'subscribe'} */
let mode = 'suggest';
let emailVerified = false;

function renderNav() {
  const toolsLink = document.getElementById('nav-tools');
  const requestLink = document.getElementById('nav-request');
  const langBtn = document.getElementById('nav-lang-toggle');
  if (toolsLink) toolsLink.textContent = t('nav.tools', lang);
  if (requestLink) requestLink.textContent = t('nav.request', lang);
  if (langBtn) {
    langBtn.innerHTML = `<span class="inline-block w-5 text-center" aria-hidden="true">🌐</span> ${lang === 'en' ? t('nav.lang.zh', lang) : t('nav.lang.en', lang)}`;
  }
  requestLink?.classList.add('font-semibold', 'text-blue-600');
}

function updateSubmitState() {
  const btn = document.getElementById('form-submit');
  const name = document.getElementById('input-name');
  const email = document.getElementById('input-email');
  if (!btn || !name || !email) return;
  const n = name.value.trim();
  const e = email.value.trim();
  const valid = emailVerified && n.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  btn.disabled = !valid;
  if (valid) {
    btn.className =
      'mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700';
  } else {
    btn.className =
      'mt-8 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-6 py-3.5 text-base font-semibold text-slate-500';
  }
}

function renderFormCopy() {
  document.getElementById('request-title') &&
    (document.getElementById('request-title').textContent = t('request.title', lang));
  document.getElementById('request-subtitle') &&
    (document.getElementById('request-subtitle').textContent = t('request.subtitle', lang));

  const tabSuggest = document.getElementById('tab-suggest');
  const tabSubscribe = document.getElementById('tab-subscribe');
  if (tabSuggest && tabSubscribe) {
    tabSuggest.textContent = t('request.tab.suggest', lang);
    tabSubscribe.textContent = t('request.tab.subscribe', lang);
    const active =
      'flex-1 rounded-xl border-2 border-blue-600 bg-white px-4 py-3 text-center text-sm font-semibold text-blue-600 sm:text-base';
    const inactive =
      'flex-1 rounded-xl bg-slate-100 px-4 py-3 text-center text-sm font-medium text-slate-500 sm:text-base';
    tabSuggest.className = mode === 'suggest' ? active : inactive;
    tabSubscribe.className = mode === 'subscribe' ? active : inactive;
  }

  const lName = document.getElementById('label-name');
  const lEmail = document.getElementById('label-email');
  const lExtra = document.getElementById('label-extra');
  if (lName) lName.textContent = t('request.name', lang);
  if (lEmail) lEmail.textContent = t('request.email', lang);
  if (lExtra)
    lExtra.textContent =
      mode === 'suggest' ? t('request.toolDesc', lang) : t('request.subscribeNote', lang);

  const name = document.getElementById('input-name');
  const email = document.getElementById('input-email');
  const extra = document.getElementById('input-extra');
  const sendCode = document.getElementById('btn-send-code');
  const hint = document.getElementById('verify-hint');
  const submit = document.getElementById('form-submit');

  if (name) name.placeholder = t('request.namePlaceholder', lang);
  if (email) email.placeholder = t('request.emailPlaceholder', lang);
  if (extra)
    extra.placeholder =
      mode === 'suggest' ? t('request.toolPlaceholder', lang) : t('request.subscribePlaceholder', lang);
  if (sendCode) sendCode.textContent = t('request.sendCode', lang);
  if (hint) hint.textContent = t('request.verifyHint', lang);
  if (submit) {
    submit.innerHTML = `<span>${escapeHtml(t('request.submit', lang))}</span><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>`;
  }

  updateSubmitState();
}

function escapeHtml(str) {
  const el = document.createElement('div');
  el.textContent = str;
  return el.innerHTML;
}

export function initRequestPage() {
  lang = getLang();
  setLang(lang);
  applyMeta('request');
  renderNav();
  renderFormCopy();

  document.getElementById('tab-suggest')?.addEventListener('click', () => {
    mode = 'suggest';
    renderFormCopy();
  });
  document.getElementById('tab-subscribe')?.addEventListener('click', () => {
    mode = 'subscribe';
    renderFormCopy();
  });

  document.getElementById('nav-lang-toggle')?.addEventListener('click', () => {
    lang = lang === 'en' ? 'zh' : 'en';
    setLang(lang);
    applyMeta('request');
    renderNav();
    renderFormCopy();
  });

  ['input-name', 'input-email', 'input-extra'].forEach((id) => {
    document.getElementById(id)?.addEventListener('input', updateSubmitState);
  });

  document.getElementById('btn-send-code')?.addEventListener('click', () => {
    const email = document.getElementById('input-email');
    const val = email?.value?.trim() ?? '';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      email?.focus();
      return;
    }
    emailVerified = true;
    const toast = document.getElementById('code-toast');
    if (toast) {
      toast.textContent = t('request.codeSent', lang);
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 4000);
    }
    updateSubmitState();
  });

  document.getElementById('form-submit')?.addEventListener('click', (e) => {
    e.preventDefault();
    updateSubmitState();
    const btn = document.getElementById('form-submit');
    if (btn?.disabled) return;
    const msg =
      mode === 'suggest' ? t('request.successSuggest', lang) : t('request.successSubscribe', lang);
    alert(msg);
    emailVerified = false;
    document.getElementById('input-name') && (document.getElementById('input-name').value = '');
    document.getElementById('input-email') && (document.getElementById('input-email').value = '');
    document.getElementById('input-extra') && (document.getElementById('input-extra').value = '');
    updateSubmitState();
  });
}
