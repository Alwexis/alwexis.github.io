let lastActive = null;
async function loadPokemonData(url) {
    let pokemonData = await $.get(url);
    //* Audio
    if (fixNamesForAudio.has(pokemonData.name)) {
        pokemonNameForAudio = fixNamesForAudio.get(pokemonData.name);
    } else {
        pokemonNameForAudio = pokemonData.name;
    }
    try {
        await new Audio('https://play.pokemonshowdown.com/audio/cries/' + pokemonNameForAudio.toLowerCase() + '.ogg').play();
    } catch (error) {
        console.log(error);
    }
    try {
        await new Audio('https://play.pokemonshowdown.com/audio/cries/' + pokemonNameForAudio.toLowerCase() + '.mp3').play();
    } catch (error) { }
    //* Fin audio
    document.getElementById('pokedex-screen').setAttribute('actived', 'true')
    document.getElementsByClassName('pokemon-info')[0].setAttribute('style', `background: var(--${pokemonData.types[0].type.name}-type-bg);`)
    let info = document.getElementsByClassName('info')[0];
    info.children[0].src = pokemonData.sprites.front_default;
    info.children[1].innerText = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1) + ' #' + pokemonData.id;
    //* Limpiar tipos
    let pokemonTypes = document.getElementsByClassName('pokemon-types')[0];
    while (pokemonTypes.lastElementChild) {
        pokemonTypes.removeChild(pokemonTypes.lastElementChild);
    }
    for (let type of pokemonData.types) {
        let typeElement = document.createElement('div');
        typeElement.classList.add('pokemon-type');
        typeElement.setAttribute('style', `background: var(--${type.type.name}-type);`)
        let typeElementText = document.createElement('span');
        typeElementText.classList.add('pokemon-type-text');
        typeElementText.innerText = tipos.get(type.type.name);
        typeElementText.setAttribute('style', `color: var(--${type.type.name}-type-text);`)
        typeElement.appendChild(typeElementText);
        document.getElementsByClassName('pokemon-types')[0].appendChild(typeElement);
    }
    //?sound
    //* await new Audio('https://play.pokemonshowdown.com/audio/cries/charmander.ogg').play()
}

async function filterPokemon(e) {
    let texto = e.value;
    if (texto.length < 2) return;
    let pokemonList = Array.from(document.getElementsByClassName('pokemon')).filter(pokemonDiv =>
        similarity(texto, pokemonDiv.getAttribute('name')) > 0.3);
    pokemonList = pokemonList.sort((a, b) => similarity(texto, b.getAttribute('name')) - similarity(texto, a.getAttribute('name')));
    document.getElementById('pokemon-wrapper').innerHTML = '';
    for (let pokemon of pokemonList) {
        let pokemonRawData = await $.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.getAttribute('id'));
        let pokemonData = {
            name: pokemon.getAttribute('name'),
            url: 'https://pokeapi.co/api/v2/pokemon/' + pokemon.getAttribute('id'),
            full_data: pokemonRawData,
        }
        document.getElementById('pokemon-wrapper').appendChild(createPokemonElement(pokemonData));
    }
    //* fin uwu
}

loadPokemons();
async function loadPokemons() {
    let filterButton = document.getElementById('filter-button');
    if (filterButton.getAttribute('disabled') == 'true') return;
    filterButton.setAttribute('disabled', 'true');
    document.getElementById('pokemon-wrapper').innerHTML = '';
    let links = [];
    let gen_checkboxes = document.getElementsByClassName('gen-checkbox');
    for (let gen_checkbox of gen_checkboxes) {
        if (gen_checkbox.checked) {
            links.push(generaciones.get(gen_checkbox.id.replace('filter-', '').replace('-gen', '')));
        }
    }
    if (links.length < 1) links.push('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0');
    let data = await $.get(links[0], rawData => { return rawData; });
    links.shift();
    for (let link of links) {
        await $.get(link, rawData => {
            data.results = data.results.concat(rawData.results);
        });
    }
    for (let pokemon of data.results) {
        let pokemonRawData = await $.get(pokemon.url);
        let pokemon_name = pokemon.name;
        if (fixNames.has(pokemon_name)) {
            pokemon_name = fixNames.get(pokemon_name);
        }
        let pokemonData = {
            name: pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1),
            url: pokemon.url,
            full_data: pokemonRawData,
        }
        document.getElementById('pokemon-wrapper').appendChild(createPokemonElement(pokemonData));
    }
    filterButton.setAttribute('disabled', 'false');
}

function createPokemonElement(data) {
    //? Getting data
    let pokemon_name = data.name.charAt(0).toUpperCase() + data.name.slice(1) + ' #' + data.full_data.id;
    let pokemon_image = data.full_data.sprites.front_default;
    let pokemon_url = data.url;
    ///? Creating elements
    let pokemonDiv = document.createElement('div');
    pokemonDiv.setAttribute('active', 'false');
    pokemonDiv.setAttribute('name', pokemon_name.split('#')[0].trim());
    pokemonDiv.setAttribute('id', data.full_data.id);
    pokemonDiv.classList.add('pokemon');
    pokemonDiv.addEventListener('click', () => {
        loadPokemonData(pokemon_url);
    });
    //* Flechita
    let flechita = document.createElement('div');
    flechita.classList.add('flechita');
    pokemonDiv.appendChild(flechita);
    //* Nombre
    let pokemonName = document.createElement('span')
    pokemonName.innerText = pokemon_name
    pokemonDiv.appendChild(pokemonName);
    //* Imagen
    let image = document.createElement('img')
    image.src = pokemon_image
    pokemonDiv.appendChild(image);
    return pokemonDiv;
}

//? Drag and Scroll
let pokemonWrapper = document.getElementById('pokemon-wrapper');
let position = { top: 0, left: 0, x: 0, y: 0 };

//* Handlers
const mouseMoveHandler = function (e) {
    const dx = e.clientX - position.x;
    const dy = e.clientY - position.y;
    pokemonWrapper.scrollTop = position.top - dy;
    pokemonWrapper.scrollLeft = position.left - dx;
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    pokemonWrapper.style.cursor = 'grab';
    pokemonWrapper.style.removeProperty('user-select');
};

const mouseDownHandler = function (e) {
    pokemonWrapper.style.cursor = 'grabbing';
    pokemonWrapper.style.userSelect = 'none';
    position = {
        left: pokemonWrapper.scrollLeft,
        top: pokemonWrapper.scrollTop,
        x: e.clientX,
        y: e.clientY,
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};
//* Listener
pokemonWrapper.addEventListener('mousedown', mouseDownHandler);