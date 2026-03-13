document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. كود تسجيل الدخول (تغيير الزر في الصفحة الرئيسية)
    // ==========================================
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

    // ==========================================
    // 2. كود الفيدباك وسلة الزبالة (خاص بالصفحة الرئيسية)
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
    // 3. كود صفحة الـ Auth (Signin / Signup)
    // ==========================================
    const tabSignin = document.getElementById('tab-signin');
    const tabSignup = document.getElementById('tab-signup');
    const formSignin = document.getElementById('form-signin');
    const formSignup = document.getElementById('form-signup');

    // الشرط ده بيحمي باقي الصفحات من الأخطاء
    if (tabSignin && tabSignup && formSignin && formSignup) {
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
            window.location.href = 'index.html'; // التوجيه للصفحة الرئيسية
        });

        formSignup.addEventListener('submit', (e) => {
            e.preventDefault();
            const newUsername = formSignup.querySelector('input[type="text"]').value;
            localStorage.setItem('arch_user', newUsername);
            window.location.href = 'index.html'; // التوجيه للصفحة الرئيسية
        });
    }

    // ==========================================
    // 4. كود زرار النسخ (Copy) (لأي صفحة فيها أكواد)
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
    });
});