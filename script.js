// ==========================================
// SCROLL REVEAL
// ==========================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .project-card, .stat-card, .skill-card')
    .forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });


// ==========================================
// ACTIVE NAV HIGHLIGHT
// ==========================================

const sections = document.querySelectorAll('section, div[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 100){
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current){
            link.classList.add('active');
        }
    });

});


// ==========================================
// SIDEBAR ACTIVE HIGHLIGHT
// ==========================================

const sidebarLinks = document.querySelectorAll('.sidebar a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 100){
            current = section.getAttribute('id');
        }
    });

    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current){
            link.classList.add('active');
        }
    });

});


// ==========================================
// NAVBAR HIDE ON SCROLL DOWN
// SHOW ON SCROLL UP
// ==========================================

let lastScrollY = window.scrollY;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > lastScrollY && window.scrollY > 100){
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.transition = '0.4s';
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.transition = '0.4s';
    }

    lastScrollY = window.scrollY;

});


// ==========================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ==========================================
// SKILL CARDS — STAGGERED ENTRANCE
// ==========================================

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){

            const cards = entry.target.querySelectorAll('.skill-card');

            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('show');
                    card.classList.remove('hidden');
                }, index * 80);
            });

            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const skillsContainer = document.querySelector('.skills-container');
if(skillsContainer){
    skillObserver.observe(skillsContainer);
}


// ==========================================
// STAT COUNTER ANIMATION
// ==========================================

function animateCounter(el, target, suffix){

    let count = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        count += increment;
        if(count >= target){
            count = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(count) + suffix;
    }, 16);
}

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){

            const cards = document.querySelectorAll('.stat-card h2');

            cards.forEach(card => {
                const text = card.textContent.trim();

                if(text === '3+')  animateCounter(card, 3,  '+');
                if(text === '7')   animateCounter(card, 7,  '');
                if(text === '12+') animateCounter(card, 12, '+');
            });

            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if(statsSection){
    statObserver.observe(statsSection);
}


// ==========================================
// PROJECT CARDS — STAGGERED ENTRANCE
// ==========================================

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){

            const cards = entry.target.querySelectorAll('.project-card');

            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('show');
                    card.classList.remove('hidden');
                }, index * 150);
            });

            projectObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const projectsContainer = document.querySelector('.projects-container');
if(projectsContainer){
    projectObserver.observe(projectsContainer);
}


// ==========================================
// BACK TO TOP ON LOGO CLICK
// ==========================================

