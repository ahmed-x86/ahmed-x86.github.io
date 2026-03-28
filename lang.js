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
        "asm-arch-note": "<strong>Note for Arch Users:</strong> Because \"I use Arch btw\" shouldn't mean spending three hours on config. We've got you covered. 😎",
        
        // === gh-radar Page Translations (EN) ===
        "ghradar-page-title": "Ahmed x86 - gh-radar for Waybar 📡",
        "ghradar-page-desc": "A dynamic and interactive Waybar module that monitors your GitHub activity in real-time.",
        "ghradar-demo-caption": "Watch gh-radar's animated ticker and notifications in action!",
        "ghradar-features-title": "✨ Key Features",
        "ghradar-feat-1": "<strong>Animated Ticker:</strong> Waybar text changes dynamically when a new push occurs. It shows the branch and commit message, then the repository name, and finally returns to your username.",
        "ghradar-feat-2": "<strong>Audio Alerts:</strong> Plays a retro notification sound instantly upon detecting a new push.",
        "ghradar-feat-3": "<strong>Avatar Notifications:</strong> Sends a native desktop notification containing the committer's actual GitHub avatar and commit details.",
        "ghradar-feat-4": "<strong>Interactive Buttons:</strong> Left-click to open your GitHub profile, Right-click to open notifications directly from Waybar.",
        "ghradar-feat-5": "<strong>Manual Refresh (New!):</strong> Middle-click the module to instantly fetch the latest updates using Linux signals (<code>SIGUSR1</code>).",
        "ghradar-feat-6": "<strong>Smart Resource Management:</strong> Dynamic polling intervals (10s when active, 60s when idle) or a complete Sleep Mode (<code>-t 0</code>) to save battery and bandwidth.",
        "ghradar-feat-7": "<strong>Custom Icons (New!):</strong> Choose from 10 different Nerd Font icons (Octocat, Git branch, etc.) using the <code>-icon</code> argument.",
        "ghradar-feat-8": "<strong>API Optimized:</strong> Uses GitHub's <code>ETag</code> headers to respect API rate limits.",
        "ghradar-install-title": "🛠️ Installation & Setup",
        "ghradar-install-step1": "1. Clone & Copy Files",
        "ghradar-install-step2": "2. Add Your Credentials (.env)",
        "ghradar-env-desc1": "Create a <code>.env</code> file to authenticate with GitHub:",
        "ghradar-env-desc2": "Add the following (replace with your info):",
        "ghradar-install-step3": "3. Install Dependencies",
        "ghradar-dep-desc": "Depending on your Linux distribution, install the required Python libraries. You also need an audio player (<code>mpv</code> or <code>paplay</code>) and a notification daemon (<code>libnotify</code>).",
        "ghradar-dep-arch": "For Arch Linux / Manjaro:",
        "ghradar-dep-ubuntu": "For Ubuntu / Debian (or using pip):",
        "ghradar-usage-title": "⚙️ Usage & Arguments",
        "ghradar-usage-desc": "The script supports arguments to customize its behavior:",
        "ghradar-usage-arg1": "<code>my_repos_only</code>: Only triggers alerts for repositories you own (ignores activity from other repos you watch/star).",
        "ghradar-usage-arg2": "<code>-t 0</code>: <strong>Manual Mode</strong>. The script will not poll GitHub automatically. It will sleep completely until you middle-click the Waybar module.",
        "ghradar-usage-arg3": "<code>-icon &lt;1-10&gt;</code>: <strong>(New!)</strong> Choose the icon displayed in Waybar. Choose a number from 1 to 10 (e.g., <code>-icon 2</code> for the Octocat).",
        "ghradar-waybar-title": "🖥️ Waybar Configuration",
        "ghradar-waybar-step1": "1. Module Configuration (<code>config.jsonc</code>)",
        "ghradar-pro-tip": "💡 Pro Tip:",
        "ghradar-pro-tip-desc": "Add <code>\"reload_style_on_change\": true,</code> at the very top of your Waybar config file. This allows Waybar to instantly apply changes when you edit the config or style files without needing a manual restart!",
        "ghradar-waybar-desc1": "Add this module to your Waybar config file (under <code>modules-left</code>, <code>modules-center</code>, or <code>modules-right</code>):",
        "ghradar-waybar-desc2": "<em>(Note: Change <code>ahmed-x86</code> to your actual GitHub username in the <code>on-click</code> URL).</em>",
        "ghradar-waybar-step2": "2. Styling (<code>style.css</code>)",
        "ghradar-style-desc": "Choose the theme that matches your current Waybar setup and add it to your <code>style.css</code>.",
        "ghradar-style-1": "1. Default (GitHub Dark)",
        "ghradar-style-2": "2. Catppuccin (Mocha)",
        "ghradar-style-3": "3. Dracula",
        "ghradar-restart-note": "<strong>Restart Waybar:</strong> Apply the changes by restarting Waybar using <code>killall waybar && waybar & disown</code> (Only needed if you haven't enabled <code>reload_style_on_change</code>).",
        "ghradar-btn-repo": "View GitHub Repository"
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
        "asm-arch-note": "<strong>ملاحظة لمستخدمي Arch:</strong> لأن مقولة \"I use Arch btw\" لا ينبغي أن تعني قضاء ثلاث ساعات في الإعداد. لقد قمنا بتغطية الأمر من أجلك. 😎",

        // === gh-radar Page Translations (AR) ===
        "ghradar-page-title": "أحمد x86 - رادار GitHub لـ Waybar 📡",
        "ghradar-page-desc": "إضافة ديناميكية وتفاعلية لـ Waybar تراقب نشاطك على جيت هب في الوقت الفعلي.",
        "ghradar-demo-caption": "شاهد الشريط المتحرك والتنبيهات الخاصة بـ gh-radar أثناء العمل!",
        "ghradar-features-title": "✨ الميزات الأساسية",
        "ghradar-feat-1": "<strong>شريط متحرك (Ticker):</strong> يتغير نص Waybar ديناميكياً عند حدوث دفع (Push) جديد. يظهر الفرع ورسالة الـ Commit، ثم اسم المستودع، وأخيراً يعود لاسم المستخدم الخاص بك.",
        "ghradar-feat-2": "<strong>تنبيهات صوتية:</strong> يشغل صوت إشعار بنمط ريترو فوراً عند اكتشاف نشاط جديد.",
        "ghradar-feat-3": "<strong>إشعارات بالصور الشخصية:</strong> يرسل إشعاراً لسطح المكتب يحتوي على الصورة الشخصية الحقيقية (Avatar) للمستخدم على جيت هب مع تفاصيل الـ Commit.",
        "ghradar-feat-4": "<strong>أزرار تفاعلية:</strong> كليك يسار لفتح ملفك الشخصي على جيت هب، وكليك يمين لفتح الإشعارات مباشرة من Waybar.",
        "ghradar-feat-5": "<strong>تحديث يدوي (جديد!):</strong> اضغط بالزر الأوسط للماوس على الإضافة لجلب أحدث التحديثات فوراً باستخدام إشارات لينكس (<code>SIGUSR1</code>).",
        "ghradar-feat-6": "<strong>إدارة ذكية للموارد:</strong> فترات استعلام ديناميكية (كل 10 ثوانٍ عند النشاط، و 60 ثانية في الخمول) أو وضع السبات الكامل (<code>-t 0</code>) لتوفير البطارية والإنترنت.",
        "ghradar-feat-7": "<strong>أيقونات مخصصة (جديد!):</strong> اختر من بين 10 أيقونات مختلفة من Nerd Fonts (مثل Octocat أو شعار Git) باستخدام المُعامل <code>-icon</code>.",
        "ghradar-feat-8": "<strong>مُحسّن للـ API:</strong> يستخدم ترويسات <code>ETag</code> الخاصة بجيت هب لاحترام حدود معدل طلبات الـ API.",
        "ghradar-install-title": "🛠️ التثبيت والإعداد",
        "ghradar-install-step1": "1. الاستنساخ ونسخ الملفات",
        "ghradar-install-step2": "2. إضافة بيانات الاعتماد (.env)",
        "ghradar-env-desc1": "أنشئ ملف <code>.env</code> للمصادقة مع جيت هب:",
        "ghradar-env-desc2": "أضف التالي (واستبدله ببياناتك):",
        "ghradar-install-step3": "3. تثبيت الاعتماديات",
        "ghradar-dep-desc": "بناءً على توزيعة لينكس الخاصة بك، قم بتثبيت مكتبات بايثون المطلوبة. ستحتاج أيضاً إلى مشغل صوت (<code>mpv</code> أو <code>paplay</code>) وخادم إشعارات (<code>libnotify</code>).",
        "ghradar-dep-arch": "لـ Arch Linux / Manjaro:",
        "ghradar-dep-ubuntu": "لـ Ubuntu / Debian (أو باستخدام pip):",
        "ghradar-usage-title": "⚙️ الاستخدام والمُعاملات",
        "ghradar-usage-desc": "يدعم السكربت تمرير مُعاملات (Arguments) لتخصيص سلوكه:",
        "ghradar-usage-arg1": "<code>my_repos_only</code>: يُفعل التنبيهات فقط للمستودعات التي تمتلكها (يتجاهل النشاط من المستودعات الأخرى التي تتابعها).",
        "ghradar-usage-arg2": "<code>-t 0</code>: <strong>الوضع اليدوي</strong>. لن يستعلم السكربت من جيت هب تلقائياً، بل سيدخل في وضع السبات حتى تضغط بالزر الأوسط للماوس على إضافة Waybar.",
        "ghradar-usage-arg3": "<code>-icon &lt;1-10&gt;</code>: <strong>(جديد!)</strong> يحدد الأيقونة المعروضة في Waybar. اختر رقماً من 1 إلى 10 (مثال: <code>-icon 2</code> لعرض أيقونة Octocat).",
        "ghradar-waybar-title": "🖥️ إعدادات Waybar",
        "ghradar-waybar-step1": "1. إعداد الإضافة (<code>config.jsonc</code>)",
        "ghradar-pro-tip": "💡 نصيحة للمحترفين:",
        "ghradar-pro-tip-desc": "أضف <code>\"reload_style_on_change\": true,</code> في أعلى ملف إعداد Waybar الخاص بك. هذا يسمح لـ Waybar بتطبيق التغييرات فوراً عند تعديل ملف الإعداد أو الستايل بدون الحاجة لإعادة تشغيل يدوية!",
        "ghradar-waybar-desc1": "أضف هذه الوحدة إلى ملف إعداد Waybar الخاص بك (تحت <code>modules-left</code>، <code>modules-center</code>، أو <code>modules-right</code>):",
        "ghradar-waybar-desc2": "<em>(ملاحظة: قم بتغيير <code>ahmed-x86</code> إلى اسم المستخدم الفعلي الخاص بك على جيت هب في رابط الـ <code>on-click</code>).</em>",
        "ghradar-waybar-step2": "2. المظهر (<code>style.css</code>)",
        "ghradar-style-desc": "اختر الثيم الذي يتناسب مع إعداد Waybar الحالي الخاص بك وأضفه إلى ملف <code>style.css</code>.",
        "ghradar-style-1": "1. الافتراضي (GitHub Dark)",
        "ghradar-style-2": "2. Catppuccin (Mocha)",
        "ghradar-style-3": "3. Dracula",
        "ghradar-restart-note": "<strong>إعادة تشغيل Waybar:</strong> قم بتطبيق التغييرات عن طريق إعادة تشغيل Waybar باستخدام <code>killall waybar && waybar & disown</code> (فقط إذا لم تقم بتفعيل <code>reload_style_on_change</code>).",
        "ghradar-btn-repo": "عرض المستودع على GitHub"
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