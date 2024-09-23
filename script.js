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
