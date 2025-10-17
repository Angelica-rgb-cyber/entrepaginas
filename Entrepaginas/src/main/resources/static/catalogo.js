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