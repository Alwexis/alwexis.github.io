function changeTheme() {
    document.getElementsByTagName("body")[0].dataset.theme = document.getElementsByTagName("body")[0].dataset.theme == "dark" ? "light" : "dark";
    document.getElementById("light-on-off").src = document.getElementById("light-on-off").src.endsWith("light-on.png") ? "assets/images/light-off.png" : "assets/images/light-on.png"
    new Audio("assets/audio/switch.mp3").play();
}

function actualizarDatos() {
    var edad = new Date().getMonth() >= 11 && new Date().getDay() >= 23 ? new Date().getFullYear() - 2001 : new Date().getFullYear() - 2002
    document.getElementById("presentacion").textContent = document.getElementById("presentacion").textContent.replace("{edad}", edad)
}