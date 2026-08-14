document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = parseInt(urlParams.get('v')) || 1;

    try {
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error('Failed to load data.json');
        const data = await response.json();

        const lang = localStorage.getItem('siteLang') || 'en';
        
        const sessionIndex = data.sessions.findIndex(s => s.id === sessionId);
        const currentSession = sessionIndex !== -1 ? data.sessions[sessionIndex] : data.sessions[0];

        document.title = currentSession.titles.page_title[lang];
        renderPage(currentSession, data.sessions, lang);

        // Listen for language changes globally
        document.addEventListener('languageChanged', (e) => {
            const newLang = e.detail.lang;
            document.title = currentSession.titles.page_title[newLang];
            renderPage(currentSession, data.sessions, newLang);
        });

        // Tabs Logic
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
            });
        });

    } catch (error) {
        console.error("Error initializing app:", error);
    }
});

function renderPage(session, allSessions, lang) {
    const badgesContainer = document.getElementById('badges-container');
    badgesContainer.innerHTML = session.badges.map(b => 
        `<img src="https://img.shields.io/badge/${b.text}-${b.bg}?style=for-the-badge${b.logo ? `&logo=${b.logo}&logoColor=${b.bg === 'FCC624' ? 'black' : 'white'}` : ''}" alt="${b.text.split('-')[0]}">`
    ).join(' ');

    const videoWrapper = document.getElementById('video-wrapper');
    videoWrapper.innerHTML = `
        <video controls poster="${session.video.poster}">
            <source src="${session.video.mp4_url}" type="video/mp4">
        </video>
    `;

    document.getElementById('video-main-title').innerText = session.titles.main_title[lang];

    const channelStrip = document.getElementById('channel-strip');
    channelStrip.innerHTML = `
        <img src="${session.channel.avatar}" alt="${session.channel.name}">
        <div>
            <strong style="color: var(--text);">${session.channel.name}</strong>
            <span style="color: var(--subtext); display: block; font-size: 0.85rem;">${session.channel.subscribers}</span>
        </div>
    `;

    const descData = session.description[lang];
    let descHtml = descData.paragraphs.map(p => `<p>${p}</p>`).join('');
    
    if (descData.topics && descData.topics.length > 0) {
        descHtml += `<p><span>${descData.topics_title}</span><br>`;
        descHtml += descData.topics.map(t => `<span>${t}</span><br>`).join('');
        descHtml += `</p>`;
    }
    
    if (session.timestamps && session.timestamps.length > 0) {
        descHtml += `
        <details class="timestamps-list">
            <summary style="cursor: pointer; font-weight: bold; color: var(--mauve);">⏱️ Timestamps</summary>
            <ul>
                ${session.timestamps.map(ts => `<li>${ts.time} ${ts.label}</li>`).join('')}
            </ul>
        </details>`;
    }
    
    if (descData.support_title) {
        descHtml += `<hr style="border: 0; border-top: 1px solid var(--surface1); margin: 15px 0;">`;
        descHtml += `<p><span>${descData.support_title}</span><br><span>${descData.support_desc}</span></p>`;
    }
    
    if (descData.footer_message) {
        descHtml += `<p>${descData.footer_message}</p>`;
    }
    document.getElementById('tab-desc').innerHTML = descHtml;

    let linksHtml = '';
    if (session.links && session.links.length > 0) {
        linksHtml += `<p>`;
        linksHtml += session.links.map(l => `<span>${l.label[lang]} <a href="${l.url}" target="_blank">${l.display}</a></span><br>`).join('');
        linksHtml += `</p>`;
    } else {
        linksHtml = `<p style="color: var(--subtext);">${lang === 'ar' ? 'لا توجد روابط لهذا المجلس.' : 'No links for this session.'}</p>`;
    }
    document.getElementById('tab-links').innerHTML = linksHtml;

    const tagsContainer = document.getElementById('tab-tags');
    if (session.hashtags && session.hashtags[lang]) {
        tagsContainer.innerHTML = `<div class="hashtags">${session.hashtags[lang].join(' ')}</div>`;
    } else {
        tagsContainer.innerHTML = '';
    }

    const playlistContainer = document.getElementById('playlist-container');
    document.getElementById('playlist-count').innerText = `${allSessions.length} / ∞`;
    
    playlistContainer.innerHTML = allSessions.map(s => {
        const isActive = s.id === session.id ? 'active-video' : '';
        return `
        <a href="?v=${s.id}" class="playlist-item ${isActive}">
            <img src="${s.video.poster}" alt="Session ${s.id}">
            <div class="playlist-info">
                <h4>${s.titles.sidebar_title[lang]}</h4>
                <span>${s.titles.sidebar_sub[lang]}</span>
            </div>
        </a>
        `;
    }).join('');

    const downloadBtn = document.getElementById('download-btn-site');
    downloadBtn.href = session.video.mp4_url;
}