import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { languages, translations, type Translation } from '../data/languages';

// Theme Context
export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translation;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Theme Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Language Provider
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState('en');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang]) {
        setLanguageState(browserLang);
      }
    }

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguageState(event.detail.language);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Dispatch event for i18n system
    window.dispatchEvent(new CustomEvent('languageChange', {
      detail: { language: lang }
    }));
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hooks
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Theme Toggle Component
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div
        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <svg
          className={`w-3 h-3 text-yellow-500 transition-opacity duration-300 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8zM12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
        <svg
          className={`w-3 h-3 text-gray-400 transition-opacity duration-300 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
    </button>
  );
}

// Language Selector Component
export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentLang.code.toUpperCase()}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                language === lang.code
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              } ${index === 0 ? 'rounded-t-lg' : ''} ${
                index === languages.length - 1 ? 'rounded-b-lg' : ''
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
              {language === lang.code && (
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
