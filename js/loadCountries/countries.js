import { countries } from "./listCountriesMock.js";

document.addEventListener("DOMContentLoaded", function () {

    function createOptions(countries) {
        let container = document.getElementById("country");
        countries.forEach(country => {
            let option = document.createElement("option");
            option.innerText = country
            option.value = country
            container.appendChild(option);
        });
    }

    createOptions(countries);

});