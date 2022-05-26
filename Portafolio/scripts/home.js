function actualizarDatos() {
    var edad = new Date().getMonth() >= 11 && new Date().getDay() >= 23 ? new Date().getFullYear() - 2001 : new Date().getFullYear() - 2002
    document.getElementById("personalInfoP").textContent = document.getElementById("personalInfoP").textContent.replace("{edad}", edad)
}