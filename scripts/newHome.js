function init() {
  addBackground();
  initSwiper();
}

function addBackground() {
  let background = document.getElementsByClassName('night')[0];
  for (let i = 0; i < 19; i++) {
    background.innerHTML += '<div class="shooting_star"></div>';
  }
}

//? Swiper
function initSwiper() {
  let swiperEl = document.getElementsByClassName('swiper-wrapper')[0];
  lenguajes.forEach(lenguaje => {
    swiperEl.innerHTML += `
    <div class="swiper-slide">
      <img src="${lenguaje.imagen}">
      <span>${lenguaje.nombre}</span>
      <p>${lenguaje.descripcion}</p>
    </div>
    `
  });
  //? Initialize swiper
  new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    initialSlide: 0,
    loop: true,
    centeredSlides: true,
    speed: 200,
    grabCursor: true,
    // Navigation arrows
    //navigation: {
    //  nextEl: '.swiper-button-next',
    //  prevEl: '.swiper-button-prev',
    //},
  });
}


//? Data
const lenguajes = [
  {
    nombre: 'HTML5',
    imagen: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg',
    descripcion: 'Poseo conocimientos y experiencia en la creación de Páginas Web utilizando HTML5, y otras tecnologías para acompañarla.',
  },
  {
    nombre: 'CSS',
    imagen: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg',
    descripcion: 'Al igual que con HTML, este lo he puesto en práctica bastantes veces, ya sea en proyectos personales como proyectos de la universidad. Lo utilizo junto con HTML y Javascript para el front-end.',
  },
  {
    nombre: 'Javascript',
    imagen: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg',
    descripcion: 'Tengo conocimientos medios sobre Javascript, manejo la mayoría de sus funcionalidades y he realizado proyectos Web con este lenguaje. Actualmente estoy viendo Electron para crear aplicaciones de escritorio.',
  },
  {
    nombre: 'Python',
    imagen: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original.svg',
    descripcion: 'Tengo conocimientos medios en Python. Este lenguaje lo he utilizado para el Backend con Django y también para scripts/algoritmos básicos. Mi objetivo a futuro con este Lenguaje es el de aprender Inteligencia Artificial y Machine Learning.',
  },
  {
    nombre: 'TypeScript',
    imagen: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg',
    descripcion: 'Tengo conocimientos del Lenguaje y sé utilizar sus funcionalidades. Lo he utilizado para el desarrollo de Aplicaciones Moviles, utilizando Ionic y Angular.',
  },
  {
    nombre: 'Java',
    imagen: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/java/java-original.svg',
    descripcion: 'Tengo conocimientos medios en Java, lo utilizo generalmente a la hora de Moddear Videojuegos, pero también lo he utilizado en aplicaciones de escritorio, junto con MySQL.',
  },
  {
    nombre: 'MySQL & PLSQL',
    imagen: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original.svg',
    descripcion: 'Tengo conocimientos medios tanto en MySQL como en PLSQL. Esta es mi base de datos relacional que más utilizo a la hora de desarrollar aplicaciones.',
  },
  {
    nombre: 'MongoDB',
    imagen: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg',
    descripcion: 'Dentro de las bases de datos NoSQL, esta es la que más utilizo. Tengo conocimientos medios en MongoDB, y la utilizo por lo general como Base de Datos para aplicaciones básicas o aplicaciones móviles.',
  }
]