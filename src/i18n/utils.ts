import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  let pathname = url.pathname;
  if (pathname.startsWith(basePath)) {
      pathname = pathname.substring(basePath.length);
  }
  const [, lang] = pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
    let p = path;
    if (p.startsWith(basePath)) {
        p = p.substring(basePath.length);
    }
    const translated = !showDefaultLang && l === defaultLang ? p : `/${l}${p}`;
    return translated.replace(/\/+/g, '/');
  }
}

const localeMap: Record<string, string> = {
  en: 'en-US',
  hi: 'hi-IN',
  ja: 'ja-JP',
};

export function getLocaleForDate(lang: string): string {
  return localeMap[lang] || 'en-US';
}

export function getPostsForLang(posts: { id: string }[], lang: string) {
  if (lang === defaultLang) {
    return posts.filter(post => !post.id.includes('/'));
  }
  return posts.filter(post => post.id.startsWith(`${lang}/`));
}

export function stripLangPrefix(id: string, lang: string): string {
  if (lang === defaultLang) return id;
  return id.replace(`${lang}/`, '');
}
