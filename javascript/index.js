function selectPokemon(pokemon) {
    switch (pokemon) {
        case "charmander":
            if (document.getElementsByName(pokemon)[0].id != "selected") {
                document.getElementsByName(pokemon)[0].id = "selected";
                document.getElementById("body").className = "charmander";
                document.getElementsByName("squirtle")[0].id = document.getElementsByName("bulbasaur")[0].id = "unselected";
                document.getElementsByName("charmander")[0].src = "assets/images/Pokeball Selected.png";
                document.getElementsByName("squirtle")[0].src = document.getElementsByName("bulbasaur")[0].src = "assets/images/Pokeball.png";
                new Audio('assets/audio/pokeball out.mp3').play();
                document.getElementById("desarrollotext").textContent = "La página está actualmente en desarrollo, por mientras ve bailar a nuestro queridísimo y amado por todos, Charmander."
            }
            break;
        case "squirtle":
            if (document.getElementsByName(pokemon)[0].id != "selected") {
                document.getElementsByName(pokemon)[0].id = "selected";
                document.getElementById("body").className = "squirtle";
                document.getElementsByName("charmander")[0].id = document.getElementsByName("bulbasaur")[0].id = "unselected";
                document.getElementsByName("squirtle")[0].src = "assets/images/Pokeball Selected.png";
                document.getElementsByName("charmander")[0].src = document.getElementsByName("bulbasaur")[0].src = "assets/images/Pokeball.png";
                document.getElementById("desarrollotext").textContent = "La página está actualmente en desarrollo, por mientras ve llorar a nuestra tortuga favorita, Squirtle."
                new Audio('assets/audio/pokeball out.mp3').play();
            }
            break;
        default:
            if (document.getElementsByName(pokemon)[0].id != "selected") {
                document.getElementsByName(pokemon)[0].id = "selected";
                document.getElementById("body").className = "bulbasaur";
                document.getElementsByName("charmander")[0].id = document.getElementsByName("squirtle")[0].id = "unselected";
                document.getElementsByName("bulbasaur")[0].src = "assets/images/Pokeball Selected.png";
                document.getElementsByName("squirtle")[0].src = document.getElementsByName("charmander")[0].src = "assets/images/Pokeball.png";
                document.getElementById("desarrollotext").textContent = "La página está actualmente en desarrollo, por mientras ve sonreir a nuestro sapito (no) favorito, Bulbasaur."
                new Audio('assets/audio/pokeball out.mp3').play();
            }
            break;
    }
}