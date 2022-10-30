function loadExtendedInfo(type) {
    switch (type) {
        case "personal":
            if (document.getElementsByClassName("active")[0] != undefined && !document.getElementById("personalInfo0").classList.contains("active")) {
                if (document.getElementById("personalInfo1").classList.contains("active")) {
                    document.getElementById("secondExtendedInfo").style.display = "none";
                } else if (document.getElementById("personalInfo2").classList.contains("active")) {
                    document.getElementById("thirdExtendedInfo").style.display = "none";
                }
                document.getElementsByClassName("active")[0].classList.remove("active");
            }
            document.getElementById("firstExtendedInfo").style.display = "flex";
            document.getElementById("personalInfo0").classList.add("active");
            break;
        case "intereses":
            if (document.getElementsByClassName("active")[0] != undefined && !document.getElementById("personalInfo1").classList.contains("active")) {
                if (document.getElementById("personalInfo0").classList.contains("active")) {
                    document.getElementById("firstExtendedInfo").style.display = "none";
                } else if (document.getElementById("personalInfo2").classList.contains("active")) {
                    document.getElementById("thirdExtendedInfo").style.display = "none";
                }
                document.getElementsByClassName("active")[0].classList.remove("active");
            }
            document.getElementById("secondExtendedInfo").style.display = "flex";
            document.getElementById("personalInfo1").classList.add("active");
            break;
        case "laboral":
            if (document.getElementsByClassName("active")[0] != undefined && !document.getElementById("personalInfo2").classList.contains("active")) {
                if (document.getElementById("personalInfo0").classList.contains("active")) {
                    document.getElementById("firstExtendedInfo").style.display = "none";
                } else if (document.getElementById("personalInfo1").classList.contains("active")) {
                    document.getElementById("secondExtendedInfo").style.display = "none";
                }
                document.getElementsByClassName("active")[0].classList.remove("active");
            }
            document.getElementById("thirdExtendedInfo").style.display = "flex";
            document.getElementById("personalInfo2").classList.add("active");
            break;
    }
}

// Slideshow
imagenes = ["python", "java", "oracle", "mongodb", "html", "css", "js"];
titulos = ["Python", "Java", "Oracle", "MongoDB", "HTML", "CSS", "JavaScript"];
textos = [`Conocimientos principales sobre Python.
Estudié y puse en práctica con proyectos básicos el lenguaje, proyectos como Bots de Discord y demás. Actualmente lo utilizo para el backend, usando Django como framework.`,
`Conocimientos principales sobre Java.
Lo he utilizado para crear mods/addons en Minecraft y para Softwares básicos de escritorio. Lo he utilizado junto con MySQL, para crear aplicaciones de inventarios.`,
`Conocimientos medio sobre MySQL.
Estudié y he puesto en práctica la creación de modelos relacionales, las consultas, y también la programación de bases de datos con PL/SQL. Lo he utilizado tanto con Oracle, como con MySQL.`,
`Conocimientos básicos sobre MongoDB.
He comenzado a estudiar hace poco las bases de datos no relacionales, y he aprendido lo básico para manejarlas junto con MongoDB. La única puesta en práctica que tengo con MongoDB, fue almacenando datos de una página web.`,
`Conocimientos medios sobre HTML.
Es probablemente lo que más he puesto en práctica, ya que la mayoría de proyectos que he hecho, han sido relacionados con páginas web. Lo utilizo junto con CSS y Javascript para el front-end.`,
`Conocimientos medios sobre CSS.
Al igual que con HTML, este lo he puesto en práctica bastantes veces, ya sea en proyectos personales como proyectos de la universidad. Lo utilizo junto con HTML y Javascript para el front-end.`,
`Conocimientos medios sobre JavaScript.
Lo he usado únicamente para la parte front-end de mis proyectos, por lo tanto, tengo poca experiencia y conocimientos sobre el lenguaje. Hace bastante poco comencé a estudiar la libreria React para completemtarlo. Lo utilizo principalmente junto con HTML y CSS para el front-end.`]

function cambiarImagen(adelante) {
    if (adelante) {
        ultimaImagen = imagenes[imagenes.length - 1];
        imagenes.pop();
        imagenes.unshift(ultimaImagen)
        ultimoTitulo = titulos[titulos.length - 1];
        titulos.pop();
        titulos.unshift(ultimoTitulo)
        ultimoTexto = textos[textos.length - 1];
        textos.pop();
        textos.unshift(ultimoTexto)
    } else {
        primeraImagen = imagenes[0];
        imagenes.pop();
        imagenes.unshift(primeraImagen)
        ultimoTitulo = titulos[0];
        titulos.pop();
        titulos.unshift(ultimoTitulo)
        ultimoTexto = textos[0];
        textos.pop();
        textos.unshift(ultimoTexto)
    }
    document.getElementById("slideshowItems").innerHTML = '';
    for (x = 0; x < 3; x++) {
        if (x == 0 || x == 2) {
            document.getElementById("slideshowItems").innerHTML += `
            <article class="slideshow-item">
                <img src="assets/images/${imagenes[x + 1]}.png" style="height: 6em; width: 6em;">
            </article>
            `
        } else {
            document.getElementById("slideshowItems").innerHTML += `
            <article class="slideshow-item">
                <img src="assets/images/${imagenes[x + 1]}.png" style="height: 12em; width: 12em;">
                <article class="slideshow-item-text">
                    <span class="slideshow-item-title">${titulos[x + 1]}</span>

                    <span class="slideshow-item-desc">${textos[x + 1]}<span>
                </article>
            </article>
            `
        }
    }
}

function actualizarDatos() {
    cambiarImagen(true)
    var edad = new Date().getMonth() >= 11 && new Date().getDay() >= 23 ? new Date().getFullYear() - 2001 : new Date().getFullYear() - 2002
    document.getElementById("personalInfoEdad").textContent = document.getElementById("personalInfoEdad").textContent.replace("{edad}", edad)
}