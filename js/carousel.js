document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel .cartaz");
    const carouselPrev = document.getElementById("preCrsl");
    const carouselNext = document.getElementById("nxtCrsl");

    const itemWidth = 245;
    let currentScrollPosition = 0;

    carouselNext.addEventListener("click", () => {
        const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
        currentScrollPosition = Math.min(currentScrollPosition + itemWidth, maxScroll);
        carousel.style.transform = `translateX(-${currentScrollPosition}px)`;
    });

    carouselPrev.addEventListener("click", () =>{
        currentScrollPosition = Math.max(currentScrollPosition - itemWidth, 0);
        carousel.style.transform = `translateX(-${currentScrollPosition}px)`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const carousel2 = document.querySelector(".carousel2 .cartaz2");
    const carouselPrev2 = document.getElementById("preCrsl2");
    const carouselNext2 = document.getElementById("nxtCrsl2");

    const itemWidth = 245;
    let currentScrollPosition = 0;

    carouselNext2.addEventListener("click", () => {
        const maxScroll = carousel2.scrollWidth - carousel2.offsetWidth;
        currentScrollPosition = Math.min(currentScrollPosition + itemWidth, maxScroll);
        carousel2.style.transform = `translateX(-${currentScrollPosition}px)`;
    });

    carouselPrev2.addEventListener("click", () =>{
        currentScrollPosition = Math.max(currentScrollPosition - itemWidth, 0);
        carousel2.style.transform = `translateX(-${currentScrollPosition}px)`
    });
});