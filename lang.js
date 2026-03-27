// قاموس الترجمات
const translations = {
    en: {
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-wallpapers": "Wallpapers",
        "about-title": "About Me",
        "about-text": "I am Ahmed (known online as <strong>ahmed-x86</strong> or <strong>ahmedx86</strong>), currently studying Computers and Information Systems. I specialize in Linux systems (Arch Linux is my daily driver) and cybersecurity. I enjoy low-level programming with Assembly, network analysis, and building custom rices using Hyprland and Waybar.",
        "projects-title": "My Projects",
        "footer-text": "© 2026 Ahmed x86 • Built on Arch Linux ❄️"
        // أضف أي نصوص تانية هنا
    },
    ar: {
        "nav-about": "نبذة عني",
        "nav-projects": "المشاريع",
        "nav-wallpapers": "الخلفيات",
        "about-title": "نبذة عني",
        "about-text": "أنا أحمد (معروف على الإنترنت باسم <strong>ahmed-x86</strong>)، أدرس نظم المعلومات والحاسبات. أتخصص في أنظمة لينكس (أستخدم Arch Linux كنظامي الأساسي) والأمن السيبراني. أستمتع بالبرمجة منخفضة المستوى بلغة التجميع (Assembly)، تحليل الشبكات، وبناء واجهات مخصصة باستخدام Hyprland و Waybar.",
        "projects-title": "مشاريعي",
        "footer-text": "© 2026 أحمد x86 • تم البناء على Arch Linux ❄️"
    }
};

// جلب اللغة المحفوظة أو تعيين الإنجليزية كافتراضية
let currentLang = localStorage.getItem('siteLang') || 'en';

// دالة تغيير اللغة
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang); // حفظ الاختيار

    // تغيير الاتجاه وسمة اللغة في الـ HTML
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    }

    // البحث عن كل العناصر اللي فيها سمة data-i18n وتغيير نصها
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; // innerHTML عشان التنسيقات زي <strong>
        }
    });
}

// تشغيل اللغة المحفوظة أول ما الصفحة تحمل
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});
