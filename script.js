let slideIndex = 0;
let startX; // Para armazenar a posição inicial do toque

showSlides();

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } 
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

// Adicionando eventos de toque
const carrossel = document.querySelector('.carrossel');

carrossel.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

carrossel.addEventListener('touchmove', (event) => {
    const touchX = event.touches[0].clientX;
    const diffX = startX - touchX;

    if (Math.abs(diffX) > 50) { // O valor 50 pode ser ajustado para a sensibilidade do swipe
        if (diffX > 0) {
            changeSlide(1); // Deslizar para a esquerda
        } else {
            changeSlide(-1); // Deslizar para a direita
        }
        startX = null; // Zerar o startX após o movimento
    }
});

// Auto-play (opcional)
setInterval(() => {
    changeSlide(1);
}, 5000);