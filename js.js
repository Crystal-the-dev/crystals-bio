window.addEventListener("load", () => {
    const intro = document.getElementById("intro");
    const content = document.getElementById("content");

    if (!intro || !content) return;

    setTimeout(() => {
        intro.classList.add("fade-out");

        setTimeout(() => {
            intro.style.display = "none";
            content.classList.add("fade-in");
        }, 1000);
    }, 2500);
});
