import { checkCampos } from "../utils.js";

const button = document.getElementById("signButton");
button.addEventListener("click", checkRegister);

function checkRegister(event) {
    event.preventDefault();
    const campos = document.querySelectorAll("input");
    const select = document.getElementById("country");
    let allFine = true;

    campos.forEach(campo => {
        const notFine = checkCampos(campo);
        if (!notFine) {
            allFine = false
        }
    });

    if (select.value === "País" || select.value === "" || !campos[5].checked ){
        allFine = false
    }

    if (allFine) {
        register(campos, select);
    }
}


export async function register(campos, select) {
    const formData = new FormData();

    campos.forEach(campo => {
        formData.append(campo.id, campo.value);
    });

    formData.append("country", select.value);

    try {
        const response = await fetch('http://example.com/api/register', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Respuesta del servidor:', responseData);
            alert('Registro exitoso');
        } else {
            throw new Error('Error en la solicitud');
        }
    } catch (error) {
        console.error('Error durante el registro:', error);
        alert('Error en el registro. Inténtalo de nuevo más tarde.');
    }
}