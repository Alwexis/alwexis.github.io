function changeTheme() {
    document.getElementsByTagName("body")[0].dataset.theme = document.getElementsByTagName("body")[0].dataset.theme == "dark" ? "light" : "dark";
    document.getElementById("light-on-off").src = document.getElementById("light-on-off").src.endsWith("light-on.png") ? "assets/images/light-off.png" : "assets/images/light-on.png"
    new Audio("assets/audio/switch.mp3").play();
}

function actualizarDatos() {
    var edad = new Date().getMonth() >= 11 && new Date().getDay() >= 23 ? new Date().getFullYear() - 2001 : new Date().getFullYear() - 2002
    document.getElementById("presentacion").textContent = document.getElementById("presentacion").textContent.replace("{edad}", edad)
}

function displayRepositories() {
    var repositories = getPortfolioContentRepositories("Alwexis")
    var html = ``
    for (var x = 0; x < repositories.length; x++) {
        html += `<a href="${repositories[x][1]}"><img class="repo" src="https://opengraph.githubassets.com/2/alwexis/${repositories[x][0]}"></a>`
    }
    console.log(html)
    document.getElementsByClassName("repositories")[0].innerHTML = html
}

// https://github.com/Alwexis/githubRepositories/
function getRepositories(user) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", `https://api.github.com/users/${user}/repos`, false );
    xmlHttp.send(null);
    const repJson = JSON.parse(xmlHttp.responseText);
    const repositories = [];
    for (var i = 0; i < repJson.length; i++) {
      var name = repJson[i].name;
      var url = repJson[i].html_url;
      if (repJson[i].language != null) {var language = repJson[i].language;}
      else {var language = "No language specified";}
      var topics = repJson[i].topics;
      repositories.push([name, url, language, topics]);
    }
    return repositories;
  }

function getPortfolioContentRepositories(user) {
    var repositories = getRepositories(user);
    var portfolioRepositories = [];
    for (var x = 0; x < repositories.length; x++) {
      if (repositories[x][3].includes("portfolio-content")) {
        portfolioRepositories.push([repositories[x][0], repositories[x][1]]);
      }
    }
    return portfolioRepositories;
}