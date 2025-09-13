// Particles.js Configuration and Management
class ParticlesManager {
    constructor() {
        this.init();
    }

    init() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ['#3B82F6', '#14B8A6', '#F97316']
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#3B82F6',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'repulse'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 0.5
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });

            // Responsive particles
            this.setupResponsiveParticles();
        }
    }

    setupResponsiveParticles() {
        const updateParticlesConfig = () => {
            if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
                const pJS = window.pJSDom[0].pJS;
                const width = window.innerWidth;
                
                if (width < 768) {
                    // Mobile configuration
                    pJS.particles.number.value = 50;
                    pJS.particles.line_linked.distance = 100;
                    pJS.particles.move.speed = 0.5;
                } else if (width < 1024) {
                    // Tablet configuration
                    pJS.particles.number.value = 75;
                    pJS.particles.line_linked.distance = 125;
                    pJS.particles.move.speed = 0.75;
                } else {
                    // Desktop configuration
                    pJS.particles.number.value = 100;
                    pJS.particles.line_linked.distance = 150;
                    pJS.particles.move.speed = 1;
                }
                
                pJS.fn.particlesRefresh();
            }
        };

        // Initial update
        setTimeout(updateParticlesConfig, 100);
        
        // Update on resize
        window.addEventListener('resize', updateParticlesConfig);

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
    }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for particles.js to load
    const initParticles = () => {
        if (typeof particlesJS !== 'undefined') {
            new ParticlesManager();
        } else {
            setTimeout(initParticles, 100);
        }
    };
    
    initParticles();
});