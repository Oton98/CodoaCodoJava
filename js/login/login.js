import { checkCampos } from "../utils.js";

const button = document.getElementById("loginButton");
button.addEventListener("click", checklogin);

function checklogin(event) {
    event.preventDefault();
    const campos = document.querySelectorAll("input");
    let allFine = true;

    campos.forEach(campo => {
        const notFine = checkCampos(campo);
        if (!notFine) {
            allFine = false
        }
    });

    if (allFine) {
        login(campos[0].value, campos[1].value);
    }
}

async function login(usuario, pass) {
    const mockUser = "usuario";
    const mockPassword = "contraseña";

    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (usuario === mockUser && pass === mockPassword) {
            alert("Login exitoso");

        } else {
            alert("Usuario o contraseña incorrectos");
        }

    } catch (e) {
        console.error("Error durante el login:", e);
    }
}




