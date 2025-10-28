package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Libro;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.example.Entrepaginas.service.LibroService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List; // Asegúrate de importar List
import java.util.UUID;

@Controller
@RequestMapping("/libros")
public class LibroController {

    @Autowired
    private LibroService libroService;

    @Value("${file.upload-dir-libros}") // Inyectar la ruta física del directorio de libros
    private String uploadDirLibrosPhysical;

    // Definir la ruta web para los libros, consistente con WebConfig
    private final String uploadDirLibrosWebPath = "/uploads/libros/";

    @GetMapping
    public String listarLibros(Model model, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        List<Libro> libros = libroService.obtenerTodos(); // Obtener la lista
        System.out.println("Número de libros obtenidos del servicio: " + libros.size()); // AÑADIDO PARA DIAGNÓSTICO

        model.addAttribute("libros", libros); // Pasar la lista al modelo
        model.addAttribute("usuarioNombre", nombre.toString());
        model.addAttribute("usuarioRol", session.getAttribute("usuarioRol"));

        return "libros";
    }

    @GetMapping("/nuevo")
    public String formularioNuevoLibro(Model model, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        model.addAttribute("libro", new Libro());
        model.addAttribute("usuarioNombre", nombre.toString());
        model.addAttribute("usuarioRol", session.getAttribute("usuarioRol"));
        return "nuevo-libro";
    }

    @PostMapping
    public String guardarLibro(@ModelAttribute Libro libro,
            @RequestParam("imagenFile") MultipartFile imagenFile,
            HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        if (!imagenFile.isEmpty()) {
            try {
                String originalFilename = imagenFile.getOriginalFilename();
                String fileExtension = "";
                if (originalFilename != null && originalFilename.contains(".")) {
                    fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
                }
                String uniqueFileName = UUID.randomUUID().toString() + fileExtension;

                Path rutaFisica = Paths.get(uploadDirLibrosPhysical, uniqueFileName);
                Files.write(rutaFisica, imagenFile.getBytes());

                // Guardar la ruta web relativa en la base de datos
                libro.setImagen(uploadDirLibrosWebPath + uniqueFileName);
            } catch (IOException e) {
                e.printStackTrace();
                // Considera añadir un mensaje de error al modelo o a RedirectAttributes
            }
        } else {
            // Si no se sube imagen, establecer una por defecto o null
            libro.setImagen(null); // O una ruta a una imagen por defecto como '/images/book-default.png'
        }
        libroService.guardar(libro);
        return "redirect:/libros"; // Redirige a la lista de libros
    }

    @GetMapping("/editar/{id}")
    public String formularioEditarLibro(@PathVariable Long id, Model model, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        Libro libro = libroService.obtenerPorId(id);
        model.addAttribute("libro", libro);
        model.addAttribute("usuarioNombre", nombre.toString());
        model.addAttribute("usuarioRol", session.getAttribute("usuarioRol"));
        return "editar-libro";
    }

    @PostMapping("/editar/{id}")
    public String actualizarLibro(@PathVariable Long id,
            @ModelAttribute Libro libro,
            @RequestParam("imagenFile") MultipartFile imagenFile,
            HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        Libro libroExistente = libroService.obtenerPorId(id);
        if (libroExistente == null) {
            return "redirect:/libros";
        }

        libroExistente.setTitulo(libro.getTitulo());
        libroExistente.setAutor(libro.getAutor());
        libroExistente.setGenero(libro.getGenero());
        libroExistente.setDisponible(libro.isDisponible());
        libroExistente.setIsbn(libro.getIsbn()); // Actualizar ISBN
        libroExistente.setDescripcion(libro.getDescripcion()); // Actualizar Descripción

        if (!imagenFile.isEmpty()) {
            try {
                // Eliminar la imagen antigua si existe
                if (libroExistente.getImagen() != null && !libroExistente.getImagen().isEmpty()) {
                    // Extraer solo el nombre del archivo de la ruta web
                    String fileName = Paths.get(libroExistente.getImagen()).getFileName().toString();
                    Path oldImagePath = Paths.get(uploadDirLibrosPhysical, fileName);
                    Files.deleteIfExists(oldImagePath);
                }

                // Guardar la nueva imagen
                String originalFilename = imagenFile.getOriginalFilename();
                String fileExtension = "";
                if (originalFilename != null && originalFilename.contains(".")) {
                    fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
                }
                String uniqueFileName = UUID.randomUUID().toString() + fileExtension;

                Path rutaFisica = Paths.get(uploadDirLibrosPhysical, uniqueFileName);
                Files.write(rutaFisica, imagenFile.getBytes());
                libroExistente.setImagen(uploadDirLibrosWebPath + uniqueFileName);
            } catch (IOException e) {
                e.printStackTrace();
                // Considera añadir un mensaje de error al modelo o a RedirectAttributes
            }
        }
        // Si imagenFile está vacío, se mantiene la imagen existente (o null si no había)

        libroService.guardar(libroExistente);
        return "redirect:/libros";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminarLibro(@PathVariable Long id, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        Libro libro = libroService.obtenerPorId(id);
        if (libro != null) {
            // Eliminar la imagen física asociada
            if (libro.getImagen() != null && !libro.getImagen().isEmpty()) {
                try {
                    // Extraer solo el nombre del archivo de la ruta web
                    String fileName = Paths.get(libro.getImagen()).getFileName().toString();
                    Path imagePath = Paths.get(uploadDirLibrosPhysical, fileName);
                    Files.deleteIfExists(imagePath);
                } catch (IOException e) {
                    System.err.println("Error al eliminar la imagen del libro: " + libro.getImagen() + " - " + e.getMessage());
                    // No lanzar excepción, solo loguear, para que la eliminación del libro continúe
                }
            }
            libroService.eliminar(id);
        }
        return "redirect:/libros";
    }
}
