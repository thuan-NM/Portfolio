function createNetworkEffect() {
    const networkContainer = document.querySelector('.network-dots');
    if (!networkContainer) return; // Kiểm tra container tồn tại
    
    const numDots = 20; // Tăng số lượng điểm
    const dots = [];
    networkContainer.innerHTML = ''; // Xóa nội dung cũ

    // Tạo các điểm
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'network-dot';
        
        // Vị trí ngẫu nhiên
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const radius = 100 + Math.random() * 100; // Tăng phạm vi bán kính
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = -50 + Math.random() * 100;

        dot.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        networkContainer.appendChild(dot);
        dots.push({ element: dot, x, y, z });
    }

    // Tạo các đường kết nối
    function createConnections() {
        // Xóa các kết nối cũ
        const oldConnections = networkContainer.querySelectorAll('.network-connection');
        oldConnections.forEach(conn => conn.remove());

        // Tạo kết nối mới giữa các điểm gần nhau
        dots.forEach((dot1, i) => {
            dots.slice(i + 1).forEach(dot2 => {
                const dx = dot1.x - dot2.x;
                const dy = dot1.y - dot2.y;
                const dz = dot1.z - dot2.z;
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (distance < 150) { // Chỉ kết nối các điểm gần nhau
                    const connection = document.createElement('div');
                    connection.className = 'network-connection';

                    // Tính toán vị trí và góc xoay của đường kết nối
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                    const length = distance;

                    connection.style.width = `${length}px`;
                    connection.style.transform = `translate3d(${dot1.x}px, ${dot1.y}px, ${dot1.z}px) rotate(${angle}deg)`;
                    
                    networkContainer.appendChild(connection);
                }
            });
        });
    }

    // Cập nhật vị trí các điểm
    function updateDots() {
        dots.forEach(dot => {
            const time = Date.now() * 0.001;
            const offset = parseFloat(dot.element.dataset.offset) || Math.random() * Math.PI * 2;
            dot.element.dataset.offset = offset;

            // Thêm chuyển động nhẹ
            const deltaX = Math.sin(time + offset) * 20;
            const deltaY = Math.cos(time + offset) * 20;
            const deltaZ = Math.sin(time * 0.5 + offset) * 10;

            dot.x += deltaX * 0.01;
            dot.y += deltaY * 0.01;
            dot.z += deltaZ * 0.01;

            dot.element.style.transform = `translate3d(${dot.x}px, ${dot.y}px, ${dot.z}px)`;
        });

        createConnections();
        requestAnimationFrame(updateDots);
    }

    updateDots();
}

// Khởi tạo hiệu ứng khi trang web đã load
document.addEventListener('DOMContentLoaded', createNetworkEffect);
