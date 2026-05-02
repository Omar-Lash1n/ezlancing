import { Injectable, signal, effect } from '@angular/core';

export type Lang = 'en' | 'ar';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<Lang>('en');
  translations = signal<any>({});
  isRtl = signal(false);

  constructor() {
    const saved = localStorage.getItem('ezlancing-lang') as Lang;
    if (saved) {
      this.currentLang.set(saved);
    }
    this.loadTranslations(this.currentLang());
    effect(() => {
      const lang = this.currentLang();
      this.isRtl.set(lang === 'ar');
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', lang);
      document.body.style.fontFamily = lang === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif";
      localStorage.setItem('ezlancing-lang', lang);
    });
  }

  async loadTranslations(lang: Lang) {
    try {
      const res = await fetch(`/i18n/${lang}.json`);
      const data = await res.json();
      this.translations.set(data);
    } catch (e) {
      console.error('Failed to load translations', e);
    }
  }

  toggle() {
    const next: Lang = this.currentLang() === 'en' ? 'ar' : 'en';
    this.currentLang.set(next);
    this.loadTranslations(next);
  }

  t(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations();
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }
}
