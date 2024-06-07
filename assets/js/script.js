
    const logo = document.getElementById("logo");
    logo.addEventListener("click", () => {
        if (logo.style.border) {
            logo.style.border = ""
        } else {
            logo.style.border = "2px solid red"
        }
    });

    document.getElementById("btn-verificar").addEventListener("click", () => {
        const num1 = document.getElementById("card-1")
        const num2 = document.getElementById("card-2")
        const num3 = document.getElementById("card-3")

        const suma = Number(num1.value) + Number(num2.value) + Number(num3.value);
        const resultado = document.getElementById("txt-verificar")

        if (suma <= 10) {
            resultado.innerHTML = `Llevas ${suma} stickers.`
        } else {
            resultado.innerHTML = "¡Llevas demasiados stickers!"
        }
    });

    document.getElementById("btn-ingresar").addEventListener("click", () => {
        const digito0 = document.getElementById("digito-0").value
        const digito1 = document.getElementById("digito-1").value
        const digito2 = document.getElementById("digito-2").value
        const password = Number(digito0 + digito1 + digito2)

        const mensaje = document.getElementById("txt-password")

        if (password === 911) {
            mensaje.innerHTML = "Password 1 correcto"
        } else if (password === 714) {
            mensaje.innerHTML = "Password 2 correcto"
        } else {
            mensaje.innerHTML = "¡Password incorrecto!"
        }
    });
