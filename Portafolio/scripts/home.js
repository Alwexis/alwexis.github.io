function actualizarDatos() {
    var edad = new Date().getMonth() >= 11 && new Date().getDay() >= 23 ? new Date().getFullYear() - 2001 : new Date().getFullYear() - 2002
    document.getElementById("personalInfoEdad").textContent = document.getElementById("personalInfoEdad").textContent.replace("{edad}", edad)
}

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