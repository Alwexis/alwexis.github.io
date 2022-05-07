siguiente = "";
ultimo_pokemon = 0;
cargando = false;
tipos = new Map([
    ["normal", "Normal"],
    ["fighting", "Lucha"],
    ["flying", "Volador"],
    ["poison", "Veneno"],
    ["ground", "Tierra"],
    ["bug", "Bicho"],
    ["ghost", "Fantasma"],
    ["steel", "Acero"],
    ["fire", "Fuego"],
    ["water", "Agua"],
    ["grass", "Planta"],
    ["electric", "Eléctrico"],
    ["psychic", "Psíquico"],
    ["ice", "Hielo"],
    ["dragon", "Dragón"],
    ["dark", "Siniestro"],
    ["fairy", "Hada"]
  ]);

function cargarPokemones(inicio) {
    if (!cargando) {
        cargando = true;
        cantidad = window.innerWidth > 950 ? 10 : 12;
        xfinal = 0;
        if (inicio) {
            var pokemones = {
                "url": `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${cantidad}`,
                "method": "GET",
                "timeout": 0,
            };
        } else {
            var pokemones = {
                "url": siguiente,
                "method": "GET",
                "timeout": 0,
            };
        }
        $.getJSON(pokemones).done(function (response) {
            siguiente = response.next;
            for(x = 0; x < cantidad; x++) {
                xactual = ultimo_pokemon + x;
                if (xactual < 9) id = '00' + (xactual + 1);
                else if (xactual < 99) id = '0' + (xactual + 1);
                else id = xactual + 1;
                nombre = response.results[x].name.substring(0, 1).toUpperCase() + response.results[x].name.substring(1);
                // Obtener Tipos
                tipo = obtenerTipos(response.results[x].url)
                document.getElementById("pokemones").innerHTML += `
                <article class="pokemon">
                    <img class="pokemon_img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${xactual + 1}.png">
                    <p class="pokemon_nro">N.°${id}</p>
                    <p class="pokemon_name">${nombre}</p>
                </article>`
                xfinal = xactual;
            }
            ultimo_pokemon = xfinal + 1;
            cargando = false;
        });
    }
}

function cargarPokemones2() {
    if (!cargando) {
        cargando = true;
        cantidad = window.innerWidth > 950 ? 10 : 12;
        for(x = 0; x < cantidad; x++) {
            console.log(ultimo_pokemon)
            ultimo_pokemon += 1;
            var pokemon = {
                "url": `https://pokeapi.co/api/v2/pokemon/${ultimo_pokemon}/`,
                "method": "GET",
                "timeout": 0,
            };
            $.getJSON(pokemon).done(function (response) {
                if (ultimo_pokemon < 9) id = '00' + (ultimo_pokemon + 1);
                else if (ultimo_pokemon < 99) id = '0' + (ultimo_pokemon + 1);
                else id = ultimo_pokemon + 1;
                if (response.types.length > 1) {
                    tipo = `
                    <div class="tipos">
                        <div class="tipo1 ${tipos.get(response.types[0].type.name)}">
                            ${tipos.get(response.types[0].type.name)}
                        </div>
                        <div class="tipo2 ${tipos.get(response.types[1].type.name)}">
                            ${tipos.get(response.types[1].type.name)}
                        </div>
                    </div>`;
                } else {
                    tipo = `
                    <div class="tipos">
                        <div class="tipo1 ${tipos.get(response.types[0].type.name)}">
                            ${tipos.get(response.types[0].type.name)}
                        </div>
                    </div>`;
                }
                document.getElementById("pokemones").innerHTML += `
                <article class="pokemon">
                    <img class="pokemon_img" src="${response.sprites.other["official-artwork"].front_default}">
                    <p class="pokemon_nro">N.°${id}</p>
                    <p class="pokemon_name">${response.name}</p>
                    ${tipo}
                </article>`
            });
        }
        cargando = false;
    }
}