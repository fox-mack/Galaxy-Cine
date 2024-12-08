const slides = document.querySelector('.banner');
const totalSlides = document.querySelectorAll('.imagem').length;
const prevBtn = document.getElementById('preSld');
const nextBtn = document.getElementById('nxtSld');

let currentIndex = 0;

function moveSlide(index){
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() =>{
    currentIndex = (currentIndex + 1) % totalSlides;
    moveSlide(currentIndex);
}, 5000);

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveSlide(currentIndex)
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    moveSlide(currentIndex);
});