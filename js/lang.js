/**
 * lang.js — Unified i18n Translation Engine
 * Loads translations from /locales/{lang}.json and applies them to DOM elements
 * with data-i18n attributes. Uses absolute paths to work from any subdirectory.
 */

let currentLang = localStorage.getItem('siteLang') || 'en';
let currentTranslations = {};

async function loadLanguage(lang) {
    try {
        const response = await fetch(`/locales/${lang}.json`);
        if (!response.ok) throw new Error(`Could not load ${lang} language file.`);

        currentTranslations = await response.json();
        applyTranslations(currentTranslations, lang);
        localStorage.setItem('siteLang', lang);
        currentLang = lang;

        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    } catch (error) {
        console.error("Translation Error:", error);
        if (lang !== 'en') loadLanguage('en');
    }
}

function applyTranslations(translations, lang) {
    const direction = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', lang);

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', translations[key]);
            } else {
                el.innerHTML = translations[key];
            }
        }
    });
}

function setLanguage(lang) {
    loadLanguage(lang);
    const overlay = document.getElementById('langModalOverlay');
    if (overlay) overlay.style.display = 'none';
}

function t(key) {
    return currentTranslations[key] || key;
}

document.addEventListener('DOMContentLoaded', () => {
    loadLanguage(currentLang);
});