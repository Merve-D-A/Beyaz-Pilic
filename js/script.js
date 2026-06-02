 // ---- EMBER PARTICLES ----
    const emberContainer = document.getElementById('embers');
    for (let i = 0; i < 30; i++) {
      const e = document.createElement('div');
      e.className = 'ember';
      e.style.left = Math.random() * 100 + '%';
      e.style.bottom = 0;
      e.style.width = (3 + Math.random() * 6) + 'px';
      e.style.height = e.style.width;
      e.style.setProperty('--d', (3 + Math.random() * 5) + 's');
      e.style.animationDelay = (Math.random() * 6) + 's';
      e.style.background = '#888';
      e.style.boxShadow = '0 0 6px rgba(136,136,136,0.3)';
      emberContainer.appendChild(e);
    }

    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));

    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    toggle.addEventListener('click', () => { toggle.classList.toggle('open'); links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { toggle.classList.remove('open'); links.classList.remove('open'); }));

    // ---- MENU TABS ----
    document.querySelectorAll('.menu-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('panel-' + tab.dataset.panel).classList.add('active');
      });
    });

    // ---- DARK MODE ----
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    }

    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });


