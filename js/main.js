/**
 * main.js — Core Site Logic (Refactored)
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Auth Logic
    if (typeof Components !== 'undefined' && Components.initAuthLogic) {
        Components.initAuthLogic();
    }

    // 2. Feedback Modal Logic
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

    // 3. Auth Page Logic
    const tabSignin = document.getElementById('tab-signin');
    const tabSignup = document.getElementById('tab-signup');
    const formSignin = document.getElementById('form-signin');
    const formSignup = document.getElementById('form-signup');

    if (tabSignin && tabSignup && formSignin && formSignup) {
        const redirectToHome = () => { window.location.href = '/'; };

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

    // 4. Code Block Copy Buttons
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((pre) => {
        let wrapper = pre.parentElement;

        if (!wrapper || !wrapper.classList.contains("code-wrapper")) {
            wrapper = document.createElement("div");
            wrapper.className = "code-wrapper";
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);
        }

        if (!wrapper.querySelector('.copy-btn')) {
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

    // 5. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));
    }

    // ==========================================
    // 6. Global Glow Effect (C++ Lerp Replica)
    // ==========================================
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    // Track mouse globally
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    // Smooth animation loop
    function animateGlow() {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        // Apply coordinates to document root
        document.documentElement.style.setProperty('--mouse-x', `${currentX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${currentY}px`);

        requestAnimationFrame(animateGlow);
    }
    animateGlow();

    // ==========================================
    // 7. RippleButton Effect (C++ Replica)
    // ==========================================
    const applyRipple = () => {
        const rippleButtons = document.querySelectorAll('.cta-btn, .btn, .submit-btn, .btn-link, .pagination a');
        rippleButtons.forEach(btn => {
            if(btn.dataset.rippleLoaded) return;
            btn.dataset.rippleLoaded = "true";

            btn.addEventListener('mousedown', function(e) {
                const ripple = document.createElement('span');
                ripple.classList.add('ripple-effect');
                this.appendChild(ripple);

                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;

                const size = Math.max(rect.width, rect.height) * 1.5;
                ripple.style.width = `${size}px`;
                ripple.style.height = `${size}px`;

                setTimeout(() => {
                    ripple.remove();
                }, 500);
            });
        });
    };
    
    applyRipple();
    setTimeout(applyRipple, 1000);
});