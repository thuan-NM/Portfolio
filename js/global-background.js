// Global Background Controller
class GlobalBackground {
    constructor() {
        this.canvas = document.getElementById('global-canvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.geometries = [];
        this.neuralNetworks = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;

        this.init();
    }

    init() {
        if (!this.canvas || typeof THREE === 'undefined') return;

        this.setupScene();
        this.createParticles();
        this.createFloatingGeometries();
        for (let i = 0; i < 4; i++) { // Tạo nhiều neural networks hơn
            this.createNeuralNetwork();
        }
        this.setupLighting();
        this.animate();
        this.setupEventListeners();
    }

    setupScene() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 60;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    createParticles() {
        const particleCount = 300;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            positions[i3] = (Math.random() - 0.5) * 400;
            positions[i3 + 1] = (Math.random() - 0.5) * 400;
            positions[i3 + 2] = (Math.random() - 0.5) * 400;

            const color = new THREE.Color();
            color.setHSL(0.55 + Math.random() * 0.3, 0.7, 0.6);

            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 2.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    createFloatingGeometries() {
        const geometryTypes = [
            () => new THREE.SphereGeometry(1.5, 16, 12),
            () => new THREE.SphereGeometry(2, 16, 12),
            () => new THREE.ConeGeometry(1, 2, 12),
            () => new THREE.OctahedronGeometry(6),
            () => new THREE.TetrahedronGeometry(6),
            () => new THREE.TorusGeometry(3, 1, 16, 100),
            () => new THREE.TorusKnotGeometry(2, 0.6, 100, 16),
            () => new THREE.IcosahedronGeometry(5),
            () => new THREE.DodecahedronGeometry(5)
        ];

        for (let i = 0; i < 20; i++) {
            const geometryType = geometryTypes[Math.floor(Math.random() * geometryTypes.length)];
            const geometry = geometryType();

            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(
                    0.55 + Math.random() * 0.3,
                    0.7,
                    0.5
                ),
                wireframe: true,
                transparent: true,
                opacity: 0.25
            });

            const mesh = new THREE.Mesh(geometry, material);

            mesh.position.set(
                (Math.random() - 0.5) * 150,
                (Math.random() - 0.5) * 150,
                (Math.random() - 0.5) * 100
            );

            mesh.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            mesh.userData = {
                initialPosition: mesh.position.clone(),
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.01,
                    y: (Math.random() - 0.5) * 0.01,
                    z: (Math.random() - 0.5) * 0.01
                },
                floatSpeed: Math.random() * 0.02 + 0.01,
                floatRange: Math.random() * 10 + 5
            };

            this.geometries.push(mesh);
            this.scene.add(mesh);
        }
    }

    createNeuralNetwork() {
        const group = new THREE.Group();
        const nodeCount = 8;
        const nodes = [];
        const connections = [];

        // Tạo nodes với hiệu ứng pulse
        for (let i = 0; i < nodeCount; i++) {
            const geometry = new THREE.SphereGeometry(0.8, 16, 16);
            const material = new THREE.MeshPhongMaterial({
                color: new THREE.Color().setHSL(0.5 + Math.random() * 0.3, 0.8, 0.6),
                emissive: new THREE.Color().setHSL(0.5 + Math.random() * 0.3, 0.5, 0.2),
                emissiveIntensity: 0.4,
                shininess: 100,
                transparent: true,
                opacity: 0.8
            });

            const mesh = new THREE.Mesh(geometry, material);

            mesh.position.set(
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100
            );

            // Thêm userData cho animation
            mesh.userData = {
                originalScale: mesh.scale.clone(),
                pulseSpeed: Math.random() * 0.03 + 0.01,
                pulseIntensity: Math.random() * 0.4 + 0.3,
                originalEmissive: material.emissive.clone(),
                originalEmissiveIntensity: material.emissiveIntensity,
                activationTimer: Math.random() * 1000
            };

            nodes.push(mesh);
            group.add(mesh);
        }

        // Tạo connections với hiệu ứng data flow
        for (let i = 0; i < nodeCount; i++) {
            for (let j = i + 1; j < nodeCount; j++) {
                if (Math.random() > 0.65) continue;

                const points = [nodes[i].position, nodes[j].position];
                const geometry = new THREE.BufferGeometry().setFromPoints(points);

                const material = new THREE.LineBasicMaterial({
                    color: 0x00aaff,
                    transparent: true,
                    opacity: 0.3
                });

                const line = new THREE.Line(geometry, material);

                // Tạo data pulse
                const pulseGeometry = new THREE.SphereGeometry(0.15, 8, 8);
                const pulseMaterial = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    transparent: true,
                    opacity: 0.9
                });

                const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
                pulse.visible = false;

                line.userData = {
                    pulse: pulse,
                    startNode: nodes[i],
                    endNode: nodes[j],
                    pulseProgress: 0,
                    pulseActive: false,
                    lastPulseTime: 0,
                    pulseInterval: Math.random() * 3000 + 2000, // 2-5 seconds
                    originalOpacity: 0.3
                };

                connections.push(line);
                group.add(line);
                group.add(pulse);
            }
        }

        // Vị trí cho neural network
        group.position.set(
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200
        );

        // Rotation cho cả group
        group.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.003,
                y: (Math.random() - 0.5) * 0.003,
                z: (Math.random() - 0.5) * 0.003
            },
            nodes: nodes,
            connections: connections
        };

        this.neuralNetworks.push(group);
        this.scene.add(group);
    }

    setupLighting() {
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x00ffff, 1, 300);
        pointLight1.position.set(50, 50, 50);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xff6600, 0.8, 250);
        pointLight2.position.set(-50, -50, 50);
        this.scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0x00ff88, 0.6, 200);
        pointLight3.position.set(0, 50, -50);
        this.scene.add(pointLight3);
    }

    animateNeuralNetworks(time) {
        this.neuralNetworks.forEach((network) => {
            // Xoay toàn bộ neural network
            network.rotation.x += network.userData.rotationSpeed.x;
            network.rotation.y += network.userData.rotationSpeed.y;
            network.rotation.z += network.userData.rotationSpeed.z;

            // Animate nodes
            network.userData.nodes.forEach((node, index) => {
                const userData = node.userData;

                // Pulse effect
                const pulsePhase = time * userData.pulseSpeed + index;
                const pulseScale = 1 + Math.sin(pulsePhase) * userData.pulseIntensity;
                node.scale.setScalar(pulseScale);

                // Emissive intensity animation
                const emissivePhase = time * userData.pulseSpeed * 1.5 + index * 0.5;
                const emissiveIntensity = userData.originalEmissiveIntensity +
                    Math.sin(emissivePhase) * 0.3;
                node.material.emissiveIntensity = Math.max(0, emissiveIntensity);

                // Random activation effect
                userData.activationTimer -= 16; // Assuming ~60fps
                if (userData.activationTimer <= 0) {
                    userData.activationTimer = Math.random() * 5000 + 2000;

                    // Flash effect
                    node.material.emissive.setRGB(1, 1, 1);
                    node.material.emissiveIntensity = 1.0;

                    setTimeout(() => {
                        node.material.emissive.copy(userData.originalEmissive);
                        node.material.emissiveIntensity = userData.originalEmissiveIntensity;
                    }, 200);
                }
            });

            // Animate connections và data pulses
            network.userData.connections.forEach((connection) => {
                const userData = connection.userData;
                const currentTime = Date.now();

                // Kiểm tra xem có nên bắt đầu pulse mới không
                if (!userData.pulseActive &&
                    currentTime - userData.lastPulseTime > userData.pulseInterval) {
                    userData.pulseActive = true;
                    userData.pulseProgress = 0;
                    userData.lastPulseTime = currentTime;
                    userData.pulse.visible = true;

                    // Highlight connection
                    connection.material.opacity = 0.8;
                    connection.material.color.setHex(0x00ffff);
                }

                // Animate active pulse
                if (userData.pulseActive) {
                    userData.pulseProgress += 0.015;

                    if (userData.pulseProgress >= 1) {
                        userData.pulseActive = false;
                        userData.pulse.visible = false;
                        userData.pulseProgress = 0;

                        // Reset connection appearance
                        connection.material.opacity = userData.originalOpacity;
                        connection.material.color.setHex(0x00aaff);

                        // Trigger end node activation
                        const endNode = userData.endNode;
                        endNode.material.emissive.setRGB(1, 1, 0.5);
                        endNode.material.emissiveIntensity = 1.2;

                        setTimeout(() => {
                            endNode.material.emissive.copy(endNode.userData.originalEmissive);
                            endNode.material.emissiveIntensity = endNode.userData.originalEmissiveIntensity;
                        }, 300);
                    } else {
                        // Update pulse position
                        const startPos = userData.startNode.position;
                        const endPos = userData.endNode.position;

                        userData.pulse.position.lerpVectors(startPos, endPos, userData.pulseProgress);

                        // Pulse opacity animation
                        const opacityPhase = userData.pulseProgress * Math.PI;
                        userData.pulse.material.opacity = Math.sin(opacityPhase) * 0.9;

                        // Connection brightness follows pulse
                        const brightness = 0.3 + Math.sin(userData.pulseProgress * Math.PI) * 0.5;
                        connection.material.opacity = brightness;
                    }
                }

                // Subtle connection opacity animation
                if (!userData.pulseActive) {
                    const flickerPhase = time * 0.001 + connection.id * 0.1;
                    connection.material.opacity = userData.originalOpacity +
                        Math.sin(flickerPhase) * 0.1;
                }
            });
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const time = Date.now() * 0.0005;

        if (this.particles) {
            this.particles.rotation.x = time * 0.05;
            this.particles.rotation.y = time * 0.1;
        }

        // Animate floating geometries
        this.geometries.forEach((mesh, index) => {
            if (mesh.userData.rotationSpeed) {
                mesh.rotation.x += mesh.userData.rotationSpeed.x;
                mesh.rotation.y += mesh.userData.rotationSpeed.y;
                mesh.rotation.z += mesh.userData.rotationSpeed.z;

                const floatOffset = Math.sin(time * mesh.userData.floatSpeed + index) *
                    (mesh.userData.floatRange);
                mesh.position.y = mesh.userData.initialPosition.y + floatOffset;
            }
        });

        // Animate neural networks
        this.animateNeuralNetworks(time);

        // Camera movement
        this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
        this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
    }

    setupEventListeners() {
        document.addEventListener('mousemove', (event) => {
            this.mouseX = (event.clientX - this.windowHalfX) * 0.1;
            this.mouseY = (event.clientY - this.windowHalfY) * 0.1;
        });

        window.addEventListener('resize', () => {
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;

            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
}

// Initialize global background
document.addEventListener('DOMContentLoaded', () => {
    const initBackground = () => {
        if (typeof THREE !== 'undefined') {
            window.globalBackground = new GlobalBackground();
        } else {
            setTimeout(initBackground, 100);
        }
    };
    setTimeout(initBackground, 500);
});