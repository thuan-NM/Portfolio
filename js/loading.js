// Loading Screen Controller
class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.loadingProgress = document.querySelector('.loading-progress');
        // this.loadingCanvas = document.getElementById('loading-canvas');
        this.progress = 0;
        this.targetProgress = 0;
        this.isComplete = false;
        
        this.init();
    }

    init() {
        this.setupLoadingAnimation();
        this.simulateLoading();
        this.setupLoadingBackground();
    }

    setupLoadingAnimation() {
        // Animate progress bar smoothly
        const animateProgress = () => {
            if (this.progress < this.targetProgress) {
                this.progress += (this.targetProgress - this.progress) * 0.1;
                this.loadingProgress.style.width = `${this.progress}%`;
            }
            
            if (!this.isComplete) {
                requestAnimationFrame(animateProgress);
            }
        };
        
        animateProgress();
    }

    simulateLoading() {
        const steps = [
            { progress: 20, delay: 300 },
            { progress: 40, delay: 500 },
            { progress: 60, delay: 400 },
            { progress: 80, delay: 600 },
            { progress: 95, delay: 300 },
            { progress: 100, delay: 500 }
        ];

        let currentStep = 0;
        
        const executeStep = () => {
            if (currentStep < steps.length) {
                const step = steps[currentStep];
                this.targetProgress = step.progress;
                
                setTimeout(() => {
                    currentStep++;
                    executeStep();
                }, step.delay);
            } else {
                // Wait for all resources to load
                this.waitForResources();
            }
        };

        executeStep();
    }

    waitForResources() {
        // Check if all critical resources are loaded
        const checkResources = () => {
            const images = document.querySelectorAll('img');
            const scripts = document.querySelectorAll('script[src]');
            let loadedCount = 0;
            let totalCount = images.length + scripts.length;

            // If no external resources, complete immediately
            if (totalCount === 0) {
                this.completeLoading();
                return;
            }

            const checkComplete = () => {
                loadedCount++;
                if (loadedCount >= totalCount) {
                    setTimeout(() => {
                        this.completeLoading();
                    }, 800);
                }
            };

            // Check images
            images.forEach(img => {
                if (img.complete) {
                    checkComplete();
                } else {
                    img.addEventListener('load', checkComplete);
                    img.addEventListener('error', checkComplete);
                }
            });

            // Check scripts (assume they're loaded if we reach this point)
            scripts.forEach(() => {
                checkComplete();
            });
        };

        // Wait a minimum time before checking resources
        setTimeout(checkResources, 1000);
    }

    completeLoading() {
        this.isComplete = true;
        this.targetProgress = 100;
        this.loadingProgress.style.width = '100%';
        
        setTimeout(() => {
            this.loadingScreen.classList.add('fade-out');
            document.body.style.overflow = 'hidden'; // Ngăn scroll trong quá trình transition
            
            // Initialize main app after loading is complete
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
                document.body.classList.add('loaded');
                window.scrollTo(0, 0); // Reset scroll position
                document.body.style.overflow = ''; // Khôi phục scroll
                
                // Initialize other components
                if (window.portfolioApp) {
                    window.portfolioApp.onLoadingComplete();
                }
            }, 800);
        }, 500);
    }

    setupLoadingBackground() {
        if (!this.loadingCanvas || typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0f0f23, 0.001);
        
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 100;
        
        const renderer = new THREE.WebGLRenderer({
            canvas: this.loadingCanvas,
            alpha: true,
            antialias: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Tạo hai nhóm particle với số lượng và kích thước khác nhau
        const createParticleSystem = (count, size, colorRange) => {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const speeds = new Float32Array(count);
            const sizes = new Float32Array(count);
            const rotations = new Float32Array(count);

            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                // Tạo vị trí trong không gian 3D theo hình xoắn ốc
                const t = i / count;
                const angle = t * Math.PI * 20;
                const radius = 50 + Math.random() * 30;
                const height = (t - 0.5) * 100;

                positions[i3] = Math.cos(angle) * radius;
                positions[i3 + 1] = height + Math.sin(t * Math.PI * 4) * 20;
                positions[i3 + 2] = Math.sin(angle) * radius;

                // Màu sắc với gradient đẹp
                const color = new THREE.Color();
                const hue = colorRange.start + Math.random() * (colorRange.end - colorRange.start);
                const saturation = 0.7 + Math.random() * 0.3;
                const lightness = 0.5 + Math.random() * 0.2;
                color.setHSL(hue, saturation, lightness);
                colors[i3] = color.r;
                colors[i3 + 1] = color.g;
                colors[i3 + 2] = color.b;

                // Thêm các thuộc tính ngẫu nhiên
                speeds[i] = (Math.random() * 0.015 + 0.005) * (Math.random() < 0.5 ? 1 : -1);
                sizes[i] = Math.random() * (size.max - size.min) + size.min;
                rotations[i] = Math.random() * Math.PI * 2;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
            geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
            geometry.setAttribute('rotation', new THREE.BufferAttribute(rotations, 1));

            return geometry;
        };

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Custom shader material cho hiệu ứng đẹp hơn
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                pixelRatio: { value: renderer.getPixelRatio() }
            },
            vertexShader: `
                attribute float size;
                uniform float time;
                uniform float pixelRatio;
                varying vec3 vColor;

                void main() {
                    vColor = color;
                    vec3 pos = position;
                    
                    // Thêm chuyển động wave nhẹ
                    float wave = sin(time * 2.0 + position.y) * 0.5;
                    pos.x += wave;
                    pos.z += cos(time * 1.5 + position.x) * 0.5;

                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_Position = projectionMatrix * mvPosition;
                    gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z);
                }
            `,
            fragmentShader: `
                varying vec3 vColor;

                void main() {
                    // Tạo điểm sáng mềm mại
                    vec2 center = gl_PointCoord - vec2(0.5);
                    float dist = length(center);
                    float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
                    gl_FragColor = vec4(vColor, alpha);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Tạo hai hệ thống particle
        const particleSystem1 = createParticleSystem(150, { min: 2, max: 4 }, { start: 0.5, end: 0.7 });
        const particleSystem2 = createParticleSystem(100, { min: 3, max: 6 }, { start: 0.2, end: 0.4 });
        
        scene.add(particleSystem1);
        scene.add(particleSystem2);

        camera.position.z = 80;

        let time = 0;
        const animate = () => {
            if (this.isComplete) return;

            time += 0.005;
            
            // Cập nhật uniform time cho shader
            particleSystem1.material.uniforms.time.value = time;
            particleSystem2.material.uniforms.time.value = time * 0.8;

            // Xoay hệ thống particle
            particleSystem1.rotation.y += 0.001;
            particleSystem1.rotation.x += 0.0005;
            
            particleSystem2.rotation.y -= 0.0015;
            particleSystem2.rotation.z += 0.0007;

            // Cập nhật vị trí và xoay các hạt
            const positions = particleSystem1.getAttribute('position');
            const speeds = particleSystem1.getAttribute('speed');
            const rotations = particleSystem1.getAttribute('rotation');

            for (let i = 0; i < positions.count; i++) {
                const i3 = i * 3;
                const speed = speeds.array[i];
                const rotation = rotations.array[i];

                // Chuyển động xoắn ốc
                const x = positions.array[i3];
                const y = positions.array[i3 + 1];
                const z = positions.array[i3 + 2];
                const radius = Math.sqrt(x * x + z * z);
                const angle = Math.atan2(z, x) + speed;

                positions.array[i3] = Math.cos(angle) * radius;
                positions.array[i3 + 2] = Math.sin(angle) * radius;
                positions.array[i3 + 1] = y + Math.sin(time * 2 + rotation) * 0.3;
            }

            positions.needsUpdate = true;

            // Hiệu ứng camera
            camera.position.x = Math.sin(time * 0.2) * 10;
            camera.position.y = Math.cos(time * 0.3) * 5;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        // Handle resize và cập nhật shader uniforms
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            if (particleSystem1?.material?.uniforms) {
                particleSystem1.material.uniforms.pixelRatio.value = renderer.getPixelRatio();
            }
            if (particleSystem2?.material?.uniforms) {
                particleSystem2.material.uniforms.pixelRatio.value = renderer.getPixelRatio();
            }
        });
    }

    static init() {
        document.addEventListener('DOMContentLoaded', () => {
            window.loadingScreen = new LoadingScreen();
        });
    }
}

// Initialize loading screen
LoadingScreen.init();