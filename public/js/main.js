// Main JavaScript Controller
class PortfolioApp {
    constructor() {
        this.isLoaded = false;
        this.scrollPosition = 0;
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupFormHandling();
        this.setupSmoothScrolling();
        this.setupIntersectionObserver();
        this.setupPerformanceOptimizations();
        
        // Mark as loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.isLoaded = true;
            this.onDOMLoaded();
        });
    }

    onDOMLoaded() {
        // Add loaded class for CSS animations
        document.body.classList.add('loaded');
        
        // Initialize tooltips if needed
        this.initializeTooltips();
        
        // Setup lazy loading
        this.setupLazyLoading();
        
        // Initialize service worker for PWA
        this.initializeServiceWorker();
    }

    onLoadingComplete() {
        // Called after loading screen completes
        this.initializeParticles();
        this.setupScrollEffects();
    }

    initializeParticles() {
        // Initialize particles.js for specific sections if needed
        if (typeof particlesJS !== 'undefined') {
            // You can add particles to specific sections here if desired
        }
    }

    setupNavigation() {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Navbar scroll effect
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class
            if (currentScrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });

        // Mobile menu toggle
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });

            // Close menu when clicking on links
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        }

        // Active nav link highlighting
        this.updateActiveNavLink();
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observerOptions = {
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    setupScrollEffects() {
        // Parallax scrolling
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        if (parallaxElements.length > 0) {
            let ticking = false;
            
            const updateParallax = () => {
                const scrollTop = window.pageYOffset;
                
                parallaxElements.forEach(element => {
                    const speed = parseFloat(element.dataset.parallax) || 0.5;
                    const yPos = -(scrollTop * speed);
                    element.style.transform = `translateY(${yPos}px)`;
                });
                
                ticking = false;
            };
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            });
        }

        // Scroll progress indicator
        this.createScrollProgress();
    }

    createScrollProgress() {
        // Create scroll progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progressBar);

        const progressBarFill = progressBar.querySelector('.scroll-progress-bar');

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / documentHeight) * 100;
            
            progressBarFill.style.width = `${progress}%`;
        });
    }

    setupFormHandling() {
        import('./contact-form.js')
            .then(() => console.log('Contact form handler loaded'))
            .catch(err => console.error('Error loading contact form handler:', err));

        // Form field animations
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            const formGroups = contactForm.querySelectorAll('.form-group');
            formGroups.forEach(group => {
                const input = group.querySelector('input, textarea');
                const label = group.querySelector('label');
                
                if (input && label) {
                    // Handle label position
                    const updateLabel = () => {
                        if (input.value || input === document.activeElement) {
                            label.classList.add('active');
                        } else {
                            label.classList.remove('active');
                        }
                    };
                    
                    input.addEventListener('focus', updateLabel);
                    input.addEventListener('blur', updateLabel);
                    input.addEventListener('input', updateLabel);
                    
                    // Initial check
                    updateLabel();
                }
            });
        }
    }

    // Form handling moved to contact-form.js

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });
        
        // Remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    setupSmoothScrolling() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupIntersectionObserver() {
        // General purpose intersection observer for animations
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        if (animatedElements.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            animatedElements.forEach(element => {
                observer.observe(element);
            });
        }
    }

    setupPerformanceOptimizations() {
        // Debounce scroll events
        let scrollTimeout;
        const originalScrollHandler = window.onscroll;
        
        window.onscroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (originalScrollHandler) {
                    originalScrollHandler();
                }
            }, 10);
        };

        // Throttle resize events
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 100);
        });

        // Preload critical resources
        this.preloadCriticalResources();

        // Update on resize
        // window.addEventListener('resize', updateParticlesConfig);

        // Pause particles when tab is not visible (performance optimization)
        document.addEventListener('visibilitychange', () => {
            if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
                const pJS = window.pJSDom[0].pJS;
                if (document.hidden) {
                    pJS.fn.particlesPause();
                } else {
                    pJS.fn.particlesPlay();
                }
            }
        });

        // Update global background on scroll
        window.addEventListener('scroll', () => {
            if (window.globalBackground) {
                const scrollProgress = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
                window.globalBackground.updateOnScroll(scrollProgress);
            }
        });
    }

    handleResize() {
        // Handle responsive updates
        if (window.animationController) {
            // Update animation calculations
            window.animationController.updateCalculations?.();
        }
        
        // Update Three.js canvas if exists
        if (window.globalBackground) {
            // Global background handles its own resize
        }
        
        // Refresh AOS
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    preloadCriticalResources() {
        // Preload important images
        const criticalImages = [
            // Add paths to critical images
        ];
        
        criticalImages.forEach(imagePath => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = imagePath;
            link.as = 'image';
            document.head.appendChild(link);
        });
    }

    initializeTooltips() {
        // Simple tooltip implementation
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = e.target.dataset.tooltip;
                document.body.appendChild(tooltip);
                
                // Position tooltip
                const rect = e.target.getBoundingClientRect();
                tooltip.style.left = `${rect.left + rect.width / 2}px`;
                tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
                
                e.target._tooltip = tooltip;
            });
            
            element.addEventListener('mouseleave', (e) => {
                if (e.target._tooltip) {
                    document.body.removeChild(e.target._tooltip);
                    e.target._tooltip = null;
                }
            });
        });
    }

    setupLazyLoading() {
        // Lazy loading for images
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        if (lazyImages.length > 0) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    initializeServiceWorker() {
        // Register service worker for PWA capabilities
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Utility methods
    throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the portfolio app
window.portfolioApp = new PortfolioApp();

// Add global styles for additional features
const additionalStyles = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        z-index: 9999;
        background: transparent;
        pointer-events: none;
    }
    
    .scroll-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
        width: 0%;
        transition: width 0.1s ease;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        background: var(--success);
    }
    
    .notification-error {
        background: var(--error);
    }
    
    .notification-info {
        background: var(--primary);
    }
    
    .tooltip {
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 14px;
        white-space: nowrap;
        z-index: 10000;
        pointer-events: none;
        transform: translateX(-50%);
    }
    
    .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-top-color: rgba(0, 0, 0, 0.9);
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    body.menu-open {
        overflow: hidden;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    @media (prefers-reduced-motion: reduce) {
        .scroll-progress-bar,
        .notification,
        .tooltip,
        .animate-on-scroll {
            transition: none;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);