/**
 * CORE DATA (Master Content Restoration)
 */

const ROLES = ['ML Developer', 'AI Developer', 'Full Stack Developer'];

const PROJECTS = [
    {
        id: '01',
        name: 'SecureVault',
        category: 'Cybersecurity',
        description: 'An ultra-secure, professional encryption hub. Built with industry-standard AES-256 encryption, MFA, and real-time telemetry to provide a private, cloud-based "nest" for sensitive data management.',
        tech: ['React 19', 'Node.js', 'Firebase', 'AES-256', 'MongoDB'],
        liveUrl: 'https://securenest-cloud.vercel.app/',
        githubUrl: '#'
    },
    {
        id: '02',
        name: 'XAI Intelligence',
        category: 'Healthcare AI',
        description: 'A clinical decision support system utilizing Explainable AI. It provides transparent ML diagnostics for Cancer, Diabetes, and Heart disease, offering SHAP/LIME interpretations for medical professionals.',
        tech: ['Python', 'Flask', 'SHAP', 'LIME', 'Scikit-Learn'],
        liveUrl: 'https://explainable-ai-for-clinical-decision.onrender.com/',
        githubUrl: '#'
    },
    {
        id: '03',
        name: 'SpamGuard NLP',
        category: 'Linguistic AI',
        description: 'An intelligent mail classification system. Employs advanced Natural Language Processing and TF-IDF vectorization to identify and filter malicious spam with high precision.',
        tech: ['Python', 'NLTK', 'NLP', 'Scikit-Learn', 'TF-IDF'],
        liveUrl: '#',
        githubUrl: 'https://github.com/kesavaimandi/Spam-Mail-Detection'
    },
    {
        id: '04',
        name: 'Salary Oracle',
        category: 'Data Science',
        description: 'A data-driven compensation analysis tool. Uses multi-variate regression models to predict professional salary ranges based on industry metrics, experience, and domain expertise.',
        tech: ['Python', 'Pandas', 'Regression', 'Flask', 'Scikit-Learn'],
        liveUrl: '#',
        githubUrl: 'https://github.com/kesavaimandi/Salary-Prediction'
    }
];

