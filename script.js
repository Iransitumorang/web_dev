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

    document.getElementById('headerTitle').addEventListener('click', function() {
        const targetElement = document.getElementById('welcome');
        targetElement.scrollIntoView({ behavior: 'smooth' }); 
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.style.opacity = 0; 
        link.style.animation = `fadeIn 0.5s forwards ${index * 0.1}s`;
    });

    const welcomeTitle = document.querySelector('#welcome h2');
    const welcomeText = welcomeTitle.textContent;
    welcomeTitle.textContent = '';

    welcomeText.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter');
        span.style.animationDelay = `${index * 0.1}s`;
        welcomeTitle.appendChild(span);
    });
    
    const waterfallImage = document.querySelector('.zoom-image');
    waterfallImage.style.animation = 'fadeIn 1s forwards';
    waterfallImage.style.animationDelay = `${welcomeText.length * 0.1 + 0.5}s`;

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
