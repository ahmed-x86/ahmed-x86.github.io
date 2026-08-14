/**
 * theme.js — Theme Engine with localStorage Persistence
 * Manages 9 Catppuccin-based color themes with persistent selection.
 */

const themes = {
    mocha: {
        '--base': '#1e1e2e', '--mantle': '#181825', '--crust': '#11111b',
        '--text': '#cdd6f4', '--subtext': '#a6adc8', '--mauve': '#cba6f7',
        '--blue': '#89b4fa', '--green': '#a6e3a1', '--surface0': '#313244',
        '--surface1': '#45475a', '--lavender': '#b4befe', '--red': '#f38ba8'
    },
    latte: {
        '--base': '#ffffff', '--mantle': '#f2f2f2', '--crust': '#e6e6e6',
        '--text': '#202124', '--subtext': '#5f6368', '--mauve': '#1a73e8',
        '--blue': '#1a73e8', '--green': '#1e8e3e', '--surface0': '#f1f3f4',
        '--surface1': '#dadce0', '--lavender': '#4285f4', '--red': '#d20f39'
    },
    oled: {
        '--base': '#000000', '--mantle': '#0a0a0a', '--crust': '#050505',
        '--text': '#ffffff', '--subtext': '#a0a0a0', '--mauve': '#bb86fc',
        '--blue': '#03dac6', '--green': '#03deda', '--surface0': '#121212',
        '--surface1': '#1e1e1e', '--lavender': '#cf6679', '--red': '#ff0266'
    },
    hacker: {
        '--base': '#0d0d0d', '--mantle': '#000000', '--crust': '#000000',
        '--text': '#00ff41', '--subtext': '#008f11', '--mauve': '#00ff41',
        '--blue': '#003b00', '--green': '#00ff41', '--surface0': '#1a1a1a',
        '--surface1': '#262626', '--lavender': '#00ff41', '--red': '#ff0000'
    },
    cyberpunk: {
        '--base': '#2b213a', '--mantle': '#241b31', '--crust': '#1c1526',
        '--text': '#00ff9f', '--subtext': '#fde205', '--mauve': '#ff003c',
        '--blue': '#00d7ff', '--green': '#00ff9f', '--surface0': '#3d2e50',
        '--surface1': '#4d3a66', '--lavender': '#ff003c', '--red': '#ff003c'
    },
    dracula: {
        '--base': '#282a36', '--mantle': '#21222c', '--crust': '#191a21',
        '--text': '#f8f8f2', '--subtext': '#bfbfbf', '--mauve': '#bd93f9',
        '--blue': '#8be9fd', '--green': '#50fa7b', '--surface0': '#44475a',
        '--surface1': '#6272a4', '--lavender': '#ff79c6', '--red': '#ff5555'
    },
    nord: {
        '--base': '#2E3440', '--mantle': '#242933', '--crust': '#1d212b',
        '--text': '#ECEFF4', '--subtext': '#D8DEE9', '--mauve': '#B48EAD',
        '--blue': '#81A1C1', '--green': '#A3BE8C', '--surface0': '#3B4252',
        '--surface1': '#434C5E', '--lavender': '#88C0D0', '--red': '#BF616A'
    },
    gruvbox: {
        '--base': '#282828', '--mantle': '#1d2021', '--crust': '#1b1b1b',
        '--text': '#ebdbb2', '--subtext': '#a89984', '--mauve': '#d3869b',
        '--blue': '#83a598', '--green': '#b8bb26', '--surface0': '#3c3836',
        '--surface1': '#504945', '--lavender': '#fabd2f', '--red': '#fb4934'
    },
    tokyonight: {
        '--base': '#1a1b26', '--mantle': '#16161e', '--crust': '#111217',
        '--text': '#c0caf5', '--subtext': '#a9b1d6', '--mauve': '#bb9af7',
        '--blue': '#7aa2f7', '--green': '#9ece6a', '--surface0': '#292e42',
        '--surface1': '#3b4261', '--lavender': '#b4f9f8', '--red': '#f7768e'
    }
};

let currentTheme = localStorage.getItem('siteTheme') || 'mocha';

function setTheme(themeName, buttonElement) {
    if (!themes[themeName]) {
        console.error("Theme " + themeName + " not found!");
        return;
    }

    currentTheme = themeName;
    localStorage.setItem('siteTheme', themeName);

    const selectedThemeColors = themes[themeName];
    for (const [property, value] of Object.entries(selectedThemeColors)) {
        document.documentElement.style.setProperty(property, value);
    }

    // Update active button state
    const themeBtns = document.querySelectorAll('.theme-btn');
    themeBtns.forEach(btn => btn.classList.remove('active-theme'));
    if (buttonElement) buttonElement.classList.add('active-theme');

    // Close modal after short delay
    setTimeout(() => {
        const overlay = document.getElementById('themeModalOverlay');
        if (overlay) overlay.style.display = 'none';
    }, 200);
}

/**
 * Restore saved theme from localStorage (called by components.js after DOM injection)
 */
function restoreTheme() {
    const savedTheme = localStorage.getItem('siteTheme');
    if (savedTheme && savedTheme !== 'mocha' && themes[savedTheme]) {
        const colors = themes[savedTheme];
        for (const [property, value] of Object.entries(colors)) {
            document.documentElement.style.setProperty(property, value);
        }

        // Update active button
        setTimeout(() => {
            const themeBtns = document.querySelectorAll('.theme-btn');
            themeBtns.forEach(btn => {
                btn.classList.remove('active-theme');
                if (btn.getAttribute('onclick')?.includes(`'${savedTheme}'`)) {
                    btn.classList.add('active-theme');
                }
            });
        }, 100);
    }
}

// Restore theme immediately on load (before components inject)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', restoreTheme);
} else {
    restoreTheme();
}
