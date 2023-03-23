// tady je místo pro náš program

// Auto
const auto = document.querySelector('#auto');

const move = (event) => {
    const tlacitko = event.key;

    if(tlacitko === 'ArrowRight') {
        auto.style.transform = 'rotateY(0deg)';
        auto.style.animation = 'to-right 1s forwards';
    }

    if(tlacitko === 'ArrowLeft') {
        auto.style.transform = 'rotateY(180deg)';
        auto.style.animation = 'to-left 1s forwards';
    }
  
    //console.log(event);
    console.log('keydown');
    console.log(tlacitko);
}

window.addEventListener('keydown', move);
