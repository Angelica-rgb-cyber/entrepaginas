// ======================================================================
// 1. DATA Y VARIABLES GLOBALES
// ======================================================================
const libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Drama", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.wSKlwjdlc--DoQA-LjxcrgHaLa&pid=Api&P=0&h=180" },
    { id: 2, titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", genero: "Drama", disponible: true, imagen: "https://pictures.abebooks.com/inventory/22536841297.jpg" },
    { id: 3, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", genero: "Drama", disponible: true, imagen: "https://www.polifemo.com/static/img/portadas/_visd_0000JPG00RIP.jpg" },
    { id: 4, titulo: "La casa de los espíritus", autor: "Isabel Allende", genero: "Drama", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.UOKYemEWwQcg8gRC9dcd-gHaLQ&pid=Api&P=0&h=180" },
    { id: 5, titulo: "Eva Luna", autor: "Isabel Allende", genero: "Drama", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.tsHOWsK-3EKWGDGw1wtZnwHaHa&pid=Api&P=0&h=180" },
    { id: 6, titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", genero: "Novela", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.VHwGGYxjoXwZ_gQ_DRAYQQAAAA&pid=Api&P=0&h=180" },
    { id: 7, titulo: "Conversación en La Catedral", autor: "Mario Vargas Llosa", genero: "Novela", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.hLS0rOjx4xYql4exR1H-lAHaMD&pid=Api&P=0&h=180" },
    { id: 8, titulo: "La tía Julia y el escribidor", autor: "Mario Vargas Llosa", genero: "Novela", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.eeHE2_xEQrvRzaFhuDNDowAAAA&pid=Api&P=0&h=180" },
    { id: 9, titulo: "El otoño del patriarca", autor: "Gabriel García Márquez", genero: "Novela", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.yYkPD4DsU4dxTOU-bupViAHaLQ&pid=Api&P=0&h=180" },
    { id: 10, titulo: "El túnel", autor: "Ernesto Sabato", genero: "Novela", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.wbkS1t_O701zo8yA52cgDQAAAA&pid=Api&P=0&h=180" },
    { id: 11, titulo: "Veinte poemas de amor", autor: "Pablo Neruda", genero: "Poesía", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.dXICGhIDVDHUcu7AECu_IgHaMv&pid=Api&P=0&h=180" },
    { id: 12, titulo: "Canto general", autor: "Pablo Neruda", genero: "Poesía", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.P1DDQ5wtKTZfWLMNHPtiiAHaMO&pid=Api&P=0&h=180" },
    { id: 13, titulo: "Cien sonetos de amor", autor: "Pablo Neruda", genero: "Poesía", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.yySxBqkeqNMefg2jQUC1IQHaLQ&pid=Api&P=0&h=180" },
    { id: 14, titulo: "Residencia en la tierra", autor: "Pablo Neruda", genero: "Poesía", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.va7LBnrK82Mtd99ZSrjEfQHaKR&pid=Api&P=0&h=180" },
    { id: 15, titulo: "España en el corazón", autor: "Pablo Neruda", genero: "Poesía", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.me0nIIE_01Hbs3mgXRreVQHaKa&pid=Api&P=0&h=180" },
    { id: 16, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", genero: "Fantasía", disponible: true, imagen: "https://imagessl2.casadellibro.com/a/l/t0/52/9788478884452.jpg" },
    { id: 17, titulo: "El hobbit", autor: "J.R.R. Tolkien", genero: "Fantasía", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.-JUm3l7g-nTTLylkI0vR-gHaLQ&pid=Api&P=0&h=180" },
    { id: 18, titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", genero: "Fantasía", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.zUZKbZFm22m7E3KWkj8YkQHaLF&pid=Api&P=0&h=180" },
    { id: 19, titulo: "El reino del dragón de oro", autor: "Isabel Allende", genero: "Fantasía", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.4myX1Ql9d6QrlnPPwfMdqgHaKt&pid=Api&P=0&h=180" },
    { id: 20, titulo: "Crónicas de Narnia", autor: "C.S. Lewis", genero: "Fantasía", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.g7dJqgc_lM5-sF2yhBglDAHaLx&pid=Api&P=0&h=180" },
    { id: 21, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Clásico", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.p2Qht0iMCaSgQb3wbzHukAHaKN&pid=Api&P=0&h=180" },
    { id: 22, titulo: "Historia de dos ciudades", autor: "Charles Dickens", genero: "Clásico", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.NOqARYM8WCfpj2RX8UWlVwHaLD&pid=Api&P=0&h=180" },
    { id: 23, titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", genero: "Clásico", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.Ko0u4TrFgCcUcAjIKPJhiwHaLy&pid=Api&P=0&h=180" },
    { id: 24, titulo: "Moby Dick", autor: "Herman Melville", genero: "Clásico", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.rAHI8P9xXNtCss6jkTKdcgHaKp&pid=Api&P=0&h=180" },
    { id: 25, titulo: "Orgullo y prejuicio", autor: "Jane Austen", genero: "Clásico", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.jWGnnNreh9BPP1ACbwhi0AHaK-&pid=Api&P=0&h=180" },
    { id: 26, titulo: "Diario de Na Hee-do", autor: "Inspirado en 2521", genero: "Romántica", disponible: true, imagen: "https://fr.web.img5.acsta.net/pictures/22/01/13/20/07/0102169.jpg" },
    { id: 27, titulo: "Cumbres borrascosas", autor: "Emily Brontë", genero: "Romántica", disponible: true, imagen: "https://mestasediciones.com/wp-content/uploads/2020/06/C61-Cumbres-borrascosas.jpg" },
    { id: 28, titulo: "Sentido y sensibilidad", autor: "Jane Austen", genero: "Romántica", disponible: true, imagen: "https://pictures.abebooks.com/inventory/22571482395.jpg" },
    { id: 29, titulo: "Emma", autor: "Jane Austen", genero: "Romántica", disponible: true, imagen: "https://www.canton4.com/wp-content/uploads/2022/10/portada_emma_jane-austen_202206131223-scaled.jpg" },
    { id: 30, titulo: "Persuasión", autor: "Jane Austen", genero: "Romántica", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.TOUQbAu30R5cvJVL5dHEngHaLZ&pid=Api&P=0&h=180" },
    { id: 31, titulo: "1984", autor: "George Orwell", genero: "Distopía", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.5fghEVBNKHeSYr8tyg-tVgHaLW&pid=Api&P=0&h=180" },
    { id: 32, titulo: "Rebelión en la granja", autor: "George Orwell", genero: "Distopía", disponible: true, imagen: "https://mlstaticquic-a.akamaihd.net/george-orwell-rebelion-en-la-granja--D_NQ_NP_1644-MLU2922581417_072012-F.jpg" },
    { id: 33, titulo: "Fahrenheit 451", autor: "Ray Bradbury", genero: "Distopía", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.PnbC_Fo_nqWvvdNLoewukAHaLH&pid=Api&P=0&h=180" },
    { id: 34, titulo: "Un mundo feliz", autor: "Aldous Huxley", genero: "Distopía", disponible: true, imagen: "https://losresumenes.com/wp-content/uploads/2023/11/Aldous-Huxley-Un-mundo-feliz.jpg" },
    { id: 35, titulo: "El cuento de la criada", autor: "Margaret Atwood", genero: "Distopía", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.ZqEwg6ACprkxZm57u4H47AAAAA&pid=Api&P=0&h=180" },
    { id: 36, titulo: "El principito", autor: "Antoine de Saint-Exupéry", genero: "Infantil", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.l_srAYwg9jJPJbO4AHpFpQHaJs&pid=Api&P=0&h=180" },
    { id: 37, titulo: "Charlie y la fábrica de chocolate", autor: "Roald Dahl", genero: "Infantil", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.GtK-QbxRm7nNwLYuvxQdcQHaK-&pid=Api&P=0&h=180" },
    { id: 38, titulo: "Matilda", autor: "Roald Dahl", genero: "Infantil", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.bP84LJtdPgUZ9C8MMZBr0wHaLp&pid=Api&P=0&h=180" },
    { id: 39, titulo: "El león, la bruja y el armario", autor: "C.S. Lewis", genero: "Infantil", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.iRWlIiMoNNZooAJZAcfNlAHaKW&pid=Api&P=0&h=180" },
    { id: 40, titulo: "Alicia en el país de las maravillas", autor: "Lewis Carroll", genero: "Infantil", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.5rzOMrxgXSfZKuWIyYQTgAHaKa&pid=Api&P=0&h=180" },
    { id: 41, titulo: "Las aventuras de Tom Sawyer", autor: "Mark Twain", genero: "Aventura", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.drd_-dBLSqXaFMlowkckwwHaJv&pid=Api&P=0&h=180" },
    { id: 42, titulo: "Huckleberry Finn", autor: "Mark Twain", genero: "Aventura", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.3s5xwwHr3zZ1eSqBzaEVYAHaL9&pid=Api&P=0&h=180" },
    { id: 43, titulo: "La isla del tesoro", autor: "Robert Louis Stevenson", genero: "Aventura", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.MLkJPyFvup40leCWOb0ReQHaHZ&pid=Api&P=0&h=180" },
    { id: 44, titulo: "Veinte mil leguas de viaje submarino", autor: "Julio Verne", genero: "Aventura", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.PmXDMRUbSlMUORfQMbV6EwHaKM&pid=Api&P=0&h=180" },
    { id: 45, titulo: "La vuelta al mundo en 80 días", autor: "Julio Verne", genero: "Aventura", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.8awkUWERI1U3nL_yGYMQOQHaKQ&pid=Api&P=0&h=180" },
    { id: 46, titulo: "Drácula", autor: "Bram Stoker", genero: "Terror", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.-tlgDWVOD42tolN_kSrJ6gHaLQ&pid=Api&P=0&h=180" },
    { id: 47, titulo: "Frankenstein", autor: "Mary Shelley", genero: "Terror", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.UMssI7V8veQY_QcOTPPmSgHaLH&pid=Api&P=0&h=180" },
    { id: 48, titulo: "El resplandor", autor: "Stephen King", genero: "Terror", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.QrernvvfkGSdnH7XHMiUBAHaLH&pid=Api&P=0&h=180" },
    { id: 49, titulo: "It", autor: "Stephen King", genero: "Terror", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.55hYoVk27fQVf1PewaY8qgHaLR&pid=Api&P=0&h=180" },
    { id: 50, titulo: "El exorcista", autor: "William Peter Blatty", genero: "Terror", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.XijRiE6mWHDJro4bhPqvIAHaLT&pid=Api&P=0&h=180" },
    { id: 51, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", genero: "Misterio", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.nhZOHUXlLgiEuJlFDyvX2QHaLN&pid=Api&P=0&h=180" },
    { id: 52, titulo: "El juego del ángel", autor: "Carlos Ruiz Zafón", genero: "Misterio", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.M6bdPCukO5-EF3fvxyMNPwHaLT&pid=Api&P=0&h=180" },
    { id: 53, titulo: "El nombre del viento", autor: "Patrick Rothfuss", genero: "Misterio", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.Ee_XZXymjpzWxWEs0XHMmgHaJl&pid=Api&P=0&h=180" },
    { id: 54, titulo: "El paciente", autor: "Juan Gómez-Jurado", genero: "Misterio", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.y1ZTpFXnF8KPgfjdTa8fKwHaLQ&pid=Api&P=0&h=180" },
    { id: 55, titulo: "El código Da Vinci", autor: "Dan Brown", genero: "Misterio", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.xAGf71lirNXuj2Cyr3dwXAHaLH&pid=Api&P=0&h=180" },
    { id: 56, titulo: "Sapiens", autor: "Yuval Noah Harari", genero: "No ficción", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.-V796zja84Bulac1WiW-7gHaLP&pid=Api&P=0&h=180" },
    { id: 57, titulo: "Homo Deus", autor: "Yuval Noah Harari", genero: "No ficción", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.DWlMbmm-cA7JJ7_dTPfcWgHaLW&pid=Api&P=0&h=180" },
    { id: 58, titulo: "Viento, arena y estrellas", autor: "Antoine de Saint-Exupéry", genero: "No ficción", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.vYsvNXeL4fUpto486J5xSwHaKc&pid=Api&P=0&h=180" },
    { id: 59, titulo: "Educated", autor: "Tara Westover", genero: "No ficción", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.Kn8v8LjGkvpgg8BanIjFnAHaLQ&pid=Api&P=0&h=180" },
    { id: 60, titulo: "Becoming", autor: "Michelle Obama", genero: "No ficción", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.e__NEYvJpiqMPy4lAR_zHgHaLQ&pid=Api&P=0&h=180" },
    { id: 61, titulo: "Breve historia del tiempo", autor: "Stephen Hawking", genero: "Ciencia", disponible: true, imagen: "https://tse2.mm.bing.net/th?id=OIP.vSfvFJDFbCktSJ0s2Nc7MgAAAA&pid=Api&P=0&h=180" },
    { id: 62, titulo: "El universo en una cáscara de nuez", autor: "Stephen Hawking", genero: "Ciencia", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.eIctUhRnlELGWyInBIlaKQHaLH&pid=Api&P=0&h=180" },
    { id: 63, titulo: "Cosmos", autor: "Carl Sagan", genero: "Ciencia", disponible: true, imagen: "https://tse4.mm.bing.net/th?id=OIP.jM_vcIR0J8bxWtrQHP_bAgAAAA&pid=Api&P=0&h=180" },
    { id: 64, titulo: "El mundo y sus demonios", autor: "Carl Sagan", genero: "Ciencia", disponible: true, imagen: "https://tse1.mm.bing.net/th?id=OIP.j6u8gJ7FATdH99u0dpb3tAHaKy&pid=Api&P=0&h=180" },
    { id: 65, titulo: "El gen egoísta", autor: "Richard Dawkins", genero: "Ciencia", disponible: true, imagen: "https://tse3.mm.bing.net/th?id=OIP.EWV0_fT8dTCvrqasF2r9nQHaLv&pid=Api&P=0&h=180" }
];

// --- POEMAS AÑADIDOS DIRECTAMENTE AQUÍ ---
const poemas = [
    {
        titulo: "El Viento y el Libro",
        autor: "Anónimo",
        texto: "El viento pasó la página sin manos,\nDejó el susurro en el aire quieto.\nUn mundo azul se abrió bajo los vanos,\nDonde el silencio halló su alfabeto."
    },
    {
        titulo: "Lomo Azul",
        autor: "Lector Silencioso",
        texto: "En el estante, lomo de zafiro,\nPromesa azul de mundos que no acaban.\nCada letra es el tenue respiro\nDel alma que en sus páginas graban."
    },
    {
        titulo: "Café y Tinta",
        autor: "La Barista",
        texto: "Aroma amargo, sabor de la tinta,\nLa tarde cae y el papel se enciende.\nLa historia avanza, el corazón la pinta,\nY nadie sabe a dónde el sueño asciende."
    },
    {
        titulo: "La Llave",
        autor: "El Guardián",
        texto: "El libro es llave que abre más de cien puertas,\nNo a castillos de tierra o metal,\nSino a mundos que el alma lleva a cuestas,\nHechos de aire y tiempo atemporal."
    }
    // Puedes añadir más poemas aquí sin preocuparte por el archivo .json
];


let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];
let puntos = JSON.parse(localStorage.getItem("puntos")) || {};

let currentPage = 1;
const booksPerPage = 4;
let countdownIntervals = {}; 
let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

// ======================================================================
// 2. FUNCIONES DE LÓGICA DE NEGOCIO Y UTILIDAD
// ======================================================================

function showNotification(message, isError = false) {
    const notification = document.getElementById("loan-notification");
    const notificationText = document.getElementById("notification-text");
    
    notificationText.textContent = message;
    notification.className = "notification"; 
    notification.classList.add("show");
    if (isError) notification.classList.add("error");

    setTimeout(() => {
        notification.classList.remove("show");
        notification.classList.remove("error");
    }, 3000);
}

window.cerrarModalBiblioteca = function() {
    document.getElementById("modalBiblioteca").style.display = "none";
};

function actualizarPuntos(email, cantidad) {
    if (!puntos[email]) puntos[email] = 0;
    puntos[email] += cantidad;
    localStorage.setItem("puntos", JSON.stringify(puntos));
    const puntosUsuarioEl = document.getElementById("puntos-usuario");
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (puntosUsuarioEl && loggedInUser === email) puntosUsuarioEl.textContent = puntos[email] || 0;
}

function speak(text) {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);
}

// ======================================================================
// 3. GESTIÓN DEL TEMA (MODO DÍA/NOCHE)
// ======================================================================

function initThemeToggle() {
    const toggle = document.getElementById("theme-toggle-input");
    
    // 1. Aplicar Tema Guardado
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (toggle) toggle.checked = true;
    }

    // 2. Configurar Evento (para el cambio)
    if (toggle) {
        toggle.onchange = () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
        };
    }
}

// ======================================================================
// 4. CARRUSEL DE LIBROS DESTACADOS
// ======================================================================

let currentSlide = 0;
let slideInterval;
const INTERVALO_CARRUSEL_MS = 5000; // 5 segundos

/** Muestra un slide específico. */
function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    if (slides.length === 0) return;

    // Asegura que el índice esté dentro del rango
    currentSlide = (index + slides.length) % slides.length; 

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide); 
    });
}

/** Inicializa la navegación y la rotación automática. */
function initCarousel() {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');
    const ttsBtns = document.querySelectorAll('.carousel-slide .tts-btn');

    if (slides.length === 0 || !prevBtn || !nextBtn) return;

    // Detiene cualquier intervalo anterior 
    if (slideInterval) clearInterval(slideInterval); 

    // Rotación automática
    function startAutoRotation() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, INTERVALO_CARRUSEL_MS);
    }
    
    // Navegación manual y reinicio de la rotación
    const handleManualNavigation = (direction) => {
        clearInterval(slideInterval); 
        showSlide(currentSlide + direction);
        startAutoRotation(); // Reinicia la auto-rotación
    };

    prevBtn.onclick = () => handleManualNavigation(-1);
    nextBtn.onclick = () => handleManualNavigation(1);
    
    // TTS para libros destacados
    ttsBtns.forEach(button => {
        button.onclick = () => {
            speak(button.getAttribute('data-text'));
        };
    });

    // Iniciar
    startAutoRotation();
    showSlide(currentSlide);
}


// ======================================================================
// 5. POEMAS ROTATIVOS (AHORA EN CODIGO DURO PARA EVITAR FALLOS DE FETCH)
// ======================================================================

function initPoemasRotativos() {
    const textoElemento = document.getElementById('poema-texto');
    const autorElemento = document.getElementById('poema-autor');
    const tituloElemento = document.getElementById('poema-titulo');

    if (!textoElemento || !autorElemento || !tituloElemento || poemas.length === 0) {
        if (poemas.length === 0) {
            tituloElemento.textContent = "Error de Poemas";
            textoElemento.textContent = "No hay poemas definidos en la variable 'poemas'.";
            textoElemento.classList.add('poema-error');
        }
        return;
    }

    let indicePoema = 0;
    const INTERVALO_MS = 10000;

    function mostrarSiguientePoema() {
        const poemaActual = poemas[indicePoema];

        tituloElemento.textContent = poemaActual.titulo;
        // Usa innerHTML y .replace para que los saltos de línea (\n) funcionen en HTML
        textoElemento.innerHTML = poemaActual.texto.replace(/\n/g, '<br>'); 
        autorElemento.textContent = `- ${poemaActual.autor}`;
        textoElemento.classList.remove('poema-error');

        indicePoema = (indicePoema + 1) % poemas.length;
    }

    mostrarSiguientePoema();
    setInterval(mostrarSiguientePoema, INTERVALO_MS);
}


// ======================================================================
// 6. GESTIÓN DEL CATÁLOGO Y PRÉSTAMOS
// ======================================================================

window.renderCatalogo = function() {
    const bookGrid = document.getElementById("book-grid");
    const paginationNumbers = document.getElementById("pagination-numbers");
    bookGrid.innerHTML = "";
    paginationNumbers.innerHTML = "";
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const selectedCategory = document.getElementById("category-select").value;

    let filteredBooks = libros;

    if (selectedCategory) {
        filteredBooks = filteredBooks.filter(libro => libro.genero === selectedCategory);
    }

    filteredBooks = filteredBooks.filter(libro =>
        libro.titulo.toLowerCase().includes(searchQuery) ||
        libro.autor.toLowerCase().includes(searchQuery) ||
        libro.genero.toLowerCase().includes(searchQuery)
    );

    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

    if (paginatedBooks.length === 0) {
        bookGrid.innerHTML = `<p class="text-center italic text-gray-500 w-full">No se encontraron libros para la búsqueda o categoría seleccionada.</p>`;
    }


    paginatedBooks.forEach(libro => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        const prestamo = prestamos.find(p => p.idLibro === libro.id && !p.devuelto);
        const prestadoPor = prestamo ? prestamo.nombre : null;
        const estadoTexto = libro.disponible ? "Disponible" : "No disponible";
        const estadoClase = libro.disponible ? 'disponible-tag' : 'no-disponible-tag';

        card.innerHTML = `
            <img src="${libro.imagen}" alt="${libro.titulo}">
            <h3>${libro.titulo}</h3>
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Género:</strong> ${libro.genero}</p>
            <p><strong>Estado:</strong> <span class="${estadoClase}">${estadoTexto}</span></p>
            ${prestadoPor ? `<p class="text-sm" style="color: #f56565;">Prestado a: ${prestadoPor}</p>` : ""}
            <button onclick="prestarLibro(${libro.id})" ${!libro.disponible ? 'disabled' : ''}>Prestar</button>
        `;
        bookGrid.appendChild(card);
    });

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.classList.add("pagination-number");
        if (i === currentPage) pageButton.classList.add("active");
        pageButton.onclick = () => {
            currentPage = i;
            renderCatalogo();
        };
        paginationNumbers.appendChild(pageButton);
    }

    document.querySelector(".pagination-prev").disabled = currentPage === 1;
    document.querySelector(".pagination-next").disabled = currentPage === totalPages || totalPages === 0;
}

window.renderPrestamos = function() {
    const prestamoGrid = document.getElementById("prestamo-grid");
    prestamoGrid.innerHTML = "";
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    
    Object.values(countdownIntervals).forEach(clearInterval);
    countdownIntervals = {};

    const prestamosActivos = prestamos
        .filter(prestamo => !prestamo.devuelto)
        .filter(prestamo => {
            const libro = libros.find(l => l.id === prestamo.idLibro);
            return libro && (libro.titulo.toLowerCase().includes(searchQuery) || prestamo.nombre.toLowerCase().includes(searchQuery));
        });

    if (prestamosActivos.length === 0) {
        prestamoGrid.innerHTML = `<p class="text-center italic text-gray-500">No hay préstamos activos para mostrar.</p>`;
        return;
    }

    prestamosActivos.forEach(prestamo => {
        const libro = libros.find(l => l.id === prestamo.idLibro);
        if (!libro) return;
        
        const card = document.createElement("div");
        card.classList.add("prestamo-card");
        card.innerHTML = `
            <p><strong>Libro:</strong> ${libro.titulo}</p>
            <p><strong>Prestado a:</strong> ${prestamo.nombre}</p>
            <p><strong>Fecha de Préstamo:</strong> ${new Date(prestamo.fechaPrestamo).toLocaleDateString('es-ES')}</p>
            <p><strong>Devolución:</strong> ${new Date(prestamo.fechaDevolucion).toLocaleDateString('es-ES')}</p>
            <p><strong>Tiempo Restante:</strong> <span id="countdown-${prestamo.idLibro}" class="countdown"></span></p>
            <button onclick="devolverLibro(${prestamo.idLibro})">Devolver</button>
        `;
        prestamoGrid.appendChild(card);
        updateCountdown(prestamo.idLibro, prestamo.fechaDevolucion);
    });
}

function updateCountdown(idLibro, fechaDevolucion) {
    const countdownElement = document.getElementById(`countdown-${idLibro}`);
    if (!countdownElement) return;
    
    if(countdownIntervals[idLibro]) clearInterval(countdownIntervals[idLibro]);

    const interval = setInterval(() => {
        const now = new Date();
        const devolucion = new Date(fechaDevolucion);
        const diff = devolucion - now;

        if (diff <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "VENCIDO";
            
            // Auto-devolución por vencimiento (lógica simplificada)
            const libro = libros.find(l => l.id === idLibro);
            if (libro) {
                libro.disponible = true;
                const prestamo = prestamos.find(p => p.idLibro === idLibro && !p.devuelto);
                if(prestamo) prestamo.devuelto = true;
                localStorage.setItem("prestamos", JSON.stringify(prestamos));
                renderCatalogo();
                renderPrestamos();
            }
            delete countdownIntervals[idLibro];
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
    
    countdownIntervals[idLibro] = interval;
}

window.prestarLibro = function(idLibro) {
    const loggedInEmail = localStorage.getItem("loggedInUser");
    if (!loggedInEmail) {
        showNotification("Debes iniciar sesión para prestar un libro.", true);
        document.getElementById('register-modal').style.display = 'flex'; // Abrir modal de registro
        return;
    }

    const usuario = usuarios.find(u => u.email === loggedInEmail);
    const libro = libros.find(l => l.id === idLibro);

    if (prestamos.filter(p => p.email === usuario.email && !p.devuelto).length >= 3) {
        showNotification("Límite de 3 libros prestados alcanzado.", true);
        return;
    }
    
    libro.disponible = false;
    const fechaPrestamo = new Date();
    const fechaDevolucion = new Date();
    fechaDevolucion.setDate(fechaPrestamo.getDate() + 7);
    
    prestamos.push({
        idLibro,
        email: usuario.email,
        nombre: usuario.nombre,
        telefono: usuario.telefono,
        direccion: usuario.direccion,
        fechaPrestamo: fechaPrestamo.toISOString(),
        fechaDevolucion: fechaDevolucion.toISOString(),
        devuelto: false
    });
    
    localStorage.setItem("prestamos", JSON.stringify(prestamos));
    showNotification(`Has prestado "${libro.titulo}". ¡Devolución en 7 días!`);
    
    renderCatalogo();
    renderPrestamos();
    actualizarPuntos(usuario.email, 1);
}

window.devolverLibro = function(idLibro) {
    const libro = libros.find(l => l.id === idLibro);
    const prestamo = prestamos.find(p => p.idLibro === idLibro && !p.devuelto);

    if (libro && prestamo) {
        libro.disponible = true;
        prestamo.devuelto = true;
        
        clearInterval(countdownIntervals[idLibro]);
        delete countdownIntervals[idLibro];
        
        localStorage.setItem("prestamos", JSON.stringify(prestamos));
        showNotification(`El libro "${libro.titulo}" ha sido devuelto con éxito.`);
        
        renderCatalogo();
        renderPrestamos();
    }
};

// ======================================================================
// 7. REGISTRO Y GESTIÓN DE USUARIOS
// ======================================================================

function initRegistro() {
    const registroForm = document.getElementById('registroForm');
    const registerModal = document.getElementById('register-modal');
    const registerLink = document.getElementById('register-link');
    const closeButtons = document.querySelectorAll('#register-modal .close-modal');
    const notification = document.getElementById('register-notification');

    // Manejo del botón de registro en el nav
    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (registerModal) registerModal.style.display = 'flex';
        });
    }
    
    // Manejo del cierre del modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (registerModal) registerModal.style.display = 'none';
            notification.textContent = '';
            notification.className = 'register-notification';
        });
    });

    // Manejo del envío del formulario
    if (registroForm) {
        registroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const data = Object.fromEntries(new FormData(registroForm).entries());

            if (usuarios.some(u => u.email === data.email)) {
                notification.textContent = "Error: El correo electrónico ya está registrado.";
                notification.className = 'register-notification error';
                return;
            }

            if (data.password.length < 6) {
                notification.textContent = "Error: La contraseña debe tener al menos 6 caracteres.";
                notification.className = 'register-notification error';
                return;
            }

            // Registro exitoso
            const nuevoUsuario = { ...data, puntos: 0 };
            usuarios.push(nuevoUsuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            
            notification.textContent = `¡Registro exitoso para ${data.nombre}! Ya puedes iniciar sesión.`;
            notification.className = 'register-notification success';
            registroForm.reset();

            // Opcional: Cerrar el modal después de un tiempo
            setTimeout(() => {
                if (registerModal) registerModal.style.display = 'none';
            }, 3000);
        });
    }
}


// ======================================================================
// 8. FUNCIONALIDADES DE ESCRITURA Y COMPARTIR
// ======================================================================

function initWriteShare() {
    const storyInput = document.getElementById('story-input');
    const saveDraftBtn = document.getElementById('save-draft');
    const publishStoryBtn = document.getElementById('publish-story');
    const ttsStoryBtn = document.getElementById('tts-story');

    // 1. Guardar Borrador
    if (saveDraftBtn) {
        saveDraftBtn.onclick = () => {
            if (storyInput.value.trim()) {
                localStorage.setItem("draftStory", storyInput.value);
                showNotification("Borrador guardado localmente. ¡Continúa escribiendo!");
            } else {
                showNotification("No hay texto para guardar.", true);
            }
        };
    }

    // 2. Publicar Historia (Simulación)
    if (publishStoryBtn) {
        publishStoryBtn.onclick = () => {
            if (storyInput.value.trim()) {
                // Lógica real: enviaría a un servidor
                const historia = storyInput.value;
                console.log("Historia publicada (simulación):", historia);
                
                // Limpieza después de la publicación
                storyInput.value = "";
                localStorage.removeItem("draftStory");
                showNotification("¡Tu historia ha sido publicada y compartida con la comunidad!");
            } else {
                showNotification("Escribe algo antes de intentar publicar.", true);
            }
        };
    }

    // 3. Texto a Voz (TTS) para la historia
    if (ttsStoryBtn) {
        ttsStoryBtn.onclick = () => {
            if (storyInput.value.trim()) {
                speak(storyInput.value);
            } else {
                showNotification("No hay texto para escuchar.", true);
            }
        };
    }
}


// ======================================================================
// 9. NEWSLETTER Y SUSCRIPTORES
// ======================================================================

function updateSubscriberList() {
    const subscriberList = document.getElementById('subscriber-list');
    if (!subscriberList) return;

    subscriberList.innerHTML = subscribers.map(email => `<li>${email}</li>`).join('');
}

function initNewsletter() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-input');
            const email = emailInput.value.trim();

            if (email && subscribers.indexOf(email) === -1) {
                subscribers.push(email);
                localStorage.setItem("subscribers", JSON.stringify(subscribers));
                updateSubscriberList();
                showNotification(`¡Gracias por suscribirte con ${email}!`);
                emailInput.value = '';
            } else if (subscribers.indexOf(email) !== -1) {
                showNotification("Ya estás suscrito.", true);
            }
        });
    }
}


// ======================================================================
// 10. MANEJO DE EVENTOS Y INICIALIZACIÓN
// ======================================================================

// Paginación y Búsqueda (Tu código original)
document.querySelector(".pagination-prev").onclick = () => {
    if (currentPage > 1) { currentPage--; renderCatalogo(); }
};

document.querySelector(".pagination-next").onclick = () => {
    // Lógica compleja de cálculo de páginas para paginación
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const selectedCategory = document.getElementById("category-select").value;

    let filteredBooks = libros;
    if (selectedCategory) {
        filteredBooks = filteredBooks.filter(libro => libro.genero === selectedCategory);
    }
    filteredBooks = filteredBooks.filter(libro =>
        libro.titulo.toLowerCase().includes(searchQuery) ||
        libro.autor.toLowerCase().includes(searchQuery) ||
        libro.genero.toLowerCase().includes(searchQuery)
    );
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    
    if (currentPage < totalPages) { currentPage++; renderCatalogo(); }
};

document.getElementById("search-btn").onclick = () => {
    currentPage = 1;
    renderCatalogo();
    renderPrestamos();
};
document.getElementById("search-input").oninput = () => {
    currentPage = 1;
    renderCatalogo();
    renderPrestamos();
};

// Menú Hamburguesa
document.getElementById("hamburger-btn").onclick = () => {
    document.querySelector(".nav-links").classList.toggle("active");
};


// Inicialización de la página (Al cargar el DOM)
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar y Aplicar Tema y configurar el interruptor
    initThemeToggle();
    
    // 2. Inicializar lógica de Registro y Modales
    initRegistro();
    
    // 3. Inicializar Componentes de Datos (Catálogo/Préstamos)
    renderCatalogo();
    renderPrestamos();
    
    // 4. Carga de Poemas (AHORA DESDE JS)
    initPoemasRotativos(); 
    
    // 5. Inicializar Carrusel (Destacados)
    initCarousel(); 
    
    // 6. Inicializar Lógica de Escritura
    initWriteShare(); 
    
    // 7. Inicializar Newsletter
    initNewsletter();
    updateSubscriberList();
    
    // 8. Mostrar Puntos y UI Inicial
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        const puntosUsuario = document.getElementById("puntos-usuario");
        if (puntosUsuario) puntosUsuario.textContent = puntos[loggedInUser] || 0;
    }
    
    // 9. Mostrar modal inicial
    const modal = document.getElementById("modalBiblioteca");
    if (modal) {
        // Muestra el modal de bienvenida después de 1 segundo para no estorbar la carga
        setTimeout(() => {
            modal.style.display = "block";
        }, 1000); 
    }
});