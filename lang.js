let currentLang = localStorage.getItem('siteLang') || 'en';

// دالة لجلب ملف اللغة وتحميله من مجلد locales
async function loadLanguage(lang) {
    try {
        // جلب ملف الـ JSON (تأكد أن المسار صحيح بالنسبة لمكان ملف الـ html)
        const response = await fetch(`locales/${lang}.json`);
        
        if (!response.ok) throw new Error(`Could not load ${lang} language file.`);
        
        const translations = await response.json();
        applyTranslations(translations, lang);
        
        // حفظ اللغة الحالية في الـ Local Storage
        localStorage.setItem('siteLang', lang);
        currentLang = lang;

    } catch (error) {
        console.error("Translation Error:", error);
        // إذا حدث خطأ (زي ملف مش موجود)، حمل الإنجليزية كاحتياط
        if (lang !== 'en') loadLanguage('en');
    }
}

// دالة لتوزيع النصوص على العناصر في الصفحة
function applyTranslations(translations, lang) {
    // ضبط اتجاه الصفحة واللغة
    const direction = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', lang);

    // البحث عن كل العناصر التي تحمل attribute: data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            // إذا كان العنصر حقل إدخال، نغير الـ Placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', translations[key]);
            } else {
                // غير ذلك نغير النص الداخلي (يدعم HTML Tags)
                el.innerHTML = translations[key]; 
            }
        }
    });
}

// دالة يتم استدعاؤها من الأزرار لتغيير اللغة
function setLanguage(lang) {
    loadLanguage(lang);
}

// التحميل التلقائي عند فتح أي صفحة
document.addEventListener('DOMContentLoaded', () => {
    loadLanguage(currentLang);
});