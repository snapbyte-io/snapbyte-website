import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, LanguageProvider, ThemeToggle, LanguageSelector } from './ThemeLanguageProvider';

// Header Controls Component
const HeaderControls: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="flex items-center space-x-3">
          <LanguageSelector />
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
          <ThemeToggle />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

// Mount function for desktop header
export function mountHeaderControls() {
  const container = document.getElementById('header-controls');
  if (container && !container.hasChildNodes()) {
    const root = createRoot(container);
    root.render(<HeaderControls />);
  }
}

// Mount function for mobile header
export function mountMobileHeaderControls() {
  const container = document.getElementById('mobile-header-controls');
  if (container && !container.hasChildNodes()) {
    const root = createRoot(container);
    root.render(<HeaderControls />);
  }
}

// Auto-mount when DOM is ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    mountHeaderControls();
    mountMobileHeaderControls();
  });
}
