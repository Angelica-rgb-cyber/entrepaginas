// catalogo.js
// JavaScript for catalogo.html to handle book filtering and searching
document.addEventListener('DOMContentLoaded', () => {
    const filtroCategoria = document.getElementById('filtro-categoria');
    const listaLibros = document.getElementById('lista-libros');

    if (filtroCategoria && listaLibros) {
        // Add search input
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Buscar por título o autor...';
        searchInput.className = 'w-full md:w-1/4 border p-2 rounded mb-4';
        filtroCategoria.parentNode.insertBefore(searchInput, filtroCategoria.nextSibling);

        // Filter by category
        filtroCategoria.addEventListener('change', () => {
            const categoriaId = filtroCategoria.value;
            const libros = listaLibros.querySelectorAll('.libro');
            libros.forEach(libro => {
                const matchesCategoria = categoriaId === '' || libro.dataset.categoria === categoriaId;
                const matchesSearch = searchInput.value ? libro.textContent.toLowerCase().includes(searchInput.value.toLowerCase()) : true;
                libro.style.display = matchesCategoria && matchesSearch ? 'block' : 'none';
            });
        });

        // Search by title or author
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const libros = listaLibros.querySelectorAll('.libro');
            libros.forEach(libro => {
                const matchesSearch = libro.textContent.toLowerCase().includes(searchTerm);
                const matchesCategoria = filtroCategoria.value === '' || libro.dataset.categoria === filtroCategoria.value;
                libro.style.display = matchesSearch && matchesCategoria ? 'block' : 'none';
            });
        });
    }
});




