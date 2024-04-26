import { movies } from "./listMoviesMock.js";

document.addEventListener("DOMContentLoaded", function () {

    function createCards(movies) {
        let container = document.getElementById("tendenciesContainer");
        movies.forEach(movie => {
            let card = document.createElement("div");
            let img = document.createElement("img");
            img.src = movie;
            card.classList = "section-tendencies-container-card";
            card.appendChild(img);
            container.appendChild(card);
        });
    }

    createCards(movies);

});