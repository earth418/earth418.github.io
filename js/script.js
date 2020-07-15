//smooth scroll
const navBarHeight = document.querySelector("#navBarContainer").offsetHeight;
document.querySelectorAll(`a[href^="#"]`).forEach(function (element) {
    element.addEventListener("click", function (e) {
        e.preventDefault();
        window.scroll({
            top: document.querySelector(this.getAttribute("href")).offsetTop - navBarHeight,
            behavior: 'smooth'
        });
    });
});