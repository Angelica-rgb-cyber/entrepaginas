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

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];
let puntos = JSON.parse(localStorage.getItem("puntos")) || {};
let currentPage = 1;
const booksPerPage = 4;

function cerrarModalBiblioteca() {
    document.getElementById("modalBiblioteca").style.display = "none";
}

function renderCatalogo() {
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

    paginatedBooks.forEach(libro => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        const prestamo = prestamos.find(p => p.idLibro === libro.id && !p.devuelto);
        const prestadoPor = prestamo ? prestamo.nombre : null;
        const diasRestantes = prestamo ? Math.ceil((new Date(prestamo.fechaDevolucion) - new Date()) / (1000 * 60 * 60 * 24)) : null;

        card.innerHTML = `
            <img src="${libro.imagen}" alt="${libro.titulo}">
            <h3>${libro.titulo}</h3>
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Género:</strong> ${libro.genero}</p>
            <p><strong>Estado:</strong> ${libro.disponible ? "Disponible" : "No disponible"}</p>
            ${prestadoPor ? `<p class="text-sm" style="color: #f56565;">Prestado a: ${prestadoPor} (${diasRestantes} días restantes)</p>` : ""}
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
    document.querySelector(".pagination-next").disabled = currentPage === totalPages;
}

document.querySelector(".pagination-prev").onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        renderCatalogo();
    }
};

document.querySelector(".pagination-next").onclick = () => {
    const totalPages = Math.ceil(
        libros.filter(libro => {
            const searchQuery = document.getElementById("search-input").value.toLowerCase();
            const selectedCategory = document.getElementById("category-select").value;
            return (!selectedCategory || libro.genero === selectedCategory) &&
                (libro.titulo.toLowerCase().includes(searchQuery) ||
                libro.autor.toLowerCase().includes(searchQuery) ||
                libro.genero.toLowerCase().includes(searchQuery));
        }).length / booksPerPage
    );
    if (currentPage < totalPages) {
        currentPage++;
        renderCatalogo();
    }
};

function renderPrestamos() {
    const prestamoGrid = document.getElementById("prestamo-grid");
    prestamoGrid.innerHTML = "";
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    prestamos
        .filter(prestamo => !prestamo.devuelto)
        .filter(prestamo => {
            const libro = libros.find(l => l.id === prestamo.idLibro);
            return libro.titulo.toLowerCase().includes(searchQuery) || prestamo.nombre.toLowerCase().includes(searchQuery);
        })
        .forEach(prestamo => {
            const libro = libros.find(l => l.id === prestamo.idLibro);
            const card = document.createElement("div");
            card.classList.add("prestamo-card");
            card.innerHTML = `
                <p><strong>Libro:</strong> ${libro.titulo}</p>
                <p><strong>Prestado a:</strong> ${prestamo.nombre}</p>
                <p><strong>Correo:</strong> ${prestamo.email}</p>
                <p><strong>Teléfono:</strong> ${prestamo.telefono}</p>
                <p><strong>Dirección:</strong> ${prestamo.direccion}</p>
                <p><strong>Fecha de Préstamo:</strong> ${new Date(prestamo.fechaPrestamo).toLocaleString()}</p>
                <p><strong>Tiempo Restante:</strong> <span id="countdown-${prestamo.idLibro}" class="countdown"></span></p>
            `;
            prestamoGrid.appendChild(card);
            updateCountdown(prestamo.idLibro, prestamo.fechaDevolucion);
        });
}

function updateCountdown(idLibro, fechaDevolucion) {
    const countdownElement = document.getElementById(`countdown-${idLibro}`);
    if (!countdownElement) return;

    const interval = setInterval(() => {
        const now = new Date();
        const devolucion = new Date(fechaDevolucion);
        const diff = devolucion - now;

        if (diff <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "Vencido";
            const libro = libros.find(l => l.id === idLibro);
            libro.disponible = true;
            const prestamo = prestamos.find(p => p.idLibro === idLibro && !p.devuelto);
            prestamo.devuelto = true;
            localStorage.setItem("prestamos", JSON.stringify(prestamos));
            renderCatalogo();
            renderPrestamos();
            showNotification(`El libro "${libro.titulo}" ha sido devuelto por vencimiento.`);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

function prestarLibro(idLibro) {
    const usuario = usuarios.find(u => u.email === localStorage.getItem("loggedInUser"));
    if (!usuario) {
        showNotification("Debes iniciar sesión para prestar un libro.");
        window.location.href = "login.html";
        return;
    }
    const libro = libros.find(l => l.id === idLibro);
    if (!libro.disponible) {
        showNotification("Este libro no está disponible.");
        return;
    }
    if (prestamos.filter(p => p.email === usuario.email && !p.devuelto).length >= 3) {
        showNotification("Límite de 3 libros prestados alcanzado.");
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
    showNotification(`Has prestado "${libro.titulo}". Devolución en 7 días.`);
    renderCatalogo();
    renderPrestamos();
    actualizarPuntos(usuario.email, 1);
}

function actualizarPuntos(email, cantidad) {
    if (!puntos[email]) puntos[email] = 0;
    puntos[email] += cantidad;
    localStorage.setItem("puntos", JSON.stringify(puntos));
    const puntosUsuario = document.getElementById("puntos-usuario");
    if (puntosUsuario) puntosUsuario.textContent = puntos[email] || 0;
}

function showNotification(message) {
    const notification = document.getElementById("loan-notification");
    const notificationText = document.getElementById("notification-text");
    notificationText.textContent = message;
    notification.classList.add("show");
    setTimeout(() => notification.classList.remove("show"), 3000);
}

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const password = document.getElementById("password").value;
    const notification = document.getElementById("register-notification");

    const usuarioExistente = usuarios.find(u => u.email === email);
    if (usuarioExistente) {
        notification.textContent = "Este correo ya está registrado.";
        notification.className = "register-notification error";
        notification.classList.add("show");
        setTimeout(() => notification.classList.remove("show"), 3000);
    } else {
        usuarios.push({ nombre, email, telefono, direccion, password });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        notification.textContent = "Registro exitoso. ¡Por favor inicia sesión!";
        notification.className = "register-notification success";
        notification.classList.add("show");
        this.reset();
        setTimeout(() => {
            document.getElementById("register-modal").classList.remove("active");
            window.location.href = "login.html";
        }, 2000);
    }
});

document.getElementById("register-link").onclick = () => {
    document.getElementById("register-modal").classList.add("active");
};

document.querySelectorAll(".close-modal").forEach(btn => {
    btn.onclick = () => {
        document.getElementById("register-modal").classList.remove("active");
    };
});

document.addEventListener("click", (e) => {
    const registerModal = document.getElementById("register-modal");
    if (e.target === registerModal) {
        registerModal.classList.remove("active");
    }
});

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
searchBtn.onclick = () => {
    currentPage = 1;
    renderCatalogo();
    renderPrestamos();
};
searchInput.oninput = () => {
    currentPage = 1;
    renderCatalogo();
    renderPrestamos();
};

const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

prevBtn.onclick = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
};

nextBtn.onclick = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
function updateSubscriberList() {
    const subscriberList = document.getElementById("subscriber-list");
    subscriberList.innerHTML = "";
    subscribers.forEach(email => {
        const li = document.createElement("li");
        li.textContent = email;
        subscriberList.appendChild(li);
    });
}

document.getElementById("newsletter-form").onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletter-input").value;
    if (email && !subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem("subscribers", JSON.stringify(subscribers));
        updateSubscriberList();
        alert("¡Gracias por suscribirte!");
        document.getElementById("newsletter-form").reset();
    } else {
        alert("Correo ya suscrito o inválido.");
    }
};

document.getElementById("save-draft").onclick = () => {
    const story = document.getElementById("story-input").value;
    if (story) {
        localStorage.setItem("draftStory", story);
        alert("Borrador guardado!");
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) actualizarPuntos(loggedInUser, 1);
    } else {
        alert("Escribe algo primero!");
    }
};

document.getElementById("publish-story").onclick = () => {
    const story = document.getElementById("story-input").value;
    if (story) {
        const storyDiv = document.createElement("div");
        storyDiv.className = "story";
        storyDiv.innerHTML = `
            <p><strong>Historia Anónima:</strong> ${story}</p>
            <button class="tts-btn" data-text="${story}"><i class="fas fa-volume-up"></i> Escuchar</button>
            <input type="text" class="comment-input" placeholder="Añade un comentario...">
            <button class="comment-btn"><i class="fas fa-comment"></i> Comentar</button>
            <div class="comments"></div>
        `;
        document.getElementById("story-list").prepend(storyDiv);
        document.getElementById("story-input").value = "";
        attachCommentListeners();
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) actualizarPuntos(loggedInUser, 2);
    } else {
        alert("Escribe una historia para publicar!");
    }
};

document.getElementById("tts-story").onclick = () => {
    const text = document.getElementById("story-input").value || "Escribe algo para escuchar.";
    speak(text);
};

document.querySelectorAll(".tts-btn").forEach(btn => {
    btn.onclick = () => {
        const text = btn.getAttribute("data-text");
        speak(text);
    };
});

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);
}

function attachCommentListeners() {
    document.querySelectorAll(".comment-btn").forEach(btn => {
        btn.onclick = () => {
            const commentInput = btn.previousElementSibling;
            const commentText = commentInput.value;
            if (commentText) {
                const commentsDiv = btn.nextElementSibling;
                const comment = document.createElement("p");
                comment.textContent = `Comentario: ${commentText}`;
                commentsDiv.appendChild(comment);
                commentInput.value = "";
            }
        };
    });
}

document.getElementById("theme-toggle-input").onchange = () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
};

document.getElementById("hamburger-btn").onclick = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
};

window.onload = () => {
    const savedDraft = localStorage.getItem("draftStory");
    if (savedDraft) {
        document.getElementById("story-input").value = savedDraft;
    }
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-toggle-input").checked = true;
    }
    updateSubscriberList();
    renderCatalogo();
    renderPrestamos();
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        const puntosUsuario = document.getElementById("puntos-usuario");
        if (puntosUsuario) puntosUsuario.textContent = puntos[loggedInUser] || 0;
    }
};


document.addEventListener('DOMContentLoaded', () => {
    // ... Tu código actual de inicialización (modal, etc.) ...

    // Función de inicialización para los poemas
    initPoemasRotativos();
});


function initPoemasRotativos() {
    const textoElemento = document.getElementById('poema-texto');
    const autorElemento = document.getElementById('poema-autor');
    const tituloElemento = document.getElementById('poema-titulo');

    if (!textoElemento || !autorElemento || !tituloElemento) {
        console.warn("Elementos de Poemas no encontrados. Saliendo de la función de inicialización.");
        return;
    }

    let poemas = [];
    let indicePoema = 0;
    const INTERVALO_MS = 10000; // 10 segundos

    // 1. Cargar los datos del archivo JSON (simulando una llamada a una API)
    fetch('poemas.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            poemas = data; // Almacena los poemas cargados

            if (poemas.length === 0) {
                textoElemento.textContent = "No hay poemas disponibles en este momento.";
                autorElemento.textContent = "";
                tituloElemento.textContent = "";
                return;
            }

            // 2. Definir la función de rotación
            function mostrarSiguientePoema() {
                const poemaActual = poemas[indicePoema];

                tituloElemento.textContent = poemaActual.titulo;
                textoElemento.textContent = poemaActual.texto;
                autorElemento.textContent = `- ${poemaActual.autor}`;

                // Mover al siguiente índice, volviendo a 0 si se llega al final
                indicePoema = (indicePoema + 1) % poemas.length;
            }

            // 3. Iniciar: Mostrar el primer poema y configurar el intervalo
            mostrarSiguientePoema();
            setInterval(mostrarSiguientePoema, INTERVALO_MS);

        })
        .catch(error => {
            console.error("Error al cargar los poemas:", error);
            textoElemento.textContent = "Error al cargar los poemas. Inténtalo más tarde.";
            autorElemento.textContent = "";
            tituloElemento.textContent = "";
        });
}