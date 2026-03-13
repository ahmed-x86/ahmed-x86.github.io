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