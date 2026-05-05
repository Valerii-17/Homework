const slides = document.querySelectorAll(".team-card");
const dots = document.querySelectorAll(".pager-dot");
const prevBtn = document.querySelector(".team__btn--prev");
const nextBtn = document.querySelector(".team__btn--next");

let currentSlide = 0;

function updateButtons() {
    prevBtn.style.display = currentSlide === 0 ? "none" : "block";
    nextBtn.style.display = currentSlide === slides.length - 1 ? "none" : "block";
}

updateButtons();

function showSlide(index) {
    if (index < 0 || index >= slides.length) return;

    slides[currentSlide].classList.remove("is-active");
    slides[index].classList.add("is-active");

    if (dots[currentSlide]) dots[currentSlide].classList.remove("is-active");
    if (dots[index]) dots[index].classList.add("is-active");

    currentSlide = index;
    updateButtons();
}

nextBtn.onclick = () => showSlide(currentSlide + 1);
prevBtn.onclick = () => showSlide(currentSlide - 1);

dots.forEach((dot, index) => {
    dot.onclick = () => showSlide(index);
});