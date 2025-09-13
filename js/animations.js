// Advanced Animation Controllers
class AnimationController {
    constructor() {
        this.observers = new Map();
        this.counters = new Map();
        this.typingElements = new Map();
        this.init();
    }

    init() {
        this.initScrollAnimations();
        this.initCounterAnimations();
        this.initTypingAnimation();
        this.initProgressBars();
        this.initMagneticButtons();
        this.initTiltCards();
        this.initParallaxElements();
    }

    initScrollAnimations() {
        // Initialize AOS (Animate On Scroll)
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out-quart',
                once: true,
                offset: 100,
                delay: 0,
                anchorPlacement: 'top-bottom'
            });

            // Refresh AOS on window resize
            window.addEventListener('resize', () => {
                AOS.refresh();
            });
        }
    }

    initCounterAnimations() {
        const counters = document.querySelectorAll('[data-count]');
        
        const observerOptions = {
            threshold: 0.7,
            rootMargin: '0px'
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.counters.has(entry.target)) {
                    this.animateCounter(entry.target);
                    this.counters.set(entry.target, true);
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });

        this.observers.set('counter', counterObserver);
    }

    animateCounter(element) {
        const target = parseFloat(element.dataset.count);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format number based on target
            if (target % 1 !== 0) {
                element.textContent = current.toFixed(2);
            } else if (target >= 1000) {
                element.textContent = Math.floor(current).toLocaleString();
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    initTypingAnimation() {
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        const texts = [
            'Software Engineer',
            'Full-Stack Developer',
            'AI Enthusiast',
            'Problem Solver'
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let delay = 100;

        const type = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                delay = 50;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                delay = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                delay = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                delay = 500;
            }

            setTimeout(type, delay);
        };

        type();
    }

    initProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const targetWidth = progressBar.dataset.progress + '%';
                    
                    setTimeout(() => {
                        progressBar.style.width = targetWidth;
                    }, 200);
                    
                    progressObserver.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });

        this.observers.set('progress', progressObserver);
    }

    initMagneticButtons() {
        const magneticElements = document.querySelectorAll('.magnetic-btn');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = '';
            });
        });
    }

    initTiltCards() {
        const tiltCards = document.querySelectorAll('.tilt-card');
        
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;
                
                const rotateX = (mouseY / (rect.height / 2)) * 10;
                const rotateY = (mouseX / (rect.width / 2)) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    initParallaxElements() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        const updateParallax = () => {
            const scrollTop = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.dataset.parallax) || 0.5;
                const yPos = -(scrollTop * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };
        
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Stagger animation utility
    staggerElements(elements, animationClass, delay = 100) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add(animationClass);
            }, index * delay);
        });
    }

    // Morphing animation utility
    morphElement(element, fromClass, toClass, duration = 300) {
        element.classList.add(fromClass);
        
        setTimeout(() => {
            element.classList.remove(fromClass);
            element.classList.add(toClass);
        }, duration);
    }

    // Wave animation utility
    createWaveAnimation(elements, delay = 50) {
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * delay}ms`;
            element.classList.add('text-wave');
        });
    }

    // Cleanup method
    destroy() {
        this.observers.forEach(observer => {
            observer.disconnect();
        });
        this.observers.clear();
        this.counters.clear();
        this.typingElements.clear();
    }
}

// Performance optimization for animations
class PerformanceOptimizer {
    constructor() {
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.isLowEndDevice = this.detectLowEndDevice();
        this.init();
    }

    init() {
        if (this.isReducedMotion || this.isLowEndDevice) {
            this.disableAnimations();
        }
        
        // Monitor frame rate
        this.monitorPerformance();
    }

    detectLowEndDevice() {
        // Simple heuristics to detect low-end devices
        const cores = navigator.hardwareConcurrency || 2;
        const memory = navigator.deviceMemory || 2;
        const connection = navigator.connection?.effectiveType;
        
        return cores <= 2 || memory <= 2 || connection === 'slow-2g' || connection === '2g';
    }

    disableAnimations() {
        document.documentElement.style.setProperty('--transition-fast', '0ms');
        document.documentElement.style.setProperty('--transition-normal', '0ms');
        document.documentElement.style.setProperty('--transition-slow', '0ms');
        
        // Disable AOS animations
        if (typeof AOS !== 'undefined') {
            AOS.init({ disable: true });
        }
    }

    monitorPerformance() {
        let frameCount = 0;
        let lastTime = performance.now();
        
        const checkFrameRate = (currentTime) => {
            frameCount++;
            
            if (currentTime - lastTime >= 1000) {
                const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                
                if (fps < 30 && !this.isReducedMotion) {
                    console.warn('Low FPS detected, reducing animations');
                    this.reduceAnimations();
                }
                
                frameCount = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(checkFrameRate);
        };
        
        requestAnimationFrame(checkFrameRate);
    }

    reduceAnimations() {
        // Reduce animation duration
        document.documentElement.style.setProperty('--transition-normal', '150ms');
        document.documentElement.style.setProperty('--transition-slow', '250ms');
        
        // Disable particle animations
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.particles.move.speed *= 0.5;
            window.pJSDom[0].pJS.particles.number.value *= 0.7;
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.animationController = new AnimationController();
    window.performanceOptimizer = new PerformanceOptimizer();
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.animationController) {
        window.animationController.destroy();
    }
});