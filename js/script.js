/**
 * Shahanwaj Khan - Personal Portfolio Script
 * Pure Vanilla JavaScript for premium animations and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    initPreloader();
    initThemeToggle();
    initNavbarScroll();
    initMobileNav();
    initScrollProgress();
    initActiveNavHighlight();
    initScrollReveals(prefersReducedMotion);
    initAboutJourney();
    initCurrentYear();
    
    if (!prefersReducedMotion) {
        initHeroParallax();
        initStatsCounter();
        initMagneticButtons();
        initSkillsAnimations();
    } else {
        // Simple reveal of stats if motion is reduced
        revealStatsImmediately();
    }

    initSkillsFilter();
    initContactForm();
    initBackToTop();
    initNotableProjectsToggle();
});

/* ==========================================================================
   1. PRELOADER
   ========================================================================== */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('preloaderProgress');
    
    if (!preloader) return;

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Fade out preloader
            setTimeout(() => {
                preloader.style.transform = 'translateY(-100%)';
                document.body.style.overflowY = 'auto';
                document.body.classList.add('body-loaded'); // Signal page reveal
            }, 300);
        }
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }, 80);

    // Backup if loading takes too long
    window.addEventListener('load', () => {
        clearInterval(interval);
        if (progressBar) progressBar.style.width = '100%';
        setTimeout(() => {
            preloader.style.transform = 'translateY(-100%)';
            document.body.style.overflowY = 'auto';
            document.body.classList.add('body-loaded'); // Signal page reveal
        }, 300);
    });
}



/* ==========================================================================
   3. SCROLL PROGRESS
   ========================================================================== */
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = `${scrollPercentage}%`;
    });
}

/* ==========================================================================
   4. NAVBAR SCROLL
   ========================================================================== */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ==========================================================================
   5. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navToggle || !navMenu) return;

    function closeMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    function openMenu() {
        navMenu.classList.add('active');
        navToggle.classList.add('active');
        if (navOverlay) navOverlay.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    // Toggle menu
    navToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.contains('active');
        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu on click of navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

/* ==========================================================================
   6. ACTIVE NAV HIGHLIGHT (SCROLL SPY)
   ========================================================================== */
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + window.innerHeight * 0.3; // Offset

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   7. HERO PARALLAX
   ========================================================================== */
function initHeroParallax() {
    const hero = document.getElementById('home');
    const portrait = document.getElementById('heroPortraitWrapper');
    const bgText = document.getElementById('heroBgText');
    const profileImg = document.getElementById('heroProfileImg');
    
    if (!hero || !portrait || !bgText || !profileImg) return;

    // Only enable mousemove parallax on devices with hover fine pointer
    const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (isDesktopPointer) {
        hero.addEventListener('mousemove', (e) => {
            const width = hero.offsetWidth;
            const height = hero.offsetHeight;
            
            // Normalize mouse coordinates from -0.5 to 0.5
            const mouseX = (e.clientX / width) - 0.5;
            const mouseY = (e.clientY / height) - 0.5;

            // Move portrait slightly in mouse direction
            portrait.style.transform = `translate3d(${mouseX * 25}px, ${mouseY * 25}px, 0) rotateY(${mouseX * 10}deg) rotateX(${-mouseY * 10}deg)`;
            
            // Move background text slightly in the opposite direction
            bgText.style.transform = `translate3d(${-mouseX * 40}px, ${-mouseY * 40}px, 0)`;
            
            // Parallax image movement inside the wrapper
            profileImg.style.transform = `scale(1.05) translate3d(${-mouseX * 15}px, ${-mouseY * 15}px, 0)`;
        });

        hero.addEventListener('mouseleave', () => {
            // Smooth return to center
            portrait.style.transform = 'translate3d(0, 0, 0) rotateY(0) rotateX(0)';
            bgText.style.transform = 'translate3d(0, 0, 0)';
            profileImg.style.transform = 'scale(1) translate3d(0, 0, 0)';
        });
    }

    // Split background text elements horizontally as user scrolls down ONLY on desktop viewports (>= 1024px)
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 1024) {
            const scrollVal = window.scrollY;
            if (scrollVal < window.innerHeight) {
                const leftText = document.querySelector('.bg-text-left');
                const rightText = document.querySelector('.bg-text-right');
                if (leftText && rightText) {
                    leftText.style.transform = `translateX(${-scrollVal * 0.4}px)`;
                    rightText.style.transform = `translateX(${scrollVal * 0.4}px)`;
                }
            }
        } else {
            const leftText = document.querySelector('.bg-text-left');
            const rightText = document.querySelector('.bg-text-right');
            if (leftText && rightText) {
                leftText.style.transform = 'none';
                rightText.style.transform = 'none';
            }
        }
    });
}

