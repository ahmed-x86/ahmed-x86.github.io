document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 0. تحديد المسار الرئيسي (Root Path Logic)
    // ==========================================
    // لو إحنا في مجلد فرعي، هنحتاج نطلع خطوة لبره (../)
    const isSubDir = window.location.pathname.includes('/linux_gatherings/');
    const rootPath = isSubDir ? '../' : './';

    // ==========================================
    // 1. تحميل القائمة الجانبية ديناميكياً (Sidebar Fetch)
    // ==========================================
    const sidebarContainer = document.getElementById('sidebar-container');
    
    if (sidebarContainer) {
        // بنستخدم rootPath عشان يروح للمكان الصح مهما كان مكان الصفحة
        fetch(`${rootPath}sidebar.html`)
            .then(response => {
                if (!response.ok) throw new Error('Sidebar not found at: ' + rootPath);
                return response.text();
            })
            .then(data => {
                sidebarContainer.innerHTML = data;
                
                // تشغيل منطق تسجيل الدخول بعد تحميل السايدبار
                initAuthLogic();
            })
            .catch(error => console.error('Error loading the sidebar:', error));
    } else {
        initAuthLogic();
    }

    // ==========================================
    // 2. دالة التبديل (Toggle Sidebar) - تم نقلها هنا لتكون Global
    // ==========================================
    // جعل الدالة متاحة في الـ window عشان الـ onclick في الـ HTML يشتغل
    window.toggleSidebar = function() {
        const sidebarMenu = document.getElementById('sidebarMenu');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        
        if (sidebarMenu && sidebarOverlay) {
            sidebarMenu.classList.toggle('open');
            sidebarOverlay.classList.toggle('show');
        } else {
            console.error("Sidebar elements not found in DOM!");
        }
    };

    // ==========================================
    // 3. كود تسجيل الدخول
    // ==========================================
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
                if(confirm(`Do you want to terminate session for '${savedUser}'? (Logout)`)) {
                    localStorage.removeItem('arch_user');
                    window.location.reload(); 
                }
            });
        }
    }

    // ==========================================
    // 4. كود الفيدباك (فقط لو العناصر موجودة)
    // ==========================================
    const feedbackBtn = document.getElementById("feedbackBtn");
    const modal = document.getElementById("feedbackModal");
    const closeBtn = document.getElementById("closeModal");
    const form = document.getElementById("feedbackForm");
    const trashMsg = document.getElementById("trashMessage");

    if (feedbackBtn && modal && closeBtn && form) {
        feedbackBtn.addEventListener("click", () => { modal.style.display = "block"; });

        const resetModal = () => {
            modal.style.display = "none";
            setTimeout(() => {
                form.style.display = "block";
                trashMsg.style.display = "none";
                form.reset();
            }, 300);
        };

        closeBtn.addEventListener("click", resetModal);
        window.addEventListener("click", (e) => { if (e.target === modal) resetModal(); });
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            form.style.display = "none";
            trashMsg.style.display = "block";
        });
    }

    // ==========================================
    // 5. كود صفحة الـ Auth - تعديل روابط الانتقال
    // ==========================================
    const tabSignin = document.getElementById('tab-signin');
    const tabSignup = document.getElementById('tab-signup');
    const formSignin = document.getElementById('form-signin');
    const formSignup = document.getElementById('form-signup');

    if (tabSignin && tabSignup && formSignin && formSignup) {
        const redirectToHome = () => {
            // الانتقال لـ index.html في المجلد الرئيسي
            window.location.href = rootPath + 'index.html';
        };

        tabSignin.addEventListener('click', () => {
            tabSignin.classList.add('active');
            tabSignup.classList.remove('active');
            formSignin.style.display = 'block';
            formSignup.style.display = 'none';
        });

        tabSignup.addEventListener('click', () => {
            tabSignup.classList.add('active');
            tabSignin.classList.remove('active');
            formSignup.style.display = 'block';
            formSignin.style.display = 'none';
        });

        formSignin.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = formSignin.querySelector('input[type="text"]').value;
            localStorage.setItem('arch_user', username);
            redirectToHome();
        });

        formSignup.addEventListener('submit', (e) => {
            e.preventDefault();
            const newUsername = formSignup.querySelector('input[type="text"]').value;
            localStorage.setItem('arch_user', newUsername);
            redirectToHome();
        });
    }

    // ==========================================
    // 6. كود زرار النسخ (Copy)
    // ==========================================
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((pre) => {
        let wrapper = pre.parentElement;
        
        if (!wrapper || !wrapper.classList.contains("code-wrapper")) {
            wrapper = document.createElement("div");
            wrapper.className = "code-wrapper";
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);
        }

        if (!wrapper.querySelector('.copy-btn')) { // منع تكرار الزرار
            const copyBtn = document.createElement("button");
            copyBtn.className = "copy-btn";
            copyBtn.innerText = "Copy";
            wrapper.appendChild(copyBtn);

            copyBtn.addEventListener("click", async () => {
                const codeText = pre.innerText;
                try {
                    await navigator.clipboard.writeText(codeText);
                    copyBtn.innerText = "Copied!";
                    copyBtn.style.backgroundColor = "var(--green, #a6e3a1)";
                    copyBtn.style.color = "var(--crust, #11111b)";
                    
                    setTimeout(() => {
                        copyBtn.innerText = "Copy";
                        copyBtn.style.backgroundColor = "";
                        copyBtn.style.color = "";
                    }, 2000);
                } catch (err) {
                    console.error("Failed to copy!", err);
                }
            });
        }
    });
});