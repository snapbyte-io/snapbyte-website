import { translations } from '../data/languages';

class I18n {
  private currentLanguage: string = 'en';
  private observers: Set<() => void> = new Set();

  constructor() {
    // Load saved language
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      this.currentLanguage = savedLanguage;
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang]) {
        this.currentLanguage = browserLang;
      }
    }

    // Listen for language changes
    window.addEventListener('languageChange', (event) => {
      const customEvent = event as CustomEvent;
      this.setLanguage(customEvent.detail.language);
    });

    // Initial translation
    this.translatePage();
  }

  setLanguage(language: string) {
    if (translations[language]) {
      this.currentLanguage = language;
      localStorage.setItem('language', language);
      this.translatePage();
      this.notifyObservers();
    }
  }

  getLanguage() {
    return this.currentLanguage;
  }

  t(key: string): string {
    const translation = translations[this.currentLanguage];
    return (translation as any)[key] || key;
  }

  translatePage() {
    // Translate elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        const translation = this.t(key);
        if (element.tagName === 'INPUT' && element.getAttribute('type') === 'text') {
          (element as HTMLInputElement).placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update page title if needed
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey) {
      document.title = this.t(titleKey);
    }

    // Dispatch custom event for React components
    window.dispatchEvent(new CustomEvent('i18nUpdate', {
      detail: { language: this.currentLanguage }
    }));
  }

  subscribe(callback: () => void) {
    this.observers.add(callback);
    return () => this.observers.delete(callback);
  }

  private notifyObservers() {
    this.observers.forEach(callback => callback());
  }
}

// Create global instance
const i18n = new I18n();

// Make it available globally
(window as any).i18n = i18n;

export default i18n;
