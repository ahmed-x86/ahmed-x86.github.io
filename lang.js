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
        "lang-modal-subtitle": "Choose website language",
        "btn-copy": "Copy",

        // === ASM Page Translations (EN) ===
        "asm-page-title": "Ahmed x86 - Assembly Development Environment 🚀",
        "asm-page-desc": "An all-in-one repository designed to kickstart your Assembly (ASM) development.",
        "nav-back-home": "← Back to Home",
        "nav-github-repo": "GitHub Repo",
        "asm-intro-text": "This environment provides out-of-the-box support for Linux x64 and Windows (x86/x64), featuring pre-configured VS Code settings for a seamless workflow.",
        "asm-quick-install": "🛠️ Quick Installation",
        "asm-choose-weapon": "Choose your weapon (Operating System) and run the corresponding command to configure your environment immediately:",
        "asm-linux-install": "🐧 Linux (One-Line Installer)",
        "asm-linux-desc": "Supports Arch, Debian/Ubuntu, Fedora, Alpine, openSUSE, Solus, Gentoo, Puppy Linux, and Void.",
        "asm-win10-install": "🪟 Windows 10 / 11 (PowerShell Installer)",
        "asm-win10-desc": "Optimized for modern Windows environments.",
        "asm-win7-install": "🏛️ Windows 7 (Legacy Support)",
        "asm-win7-desc": "Dedicated script for Windows 7 compatibility.",
        "asm-key-features": "✨ Key Features",
        "asm-feat-1": "<strong>Dual-Platform Support:</strong> Native installers for both Windows and Linux, ensuring your dev environment is consistent everywhere.",
        "asm-feat-2": "<strong>VS Code Integration:</strong> Pre-configured <code>tasks.json</code> and <code>launch.json</code> allow you to build and debug your code with a single shortcut (<code>Ctrl+Shift+B</code>).",
        "asm-feat-3": "<strong>Global CLI Tool:</strong> Installs the custom <code>asm-run</code> command globally, allowing you to compile and test <code>.asm</code> files directly from any terminal without opening an editor.",
        "asm-feat-4": "<strong>Smart Dependency Management:</strong> Automatically detects your package manager on Linux and skips unnecessary downloads, while natively setting up NASM on Windows.",
        "asm-feat-5": "<strong>Legacy Support:</strong> Special installer for <strong>Windows 7</strong> to ensure assembly development isn't limited by OS version.",
        "asm-feat-6": "<strong>Cross-Compilation:</strong> Ready-to-use toolchains to compile and test Windows binaries directly from Linux using Wine and MinGW.",
        "asm-smart-engine": "🧠 Smart Engine Features",
        "asm-smart-1": "<strong>Bulletproof Execution:</strong> Features built-in network stability checks, strict input validation loops, and a <code>Ctrl+C</code> trap that automatically cleans up partial downloads.",
        "asm-smart-2": "<strong>Security First:</strong> Implements rigorous <strong>SHA256 Integrity Checks</strong> for external binaries to guarantee file authenticity.",
        "asm-smart-3": "<strong>Editor Agnostic:</strong> Automatically scans and detects your installed IDE (VS Code, VSCodium, Cursor) and sets up Assembly extensions.",
        "asm-smart-4": "<strong>Universal Package Tracking:</strong> Detects if your editor is installed via Native Package Manager, Snap, or Flatpak and configures extensions isolatedly.",
        "asm-smart-5": "<strong>Auto-Path Patching:</strong> Dynamically updates <code>launch.json</code> and <code>tasks.json</code> based on your current OS username and directory path.",
        "asm-final-note-title": "🎭 Final Note",
        "asm-important-note": "<strong>[!IMPORTANT]</strong><br>This project was built to prove that \"Understanding Linux\" isn't about talking, it's about building solutions that work on <strong>9+ distributions</strong> with a single click.",
        "asm-stay-hard": "Stay Hard, Keep Coding. 🚀",
        "asm-arch-note": "<strong>Note for Arch Users:</strong> Because \"I use Arch btw\" shouldn't mean spending three hours on config. We've got you covered. 😎"
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
        "lang-modal-subtitle": "اختر لغة الموقع",
        "btn-copy": "نسخ",

        // === ASM Page Translations (AR) ===
        "asm-page-title": "أحمد x86 - بيئة تطوير لغة التجميع (Assembly) 🚀",
        "asm-page-desc": "مستودع شامل صُمم لبدء رحلتك في تطوير لغة التجميع (ASM) بكل سلاسة.",
        "nav-back-home": "← العودة للرئيسية",
        "nav-github-repo": "مستودع جيت هب",
        "asm-intro-text": "توفر هذه البيئة دعماً جاهزاً للعمل لأنظمة Linux x64 و Windows (x86/x64)، وتتميز بإعدادات VS Code مجهزة مسبقاً لسير عمل سلس.",
        "asm-quick-install": "🛠️ التثبيت السريع",
        "asm-choose-weapon": "اختر سلاحك (نظام التشغيل) وقم بتشغيل الأمر المقابل لتهيئة بيئتك فوراً:",
        "asm-linux-install": "🐧 لينكس (تثبيت بأمر واحد)",
        "asm-linux-desc": "يدعم Arch، Debian/Ubuntu، Fedora، Alpine، openSUSE، Solus، Gentoo، Puppy Linux، و Void.",
        "asm-win10-install": "🪟 ويندوز 10 / 11 (تثبيت عبر PowerShell)",
        "asm-win10-desc": "مُحسّن لبيئات ويندوز الحديثة.",
        "asm-win7-install": "🏛️ ويندوز 7 (دعم الأنظمة القديمة)",
        "asm-win7-desc": "سكربت مخصص لدعم التوافق مع ويندوز 7.",
        "asm-key-features": "✨ الميزات الأساسية",
        "asm-feat-1": "<strong>دعم مزدوج للمنصات:</strong> مثبتات أصلية لكل من ويندوز ولينكس، لضمان استقرار بيئة التطوير الخاصة بك في أي مكان.",
        "asm-feat-2": "<strong>تكامل مع VS Code:</strong> ملفات <code>tasks.json</code> و <code>launch.json</code> مجهزة مسبقاً لتسمح لك ببناء وتصحيح الكود باختصار واحد (<code>Ctrl+Shift+B</code>).",
        "asm-feat-3": "<strong>أداة CLI عالمية:</strong> يتم تثبيت أمر <code>asm-run</code> المخصص على النظام، مما يتيح لك تجميع واختبار ملفات <code>.asm</code> مباشرة من أي تيرمينال بدون فتح المحرر.",
        "asm-feat-4": "<strong>إدارة ذكية للاعتماديات:</strong> يكتشف تلقائياً مدير الحزم الخاص بك على لينكس ويتخطى التنزيلات المكررة، بينما يقوم بإعداد NASM على ويندوز تلقائياً.",
        "asm-feat-5": "<strong>دعم الأنظمة القديمة:</strong> مثبت خاص لـ <strong>ويندوز 7</strong> لضمان عدم تقييد تطوير الأسمبلي بإصدار نظام التشغيل.",
        "asm-feat-6": "<strong>تصريف متقاطع (Cross-Compilation):</strong> أدوات جاهزة للاستخدام لتجميع واختبار ثنائيات ويندوز مباشرة من لينكس باستخدام Wine و MinGW.",
        "asm-smart-engine": "🧠 ميزات المحرك الذكي",
        "asm-smart-1": "<strong>تنفيذ مضاد للأخطاء:</strong> يحتوي على فحوصات مدمجة لاستقرار الشبكة، حلقات صارمة للتحقق من الإدخال، واصطياد لـ <code>Ctrl+C</code> ينظف التنزيلات الجزئية تلقائياً عند المقاطعة.",
        "asm-smart-2": "<strong>الأمان أولاً:</strong> يطبق فحوصات سلامة <strong>SHA256</strong> صارمة للملفات الخارجية لضمان أصالتها ومنع اختراقها.",
        "asm-smart-3": "<strong>متوافق مع عدة محررات:</strong> يفحص ويكتشف بيئة التطوير الخاصة بك تلقائياً (VS Code, VSCodium, Cursor) ويهيئ إضافات الأسمبلي.",
        "asm-smart-4": "<strong>تتبع شامل للحزم:</strong> يكتشف ما إذا كان محررك مثبتاً عبر مدير الحزم الأصلي أو Snap أو Flatpak ويهيئ الإضافات بالصلاحيات الصحيحة.",
        "asm-smart-5": "<strong>تصحيح تلقائي للمسارات:</strong> يُحدث مسارات <code>launch.json</code> و <code>tasks.json</code> ديناميكياً بناءً على اسم المستخدم الخاص بك ومسار المجلد.",
        "asm-final-note-title": "🎭 ملاحظة ختامية",
        "asm-important-note": "<strong>[!هام]</strong><br>تم بناء هذا المشروع لإثبات أن \"فهم لينكس\" ليس مجرد كلام، بل هو بناء حلول تعمل على <strong>أكثر من 9 توزيعات</strong> بنقرة واحدة.",
        "asm-stay-hard": "استمر بقوة، وواصل البرمجة. 🚀",
        "asm-arch-note": "<strong>ملاحظة لمستخدمي Arch:</strong> لأن مقولة \"I use Arch btw\" لا ينبغي أن تعني قضاء ثلاث ساعات في الإعداد. لقد قمنا بتغطية الأمر من أجلك. 😎"
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