let libros = [
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    genero: 'Drama',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.wSKlwjdlc--DoQA-LjxcrgHaLa&pid=Api&P=0&h=180',
    descripcion:
      'Una saga épica que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo, con una estructura cíclica que fusiona la fantasía con la realidad.',
  },
  {
    id: 2,
    titulo: 'El amor en los tiempos del cólera',
    autor: 'Gabriel García Márquez',
    genero: 'Drama',
    disponible: true,
    imagen: 'https://pictures.abebooks.com/inventory/22536841297.jpg',
    descripcion:
      'Una historia de amor casi obsesivo entre Florentino Ariza y Fermina Daza, explorando la espera y la constancia a través de los años, ambientada en el Caribe de principios del siglo XX.',
  },
  {
    id: 3,
    titulo: 'Crónica de una muerte anunciada',
    autor: 'Gabriel García Márquez',
    genero: 'Drama',
    disponible: true,
    imagen:
      'https://www.polifemo.com/static/img/portadas/_visd_0000JPG00RIP.jpg',
    descripcion:
      'Novela corta que, tomando elementos del realismo mágico y del relato policial, narra el asesinato de Santiago Nasar a manos de los hermanos Vicario, inspirada en un crimen real en Colombia.',
  },
  {
    id: 4,
    titulo: 'La casa de los espíritus',
    autor: 'Isabel Allende',
    genero: 'Drama',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.UOKYemEWwQcg8gRC9dcd-gHaLQ&pid=Api&P=0&h=180',
    descripcion:
      'Una novela que mezcla realismo mágico con la historia de la familia Trueba a lo largo de generaciones en un país anónimo de América Latina (asociado a Chile).',
  },
  {
    id: 5,
    titulo: 'Eva Luna',
    autor: 'Isabel Allende',
    genero: 'Drama',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.tsHOWsK-3EKWGDGw1wtZnwHaHa&pid=Api&P=0&h=180',
    descripcion:
      'Novela que narra la vida de Eva Luna, una joven huérfana y narradora de historias en un país sudamericano, mientras teje su propia historia en medio de la política y el romance.',
  },
  {
    id: 6,
    titulo: 'La ciudad y los perros',
    autor: 'Mario Vargas Llosa',
    genero: 'Novela',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.VHwGGYxjoXwZ_gQ_DRAYQQAAAA&pid=Api&P=0&h=180',
    descripcion:
      'Explora las crueles condiciones de vida de los cadetes en un colegio militar de Lima, Perú, abordando temas de la formación de la identidad, la violencia y la hipocresía social.',
  },
  {
    id: 7,
    titulo: 'Conversación en La Catedral',
    autor: 'Mario Vargas Llosa',
    genero: 'Novela',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.hLS0rOjx4xYql4exR1H-lAHaMD&pid=Api&P=0&h=180',
    descripcion:
      'Una cruda radiografía de la frustración y el envilecimiento de la sociedad peruana durante el "ochenio" dictatorial del general Manuel A. Odría, a través de la conversación entre Zavalita y el zambo Ambrosio.',
  },
  {
    id: 8,
    titulo: 'La tía Julia y el escribidor',
    autor: 'Mario Vargas Llosa',
    genero: 'Novela',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.eeHE2_xEQrvRzaFhuDNDowAAAA&pid=Api&P=0&h=180',
    descripcion:
      'Novela que mezcla una historia de amor autobiográfica y cómica entre un joven y su tía política, con historias melodramáticas y sensacionalistas de un "escribidor" de radionovelas.',
  },
  {
    id: 9,
    titulo: 'El otoño del patriarca',
    autor: 'Gabriel García Márquez',
    genero: 'Novela',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.yYkPD4DsU4dxTOU-bupViAHaLQ&pid=Api&P=0&h=180',
    descripcion:
      'Retrato de un dictador caribeño anónimo, abordando el tema de la soledad del poder absoluto y la decadencia a través de un monólogo de flujo de conciencia.',
  },
  {
    id: 10,
    titulo: 'El túnel',
    autor: 'Ernesto Sabato',
    genero: 'Novela',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.wbkS1t_O701zo8yA52cgDQAAAA&pid=Api&P=0&h=180',
    descripcion:
      'Narrada en primera persona por el pintor Juan Pablo Castel, es una novela existencialista y psicológica que explora la obsesión, la incomunicación y la locura, desde la confesión de un asesinato.',
  },
  {
    id: 11,
    titulo: 'Veinte poemas de amor',
    autor: 'Pablo Neruda',
    genero: 'Poesía',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.dXICGhIDVDHUcu7AECu_IgHaMv&pid=Api&P=0&h=180',
    descripcion:
      'Colección de veinte poemas de amor y una canción desesperada que celebran el amor, el erotismo y la melancolía del poeta joven, utilizando la naturaleza como fondo para los sentimientos.',
  },
  {
    id: 12,
    titulo: 'Canto general',
    autor: 'Pablo Neruda',
    genero: 'Poesía',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.P1DDQ5wtKTZfWLMNHPtiiAHaMO&pid=Api&P=0&h=180',
    descripcion:
      'Considerada la **primera epopeya moderna** latinoamericana, es una vasta obra que canta la historia, la geografía y los pueblos del continente, desde los orígenes hasta la lucha por la liberación.',
  },
  {
    id: 13,
    titulo: 'Cien sonetos de amor',
    autor: 'Pablo Neruda',
    genero: 'Poesía',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.yySxBqkeqNMefg2jQUC1IQHaLQ&pid=Api&P=0&h=180',
    descripcion:
      'Extraordinaria declaración de amor del poeta a su compañera y musa, Matilde, donde el mar, la tierra y las diferentes fases del día evocan estados de ánimo y sirven de hilo conductor.',
  },
  {
    id: 14,
    titulo: 'Residencia en la tierra',
    autor: 'Pablo Neruda',
    genero: 'Poesía',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.va7LBnrK82Mtd99ZSrjEfQHaKR&pid=Api&P=0&h=180',
    descripcion:
      'Conjunto de tres libros de poemas con un tono oscuro y existencialista, que explora la soledad, la desintegración de la materia, la muerte y la angustia del ser humano en la modernidad.',
  },
  {
    id: 15,
    titulo: 'España en el corazón',
    autor: 'Pablo Neruda',
    genero: 'Poesía',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.me0nIIE_01Hbs3mgXRreVQHaKa&pid=Api&P=0&h=180',
    descripcion:
      'Obra poética escrita durante la Guerra Civil Española y dedicada a la lucha del bando republicano, un testimonio de solidaridad y una oda a la resistencia y al dolor del pueblo español.',
  },
  {
    id: 16,
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    genero: 'Fantasía',
    disponible: true,
    imagen:
      'https://imagessl2.casadellibro.com/a/l/t0/52/9788478884452.jpg',
    descripcion:
      'Primer libro de la saga, presenta a **Harry Potter**, un niño huérfano que descubre que es un mago al ser invitado a asistir al Colegio Hogwarts de Magia y Hechicería, donde enfrentará a su primer gran desafío.',
  },
  {
    id: 17,
    titulo: 'El hobbit',
    autor: 'J.R.R. Tolkien',
    genero: 'Fantasía',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.-JUm3l7g-nTTLylkI0vR-gHaLQ&pid=Api&P=0&h=180',
    descripcion:
      'Una novela de fantasía que narra las aventuras de **Bilbo Bolsón**, un hobbit que es reclutado por el mago Gandalf y un grupo de enanos para robar un tesoro custodiado por el dragón Smaug.',
  },
  {
    id: 18,
    titulo: 'El señor de los anillos',
    autor: 'J.R.R. Tolkien',
    genero: 'Fantasía',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.zUZKbZFm22m7E3KWkj8YkQHaLF&pid=Api&P=0&h=180',
    descripcion:
      'Épica de fantasía que narra el viaje de **Frodo Bolsón**, un hobbit, y sus compañeros para destruir el Anillo Único en el Monte del Destino y evitar que el Señor Oscuro Sauron conquiste la Tierra Media.',
  },
  {
    id: 19,
    titulo: 'El reino del dragón de oro',
    autor: 'Isabel Allende',
    genero: 'Fantasía',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.4myX1Ql9d6QrlnPPwfMdqgHaKt&pid=Api&P=0&h=180',
    descripcion:
      'Tercer libro de la trilogía *Memorias del Águila y el Jaguar*, sigue las aventuras de Alex Cold y Nadia Santos en el Reino Prohibido, en la región del Himalaya, para rescatar al Dragón de Oro, un oráculo de sabiduría.',
  },
  {
    id: 20,
    titulo: 'Crónicas de Narnia',
    autor: 'C.S. Lewis',
    genero: 'Fantasía',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.g7dJqgc_lM5-sF2yhBglDAHaLx&pid=Api&P=0&h=180',
    descripcion:
      'Serie de siete novelas de fantasía. El segundo libro (y a menudo el primero que se lee), *El león, la bruja y el armario*, narra cómo cuatro hermanos entran en la tierra mágica de Narnia, sumida en un invierno eterno por la Bruja Blanca, y solo el león Aslan puede liberarla.',
  },
  {
    id: 21,
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    genero: 'Clásico',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.p2Qht0iMCaSgQb3wbzHukAHaKN&pid=Api&P=0&h=180',
    descripcion:
      'Novela cumbre de la literatura española que narra las aventuras de **Alonso Quijano**, un hidalgo que enloquece al leer libros de caballerías y se convierte en el caballero andante **Don Quijote** para defender la justicia.',
  },
  {
    id: 22,
    titulo: 'Historia de dos ciudades',
    autor: 'Charles Dickens',
    genero: 'Clásico',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.NOqARYM8WCfpj2RX8UWlVwHaLD&pid=Api&P=0&h=180',
    descripcion:
      'Novela histórica ambientada en Londres y París antes y durante la Revolución Francesa, explorando temas como el sacrificio, la redención y la violencia de la turba.',
  },
  {
    id: 23,
    titulo: 'El gran Gatsby',
    autor: 'F. Scott Fitzgerald',
    genero: 'Clásico',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.Ko0u4TrFgCcUcAjIKPJhiwHaLy&pid=Api&P=0&h=180',
    descripcion:
      'Una novela que critica el "sueño americano" a través de la historia de **Jay Gatsby**, un millonario de la Era del Jazz obsesionado con recuperar a su antiguo amor, Daisy Buchanan.',
  },
  {
    id: 24,
    titulo: 'Moby Dick',
    autor: 'Herman Melville',
    genero: 'Clásico',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.rAHI8P9xXNtCss6jkTKdcgHaKp&pid=Api&P=0&h=180',
    descripcion:
      'Relato épico de la obsesiva búsqueda de la ballena blanca Moby Dick por parte del Capitán Ahab, una profunda exploración de temas como la obsesión, la locura, la venganza y la existencia humana.',
  },
  {
    id: 25,
    titulo: 'Orgullo y prejuicio',
    autor: 'Jane Austen',
    genero: 'Clásico',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.jWGnnNreh9BPP1ACbwhi0AHaK-&pid=Api&P=0&h=180',
    descripcion:
      'Clásico de la literatura inglesa que narra la relación entre **Elizabeth Bennet** y el **Sr. Darcy**, explorando las convenciones sociales, el matrimonio y los malentendidos en la Inglaterra rural del siglo XIX.',
  },
  {
    id: 26,
    titulo: 'Diario de Na Hee-do',
    autor: 'Inspirado en 2521',
    genero: 'Romántica',
    disponible: true,
    imagen:
      'https://fr.web.img5.acsta.net/pictures/22/01/13/20/07/0102169.jpg',
    descripcion:
      'Inspirado en el K-Drama *Veinticinco, Veintiuno* (2521), se centra en las entradas de **Na Hee-do**, una joven atleta, que documenta su crecimiento personal, sueños y el desarrollo de su relación con Baek Yi-jin.',
  },
  {
    id: 27,
    titulo: 'Cumbres borrascosas',
    autor: 'Emily Brontë',
    genero: 'Romántica',
    disponible: true,
    imagen:
      'https://mestasediciones.com/wp-content/uploads/2020/06/C61-Cumbres-borrascosas.jpg',
    descripcion:
      'Novela de enfrentamiento apasionado, a menudo violento, entre **Heathcliff** y **Catherine**, una historia gótica de amor, venganza y la imposibilidad de la unión, ambientada en los páramos de Yorkshire.',
  },
  {
    id: 28,
    titulo: 'Sentido y sensibilidad',
    autor: 'Jane Austen',
    genero: 'Romántica',
    disponible: true,
    imagen:
      'https://pictures.abebooks.com/inventory/22571482395.jpg',
    descripcion:
      'Sigue a las hermanas **Dashwood**, Elinor y Marianne, explorando la diferencia entre la mesura (sentido) y la emoción (sensibilidad) en sus vidas amorosas tras una repentina pérdida económica.',
  },
  {
    id: 29,
    titulo: 'Emma',
    autor: 'Jane Austen',
    genero: 'Romántica',
    disponible: true,
    imagen:
      'https://www.canton4.com/wp-content/uploads/2022/10/portada_emma_jane-austen_202206131223-scaled.jpg',
    descripcion:
      'Protagonizada por **Emma Woodhouse**, una joven rica y bienintencionada, pero algo casamentera, que interfiere en la vida amorosa de sus amigos y pronto descubre la complejidad de las relaciones y sus propios sentimientos.',
  },
  {
    id: 30,
    titulo: 'Persuasión',
    autor: 'Jane Austen',
    genero: 'Romántica',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.TOUQbAu30R5cvJVL5dHEngHaLZ&pid=Api&P=0&h=180',
    descripcion:
      'Relata la historia de **Anne Elliot**, quien, años después de haber sido persuadida de romper su compromiso, se reencuentra con su antiguo amor, el Capitán Frederick Wentworth, explorando el arrepentimiento y las segundas oportunidades.',
  },
  {
    id: 31,
    titulo: '1984',
    autor: 'George Orwell',
    genero: 'Distopía',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.5fghEVBNKHeSYr8tyg-tVgHaLW&pid=Api&P=0&h=180',
    descripcion:
      'Novela política de ficción distópica que advierte sobre una sociedad totalitaria y vigilada por el **Gran Hermano**, donde se manipula la información y se reprime la libertad de pensamiento. **Winston Smith** decide rebelarse.',
  },
  {
    id: 32,
    titulo: 'Rebelión en la granja',
    autor: 'George Orwell',
    genero: 'Distopía',
    disponible: true,
    imagen:
      'https://mlstaticquic-a.akamaihd.net/george-orwell-rebelion-en-la-granja--D_NQ_NP_1644-MLU2922581417_072012-F.jpg',
    descripcion:
      'Una fábula satírica que narra cómo los animales de una granja se rebelan contra su dueño humano para crear una sociedad igualitaria, solo para ser corrompidos por los cerdos, que establecen una nueva tiranía (alegoría de la Revolución Rusa y el estalinismo).',
  },
  {
    id: 33,
    titulo: 'Fahrenheit 451',
    autor: 'Ray Bradbury',
    genero: 'Distopía',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.PnbC_Fo_nqWvvdNLoewukAHaLH&pid=Api&P=0&h=180',
    descripcion:
      'Presenta una sociedad futurista donde los libros están prohibidos y los bomberos tienen la misión de quemarlos (451 grados Fahrenheit es la temperatura a la que el papel arde). Sigue a **Guy Montag**, un bombero que comienza a cuestionar su trabajo.',
  },
  {
    id: 34,
    titulo: 'Un mundo feliz',
    autor: 'Aldous Huxley',
    genero: 'Distopía',
    disponible: true,
    imagen:
      'https://losresumenes.com/wp-content/uploads/2023/11/Aldous-Huxley-Un-mundo-feliz.jpg',
    descripcion:
      'Novela futurista que describe un estado mundial donde la felicidad y la estabilidad se logran a través del condicionamiento genético, el control social y el uso de drogas (*soma*), a costa de la libertad y la individualidad.',
  },
  {
    id: 35,
    titulo: 'El cuento de la criada',
    autor: 'Margaret Atwood',
    genero: 'Distopía',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.ZqEwg6ACprkxZm57u4H47AAAAA&pid=Api&P=0&h=180',
    descripcion:
      'Ambientada en la teocracia totalitaria de Gilead, donde la baja natalidad lleva a tratar a las mujeres fértiles (Criadas) como propiedad, obligándolas a la servidumbre sexual. La historia se centra en **Offred** y su lucha por sobrevivir.',
  },
  {
    id: 36,
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    genero: 'Infantil',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.l_srAYwg9jJPJbO4AHpFpQHaJs&pid=Api&P=0&h=180',
    descripcion:
      'Relato poético e ilustrado que narra la historia de un piloto varado en el desierto que se encuentra con un pequeño príncipe de otro planeta, explorando temas de la amistad, el amor, la pérdida y el sentido de la vida, a menudo con críticas a la edad adulta.',
  },
  {
    id: 37,
    titulo: 'Charlie y la fábrica de chocolate',
    autor: 'Roald Dahl',
    genero: 'Infantil',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.GtK-QbxRm7nNwLYuvxQdcQHaK-&pid=Api&P=0&h=180',
    descripcion:
      'Novela que sigue las aventuras de **Charlie Bucket**, un niño pobre y bondadoso que gana la oportunidad de visitar la misteriosa fábrica de chocolate del excéntrico **Willy Wonka**, con una moraleja sobre el egoísmo y la avaricia.',
  },
  {
    id: 38,
    titulo: 'Matilda',
    autor: 'Roald Dahl',
    genero: 'Infantil',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.bP84LJtdPgUZ9C8MMZBr0wHaLp&pid=Api&P=0&h=180',
    descripcion:
      'Cuenta la historia de **Matilda Wormwood**, una niña genio y amante de la lectura, dotada de poderes telequinéticos, que debe lidiar con padres negligentes y la cruel directora de su escuela, Miss Trunchbull.',
  },
  {
    id: 39,
    titulo: 'El león, la bruja y el armario',
    autor: 'C.S. Lewis',
    genero: 'Infantil',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.iRWlIiMoNNZooAJZAcfNlAHaKW&pid=Api&P=0&h=180',
    descripcion:
      'Es la novela más conocida de *Las Crónicas de Narnia*, en la que cuatro hermanos son transportados a Narnia a través de un armario y se unen a la lucha para liberar la tierra del hechizo de la Bruja Blanca con la ayuda de Aslan, el gran león.',
  },
  {
    id: 40,
    titulo: 'Alicia en el país de las maravillas',
    autor: 'Lewis Carroll',
    genero: 'Infantil',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.5rzOMrxgXSfZKuWIyYQTgAHaKa&pid=Api&P=0&h=180',
    descripcion:
      'Relata las aventuras de **Alicia**, una niña amable y educada, que cae por una madriguera de conejo y se encuentra en un mundo de fantasía lleno de personajes peculiares, explorando la lógica, el lenguaje y la identidad.',
  },
  {
    id: 41,
    titulo: 'Las aventuras de Tom Sawyer',
    autor: 'Mark Twain',
    genero: 'Aventura',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.drd_-dBLSqXaFMlowkckwwHaJv&pid=Api&P=0&h=180',
    descripcion:
      'Clásico de la literatura estadounidense que narra las travesuras y aventuras de **Tom Sawyer**, un niño huérfano y astuto que vive en un pueblo a orillas del río Mississippi en la década de 1840, junto a su amigo Huckleberry Finn.',
  },
  {
    id: 42,
    titulo: 'Huckleberry Finn',
    autor: 'Mark Twain',
    genero: 'Aventura',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.3s5xwwHr3zZ1eSqBzaEVYAHaL9&pid=Api&P=0&h=180',
    descripcion:
      'Continuación de *Tom Sawyer*, sigue a **Huckleberry Finn** mientras escapa de su padre alcohólico y viaja por el río Mississippi en una balsa con el esclavo fugitivo Jim. Es una crítica profunda al racismo y la hipocresía social de la época.',
  },
  {
    id: 43,
    titulo: 'La isla del tesoro',
    autor: 'Robert Louis Stevenson',
    genero: 'Aventura',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.MLkJPyFvup40leCWOb0ReQHaHZ&pid=Api&P=0&h=180',
    descripcion:
      'Una clásica novela de piratas contada por el joven **Jim Hawkins**, quien se embarca en la búsqueda de un tesoro enterrado, enfrentándose a la tripulación amotinada liderada por el carismático **Long John Silver**.',
  },
  {
    id: 44,
    titulo: 'Veinte mil leguas de viaje submarino',
    autor: 'Julio Verne',
    genero: 'Aventura',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.PmXDMRUbSlMUORfQMbV6EwHaKM&pid=Api&P=0&h=180',
    descripcion:
      'Novela de ciencia ficción y aventuras que narra el viaje del profesor **Pierre Aronnax** a bordo del submarino *Nautilus*, comandado por el enigmático **Capitán Nemo**, explorando las maravillas y los peligros de los océanos.',
  },
  {
    id: 45,
    titulo: 'La vuelta al mundo en 80 días',
    autor: 'Julio Verne',
    genero: 'Aventura',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.8awkUWERI1U3nL_yGYMQOQHaKQ&pid=Api&P=0&h=180',
    descripcion:
      'Narra la increíble apuesta de **Phileas Fogg**, un flemático caballero inglés, quien junto a su sirviente **Passepartout**, intenta dar la vuelta al mundo en ochenta días utilizando todos los medios de transporte disponibles.',
  },
  {
    id: 46,
    titulo: 'Drácula',
    autor: 'Bram Stoker',
    genero: 'Terror',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.-tlgDWVOD42tolp_kSrJ6gHaLQ&pid=Api&P=0&h=180',
    descripcion:
      'Novela epistolar que presenta al vampiro **Conde Drácula**, un ser cruel y maligno de gran fuerza e inteligencia sobrehumana, cuya llegada a Londres desde Transilvania desencadena una lucha entre el bien y el mal.',
  },
  {
    id: 47,
    titulo: 'Frankenstein',
    autor: 'Mary Shelley',
    genero: 'Terror',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.UMssI7V8veQY_QcOTPPmSgHaLH&pid=Api&P=0&h=180',
    descripcion:
      'Una novela gótica que narra cómo el científico **Victor Frankenstein** crea un ser vivo a partir de partes de cuerpos, abordando las responsabilidades de la ciencia, la ambición y la miseria de la criatura que abandona.',
  },
  {
    id: 48,
    titulo: 'El resplandor',
    autor: 'Stephen King',
    genero: 'Terror',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.QrernvvfkGSdnH7XHMiUBAHaLH&pid=Api&P=0&h=180',
    descripcion:
      'Novela de terror psicológico que sigue a **Jack Torrance**, un escritor que acepta ser vigilante en el aislado Hotel Overlook. La soledad y las fuerzas malignas del hotel desatan su alcoholismo y locura, poniendo en peligro a su familia, especialmente a su hijo con poderes psíquicos (el *resplandor*).',
  },
  {
    id: 49,
    titulo: 'It',
    autor: 'Stephen King',
    genero: 'Terror',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.55hYoVk27fQVf1PewaY8qgHaLR&pid=Api&P=0&h=180',
    descripcion:
      'Épica de terror que narra el enfrentamiento de un grupo de niños (el **Club de los Perdedores**) y luego de adultos, contra una entidad maligna interdimensional que se alimenta del miedo y se manifiesta como el payaso **Pennywise** en el pueblo de Derry, Maine.',
  },
  {
    id: 50,
    titulo: 'El exorcista',
    autor: 'William Peter Blatty',
    genero: 'Terror',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.XijRiE6mWHDJro4bhPqvIAHaLT&pid=Api&P=0&h=180',
    descripcion:
      'Novela de terror que describe la posesión demoníaca de la joven **Regan MacNeil** y los intentos de dos sacerdotes, el padre Karras y el padre Merrin, por salvar su alma a través de un exorcismo, explorando la fe y el mal.',
  },
  {
    id: 51,
    titulo: 'La sombra del viento',
    autor: 'Carlos Ruiz Zafón',
    genero: 'Misterio',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.nhZOHUXlLgiEuJlFDyvX2QHaLN&pid=Api&P=0&h=180',
    descripcion:
      'Ambientada en la Barcelona de posguerra, narra la historia de **Daniel Sempere**, quien descubre un misterioso libro en el Cementerio de los Libros Olvidados, desencadenando una trama de intriga, amor y secretos sobre el autor del libro, Julián Carax.',
  },
  {
    id: 52,
    titulo: 'El juego del ángel',
    autor: 'Carlos Ruiz Zafón',
    genero: 'Misterio',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.M6bdPCukO5-EF3fvxyMNPwHaLT&pid=Api&P=0&h=180',
    descripcion:
      'Precuela de *La sombra del viento*, sigue a **David Martín**, un joven escritor atormentado en la Barcelona de los años 20, que es contratado por un enigmático editor para escribir una obra que cambiará su vida y lo enfrentará a fuerzas oscuras.',
  },
  {
    id: 53,
    titulo: 'El nombre del viento',
    autor: 'Patrick Rothfuss',
    genero: 'Misterio',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.Ee_XZXymjpzWxWEs0XHMmgHaJl&pid=Api&P=0&h=180',
    descripcion:
      'Primera novela de la trilogía *Crónica del Asesino de Reyes*, donde el legendario héroe **Kvothe** cuenta la historia de su vida, desde su infancia como artista itinerante hasta su ascenso como el mago más notorio y temido.',
  },
  {
    id: 54,
    titulo: 'El paciente',
    autor: 'Juan Gómez-Jurado',
    genero: 'Misterio',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.y1ZTpFXnF8KPgfjdTa8fKwHaLQ&pid=Api&P=0&h=180',
    descripcion:
      'Thriller psicológico donde el neurocirujano **Dr. Evans** se enfrenta a un dilema imposible: debe asesinar al Presidente de los Estados Unidos en la mesa de operaciones para salvar a su propia hija de un secuestrador.',
  },
  {
    id: 55,
    titulo: 'El código Da Vinci',
    autor: 'Dan Brown',
    genero: 'Misterio',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.xAGf71lirNXuj2Cyr3dwXAHaLH&pid=Api&P=0&h=180',
    descripcion:
      'Aventura trepidante que mezcla intrigas vaticanas, simbología y enigmas cifrados. El profesor **Robert Langdon** investiga un asesinato en el Louvre que lo lleva a una búsqueda para resolver un antiguo misterio sobre Jesús y María Magdalena, poniendo en duda dogmas de la Iglesia católica.',
  },
  {
    id: 56,
    titulo: 'Sapiens',
    autor: 'Yuval Noah Harari',
    genero: 'No ficción',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.-V796zja84Bulac1WiW-7gHaLP&pid=Api&P=0&h=180',
    descripcion:
      'Un examen de la historia de la humanidad, desde los orígenes del *Homo sapiens* hasta la actualidad, explorando cómo la capacidad de **crear ficción y narrativas** (religiones, dinero, naciones) ha permitido a nuestra especie dominar el planeta.',
  },
  {
    id: 57,
    titulo: 'Homo Deus',
    autor: 'Yuval Noah Harari',
    genero: 'No ficción',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.DWlMbmm-cA7JJ7_dTPfcWgHaLW&pid=Api&P=0&h=180',
    descripcion:
      'Explora el futuro de la humanidad, argumentando que una vez superados problemas como la hambruna, la peste y la guerra, los humanos se centrarán en la inmortalidad, la felicidad y la divinidad, con el riesgo de que la **Inteligencia Artificial** nos desplace.',
  },
  {
    id: 58,
    titulo: 'Viento, arena y estrellas',
    autor: 'Antoine de Saint-Exupéry',
    genero: 'No ficción',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.vYsvNXeL4fUpto486J5xSwHaKc&pid=Api&P=0&h=180',
    descripcion:
      'Un libro de memorias y reflexiones filosóficas sobre las experiencias del autor como **piloto de correo** en rutas peligrosas, explorando la amistad, el coraje, la soledad y el valor de la vida humana en contextos extremos.',
  },
  {
    id: 59,
    titulo: 'Educated',
    autor: 'Tara Westover',
    genero: 'No ficción',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.Kn8v8LjGkvpgg8BanIjFnAHaLQ&pid=Api&P=0&h=180',
    descripcion:
      'Una autobiografía de **Tara Westover** que narra cómo superó a su familia mormona y survivalista en Idaho para conseguir una educación. Detalla su viaje desde una vida sin educación formal hasta completar un doctorado en Historia en Cambridge University, resaltando la importancia del aprendizaje.',
  },
  {
    id: 60,
    titulo: 'Becoming',
    autor: 'Michelle Obama',
    genero: 'No ficción',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.e__NEYvJpiqMPy4lAR_zHgHaLQ&pid=Api&P=0&h=180',
    descripcion:
      'Las memorias de **Michelle Obama** (Mi Historia), que relatan su vida desde su niñez en Chicago, su carrera como abogada y administradora, hasta su rol como la primera Primera Dama afroamericana de Estados Unidos, destacando la importancia de la familia y el crecimiento personal.',
  },
  {
    id: 61,
    titulo: 'Breve historia del tiempo',
    autor: 'Stephen Hawking',
    genero: 'Ciencia',
    disponible: true,
    imagen:
      'https://tse2.mm.bing.net/th?id=OIP.vSfvFJDFbCktSJ0s2Nc7MgAAAA&pid=Api&P=0&h=180',
    descripcion:
      'Obra fundamental de divulgación científica que explica de forma sencilla temas complejos de cosmología, como el origen y el destino del Universo, el espacio-tiempo, los agujeros negros y la búsqueda de una teoría unificada de la física.',
  },
  {
    id: 62,
    titulo: 'El universo en una cáscara de nuez',
    autor: 'Stephen Hawking',
    genero: 'Ciencia',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.eIctUhRnlELGWyInBIlaKQHaLH&pid=Api&P=0&h=180',
    descripcion:
      'Libro de divulgación científica que profundiza en temas como la relatividad, la gravedad, la mecánica cuántica y la teoría M, explorando cómo las leyes de la física dictan la forma del universo, incluyendo la posibilidad de viajar en el tiempo a través de agujeros de gusano.',
  },
  {
    id: 63,
    titulo: 'Cosmos',
    autor: 'Carl Sagan',
    genero: 'Ciencia',
    disponible: true,
    imagen:
      'https://tse4.mm.bing.net/th?id=OIP.jM_vcIR0J8bxWtrQHP_bAgAAAA&pid=Api&P=0&h=180',
    descripcion:
      'Obra basada en la popular serie de televisión, que aborda el origen de la vida, la muerte del Sol, la evolución de las galaxias y la materia, sirviendo como una introducción apasionante a la cosmología y la astronomía.',
  },
  {
    id: 64,
    titulo: 'El mundo y sus demonios',
    autor: 'Carl Sagan',
    genero: 'Ciencia',
    disponible: true,
    imagen:
      'https://tse1.mm.bing.net/th?id=OIP.j6u8gJ7FATdH99u0dpb3tAHaKy&pid=Api&P=0&h=180',
    descripcion:
      'Un alegato a favor del pensamiento crítico y el método científico como única herramienta para distinguir la verdad del engaño, criticando el aumento de la superstición y la pseudociencia en la sociedad moderna.',
  },
  {
    id: 65,
    titulo: 'El gen egoísta',
    autor: 'Richard Dawkins',
    genero: 'Ciencia',
    disponible: true,
    imagen:
      'https://tse3.mm.bing.net/th?id=OIP.EWV0_fT8dTCvrqasF2r9nQHaLv&pid=Api&P=0&h=180',
    descripcion:
      'Propone que la evolución debe ser vista desde la perspectiva del gen y no del individuo u especie. Argumenta que el organismo individual es una "máquina de supervivencia" temporal construida por los genes para su propia replicación.',
  },
];

