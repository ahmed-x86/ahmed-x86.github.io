// تحديد المسار بناءً على مكان الصفحة
const isSubDir = window.location.pathname.includes('/linux_gatherings/');
const rootPath = isSubDir ? '../' : './';

let currentLang = localStorage.getItem('siteLang') || 'en';

async function loadLanguage(lang) {
    try {
        // نستخدم rootPath هنا للوصول لمجلد اللغات الصحيح
        const response = await fetch(`${rootPath}locales/${lang}.json`);
        if (!response.ok) throw new Error(`Could not load ${lang} language file.`);
        
        const translations = await response.json();
        applyTranslations(translations, lang);
        localStorage.setItem('siteLang', lang);
        currentLang = lang;
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
    document.getElementById('langModalOverlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    loadLanguage(currentLang);
});