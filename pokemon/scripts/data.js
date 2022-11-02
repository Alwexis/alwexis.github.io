const tipos = new Map([
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
    ["fairy", "Hada"],
    ["rock", "Roca"]
]);

const fixNamesForAudio = new Map([
    ['nidoran-f', 'nidoranf'],
    ['nidoran-m', 'nidoranm'],
    ['mr-mime', 'mrmime'],
    ['deoxys-normal', 'deoxys'],
    ['wormadam-plant', 'wormadam'],
    ['mime-jr', 'mimejr'],
    ['giratina-altered', 'giratina'],
    ['shaymin-land', 'shaymin'],
    ['basculin-red-striped', 'basculin'],
    ['darmanitan-standard', 'darmanitan'],
    ['tornadus-incarnate', 'tornadus'],
    ['thundurus-incarnate', 'thundurus'],
    ['landorus-incarnate', 'landorus'],
    ['keldeo-ordinary', 'keldeo'],
    ['meloetta-aria', 'meloetta'],
    ['meowstic-male', 'meowstic'],
    ['aegislash-shield', 'aegislash'],
    ['pumpkaboo-average', 'pumpkaboo'],
    ['gourgeist-average', 'gourgeist'],
    ['zygarde-50', 'zygarde'],
    ['oricorio-baile', 'oricorio'],
    ['lycanroc-midday', 'lycanroc'],
    ['wishiwashi-solo', 'wishiwashi'],
    ['minior-red-meteor', 'minior'],
    ['mimikyu-disguised', 'mimikyu'],
    ['jangmo-o', 'jangmoo'],
    ['hakamo-o', 'hakamoo'],
    ['kommo-o', 'kommoo'],
    ['tapu-koko', 'tapukoko'],
    ['tapu-lele', 'tapulele'],
    ['tapu-bulu', 'tapubulu'],
    ['tapu-fini', 'tapufini'],
    ['toxtricity-amped', 'toxtricity'],
    ['mr-rime', 'mrrime'],
    ['eiscue-ice', 'eiscue'],
    ['indeedme-male', 'indeedee'],
    ['morpeko-full-belly', 'morpeko'],
    ['urshifu-single-strike', 'urshifu'],
])

const fixNames = new Map([
    ['nidoran-f', 'nidoran ♀'],
    ['nidoran-m', 'nidoran ♂'],
    ['mr-mime', 'mr. mime'],
    ['deoxys-normal', 'deoxys'],
    ['wormadam-plant', 'wormadam'],
    ['mime-jr', 'mime jr.'],
    ['giratina-altered', 'giratina'],
    ['shaymin-land', 'shaymin'],
    ['basculin-red-striped', 'basculin'],
    ['darmanitan-standard', 'darmanitan'],
    ['tornadus-incarnate', 'tornadus'],
    ['thundurus-incarnate', 'thundurus'],
    ['landorus-incarnate', 'landorus'],
    ['keldeo-ordinary', 'keldeo'],
    ['meloetta-aria', 'meloetta'],
    ['meowstic-male', 'meowstic ♂'],
    ['aegislash-shield', 'aegislash'],
    ['pumpkaboo-average', 'pumpkaboo'],
    ['gourgeist-average', 'gourgeist'],
    ['zygarde-50', 'zygarde'],
    ['oricorio-baile', 'oricorio'],
    ['lycanroc-midday', 'lycanroc'],
    ['wishiwashi-solo', 'wishiwashi'],
    ['minior-red-meteor', 'minior'],
    ['mimikyu-disguised', 'mimikyu'],
    ['toxtricity-amped', 'toxtricity'],
    ['mr-rime', 'mrrime'],
    ['eiscue-ice', 'eiscue'],
    ['indeedme-male', 'indeedee ♂'],
    ['morpeko-full-belly', 'morpeko'],
    ['urshifu-single-strike', 'urshifu'],
])

//? Generaciones
const generaciones = new Map([
    ["1", "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0"],
    ["2", "https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151"],
    ["3", "https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251"],
    ["4", "https://pokeapi.co/api/v2/pokemon/?limit=107&offset=386"],
    ["5", "https://pokeapi.co/api/v2/pokemon/?limit=156&offset=493"],
    ["6", "https://pokeapi.co/api/v2/pokemon/?limit=72&offset=649"],
    ["7", "https://pokeapi.co/api/v2/pokemon/?limit=88&offset=721"],
    ["8", "https://pokeapi.co/api/v2/pokemon/?limit=89&offset=809"],
    ["formas", "https://pokeapi.co/api/v2/pokemon/?offset=898&limit=258"],
]);

//? Similarity
//* got this from https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely
function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}