/* ==========================================================================
   8. SCROLL REVEALS
   ========================================================================== */
function initScrollReveals(prefersReducedMotion) {
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply data-delay transition delay dynamically if present
                const delay = entry.target.getAttribute('data-delay');
                if (delay) {
                    entry.target.style.transitionDelay = `${delay}ms`;
                }
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   9. STATS COUNTER
   ========================================================================== */
function initStatsCounter() {
    const statsSection = document.getElementById('statsSection');
    const counters = document.querySelectorAll('.stat-number');
    
    if (!statsSection || counters.length === 0) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'), 10);
                    const duration = 2000; // 2 seconds count duration
                    const stepTime = Math.max(Math.floor(duration / target), 15);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += Math.ceil(target / (duration / stepTime));
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                            // Add trailing '+' sign for completed count visual
                            counter.innerText = target === 500 ? '500+' : `${target}+`;
                        } else {
                            counter.innerText = current;
                        }
                    }, stepTime);
                });
                animated = true;
                observer.unobserve(statsSection);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
}

function revealStatsImmediately() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = counter.getAttribute('data-count');
        counter.innerText = target === '500' ? '500+' : `${target}+`;
    });
}

/* ==========================================================================
   10. MAGNETIC BUTTONS
   ========================================================================== */
function initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            // Center coordinates of button
            const btnX = rect.left + rect.width / 2;
            const btnY = rect.top + rect.height / 2;
            
            // Distance between mouse and button center
            const mouseX = e.clientX - btnX;
            const mouseY = e.clientY - btnY;
            
            // Pull factor
            const pullFactor = 0.35;
            
            btn.style.transform = `translate3d(${mouseX * pullFactor}px, ${mouseY * pullFactor}px, 0)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate3d(0, 0, 0)';
        });
    });
}

/* ==========================================================================
   11. CONTACT FORM VALIDATION
   ========================================================================== */
function initContactForm() {
    const canvas = document.getElementById('sketchCanvas');
    const notebook = document.getElementById('sketchNotebook');
    if (!canvas || !notebook) return;

    // Ambient dust particles
    const dustContainer = document.getElementById('dustParticles');
    if (dustContainer) {
        dustContainer.innerHTML = '';
        for (let i = 0; i < 15; i++) {
            const dust = document.createElement('div');
            dust.className = 'dust-particle';
            dust.style.left = `${Math.random() * 100}%`;
            dust.style.top = `${Math.random() * 100}%`;
            dust.style.animationDelay = `${Math.random() * 12}s`;
            dust.style.opacity = `${Math.random() * 0.5 + 0.1}`;
            dustContainer.appendChild(dust);
        }
    }

    // --- DAY/NIGHT TOGGLE & DYNAMIC SHADOWS ---
    const contactSec = document.getElementById('contact');
    const deskLamp = document.getElementById('deskLamp');
    const workspace = document.getElementById('deskWorkspace');

    if (contactSec && deskLamp && workspace) {
        deskLamp.addEventListener('click', () => {
            contactSec.classList.toggle('night-mode');
        });

        deskLamp.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                contactSec.classList.toggle('night-mode');
            }
        });

        contactSec.addEventListener('mousemove', (e) => {
            const rect = contactSec.getBoundingClientRect();
            const lampRect = deskLamp.getBoundingClientRect();
            
            const lampCenterX = lampRect.left - rect.left + lampRect.width / 2;
            const lampCenterY = lampRect.top - rect.top + lampRect.height / 2;
            
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const dx = mouseX - lampCenterX;
            const dy = mouseY - lampCenterY;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            
            const shadowLimit = 20;
            const shadowScale = Math.min(shadowLimit, dist * 0.04);
            
            const shadowX = (dx / dist) * shadowScale;
            const shadowY = (dy / dist) * shadowScale;
            
            contactSec.style.setProperty('--shadow-x', `${shadowX}px`);
            contactSec.style.setProperty('--shadow-y', `${shadowY}px`);
            contactSec.style.setProperty('--lamp-x', `${(lampCenterX / rect.width) * 100}%`);
            contactSec.style.setProperty('--lamp-y', `${(lampCenterY / rect.height) * 100}%`);
        });
    }

    // --- COFFEE CUP & COFFEE RING STAIN ---
    const coffeeCup = document.getElementById('deskCoffee');
    if (coffeeCup && workspace) {
        coffeeCup.addEventListener('click', (e) => {
            coffeeCup.style.transform = 'scale(1.08) rotate(15deg)';
            setTimeout(() => {
                coffeeCup.style.transform = '';
            }, 350);

            const rect = workspace.getBoundingClientRect();
            const x = e.clientX - rect.left - 39;
            const y = e.clientY - rect.top - 39;

            const stain = document.createElement('div');
            stain.className = 'coffee-ring';
            stain.style.left = `${x}px`;
            stain.style.top = `${y}px`;
            stain.style.transform = `rotate(${Math.random() * 360}deg)`;

            workspace.appendChild(stain);
        });

        coffeeCup.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                coffeeCup.click();
            }
        });
    }

    // --- DESK PLANT LEAF SWAY ---
    const plant = document.getElementById('deskPlant');
    const leaves = document.querySelectorAll('.plant-leaf');
    if (plant && leaves.length > 0 && contactSec) {
        contactSec.addEventListener('mousemove', (e) => {
            const rect = plant.getBoundingClientRect();
            const plantCenterX = rect.left + rect.width / 2;
            const plantCenterY = rect.top + rect.height / 2;
            
            const dx = e.clientX - plantCenterX;
            const dy = e.clientY - plantCenterY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 220) {
                const force = (220 - distance) / 220;
                leaves.forEach((leaf, idx) => {
                    const angle = (idx + 1) * 35;
                    const swayX = Math.sin(angle) * force * 15;
                    const swayY = Math.cos(angle) * force * 6;
                    leaf.style.transform = `translate(${swayX}px, ${swayY}px) rotate(${swayX}deg)`;
                });
            } else {
                leaves.forEach(leaf => {
                    leaf.style.transform = 'translate(0px, 0px) rotate(0deg)';
                });
            }
        });
    }

    // --- DRAGGABLE STICKY NOTES ---
    const draggables = document.querySelectorAll('.draggable-sticky');
    draggables.forEach(sticky => {
        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let rotAngle = parseFloat(sticky.style.transform.replace(/[^0-9.-]/g, '')) || 0;

        sticky.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            isDragging = true;
            sticky.style.zIndex = '100';
            
            const rect = sticky.getBoundingClientRect();
            const workspaceRect = workspace.getBoundingClientRect();
            
            startX = e.clientX - (rect.left - workspaceRect.left);
            startY = e.clientY - (rect.top - workspaceRect.top);
            e.preventDefault();
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const workspaceRect = workspace.getBoundingClientRect();
            
            currentX = e.clientX - workspaceRect.left - startX;
            currentY = e.clientY - workspaceRect.top - startY;
            
            const minX = 0;
            const maxX = workspaceRect.width - sticky.offsetWidth;
            const minY = 0;
            const maxY = workspaceRect.height - sticky.offsetHeight;
            
            currentX = Math.max(minX, Math.min(maxX, currentX));
            currentY = Math.max(minY, Math.min(maxY, currentY));
            
            sticky.style.left = `${currentX}px`;
            sticky.style.top = `${currentY}px`;
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                sticky.style.zIndex = '12';
            }
        });

        // Touch triggers
        sticky.addEventListener('touchstart', (e) => {
            isDragging = true;
            sticky.style.zIndex = '100';
            const touch = e.touches[0];
            const rect = sticky.getBoundingClientRect();
            const workspaceRect = workspace.getBoundingClientRect();
            
            startX = touch.clientX - (rect.left - workspaceRect.left);
            startY = touch.clientY - (rect.top - workspaceRect.top);
        }, { passive: true });

        sticky.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            const workspaceRect = workspace.getBoundingClientRect();
            
            currentX = touch.clientX - workspaceRect.left - startX;
            currentY = touch.clientY - workspaceRect.top - startY;
            
            sticky.style.left = `${currentX}px`;
            sticky.style.top = `${currentY}px`;
        }, { passive: true });

        sticky.addEventListener('touchend', () => {
            isDragging = false;
            sticky.style.zIndex = '12';
        });

        sticky.addEventListener('dblclick', () => {
            rotAngle += 15;
            if (rotAngle >= 360) rotAngle -= 360;
            sticky.style.transform = `rotate(${rotAngle}deg)`;
        });
    });

    // --- CANVAS DRAWING MECHANICS ---
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let brushColor = '#111111';
    let brushSize = 4;
    let isEraser = false;
    let undoStack = [];
    let redoStack = [];
    let pts = [];

    const pencil = document.getElementById('pencilStylus');
    const pencilTipColor = document.getElementById('pencilTipColor');

    function saveState() {
        if (undoStack.length >= 25) {
            undoStack.shift();
        }
        undoStack.push(canvas.toDataURL());
        redoStack = [];
    }

    function restoreFromHistory(dataURL) {
        if (!dataURL) return;
        const img = new Image();
        img.src = dataURL;
        img.onload = () => {
            const dpr = window.devicePixelRatio || 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width / dpr, canvas.height / dpr);
        };
    }

    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        
        if (undoStack.length > 0) {
            restoreFromHistory(undoStack[undoStack.length - 1]);
        }
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }

    resizeCanvas();
    setTimeout(resizeCanvas, 150);
    window.addEventListener('resize', resizeCanvas);

    function updatePencilPos(e, isMouseDown) {
        if (!pencil || !workspace) return;
        const rect = workspace.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        pencil.style.left = `${x - 12}px`;
        pencil.style.top = `${y - 118}px`;

        if (isMouseDown) {
            pencil.classList.add('active');
            pencil.style.transform = 'rotate(45deg) scale(1.1)';
        } else {
            pencil.classList.add('active');
            pencil.style.transform = 'rotate(15deg) scale(1.0)';
        }
    }

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        lastX = e.clientX - rect.left;
        lastY = e.clientY - rect.top;
        pts = [{x: lastX, y: lastY}];
        updatePencilPos(e, true);
        saveState();
    });

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        if (!isDrawing) {
            if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
                updatePencilPos(e, false);
            } else {
                pencil.classList.remove('active');
                pencil.style.left = '80px';
                pencil.style.top = '220px';
                pencil.style.transform = 'rotate(25deg)';
            }
            return;
        }

        const lastPoint = pts[pts.length - 1];
        const dist = Math.sqrt((mouseX - lastPoint.x)**2 + (mouseY - lastPoint.y)**2);
        const velocity = Math.max(1, Math.min(10, dist));
        const dynamicSize = Math.max(1.5, brushSize - (velocity * 0.25));

        pts.push({x: mouseX, y: mouseY});
        updatePencilPos(e, true);

        ctx.lineWidth = dynamicSize;
        ctx.strokeStyle = isEraser ? '#faf9f5' : brushColor;

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);

        if (pts.length > 2) {
            for (let i = 1; i < pts.length - 2; i++) {
                const xc = (pts[i].x + pts[i + 1].x) / 2;
                const yc = (pts[i].y + pts[i + 1].y) / 2;
                ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
            }
            ctx.quadraticCurveTo(pts[pts.length - 2].x, pts[pts.length - 2].y, pts[pts.length - 1].x, pts[pts.length - 1].y);
        } else {
            ctx.lineTo(mouseX, mouseY);
        }
        ctx.stroke();
    });

    canvas.addEventListener('mouseup', () => {
        if (isDrawing) {
            isDrawing = false;
            pts = [];
            if (pencil) {
                pencil.classList.remove('active');
                pencil.style.left = '80px';
                pencil.style.top = '220px';
                pencil.style.transform = 'rotate(25deg)';
            }
            saveState();
        }
    });

    canvas.addEventListener('mouseleave', () => {
        if (isDrawing) {
            isDrawing = false;
            pts = [];
            saveState();
        }
        if (pencil) {
            pencil.classList.remove('active');
            pencil.style.left = '80px';
            pencil.style.top = '220px';
            pencil.style.transform = 'rotate(25deg)';
        }
    });

    // Touch events for mobile support
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 0) return;
        e.preventDefault();
        isDrawing = true;
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        lastX = touch.clientX - rect.left;
        lastY = touch.clientY - rect.top;
        pts = [{x: lastX, y: lastY}];
        saveState();
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        if (!isDrawing || e.touches.length === 0) return;
        e.preventDefault();
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const mouseX = touch.clientX - rect.left;
        const mouseY = touch.clientY - rect.top;

        pts.push({x: mouseX, y: mouseY});

        ctx.lineWidth = brushSize;
        ctx.strokeStyle = isEraser ? '#faf9f5' : brushColor;

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);

        if (pts.length > 2) {
            for (let i = 1; i < pts.length - 2; i++) {
                const xc = (pts[i].x + pts[i + 1].x) / 2;
                const yc = (pts[i].y + pts[i + 1].y) / 2;
                ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
            }
            ctx.quadraticCurveTo(pts[pts.length - 2].x, pts[pts.length - 2].y, pts[pts.length - 1].x, pts[pts.length - 1].y);
        } else {
            ctx.lineTo(mouseX, mouseY);
        }
        ctx.stroke();
    });

    canvas.addEventListener('touchend', () => {
        isDrawing = false;
        pts = [];
        saveState();
    });

    // Control bar handlers
    const btnBrush = document.getElementById('btnBrush');
    const btnEraser = document.getElementById('btnEraser');
    const btnUndo = document.getElementById('btnUndo');
    const btnRedo = document.getElementById('btnRedo');
    const btnClear = document.getElementById('btnClear');
    const btnSave = document.getElementById('btnSave');
    const brushSizeInput = document.getElementById('brushSize');
    const colorSwatches = document.querySelectorAll('.color-swatch');

    if (btnBrush && btnEraser) {
        btnBrush.addEventListener('click', () => {
            isEraser = false;
            btnBrush.classList.add('active');
            btnEraser.classList.remove('active');
            if (pencilTipColor) pencilTipColor.setAttribute('fill', brushColor);
        });

        btnEraser.addEventListener('click', () => {
            isEraser = true;
            btnEraser.classList.add('active');
            btnBrush.classList.remove('active');
            if (pencilTipColor) pencilTipColor.setAttribute('fill', '#ffffff');
        });
    }

    if (btnUndo) {
        btnUndo.addEventListener('click', () => {
            if (undoStack.length > 1) {
                const currentState = undoStack.pop();
                redoStack.push(currentState);
                const prevState = undoStack[undoStack.length - 1];
                restoreFromHistory(prevState);
            } else if (undoStack.length === 1) {
                const currentState = undoStack.pop();
                redoStack.push(currentState);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });
    }

    if (btnRedo) {
        btnRedo.addEventListener('click', () => {
            if (redoStack.length > 0) {
                const nextState = redoStack.pop();
                undoStack.push(nextState);
                restoreFromHistory(nextState);
            }
        });
    }

    if (btnClear) {
        btnClear.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            undoStack = [];
            redoStack = [];
        });
    }

    if (btnSave) {
        btnSave.addEventListener('click', () => {
            const link = document.createElement('a');
            link.download = 'creator-desk-sketch.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    if (brushSizeInput) {
        brushSizeInput.addEventListener('input', (e) => {
            brushSize = parseInt(e.target.value);
        });
    }

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            colorSwatches.forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            brushColor = swatch.getAttribute('data-color');
            isEraser = false;
            if (btnBrush) btnBrush.classList.add('active');
            if (btnEraser) btnEraser.classList.remove('active');
            if (pencilTipColor) pencilTipColor.setAttribute('fill', brushColor);
        });
    });

    // 3D notebook paper tilt
    notebook.addEventListener('mousemove', (e) => {
        const rect = notebook.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -6;
        const rotateY = ((x / rect.width) - 0.5) * 6;
        notebook.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
    });

    notebook.addEventListener('mouseleave', () => {
        notebook.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    });

    // Form Submission: Paper tear & paper airplane launch
    const sketchForm = document.getElementById('sketchContactForm');
    const successMsg = document.getElementById('sketchSuccessMsg');

    if (sketchForm && successMsg) {
        // Direct click handler on button (works even when button is outside <form>)
        const submitBtnEl = document.getElementById('sketchSubmitBtn');
        if (submitBtnEl) {
            submitBtnEl.addEventListener('click', (e) => {
                e.preventDefault();
                sketchForm.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            });
        }

        sketchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            const name = document.getElementById('sketchName');
            const email = document.getElementById('sketchEmail');
            const message = document.getElementById('sketchMessage');
            
            document.querySelectorAll('.sketch-error').forEach(err => err.style.display = 'none');
            document.querySelectorAll('.ruled-input, .ruled-textarea').forEach(input => input.classList.remove('invalid'));
            
            if (!name.value.trim()) {
                document.getElementById('sketchNameError').style.display = 'block';
                name.classList.add('invalid');
                isValid = false;
            }
            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailPattern.test(email.value)) {
                document.getElementById('sketchEmailError').style.display = 'block';
                email.classList.add('invalid');
                isValid = false;
            }
            
            if (!message.value.trim()) {
                document.getElementById('sketchMessageError').style.display = 'block';
                message.classList.add('invalid');
                isValid = false;
            }
            
            if (isValid) {
                const submitBtn = document.getElementById('sketchSubmitBtn');
                const feedbackEl = document.getElementById('sketchFormFeedback');
                
                if (submitBtn) {
                    submitBtn.disabled = true;
                    const btnSpan = submitBtn.querySelector('span');
                    if (btnSpan) btnSpan.textContent = "Sending...";
                }
                if (feedbackEl) {
                    feedbackEl.style.display = 'none';
                    feedbackEl.classList.remove('error');
                    feedbackEl.textContent = '';
                }

                // Send the form data to Web3Forms in the background
                const formData = new FormData(sketchForm);

                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        // Start the page-tear and airplane flight visual sequence immediately
                        notebook.classList.add('tearing-page');

                        setTimeout(() => {
                            notebook.classList.add('fly-away-page');
                        }, 200);

                        setTimeout(() => {
                            notebook.style.visibility = 'hidden';
                            successMsg.classList.add('active');
                            startConfetti();
                        }, 1800);

                        // Auto reset/re-open notebook after 7 seconds
                        setTimeout(() => {
                            const btnReset = document.getElementById('btnResetPad');
                            if (btnReset) btnReset.click();
                        }, 7200);
                    } else {
                        throw new Error(json.message || "Failed to send message.");
                    }
                })
                .catch(error => {
                    console.error("Error sending message:", error);
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        const btnSpan = submitBtn.querySelector('span');
                        if (btnSpan) btnSpan.textContent = "Send Idea";
                    }
                    if (feedbackEl) {
                        feedbackEl.textContent = error.message || "Something went wrong. Please try again.";
                        feedbackEl.classList.add('error');
                        feedbackEl.style.display = 'block';
                    }
                });
            }
        });
    }

    const btnResetPad = document.getElementById('btnResetPad');
    if (btnResetPad) {
        btnResetPad.addEventListener('click', () => {
            if (sketchForm) sketchForm.reset();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            undoStack = [];
            redoStack = [];
            
            notebook.classList.remove('tearing-page', 'fly-away-page');
            notebook.style.visibility = 'visible';
            successMsg.classList.remove('active');
            
            const submitBtn = document.getElementById('sketchSubmitBtn');
            if (submitBtn) {
                submitBtn.disabled = false;
                const btnSpan = submitBtn.querySelector('span');
                if (btnSpan) btnSpan.textContent = "Send Idea";
            }

            const feedbackEl = document.getElementById('sketchFormFeedback');
            if (feedbackEl) {
                feedbackEl.style.display = 'none';
                feedbackEl.textContent = '';
                feedbackEl.classList.remove('error');
            }
            
            resizeCanvas();
        });
    }
}

function startConfetti() {
    const canvas = document.createElement('canvas');
    canvas.className = 'confetti-canvas';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    const colors = ['#E65F2C', '#3B82F6', '#8B5CF6', '#10B981', '#F4A261'];
    
    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height - 20,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }
    
    const startTime = Date.now();
    
    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (Date.now() - startTime > 1200) {
            if (document.body.contains(canvas)) {
                document.body.removeChild(canvas);
            }
            return;
        }
        
        particles.forEach((p, idx) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);
            p.tilt = Math.sin(p.tiltAngle - idx/3) * 15;
            
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r/2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/2);
            ctx.stroke();
        });
        
        requestAnimationFrame(drawConfetti);
    }
    
    drawConfetti();
}

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
            backToTopBtn.style.transform = 'translate3d(0, 0, 0)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
            backToTopBtn.style.transform = 'translate3d(0, 20px, 0)'; // Slight slide animation
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initNotableProjectsToggle() {
    const toggleBtn = document.getElementById('toggleNotableBtn');
    const toggleText = document.getElementById('toggleNotableText');
    const extraCards = document.querySelectorAll('.extra-project-card');

    if (!toggleBtn || !extraCards.length) return;

    let isExpanded = false;

    toggleBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;

        extraCards.forEach((card, index) => {
            if (isExpanded) {
                card.classList.add('show-extra');
                card.style.animationDelay = `${index * 80}ms`;
            } else {
                card.classList.remove('show-extra');
            }
        });

        toggleBtn.classList.toggle('expanded', isExpanded);

        if (toggleText) {
            toggleText.textContent = isExpanded ? 'Show Less Projects' : 'View More Projects';
        }
    });
}

/* ==========================================================================
   13. ABOUT SECTION TIMELINE PROGRESS
   ========================================================================== */
function initAboutJourney() {
    const container = document.getElementById('aboutJourneyContainer');
    const progress = document.getElementById('aboutJourneyProgress');
    const nodes = document.querySelectorAll('.about-journey-node');
    if (!container || !progress || nodes.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Determine layout direction (horizontal vs vertical)
                const isMobile = window.innerWidth < 1023;
                if (isMobile) {
                    progress.style.height = '100%';
                } else {
                    progress.style.width = '100%';
                }
                
                // Cascade active classes along nodes
                nodes.forEach((node, index) => {
                    setTimeout(() => {
                        node.classList.add('active');
                    }, index * 300);
                });
                
                observer.unobserve(container);
            }
        });
    }, { threshold: 0.15 });

    observer.observe(container);
}

/* ==========================================================================
   14. INTERACTIVE SKILLS FILTER
   ========================================================================== */
function initSkillsFilter() {
    const tabBtns = document.querySelectorAll('.skills-tab-btn');
    const skillCards = document.querySelectorAll('.skill-card-interactive');
    
    if (tabBtns.length === 0 || skillCards.length === 0) return;
    
    function filterCategory(category) {
        let delayIndex = 0;
        skillCards.forEach(card => {
            const categories = card.getAttribute('data-categories').split(' ');
            if (categories.includes(category)) {
                card.classList.remove('hidden');
                // Staggered delay for cascade entry animation
                card.style.transitionDelay = `${delayIndex * 45}ms`;
                delayIndex++;
                
                // Force reflow
                void card.offsetWidth;
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
            } else {
                card.style.transitionDelay = '0ms';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.85) translateY(10px)';
                // Delay class hide so the transition completes
                setTimeout(() => {
                    if (card.style.opacity === '0') {
                        card.classList.add('hidden');
                    }
                }, 300);
            }
        });
    }

    // Initialize with active category
    const activeBtn = document.querySelector('.skills-tab-btn.active');
    if (activeBtn) {
        const initialCategory = activeBtn.getAttribute('data-category');
        filterCategory(initialCategory);
    }
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Update active button state
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter cards
            filterCategory(category);
        });
    });
}

/* ==========================================================================
   15. PREMIUM SKILLS SECTION ANIMATIONS
   ========================================================================== */
function initSkillsAnimations() {
    const skillCards = document.querySelectorAll('.skill-card-interactive');
    if (skillCards.length === 0) return;

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovering');
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            
            // 1. Spotlight tracking coordinates (pixels relative to card)
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            // 2. 3D Tilt calculation
            const cardWidth = rect.width;
            const cardHeight = rect.height;
            const centerX = rect.left + cardWidth / 2;
            const centerY = rect.top + cardHeight / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            const maxTilt = 8; // moderate tilt angle in degrees
            const rotateX = (-mouseY / (cardHeight / 2)) * maxTilt;
            const rotateY = (mouseX / (cardWidth / 2)) * maxTilt;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.04)`;
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovering');
            // Clean reset to default state
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0)';
            card.style.removeProperty('--mouse-x');
            card.style.removeProperty('--mouse-y');
        });
    });
}

/* ==========================================================================
   16. DARK/LIGHT THEME TOGGLE
   ========================================================================== */
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggle');
    if (!themeBtn) return;

    // We toggle theme on <html> element so it affects both html & body background rules
    const rootEl = document.documentElement;

    themeBtn.addEventListener('click', () => {
        rootEl.classList.toggle('dark-theme');
        const isDark = rootEl.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

/* ==========================================================================
   17. CURRENT YEAR DYNAMIC POPULATOR
   ========================================================================== */
function initCurrentYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

