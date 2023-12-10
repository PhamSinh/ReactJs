document.addEventListener("DOMContentLoaded", function () {
    const scrollButton: HTMLButtonElement | null = document.querySelector(".scroll-to-top");

    if (scrollButton) {
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 500) {
                document.body.classList.add("scroll-top-active");
            } else {
                document.body.classList.remove("scroll-top-active");
            }
        });

        scrollButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