// Utility: escapar HTML (mantenida)
// Cargar libros desde el backend (si se usa base de datos)
      async function loadBooks() {
        try {
          // Si tu backend existe y está en esta ruta, descomenta:
          /*
          const response = await fetch('/entrepaginas/books');
          if (response.ok) {
            libros = await response.json();
            initCatalogo();
          } else {
            console.error('Error al cargar libros:', response.status);
            initCatalogo(); // Usar libros estáticos si falla
          }
          */
          // Usamos libros estáticos por ahora si no hay backend activo:
          initCatalogo();
        } catch (error) {
          console.error('Error al conectar con el servidor:', error);
          initCatalogo(); // Usar libros estáticos como respaldo
        }
      }

      // Utility: escapar HTML
      function escapeHtml(text) {
        if (!text && text !== 0) return '';
        return String(text)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;');
      }

      // Agrupar por género
      function agruparPorGenero(lista) {
        const grupos = {};
        lista.forEach((libro) => {
          const g = libro.genero || 'Otros';
          if (!grupos[g]) grupos[g] = [];
          grupos[g].push(libro);
        });
        Object.keys(grupos).forEach((g) =>
          grupos[g].sort((a, b) => a.titulo.localeCompare(b.titulo, 'es'))
        );
        return grupos;
      }

      // Generar ID válido a partir del nombre de género
      function slugify(text) {
        return text
          .toString()
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9\-]/g, '');
      }

      // Renderizar botones de categoría y secciones
      function initCatalogo(query = '') {
        let filteredBooks = libros;
        if (query) {
            // Re-aplicar la búsqueda si existe una consulta
            const trimmedQuery = query.trim().toLowerCase();
            const isNumeric = !isNaN(trimmedQuery);
            filteredBooks = libros.filter((libro) => {
                const searchTerms = [
                    libro.titulo, 
                    libro.autor, 
                    libro.genero
                ].map(t => t.toLowerCase());

                if (isNumeric) {
                    searchTerms.push(libro.id.toString());
                }

                return searchTerms.some(term => term.includes(trimmedQuery));
            });
        }
        
        const grupos = agruparPorGenero(filteredBooks);
        const barra = document.getElementById('barraCategorias');
        const seccionesCont = document.getElementById('secciones');
        barra.innerHTML = '';
        seccionesCont.innerHTML = '';

        // Crear botón "Todas"
        const btnTodas = document.createElement('button');
        btnTodas.className = 'categoria-btn activa';
        btnTodas.textContent = 'Todas';
        btnTodas.dataset.genre = 'todas';
        barra.appendChild(btnTodas);

        btnTodas.addEventListener('click', () => {
          activarBoton(btnTodas);
          document
            .querySelectorAll('.seccion-genero')
            .forEach((s) => (s.style.display = ''));
        });

        // Crear botones y secciones por cada género
        Object.keys(grupos)
          .sort()
          .forEach((genero, idx) => {
            const slug = slugify(genero);

            // Botón
            const btn = document.createElement('button');
            btn.className = 'categoria-btn';
            btn.textContent = genero;
            btn.dataset.genre = slug;
            barra.appendChild(btn);

            btn.addEventListener('click', () => {
              activarBoton(btn);
              document.querySelectorAll('.seccion-genero').forEach((s) => {
                s.style.display = s.id === 'sec-' + slug ? '' : 'none';
              });
              if (
                !document.querySelectorAll(
                  '.seccion-genero:not([style*="display: none"])'
                ).length
              ) {
                document
                  .querySelectorAll('.seccion-genero')
                  .forEach((s) => (s.style.display = ''));
                activarBoton(
                  document.querySelector('.categoria-btn[data-genre="todas"]')
                );
              }
            });

            // Sección con los libros de este género
            const seccion = document.createElement('section');
            seccion.className = 'seccion-genero mb-8';
            seccion.id = 'sec-' + slug;

            const titulo = document.createElement('h2');
            titulo.className = 'seccion-titulo text-2xl font-semibold';
            titulo.innerHTML = `<i class="fas fa-book-reader text-yellow-500"></i> ${escapeHtml(
              genero
            )} <span class="ml-3 text-sm text-gray-600">(${
              grupos[genero].length
            })</span>`;
            seccion.appendChild(titulo);

            const grid = document.createElement('div');
            grid.className =
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';

            grupos[genero].forEach((libro) => {
              const tarjeta = document.createElement('article');
              tarjeta.className = 'tarjeta-libro';

              tarjeta.innerHTML = `
          <img src="${libro.imagen}" alt="Portada ${escapeHtml(
                libro.titulo
              )}" onerror="this.src='https://via.placeholder.com/300x420?text=Sin+imagen'">
          <div class="card-body">
            <h3 class="text-lg font-bold text-blue-800">${escapeHtml(
              libro.titulo
            )}</h3>
            <p class="text-gray-700 text-sm">ID: ${libro.id}</p>
            <p class="text-gray-700 text-sm">Autor: ${escapeHtml(
              libro.autor
            )}</p>
            <p class="text-gray-700 text-sm">Género: ${escapeHtml(
              libro.genero
            )}</p>
            <p class="text-gray-700 text-sm truncate">${escapeHtml(
              libro.descripcion
            )}</p>
            <p class="estado ${
              libro.disponible ? 'text-green-600' : 'text-red-600'
            }">${libro.disponible ? 'Disponible' : 'No Disponible'}</p>
            <div class="mt-3">
              <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-2" onclick="verMas(${
                libro.id
              })">
                <i class="fas fa-info-circle mr-1"></i> Ver más
              </button>
              <button 
                class="w-full py-2 rounded transition font-semibold" 
                onclick="toggleDisponibilidad(${libro.id})" 
                style="${
                  libro.disponible
                    ? 'background-color:#dc2626; color:white; border: 1px solid #991b1b;' /* Rojo para Desactivar */
                    : 'background-color:#10b981; color:white; border: 1px solid #059669;' /* Verde para Activar */
                } hover:opacity-90"
              >
                <i class="fas ${
                  libro.disponible ? 'fa-times-circle' : 'fa-check-circle'
                } mr-1"></i> 
                ${libro.disponible ? 'Desactivar' : 'Activar'}
              </button>
            </div>
          </div>
        `;
              grid.appendChild(tarjeta);
            });

            seccion.appendChild(grid);
            seccionesCont.appendChild(seccion);
          });
      }

      // Marca visual del botón activo
      function activarBoton(btn) {
        document
          .querySelectorAll('.categoria-btn')
          .forEach((b) => b.classList.remove('activa'));
        btn.classList.add('activa');
      }

      // Función para cambiar el estado de disponibilidad (Activar/Desactivar)
      function toggleDisponibilidad(id) {
        const libro = libros.find((l) => l.id === id);
        if (!libro) return;

        // Alternar el estado
        libro.disponible = !libro.disponible;

        // Mostrar mensaje de éxito
        Swal.fire({
          title: 'Estado Actualizado',
          text: `El libro "${libro.titulo}" ahora está ${
            libro.disponible ? 'DISPONIBLE' : 'NO DISPONIBLE'
          }.`,
          icon: 'success',
          confirmButtonColor: '#1E40AF',
          timer: 1500,
        });

        // Re-renderizar el catálogo para reflejar el cambio en la interfaz
        initCatalogo(document.getElementById('searchInput').value);
      }
      window.toggleDisponibilidad = toggleDisponibilidad; // Hacer global

      // Modal "Ver más" - TAMAÑO REDUCIDO Y COLOR AZUL BEBÉ
      function verMas(id) {
        const libro = libros.find((l) => l.id === id);
        if (!libro) {
          Swal.fire({
            title: 'Error',
            text: 'Libro no encontrado',
            icon: 'error',
            confirmButtonColor: '#1E40AF',
          });
          return;
        }
        
        // Contenido del modal
        const contenido = `
          <div style="text-align:left; font-size: 1rem; line-height: 1.5; color: #333;">
            <p><strong>ID:</strong> ${libro.id}</p>
            <p><strong>Autor:</strong> ${escapeHtml(libro.autor)}</p>
            <p><strong>Género:</strong> ${escapeHtml(libro.genero)}</p>
            <p style="margin-top: 10px;"><strong>Descripción:</strong> ${escapeHtml(libro.descripcion)}</p>
            <p style="margin-top: 10px;"><strong>Estado:</strong> ${
              libro.disponible
                ? '<span style="color:green; font-weight: bold;">DISPONIBLE</span>'
                : '<span style="color:red; font-weight: bold;">NO DISPONIBLE</span>'
            }</p>
          </div>
        `;
        
        // SweetAlert2 con color de fondo azul bebé y tamaño chico
        Swal.fire({
          title: `<h3 style="font-family: 'Merriweather', serif; color: #1E40AF; margin: 0;">${libro.titulo}</h3>`,
          html: contenido,
          imageUrl: libro.imagen,
          imageAlt: libro.titulo,
          confirmButtonColor: '#1E40AF',
          background: '#E0FFFF', // AZUL BEBÉ
          width: '400px', // Tamaño chico
          imageHeight: 250, 
          imageWidth: 170, 
          customClass: {
            title: 'text-xl font-bold',
            content: 'text-base',
          }
        });
      }
      window.verMas = verMas; // Hacer global


      // Función de búsqueda (prioriza ID)
      function buscarLibros(query) {
        const trimmedQuery = query.trim();
        let filteredBooks = libros;
        if (trimmedQuery) {
          const isNumeric = !isNaN(trimmedQuery);
          filteredBooks = libros.filter((libro) => {
            if (isNumeric) {
              return (
                libro.id.toString() === trimmedQuery ||
                libro.titulo
                  .toLowerCase()
                  .includes(trimmedQuery.toLowerCase()) ||
                libro.autor
                  .toLowerCase()
                  .includes(trimmedQuery.toLowerCase()) ||
                libro.genero.toLowerCase().includes(trimmedQuery.toLowerCase())
              );
            }
            return (
              libro.titulo.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
              libro.autor.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
              libro.genero.toLowerCase().includes(trimmedQuery.toLowerCase())
            );
          });
        }
        initCatalogo(trimmedQuery); 
      }

      // Inicializar búsqueda
      document.getElementById('searchInput').addEventListener('input', (e) => {
        buscarLibros(e.target.value);
      });

     
      loadBooks();