const posterRow = document.querySelector(".poster-row");
const previousPostersButton = document.querySelector(".poster-prev");
const nextPostersButton = document.querySelector(".poster-next");

function updatePosterArrows() {
    previousPostersButton.disabled = posterRow.scrollLeft <= 0;
    nextPostersButton.disabled =
        posterRow.scrollLeft + posterRow.clientWidth >= posterRow.scrollWidth - 1;
}

previousPostersButton.addEventListener("click", () => {
    posterRow.scrollBy({
        left: -posterRow.clientWidth * 0.8,
        behavior: "smooth"
    });
});

nextPostersButton.addEventListener("click", () => {
    posterRow.scrollBy({
        left: posterRow.clientWidth * 0.8,
        behavior: "smooth"
    });
});

posterRow.addEventListener("scroll", updatePosterArrows);
window.addEventListener("resize", updatePosterArrows);
updatePosterArrows();