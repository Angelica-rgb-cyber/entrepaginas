package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Libro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Entrepaginas.service.CatalagoService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/catalogo")
public class CatalagoController {

    @Autowired
    private CatalagoService catalogoService;

    // GET /api/catalogo - Lista todos los libros
    @GetMapping
    public ResponseEntity<List<Libro>> getAllLibros() {
        List<Libro> libros = catalogoService.getAllLibros();
        return ResponseEntity.ok(libros);
    }

    // GET /api/catalogo?genero=Drama&query=soledad - Filtro por género y búsqueda
    @GetMapping(params = {"genero", "query"})
    public ResponseEntity<List<Libro>> getLibrosFiltrados(@RequestParam String genero, @RequestParam String query) {
        List<Libro> libros = catalogoService.buscarLibros(query);  // Primero busca, luego filtra
        libros = libros.stream()
                .filter(libro -> genero.equalsIgnoreCase(libro.getGenero()))
                .toList();
        return ResponseEntity.ok(libros);
    }

    // GET /api/catalogo?genero=Drama - Solo por género
    @GetMapping(params = "genero")
    public ResponseEntity<List<Libro>> getLibrosByGenero(@RequestParam String genero) {
        List<Libro> libros = catalogoService.getLibrosByGenero(genero);
        return ResponseEntity.ok(libros);
    }

    // GET /api/catalogo/buscar?query=soledad - Solo búsqueda
    @GetMapping("/buscar")
    public ResponseEntity<List<Libro>> buscarLibros(@RequestParam String query) {
        List<Libro> libros = catalogoService.buscarLibros(query);
        return ResponseEntity.ok(libros);
    }

    // GET /api/catalogo/{id} - Obtener un libro por ID
    @GetMapping("/{id}")
    public ResponseEntity<Libro> getLibroById(@PathVariable Long id) {
        Optional<Libro> libro = catalogoService.getLibroById(id);
        return libro.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST /api/catalogo - Agregar un nuevo libro
    @PostMapping
    public ResponseEntity<Libro> createLibro(@RequestBody Libro libro) {
        Libro savedLibro = catalogoService.saveLibro(libro);
        return ResponseEntity.ok(savedLibro);
    }

    // PUT /api/catalogo/prestar/{id} - Prestar un libro (actualiza disponibilidad)
    @PutMapping("/prestar/{id}")
    public ResponseEntity<Map<String, Object>> prestarLibro(@PathVariable Long id) {
        Libro prestado = catalogoService.prestarLibro(id);
        if (prestado != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Libro prestado exitosamente.");
            response.put("libro", prestado);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(Map.of("success", false, "message", "Libro no disponible o no encontrado."));
        }
    }

    // PUT /api/catalogo/devolver/{id} - Devolver un libro
    @PutMapping("/devolver/{id}")
    public ResponseEntity<Map<String, Object>> devolverLibro(@PathVariable Long id) {
        Libro devuelto = catalogoService.devolverLibro(id);
        if (devuelto != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Libro devuelto exitosamente.");
            response.put("libro", devuelto);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(Map.of("success", false, "message", "Libro no encontrado."));
        }
    }
}