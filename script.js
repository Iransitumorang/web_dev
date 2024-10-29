document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'user' && password === 'password') {
                localStorage.setItem('isAuthenticated', 'true');
                window.location.href = 'home.html';
            } else {
                const errorDiv = document.getElementById('loginError');
                errorDiv.innerText = 'Invalid username or password';
                errorDiv.style.display = 'block';
            }
        });
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('isAuthenticated');
            window.location.href = 'index.html';
        });
    }

    if (window.location.pathname.endsWith('home.html') && localStorage.getItem('isAuthenticated') !== 'true') {
        window.location.href = 'index.html';
    }
});
