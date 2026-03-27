// قاموس الترجمات الشامل
const translations = {
    en: {
        "header-lang": "🌐 Language",
        "header-auth": "Signin / Signup",
        "header-subtitle": "Linux Enthusiast • Cyber Security Student",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-wallpapers": "Wallpapers",
        "nav-github": "GitHub",
        
        "about-title": "About Me",
        "about-text": "I am Ahmed (known online as <strong>ahmed-x86</strong> or <strong>ahmedx86</strong>), currently studying Computers and Information Systems. I specialize in Linux systems (Arch Linux is my daily driver) and cybersecurity. I enjoy low-level programming with Assembly, network analysis, and building custom rices using Hyprland and Waybar.",
        
        "projects-title": "My Projects",
        "proj-grub-title": "GRUB Fixer 🛠️",
        "proj-grub-desc": "A universal, automated recovery tool to repair GRUB on UEFI systems with a single command. Part of my Linux system rescue suite.",
        "btn-view-repo": "View Repository",
        
        "proj-asm-title": "ASM Development Environment",
        "proj-asm-desc": "An extension-like setup to run and debug Assembly natively on VS Code and VSCodium for Linux and Windows.",
        
        "proj-hyprland-title": "Hyprland Dotfiles",
        "proj-hyprland-desc": "My personal Hyprland configuration. Focused on productivity, tiling workflow, and a clean, aesthetic Arch Linux setup.",
        
        "proj-ghradar-title": "gh-radar for Waybar",
        "proj-ghradar-desc": "A dynamic and interactive Waybar module that monitors your GitHub activity in real-time with an animated ticker, sound alerts, and avatar notifications.",
        
        "proj-ghheatmap-title": "GitHub Heatmap for Waybar",
        "proj-ghheatmap-desc": "A custom purple widget fetching your 7-day rolling GitHub contributions using the GraphQL API.",
        
        "proj-hijri-title": "Waybar Hijri Calendar",
        "proj-hijri-desc": "A stable Python script for an RTL-fixed, dynamic Hijri calendar in Waybar with zero dependencies.",
        
        "proj-charge-title": "Waybar Mobile Charge Indicator",
        "proj-charge-desc": "A lightweight bash script to show your Android mobile battery status in Waybar via KDE Connect.",
        
        "proj-scripts-title": "Automation Scripts",
        "proj-scripts-desc": "A collection of bash scripts to automate daily tasks and improve the Arch Linux desktop workflow.",
        
        "media-section-title": "Photos & Videos",
        "proj-wallpapers-title": "Wallpapers Gallery",
        "proj-wallpapers-desc": "A curated collection of 4K, minimalist, and aesthetic wallpapers perfectly suited for Linux ricing, Arch Linux, and Hyprland setups.",
        "btn-browse-wallpapers": "Browse Wallpapers",
        
        "proj-gatherings-title": "Linux Gatherings",
        "proj-gatherings-desc": "Explore gatherings, discussions, and events around Linux, open-source software, and cybersecurity.",
        "btn-view-gatherings": "View Linux Gatherings",
        
        "footer-text": "© 2026 Ahmed x86 • Built on Arch Linux ❄️",
        
        "btn-feedback": "Feedback",
        "feedback-title": "Send us your Feedback",
        "feedback-subtitle": "We value your opinion (kinda).",
        "feedback-name-placeholder": "Your Name",
        "feedback-email-placeholder": "Your Email",
        "feedback-desc-placeholder": "Describe your issue...",
        "feedback-submit": "Submit Feedback",
        
        "lang-modal-title": "Select Language",
        "lang-modal-subtitle": "Choose website language"
    },
    ar: {
        "header-lang": "🌐 اللغة",
        "header-auth": "تسجيل الدخول / إنشاء حساب",
        "header-subtitle": "محب لنظام لينكس • طالب أمن سيبراني",
        "nav-about": "نبذة عني",
        "nav-projects": "المشاريع",
        "nav-wallpapers": "الخلفيات",
        "nav-github": "جيت هب",
        
        "about-title": "نبذة عني",
        "about-text": "أنا أحمد (معروف على الإنترنت باسم <strong>ahmed-x86</strong>)، أدرس نظم المعلومات والحاسبات. أتخصص في أنظمة لينكس (أستخدم Arch Linux كنظامي الأساسي) والأمن السيبراني. أستمتع بالبرمجة منخفضة المستوى بلغة التجميع (Assembly)، تحليل الشبكات، وبناء واجهات مخصصة باستخدام Hyprland و Waybar.",
        
        "projects-title": "مشاريعي",
        "proj-grub-title": "مُصلح GRUB 🛠️",
        "proj-grub-desc": "أداة استرداد شاملة وتلقائية لإصلاح GRUB على أنظمة UEFI بأمر واحد. جزء من حزمة إنقاذ نظام لينكس الخاصة بي.",
        "btn-view-repo": "عرض المستودع",
        
        "proj-asm-title": "بيئة تطوير Assembly",
        "proj-asm-desc": "إعداد برمجي لتشغيل وتصحيح أخطاء لغة التجميع بشكل أصلي على VS Code و VSCodium لأنظمة لينكس وويندوز.",
        
        "proj-hyprland-title": "ملفات إعداد Hyprland",
        "proj-hyprland-desc": "إعداداتي الشخصية لـ Hyprland. تركز على الإنتاجية، سير العمل، ومظهر نظيف وجذاب لنظام Arch Linux.",
        
        "proj-ghradar-title": "رادار GitHub لـ Waybar",
        "proj-ghradar-desc": "إضافة تفاعلية لـ Waybar تراقب نشاطك على GitHub في الوقت الفعلي مع شريط متحرك، تنبيهات صوتية، وإشعارات مرئية.",
        
        "proj-ghheatmap-title": "خريطة نشاط GitHub لـ Waybar",
        "proj-ghheatmap-desc": "أداة (Widget) باللون البنفسجي تجلب مساهماتك على جيت هب لآخر 7 أيام باستخدام GraphQL API.",
        
        "proj-hijri-title": "تقويم هجري لـ Waybar",
        "proj-hijri-desc": "سكربت بايثون مستقر لتقويم هجري ديناميكي في Waybar، يدعم الاتجاه من اليمين لليسار (RTL) وبدون أي حزم إضافية.",
        
        "proj-charge-title": "مؤشر شحن الهاتف لـ Waybar",
        "proj-charge-desc": "سكربت Bash خفيف لعرض حالة بطارية هاتف أندرويد في Waybar عبر ربطه بـ KDE Connect.",
        
        "proj-scripts-title": "سكربتات الأتمتة",
        "proj-scripts-desc": "مجموعة من سكربتات Bash لأتمتة المهام اليومية وتحسين سير العمل على واجهة سطح مكتب Arch Linux.",
        
        "media-section-title": "الصور والفيديو",
        "proj-wallpapers-title": "معرض الخلفيات",
        "proj-wallpapers-desc": "مجموعة منتقاة من خلفيات 4K البسيطة والجمالية المناسبة تمامًا لتخصيص لينكس وإعدادات Arch Linux و Hyprland.",
        "btn-browse-wallpapers": "تصفح الخلفيات",
        
        "proj-gatherings-title": "تجمعات لينكس",
        "proj-gatherings-desc": "استكشف التجمعات، النقاشات، والأحداث المتعلقة بنظام لينكس، البرمجيات مفتوحة المصدر، والأمن السيبراني.",
        "btn-view-gatherings": "عرض تجمعات لينكس",
        
        "footer-text": "© 2026 أحمد x86 • تم البناء على Arch Linux ❄️",
        
        "btn-feedback": "ملاحظاتك",
        "feedback-title": "أرسل لنا ملاحظاتك",
        "feedback-subtitle": "نحن نهتم برأيك (نوعاً ما).",
        "feedback-name-placeholder": "اسمك",
        "feedback-email-placeholder": "بريدك الإلكتروني",
        "feedback-desc-placeholder": "اشرح مشكلتك هنا...",
        "feedback-submit": "إرسال الملاحظات",
        
        "lang-modal-title": "اختر اللغة",
        "lang-modal-subtitle": "اختر لغة الموقع"
    }
};

let currentLang = localStorage.getItem('siteLang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang); 

    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // التحقق مما إذا كان العنصر حقل إدخال لتغيير الـ placeholder بدلاً من الـ innerHTML
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', translations[lang][key]);
            } else {
                el.innerHTML = translations[lang][key]; 
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});