const logo = document.querySelector('nav h2');
if(logo){
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


// ==========================================
// ACTIVE SIDEBAR HIGHLIGHT ON SCROLL
// ==========================================

window.addEventListener('scroll', () => {

    sidebarLinks.forEach(link => {
        const href = link.getAttribute('href');
        const section = document.querySelector(href);

        if(section){
            const rect = section.getBoundingClientRect();
            if(rect.top <= 150 && rect.bottom >= 150){
                link.style.background = '#4f46e5';
                link.style.color = 'white';
            } else {
                link.style.background = 'white';
                link.style.color = '#1f2937';
            }
        }
    });

});
// ==========================================
// TYPED HERO SUBTITLE
// ==========================================

const roles = [
    'QA Engineer',
    'Python Developer',
    'AI Evaluator',
    'Web Developer',
    'Problem Solver'
];

const heroH3 = document.querySelector('.hero h3');

if(heroH3){

    const originalText = 'MCA Graduate | ';
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    heroH3.innerHTML = originalText + '<span id="typed"></span><span class="typed-cursor"></span>';

    const typedEl = document.getElementById('typed');

    function type(){

        const currentRole = roles[roleIndex];

        if(isDeleting){
            typedEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 60 : 100;

        if(!isDeleting && charIndex === currentRole.length){
            speed = 2000;
            isDeleting = true;
        }

        if(isDeleting && charIndex === 0){
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    setTimeout(type, 1000);
}


// ==========================================
// SCROLL HINT IN HERO
// ==========================================

const hero = document.querySelector('.hero');

if(hero){

    const scrollHint = document.createElement('div');
    scrollHint.className = 'scroll-hint';
    scrollHint.innerHTML = '<span>↓</span><p>scroll</p>';

    scrollHint.addEventListener('click', () => {
        document.querySelector('.stats-section').scrollIntoView({
            behavior:'smooth'
        });
    });

    hero.appendChild(scrollHint);

    window.addEventListener('scroll', () => {
        if(window.scrollY > 100){
            scrollHint.style.opacity = '0';
        } else {
            scrollHint.style.opacity = '1';
        }
    });
}


// ==========================================
// CURSOR GLOW EFFECT
// ==========================================

const cursor = document.createElement('div');

cursor.style.cssText = `
    width: 20px;
    height: 20px;
    background: rgba(79,70,229,0.3);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: multiply;
`;

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top  = e.clientY - 10 + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(2)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});


// ==========================================
// ABOUT SECTION — HIGHLIGHT ITEMS
// INJECT DYNAMICALLY
// ==========================================

const aboutSection = document.querySelector('#about');

if(aboutSection){

    const existingP = aboutSection.querySelector('p');

    const highlightsHTML = `
        <div class="about-grid">
            <div class="about-text">
                ${existingP ? existingP.outerHTML : ''}
            </div>
            <div class="about-highlights">
                <div class="highlight-item">
                    <h4>🎓 Education</h4>
                    <p>MCA Graduate with strong foundations in CS fundamentals</p>
                </div>
                <div class="highlight-item">
                    <h4>🔍 QA & Testing</h4>
                    <p>Bug tracking, usability testing, and quality documentation</p>
                </div>
                <div class="highlight-item">
                    <h4>🤖 AI & ML</h4>
                    <p>Machine learning projects and AI evaluation experience</p>
                </div>
                <div class="highlight-item">
                    <h4>💻 Development</h4>
                    <p>Python, Flask, SQL, and full-stack web applications</p>
                </div>
            </div>
        </div>
    `;

    if(existingP){
        existingP.remove();
    }

    aboutSection.insertAdjacentHTML('beforeend', highlightsHTML);
}


// ==========================================
// SECTION DIVIDERS — INJECT UNDER H2s
// ==========================================

document.querySelectorAll('.section h2').forEach(h2 => {
    const divider = document.createElement('div');
    divider.className = 'section-divider';
    h2.insertAdjacentElement('afterend', divider);
});


// ==========================================
// EXPERIENCE SECTION POLISH
// ==========================================

const expCard = document.querySelector('#experience .project-card');

if(expCard){

    const h3 = expCard.querySelector('h3');
    const company = expCard.querySelector('p');

    if(h3 && company){

        const headerDiv = document.createElement('div');
        headerDiv.className = 'experience-header';

        const badge = document.createElement('span');
        badge.className = 'experience-badge';
        badge.textContent = '7 Months · Internship';

        h3.insertAdjacentElement('afterend', headerDiv);
        headerDiv.appendChild(h3);
        headerDiv.appendChild(badge);

        company.className = 'experience-company';
    }
}


// ==========================================
// CONTACT SECTION — ADD TITLE
// ==========================================

const contactGrid = document.querySelector('.contact-grid');

if(contactGrid){

    const titleHTML = `
        <p class="contact-section-sub">
            Feel free to reach out — always open to discussing new opportunities.
        </p>
    `;

    contactGrid.insertAdjacentHTML('beforebegin', titleHTML);
}


// ==========================================
// FOOTER — ADD LINKS
// ==========================================

const footer = document.querySelector('footer');

if(footer){
    footer.innerHTML = `
        <p>Built with HTML, CSS & JavaScript · 2026</p>
        <div class="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="https://github.com/AgarwalTa" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/tanisha-agarwal-382283398/" target="_blank">LinkedIn</a>
        </div>
    `;
}