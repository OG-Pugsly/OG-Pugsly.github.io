const originalHeight = document.body.scrollHeight / 2;

window.addEventListener("scroll", () => {
    if (window.scrollY >= originalHeight) {
        window.scrollTo({
            top: window.scrollY - originalHeight,
            behavior: "instant"
        });
    }

    if (window.scrollY <= 0) {
        window.scrollTo({
            top: originalHeight,
            behavior: "instant"
        });
    }
});