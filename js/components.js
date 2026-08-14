/**
 * components.js — Centralized Component Loader
 */
const Components = (() => {
    const sidebarHTML = `
        <div id="sidebarOverlay" class="sidebar-overlay" onclick="toggleSidebar()"></div>
        <div id="sidebarMenu" class="sidebar">
            <span class="close-sidebar" onclick="toggleSidebar()">&times;</span>
            <ul class="sidebar-list">
                <li onclick="toggleSidebar(); document.getElementById('langModalOverlay').style.display='flex'">
                    <span data-i18n="header-lang">Language</span>
                </li>
                <li onclick="toggleSidebar(); document.getElementById('themeModalOverlay').style.display='flex'">
                    <span data-i18n="header-theme">Web Theme</span>
                </li>
                <li>
                    <a href="/signin" class="auth-link" data-i18n="header-auth">Signin / Signup</a>
                </li>
            </ul>
        </div>`;

    const langModalHTML = `
        <div id="langModalOverlay" class="modal-overlay" style="display: none;">
            <div class="modal-content" style="text-align: center;">
                <span onclick="document.getElementById('langModalOverlay').style.display='none'" class="close-btn">&times;</span>
                <h3 class="feedback-title" data-i18n="lang-modal-title">Select Language</h3>
                <p class="feedback-subtitle" data-i18n="lang-modal-subtitle">اختر لغة الموقع</p>
                <br>
                <button class="submit-btn" onclick="setLanguage('en'); document.getElementById('langModalOverlay').style.display='none'">English (EN)</button>
                <br><br>
                <button class="submit-btn" onclick="setLanguage('ar'); document.getElementById('langModalOverlay').style.display='none'">العربية (AR)</button>
            </div>
        </div>`;

    const themeButtons = [
        { name: 'mocha',      label: '☕ Default Mocha',    style: '' },
        { name: 'latte',      label: '☀️ Pure Light',       style: 'background-color:#ffffff;color:#000;' },
        { name: 'oled',       label: '🌑 OLED Black',       style: 'background-color:#000000;color:#fff;border:1px solid #333;' },
        { name: 'hacker',     label: '💻 Hacker Green',     style: 'background-color:#0d0d0d;color:#00ff41;' },
        { name: 'cyberpunk',  label: '🦄 Cyberpunk Neon',   style: 'background-color:#2b213a;color:#ff003c;' },
        { name: 'dracula',    label: '🎨 Dracula',          style: 'background-color:#282a36;color:#bd93f9;' },
        { name: 'nord',       label: '❄️ Nord Frost',       style: 'background-color:#2E3440;color:#88C0D0;' },
        { name: 'gruvbox',    label: '📦 Gruvbox Retro',    style: 'background-color:#282828;color:#fabd2f;' },
        { name: 'tokyonight', label: '🌃 Tokyo Night',      style: 'background-color:#1a1b26;color:#7aa2f7;' }
    ];

    const themeModalHTML = `
        <div id="themeModalOverlay" class="modal-overlay" style="display: none;">
            <div class="modal-content" style="text-align: center; max-height: 80vh; overflow-y: auto;">
                <span onclick="document.getElementById('themeModalOverlay').style.display='none'" class="close-btn">&times;</span>
                <h3 class="feedback-title" data-i18n="theme-modal-title">Select Theme</h3>
                <p class="feedback-subtitle" data-i18n="theme-modal-subtitle">اختر مظهر الموقع</p>
                <br>
                ${themeButtons.map((t, i) =>
                    `<button class="submit-btn theme-btn${i === 0 ? ' active-theme' : ''}" onclick="setTheme('${t.name}', this)"${t.style ? ` style="${t.style}"` : ''}>${t.label}</button>`
                ).join('\n                ')}
            </div>
        </div>`;

    const feedbackModalHTML = `
        <button id="feedbackBtn" class="feedback-btn" data-i18n="btn-feedback">Feedback</button>
        <div id="feedbackModal" class="modal-overlay">
            <div class="modal-content">
                <span id="closeModal" class="close-btn">&times;</span>
                <form id="feedbackForm">
                    <h3 class="feedback-title" data-i18n="feedback-title">Send us your Feedback</h3>
                    <p class="feedback-subtitle" data-i18n="feedback-subtitle">We value your opinion.</p>
                    <input type="text" placeholder="Your Name" required class="form-input" data-i18n="feedback-name-placeholder">
                    <input type="email" placeholder="Your Email" required class="form-input" data-i18n="feedback-email-placeholder">
                    <textarea placeholder="Describe your issue..." rows="4" required class="form-input" data-i18n="feedback-desc-placeholder"></textarea>
                    <button type="submit" class="submit-btn" data-i18n="feedback-submit">Submit Feedback</button>
                </form>
                <div id="trashMessage" class="trash-message-box">
                    <h2 class="trash-icon">🗑️</h2>
                    <p class="trash-text">لقد تم استقبال ردك وسيتم إرمائه في سلة الزبالة في أقرب وقت.</p>
                </div>
            </div>
        </div>`;

    function buildHeader(config) {
        if (config.pageType === 'home') {
            return '';
        }

        const titleKey = config.titleKey || '';
        const descKey = config.descKey || '';
        const titleText = config.titleDefault || '';
        const descText = config.descDefault || '';

        return `<header style="position: relative;">
            <h1${titleKey ? ` data-i18n="${titleKey}"` : ''}>${titleText}</h1>
            ${descText || descKey ? `<p${descKey ? ` data-i18n="${descKey}"` : ''}>${descText}</p>` : ''}
        </header>`;
    }

    function buildNav(config) {
        const menuBtn = `<div style="position: absolute; top: 50%; transform: translateY(-50%); inset-inline-start: 20px; z-index: 1000;">
            <span class="menu-btn" onclick="toggleSidebar()">☰</span>
        </div>`;

        let linksHtml = '';
        if (config.pageType === 'home') {
            linksHtml = `
                <a href="#about" data-i18n="nav-about">About</a>
                <a href="#projects" data-i18n="nav-projects">Projects</a>
                <a href="#wallpapers-section" data-i18n="nav-wallpapers">Wallpapers</a>
                <a href="https://github.com/ahmed-x86" target="_blank" data-i18n="nav-github">GitHub</a>`;
        } else {
            const links = config.navLinks || [];
            const backLink = `<a href="/" data-i18n="nav-back-home">← Back to Home</a>`;
            const extraLinks = links.map(l =>
                `<a href="${l.href}"${l.target ? ` target="${l.target}"` : ''}${l.i18nKey ? ` data-i18n="${l.i18nKey}"` : ''}>${l.text}</a>`
            ).join('\n    ');
            linksHtml = backLink + '\n    ' + extraLinks;
        }

        // تم إزالة style="position: relative;" للسماح بـ sticky
        return `<nav>
            ${menuBtn}
            ${linksHtml}
        </nav>`;
    }

    function buildFooter(config) {
        const footerKey = config.footerKey || 'footer-text';
        const footerText = config.footerDefault || '© 2026 Ahmed x86 • Built on Arch Linux ❄️';
        return `<footer>
    <p data-i18n="${footerKey}">${footerText}</p>
</footer>`;
    }

    function inject() {
        const metaEl = document.querySelector('meta[name="page-config"]');
        const config = metaEl ? JSON.parse(metaEl.content) : { pageType: 'project' };
        const mainContent = document.getElementById('page-content');

        if (!mainContent) {
            console.error('Components.js: #page-content element not found!');
            return;
        }

        const headerHTML = buildHeader(config);
        const navHTML = buildNav(config);
        mainContent.insertAdjacentHTML('beforebegin', headerHTML + navHTML);

        const footerHTML = buildFooter(config);
        let afterContent = footerHTML;

        if (config.pageType === 'home') {
            afterContent += feedbackModalHTML;
        }

        afterContent += langModalHTML;
        afterContent += themeModalHTML;
        afterContent += `<div id="sidebar-container">${sidebarHTML}</div>`;

        mainContent.insertAdjacentHTML('afterend', afterContent);

        window.toggleSidebar = function() {
            const sidebarMenu = document.getElementById('sidebarMenu');
            const sidebarOverlay = document.getElementById('sidebarOverlay');
            if (sidebarMenu && sidebarOverlay) {
                sidebarMenu.classList.toggle('open');
                sidebarOverlay.classList.toggle('show');
            }
        };

        initAuthLogic();

        if (typeof restoreTheme === 'function') {
            restoreTheme();
        }
    }

    function initAuthLogic() {
        const authLink = document.querySelector('.auth-link');
        const savedUser = localStorage.getItem('arch_user');

        if (savedUser && authLink) {
            authLink.textContent = `~/${savedUser}`;
            authLink.style.color = "var(--green)";
            authLink.href = "#";
            authLink.title = "Click to Logout (exit)";

            authLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm(`Do you want to terminate session for '${savedUser}'? (Logout)`)) {
                    localStorage.removeItem('arch_user');
                    window.location.reload();
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }

    return { inject, initAuthLogic };
})();