//? Variables
let lang = 'ES';
let actualScheme = 'light';
let themes = {
    dark: [
        ['--font-color', '#f7f8fa'],
        ['--icons-border', 'rgba(245, 245, 245, 0.4)'],
        ['--bg', '#1C1E1F'],
        ['--title-color', '#F9AC53'],
        ['--slider-bg', '#141414']
    ],
    light: [
        ['--font-color', '#1C1E1F'],
        ['--icons-border', 'rgba(28, 30, 31, 0.4)'],
        ['--bg', '#f7f8fa'],
        ['--title-color', '#E93479'],
        ['--slider-bg', '#DDDAD5'],
    ]
}

//? Temas
function toggleScheme(scheme) {
    let root = document.querySelector(':root');
    if (scheme === null) {
        actualScheme = actualScheme === 'light' ? 'dark' : 'light';
    } else {
        actualScheme = scheme;
    }
    document.getElementById('theme').innerText = actualScheme + "_mode";
    themes[actualScheme].forEach(key => {
        root.style.setProperty(key[0], key[1]);
    });
}

var hour = new Date().getHours();
if (hour >= 18 || hour <= 6) {
    toggleScheme('dark');
    console.log('Dark mode');
}

//? Idioma | Language
/*
* Since I won't pay for the fucking Google Translate API, I've created my own Translate System. Maybe
* its not the very best and probably not the most efficient, but it works. :p

* Como no voy a pagar por la maldita API de Google Translate, me vi en la obligación de crear mi propio
* sistema de traducción. Quizás no sea el mejor y probablemente no sea el más eficiente, pero funciona. :p
*/
loadLang('ES');

function toggleLang() {
    lang = lang === 'ES' ? 'EN' : 'ES';
    loadLang(lang);
}

function loadLang(language) {
    let translatable = document.querySelectorAll('.lang_toggleable');
    translatable.forEach(element => {
        let key = element.getAttribute('key');
        let keys = key.split(' ');
        if (keys.length > 0) {
            lastKey = translates[language];
            keys.forEach(key => {
                lastKey = lastKey[key];
            })
            element.innerText = lastKey;
        } else {
            element.innerText = translates[language][key];
        }
        //? Friendly reminder to myself of the future:
        //* don't be a god damn lazy and fix it or remove it. U fool 😾.
        /*
        ! @Deprecated
        //! let content = element.innerText.split(' ');
        //! let newContent = '';
        //! let pattern = /(?<=\{).+?(?=\})/;
        //! content.filter(variable => pattern.test(variable)).forEach(word => {
        //!     let key = pattern.exec(word)[0];
        //!     newContent += translates[language][key] + ' ';
        //! })
        //! element.innerText = newContent;
        */
    })
}

//? Swiper
const swiper = new Swiper('.swiper', {
    effect: "cards",
    cardsEffect: {
        rotate: false,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    //loop: true,
    autoplay: {
        delay: 5000,
    },
});