const SKILLS = [
    { 
        title: 'Full Stack Development', 
        icon: 'globe', 
        skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'HTML', 'CSS', 'Flask'] 
    },
    { 
        title: 'AI & Deep Learning', 
        icon: 'cpu', 
        skills: ['ANN', 'LSTM', 'Transformers', 'LLMs (GPT, Gemini)', 'Prompt Engineering', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face'] 
    },
    { 
        title: 'Data Science & ML', 
        icon: 'brain', 
        skills: ['Regression', 'Classification', 'Clustering', 'Time Series', 'Model Tuning', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-Learn'] 
    },
    { 
        title: 'Analytics & Tools', 
        icon: 'wrench', 
        skills: ['SQL (MS SQL)', 'Power BI', 'MS Excel', 'Git/GitHub', 'Jupyter', 'VS Code', 'Google Colab'] 
    }
];

const SERVICES = [
    { title: 'AI Development', description: 'Custom neural networks, LLM integrations, and intelligent automation solutions.', icon: 'brain' },
    { title: 'Full Stack Apps', description: 'Scalable web applications built with modern frameworks and robust backends.', icon: 'code' },
    { title: 'Machine Learning', description: 'Predictive analytics, data mining, and statistical modeling for hardware/software.', icon: 'terminal' },
    { title: 'UI Architecture', description: 'Premium, interactive interfaces with advanced animations and glassmorphism.', icon: 'rocket' }
];

const EDUCATION = [
    {
        degree: 'Certification Program in Artificial Intelligence & Data Science',
        institution: 'IntelliPaat',
        period: '2024 – 2026',
        location: 'Online',
        details: 'Intensive specialization in Machine Learning and AI foundations with a focus on real-world implementations.'
    },
    {
        degree: 'B.Tech in Computer Science and Engineering',
        institution: 'Adarsh College of Engineering (JNTUK)',
        period: '2022 – 2025',
        location: 'Andhra Pradesh, India',
        details: 'Focusing on core engineering principles, web design, and building scalable full-stack applications.'
    },
    {
        degree: 'Diploma in Mechanical Engineering',
        institution: 'Nuzvid Polytechnic',
        period: '2019 – 2022',
        location: 'Nuzvid, India',
        details: 'Gained foundational engineering knowledge and developed strong logical and analytical reasoning skills.'
    }
];

const CERTIFICATIONS = [
    { title: 'Data Analytics - Deloitte Australia', provider: 'Deloitte', year: 'Sep 2025' },
    { title: 'Python Certification on ML', provider: 'IntelliPaat', year: 'Sep 2025' },
    { title: 'Microsoft SQL Certificate', provider: 'IntelliPaat', year: 'May 2025' },
    { title: 'Cyber Security Certification', provider: 'DevTown', year: 'May 2024' },
    { title: 'Full Stack Developer', provider: 'Bitlabs', year: 'Aug 2023' }
];

const PROCESS = [
    { step: '01', title: 'Discuss', desc: 'Understand client goals and expectations', icon: 'message-square' },
    { step: '02', title: 'Plan', desc: 'Define requirements, features, and tech stack', icon: 'clipboard-list' },
    { step: '03', title: 'Build', desc: 'Design UI and develop frontend + backend', icon: 'layers' },
    { step: '04', title: 'Test', desc: 'Debug, optimize performance, and refine', icon: 'bug' },
    { step: '05', title: 'Deploy', desc: 'Launch project and provide support', icon: 'rocket' }
];

const QUOTES = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Intelligence is the ability to adapt to change.", author: "Stephen Hawking" },
    { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
    { text: "Software is eating the world, but AI is going to eat software.", author: "Jensen Huang" },
    { text: "The science of today is the technology of tomorrow.", author: "Edward Teller" }
];

let currentProj = 0;
let currentQ = 0;

/**
 * INIT FUNCTIONS
 */

function initEducation() {
    const eduList = document.getElementById('education-timeline');
    const certList = document.getElementById('certifications-list');
    
    eduList.innerHTML = EDUCATION.map((e, i) => `
        <div class="edu-item glass reveal-card ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}">
            <h3>${e.degree}</h3>
            <p class="institution-name">${e.institution}</p>
            <div class="edu-meta">
                <span><i data-lucide="map-pin"></i> ${e.location}</span>
                <span><i data-lucide="calendar"></i> ${e.period}</span>
            </div>
            <p class="edu-details">${e.details}</p>
        </div>
    `).join('');

    certList.innerHTML = CERTIFICATIONS.map((c, i) => `
        <div class="cert-item glass reveal-card ${i % 2 === 0 ? 'reveal-right' : 'reveal-left'}">
            <div class="cert-info">
                <h4>${c.title}</h4>
                <p>${c.provider}</p>
            </div>
            <span class="cert-year">${c.year}</span>
        </div>
    `).join('');
    
    if (window.lucide) lucide.createIcons();
}

/**
 * INIT
 */
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initGrids();
    initEducation();
    initAboutSymbols();
    updateProjDisplay();
    updateQuoteDisplay();
    initTiltEffect();
    
    // Smooth Anchor Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Contact Form Logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const name = formData.get('name');
            const message = formData.get('message');
            window.location.href = `mailto:imandi.kesava2004@gmail.com?subject=Portfolio Inquiry from ${name}&body=${message}`;
        });
    }

    // Background Rotation Logic
    const snapContainer = document.querySelector('.snap-container');
    const spheresLayer = document.getElementById('spheres-layer');
    if (snapContainer && spheresLayer) {
        snapContainer.addEventListener('scroll', () => {
            const scrollTotal = snapContainer.scrollHeight - snapContainer.clientHeight;
            if (scrollTotal > 0) {
                const rotation = (snapContainer.scrollTop / scrollTotal) * 360;
                spheresLayer.style.setProperty('--bg-rot', `${rotation}deg`);
            }
        });
    }

    // Global Cinematic Observer (In/Out)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            } else {
                entry.target.classList.remove('reveal-active');
            }
        });
    }, { threshold: 0.15 });

    // Observe all revealable elements
    document.querySelectorAll('.reveal-card, .process-reveal, .project-card').forEach(el => {
        observer.observe(el);
    });

    if (window.lucide) window.lucide.createIcons();
});

function initTiltEffect() {
    const cards = document.querySelectorAll('.process-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
        });
    });
}

function initTypewriter() {
    const el = document.getElementById('typewriter');
    let rIdx = 0, cIdx = 0, isDel = false;
    function run() {
        const role = ROLES[rIdx];
        el.textContent = role.substring(0, isDel ? cIdx - 1 : cIdx + 1);
        cIdx = isDel ? cIdx - 1 : cIdx + 1;
        let s = isDel ? 50 : 100;
        if (!isDel && cIdx === role.length) { s = 1500; isDel = true; }
        else if (isDel && cIdx === 0) { isDel = false; rIdx = (rIdx + 1) % ROLES.length; s = 500; }
        setTimeout(run, s);
    }
    run();
}

