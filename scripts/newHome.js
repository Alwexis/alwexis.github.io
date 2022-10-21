function init() {
    addBackground();
}

function addBackground() {
    let background = document.getElementsByClassName('night')[0];
    for (let i = 0; i < 19; i++) {
        background.innerHTML += '<div class="shooting_star"></div>';
    }
}