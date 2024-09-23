function animateProgressBars() {
    let circularProgressBars = document.querySelectorAll(".circular_progress");

    circularProgressBars.forEach((circularProgress) => {
        let progressValue = circularProgress.querySelector(".progress_value");
        let progressEndValue = circularProgress.getAttribute("data-progress");
        let progressStartValue = 0;
        let speed = 20;

        let progress = setInterval(() => {
            progressStartValue++;

            progressValue.textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#67fff2 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

            if (progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    });
}

const skillSection = document.querySelector("#skills");

const observerOptions = {
    root: null,
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
        }
    });
}, observerOptions);

observer.observe(skillSection);

let slideIndex = [1, 1, 1, 1];
let slideId = ["slideshow_lms", "slideshow_las", "slideshow_wed", "slideshow_bug"];

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName(slideId[no]);
    if (n > slides.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[no]-1].style.display = "block";  
}
