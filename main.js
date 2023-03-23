// tady je místo pro náš program

// Auto
const auto = document.querySelector('.auto');

let moveBy = 20;
window.addEventListener('load', () => {
    auto.style.position = 'absolute';
    auto.style.left = 0;
    auto.style.top = 20;
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            auto.style.left = parseInt(auto.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            auto.style.left = parseInt(auto.style.left) + moveBy + 'px';
            break;
    }
});