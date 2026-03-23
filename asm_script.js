document.addEventListener("DOMContentLoaded", () => {
        
    // ==========================================
    // Auth Logic
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
    // Feedback Modal Logic
    // ==========================================
    const feedbackBtn = document.getElementById("feedbackBtn");
    const modal = document.getElementById("feedbackModal");
    const closeBtn = document.getElementById("closeModal");
    const form = document.getElementById("feedbackForm");
    const trashMsg = document.getElementById("trashMessage");

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
});
// الكود الموحد لكل الصفحات (ضعه في asm_script.js أو أي اسم تختاره)
document.addEventListener("DOMContentLoaded", () => {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((pre) => {
        // التحقق مما إذا كان العنصر الأب هو بالفعل code-wrapper (كما في ملف Hyprland)
        let wrapper = pre.parentElement;
        if (!wrapper.classList.contains("code-wrapper")) {
            // إذا لم يكن موجوداً (كما في ملفات ASM و gh-radar)، قم بإنشائه
            wrapper = document.createElement("div");
            wrapper.className = "code-wrapper";
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);
        }

        // إنشاء زر النسخ
        const copyBtn = document.createElement("button");
        copyBtn.className = "copy-btn";
        copyBtn.innerText = "Copy";
        wrapper.appendChild(copyBtn);

        // وظيفة النسخ
        copyBtn.addEventListener("click", async () => {
            // استخدام innerText للـ pre نفسه لضمان نسخ الكود سواء كان داخل <code> أم لا
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