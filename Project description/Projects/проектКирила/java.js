// Добавьте управление камерой колесиком
window.addEventListener('wheel', (e) => {
    camera.position.z += e.deltaY * 0.05;
    camera.position.z = Math.max(10, Math.min(50, camera.position.z));
});

// Добавьте реакцию на движение мыши
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = -(e.clientY / window.innerHeight - 0.5) * 2;
    
    gsap.to(camera.position, {
        x: x * 3,
        y: y * 2,
        duration: 2,
        ease: "power2.out"
    });
});

// Быстрые клавиши
document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '5') {
        const index = parseInt(e.key) - 1;
        if (buttons[index]) {
            buttons[index].button.click();
        }
    }
});