function initAboutSymbols() {
    const cont = document.getElementById('symbols-container');
    const chars = [
        '@', '#', '$', '<', '>', '"', '{', '}', '=>', 'async', 
        'await', 'const', 'let', 'import', 'export', '...', '&&', 
        '||', 'void', '[]', '()', '? :', '!=', '===', '++', '*',
        'export default', 'interface', 'type', 'boolean', 'string',
        'number', 'null', 'undefined', 'return', 'yield', 'next',
        'super', 'this', 'extends', 'implements', 'abstract'
    ];
    for(let i=0; i<40; i++) {
        const s = document.createElement('span');
        s.className = 'code-symbol';
        s.textContent = chars[i % chars.length];
        s.style.top = Math.random() * 95 + '%';
        s.style.left = (i % 2 === 0 ? Math.random() * 35 : 65 + Math.random() * 30) + '%';
        const size = 0.6 + Math.random() * 2;
        s.style.fontSize = size + 'rem';
        s.style.opacity = '0.07';
        s.style.color = i % 3 === 0 ? 'var(--accent-gold)' : i % 3 === 1 ? 'var(--accent-purple)' : 'rgba(255,255,255,0.4)';
        cont.appendChild(s);
    }
}

function updateProjDisplay() {
    const p = PROJECTS[currentProj];
    const projContainer = document.getElementById('projects-container');
    if (projContainer) {
        projContainer.classList.add('project-card', 'reveal-card', 'reveal-right');
    }
    
    document.getElementById('proj-id').textContent = p.id;
    document.getElementById('proj-name').textContent = p.name;
    document.getElementById('proj-category').textContent = p.category;
    document.getElementById('proj-desc').textContent = p.description;
    document.getElementById('proj-tech').innerHTML = p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('');
    
    // Links logic
    const liveBtn = document.getElementById('proj-live');
    const ghBtn = document.getElementById('proj-github');
    
    liveBtn.href = p.liveUrl;
    liveBtn.style.display = p.liveUrl === '#' ? 'none' : 'inline-block';
    
    ghBtn.href = p.githubUrl;
    ghBtn.style.display = p.githubUrl === '#' ? 'none' : 'inline-block';
}

window.nextProject = () => { currentProj = (currentProj + 1) % PROJECTS.length; updateProjDisplay(); }
window.prevProject = () => { currentProj = (currentProj - 1 + PROJECTS.length) % PROJECTS.length; updateProjDisplay(); }

function updateQuoteDisplay() {
    const q = QUOTES[currentQ];
    document.getElementById('quote-text').textContent = `"${q.text}"`;
    document.getElementById('quote-author').textContent = `— ${q.author}`;
    document.getElementById('quote-dots').innerHTML = QUOTES.map((_, i) => `<div class="dot ${i === currentQ ? 'active' : ''}" onclick="goToQ(${i})"></div>`).join('');
}

window.nextQuote = () => { currentQ = (currentQ + 1) % QUOTES.length; updateQuoteDisplay(); }
window.prevQuote = () => { currentQ = (currentQ - 1 + QUOTES.length) % QUOTES.length; updateQuoteDisplay(); }
window.goToQ = (i) => { currentQ = i; updateQuoteDisplay(); }

function initGrids() {
    document.getElementById('skills-grid').innerHTML = SKILLS.map((c, i) => `
        <div class="skill-card glass reveal-card ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}">
            <div class="card-header"><i data-lucide="${c.icon}"></i><h3>${c.title}</h3></div>
            <div class="skills-list">${c.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
        </div>
    `).join('');

    document.getElementById('services-grid').innerHTML = SERVICES.map((s, i) => `
        <div class="service-card glass reveal-card ${i % 2 === 0 ? 'reveal-right' : 'reveal-left'}">
            <div class="service-icon"><i data-lucide="${s.icon}"></i></div>
            <h3>${s.title}</h3>
            <p>${s.description}</p>
        </div>
    `).join('');

    document.getElementById('process-grid').innerHTML = PROCESS.map((p, i) => `
        <div class="process-card glass process-reveal" style="transition-delay: ${i * 0.1}s">
            <div class="card-connector"></div>
            <div class="step-icon-wrapper">
                <i data-lucide="${p.icon}"></i>
            </div>
            <div class="step-badge">${p.step}</div>
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
        </div>
    `).join('');
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        } else {
            // Optional: Remove class on exit for "In and Out"
            // entry.target.classList.remove('reveal-active');
        }
    });
}, { threshold: 0.15 });

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Data Grids
    initEducation();
    initGrids();
    
    // Setup Navigation active states
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(s => {
        navObserver.observe(s);
        // Generic Reveal System (Includes Hero, Sections, Cards)
        if (s.classList.contains('reveal')) revealObserver.observe(s);
    });

    // Observe manually generated cards and items
    document.querySelectorAll('.reveal-card, .process-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Init components
    updateProjDisplay();
    updateQuoteDisplay();

    // Trigger Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});
