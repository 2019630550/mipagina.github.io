function validarCredenciales() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if (usuario === "Tavares" && contraseña === "tavares98") {
        window.location.href = "principal.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
