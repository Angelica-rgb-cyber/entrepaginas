package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.config.FileUploadConfig;
import com.example.Entrepaginas.model.Libro;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.example.Entrepaginas.service.LibroService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
@RequestMapping("/libros")
public class LibroController {

    @Autowired
    private LibroService libroService;

    @Autowired
    private FileUploadConfig fileUploadConfig;

    @GetMapping
    public String listarLibros(Model model, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        model.addAttribute("libros", libroService.obtenerTodos());
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
                byte[] bytes = imagenFile.getBytes(); // Definir bytes aquí
                String uploadDir = fileUploadConfig.getUploadDirLibros();
                Path ruta = Paths.get(uploadDir + imagenFile.getOriginalFilename());
                Files.write(ruta, bytes);
                libro.setImagen("/static/uploads/libros/" + imagenFile.getOriginalFilename()); // Actualizar la ruta relativa para la base de datos
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        libroService.guardar(libro);
        return "redirect:/entrepaginas/libros";
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
            return "redirect:/entrepaginas/libros";
        }

        libroExistente.setTitulo(libro.getTitulo());
        libroExistente.setAutor(libro.getAutor());
        libroExistente.setGenero(libro.getGenero());
        libroExistente.setDisponible(libro.isDisponible());

        if (!imagenFile.isEmpty()) {
            try {
                byte[] bytes = imagenFile.getBytes(); // Definir bytes aquí
                String uploadDir = fileUploadConfig.getUploadDirLibros();
                Path ruta = Paths.get(uploadDir + imagenFile.getOriginalFilename());
                Files.write(ruta, bytes);
                libroExistente.setImagen("/static/uploads/libros/" + imagenFile.getOriginalFilename()); // Actualizar la ruta relativa para la base de datos
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        libroService.guardar(libroExistente);
        return "redirect:/entrepaginas/libros";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminarLibro(@PathVariable Long id, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        libroService.eliminar(id);
        return "redirect:/entrepaginas/libros";
    }
}
