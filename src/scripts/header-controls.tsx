import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, LanguageProvider, ThemeToggle, LanguageSelector } from '../components/ThemeLanguageProvider';

// Header Controls Component
function HeaderControls() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="flex items-center space-x-3">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

// Mount components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Mount desktop header controls
  const desktopContainer = document.getElementById('header-controls');
  if (desktopContainer) {
    const root = createRoot(desktopContainer);
    root.render(<HeaderControls />);
  }

  // Mount mobile header controls
  const mobileContainer = document.getElementById('mobile-header-controls');
  if (mobileContainer) {
    const root = createRoot(mobileContainer);
    root.render(<HeaderControls />);
  }
});
