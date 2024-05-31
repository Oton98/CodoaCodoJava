export function checkCampos(campo) {
    const errorExistente = campo.nextElementSibling;
    if (errorExistente && errorExistente.classList.contains("text-error-empty")) {
        errorExistente.remove();
        campo.classList.remove("error-empty");
    }

    if (campo.value === "" || campo.value === null) {
        campo.classList.add("error-empty");
        const errorText = document.createElement("p");
        errorText.innerText = "Campo vacío o inválido";
        errorText.classList = "text-error-empty"
        campo.parentElement.appendChild(errorText);
        alert("campo de " + campo.id + " vacío");
        return
    } else {
        return true
    }
}