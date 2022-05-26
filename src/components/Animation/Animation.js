function reveal(x) {
    var reveals = document.querySelectorAll(x);

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", () => reveal(".title"));
window.addEventListener("scroll", () => reveal(".contact__icon"));
window.addEventListener("scroll", () => reveal(".box"));
window.addEventListener("scroll", () => reveal(".article__header"));