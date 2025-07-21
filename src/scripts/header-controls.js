// Theme and Language Controls
export function initializeHeaderControls() {
  // Initialize theme toggle
  createThemeToggle();
  createLanguageSelector();
}

function createThemeToggle() {
  const containers = ['header-controls', 'mobile-header-controls'];
  
  containers.forEach(containerId => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    themeToggle.innerHTML = `
      <svg class="w-5 h-5 block dark:hidden" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
      </svg>
      <svg class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
      </svg>
    `;
    
    themeToggle.addEventListener('click', toggleTheme);
    container.appendChild(themeToggle);
  });
}

function createLanguageSelector() {
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];
  
  const containers = ['header-controls', 'mobile-header-controls'];
  
  containers.forEach(containerId => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Create language selector
    const languageSelector = document.createElement('div');
    languageSelector.className = 'relative';
    
    const currentLang = localStorage.getItem('language') || 'en';
    const selectedLang = languages.find(lang => lang.code === currentLang) || languages[0];
    
    languageSelector.innerHTML = `
      <button class="flex items-center space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200" onclick="toggleLanguageDropdown('${containerId}')">
        <span class="text-sm">${selectedLang.flag}</span>
        <span class="text-sm font-medium hidden sm:block">${selectedLang.code.toUpperCase()}</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div class="language-dropdown absolute top-full ${containerId === 'mobile-header-controls' ? 'left-1/2 transform -translate-x-1/2' : 'right-0'} mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50 hidden min-w-[160px]">
        ${languages.map(lang => `
          <button class="w-full flex items-center space-x-3 px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" onclick="selectLanguage('${lang.code}')">
            <span>${lang.flag}</span>
            <span class="text-sm font-medium">${lang.name}</span>
          </button>
        `).join('')}
      </div>
    `;
    
    container.appendChild(languageSelector);
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
  
  localStorage.setItem('theme', newTheme);
}

function toggleLanguageDropdown(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const dropdown = container.querySelector('.language-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
  
  // Close other dropdowns
  const otherContainers = ['header-controls', 'mobile-header-controls'].filter(id => id !== containerId);
  otherContainers.forEach(id => {
    const otherContainer = document.getElementById(id);
    if (otherContainer) {
      const otherDropdown = otherContainer.querySelector('.language-dropdown');
      if (otherDropdown) {
        otherDropdown.classList.add('hidden');
      }
    }
  });
}

function selectLanguage(langCode) {
  localStorage.setItem('language', langCode);
  
  // Close all dropdowns
  document.querySelectorAll('.language-dropdown').forEach(dropdown => {
    dropdown.classList.add('hidden');
  });
  
  // Update the page language
  if (window.updateLanguage) {
    window.updateLanguage(langCode);
  }
  
  // Refresh the page to apply new language
  window.location.reload();
}

// Make functions global
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.selectLanguage = selectLanguage;

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  const target = e.target;
  const isDropdownButton = target.closest('button[onclick*="toggleLanguageDropdown"]');
  const isDropdownContent = target.closest('.language-dropdown');
  
  if (!isDropdownButton && !isDropdownContent) {
    document.querySelectorAll('.language-dropdown').forEach(dropdown => {
      dropdown.classList.add('hidden');
    });
  }
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeHeaderControls);
} else {
  initializeHeaderControls();
}
