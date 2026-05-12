package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Libro;
import com.example.Entrepaginas.service.LibroService;
import com.example.Entrepaginas.service.CategoriaService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping("/libros")
public class LibroController {

    @Autowired private LibroService libroService;
    @Autowired private CategoriaService categoriaService;

    @Value("${file.upload-dir-libros}")
    private String uploadDirLibrosPhysical;

    private final String uploadDirLibrosWebPath = "/uploads/libros/";

    // ===================== LISTAR =====================
    @GetMapping
    public String listarLibros(Model model, HttpSession session) {
        if (session.getAttribute("usuarioNombre") == null) {
            return "redirect:/entrepaginas/login";
        }

        model.addAttribute("libros", libroService.obtenerTodos());
        model.addAttribute("usuarioNombre", session.getAttribute("usuarioNombre"));
        model.addAttribute("usuarioRol", session.getAttribute("usuarioRol"));
        return "libros";
    }

    // ===================== CREAR =====================
    @GetMapping("/nuevo")
    public String formularioNuevoLibro(Model model, HttpSession session) {
        if (session.getAttribute("usuarioNombre") == null) {
            return "redirect:/entrepaginas/login";
        }

        model.addAttribute("libro", new Libro());
        model.addAttribute("categorias", categoriaService.obtenerTodos());
        model.addAttribute("usuarioNombre", session.getAttribute("usuarioNombre"));
        model.addAttribute("usuarioRol", session.getAttribute("usuarioRol"));
        return "nuevo-libro";
    }

    @PostMapping
    public String guardarLibro(@ModelAttribute Libro libro,
                               @RequestParam("imagenFile") MultipartFile imagenFile,
                               HttpSession session,
                               RedirectAttributes redirectAttributes) {

        if (session.getAttribute("usuarioNombre") == null) {
            return "redirect:/libros";
        }

        try {
            if (!imagenFile.isEmpty()) {
                String imagenPath = guardarImagen(imagenFile);
                libro.setImagen(imagenPath);
            }

            libroService.guardar(libro);
            redirectAttributes.addFlashAttribute("mensaje", "✅ Libro creado correctamente");
            redirectAttributes.addFlashAttribute("tipo", "success");

            return "redirect:/libros";

        } catch (Exception e) {
            e.printStackTrace();
            redirectAttributes.addFlashAttribute("mensaje", "❌ Error al crear el libro");
            redirectAttributes.addFlashAttribute("tipo", "error");
            return "redirect:/libros";
        }
    }

    // ===================== EDITAR =====================
    @GetMapping("/editar/{id}")
    public String formularioEditarLibro(@PathVariable Long id, Model model, HttpSession session) {
        if (session.getAttribute("usuarioNombre") == null) {
            return "redirect:/libros";
        }

        Libro libro = libroService.obtenerPorId(id);
        if (libro == null) return "redirect:/libros";

        model.addAttribute("libro", libro);
        model.addAttribute("categorias", categoriaService.obtenerTodos());
        model.addAttribute("usuarioNombre", session.getAttribute("usuarioNombre"));
        model.addAttribute("usuarioRol", session.getAttribute("usuarioRol"));
        return "editar-libro";
    }

    @PostMapping("/editar/{id}")
    public String actualizarLibro(@PathVariable Long id,
                                  @ModelAttribute Libro libro,
                                  @RequestParam("imagenFile") MultipartFile imagenFile,
                                  HttpSession session,
                                  RedirectAttributes redirectAttributes) {

        if (session.getAttribute("usuarioNombre") == null) {
            return "redirect:/libros";
        }

        try {
            Libro existente = libroService.obtenerPorId(id);
            if (existente == null) {
                redirectAttributes.addFlashAttribute("mensaje", "❌ Libro no encontrado");
                return "redirect:/libros";
            }

            // Actualizar datos
            existente.setTitulo(libro.getTitulo());
            existente.setAutor(libro.getAutor());
            existente.setGenero(libro.getGenero());
            existente.setIsbn(libro.getIsbn());
            existente.setDescripcion(libro.getDescripcion());
            existente.setStock(libro.getStock());
            existente.setPrecio(libro.getPrecio());
            existente.setDisponible(libro.isDisponible());

            // Actualizar imagen solo si se subió una nueva
            if (!imagenFile.isEmpty()) {
                String nuevaImagen = actualizarImagen(existente.getImagen(), imagenFile);
                if (nuevaImagen != null) {
                    existente.setImagen(nuevaImagen);
                }
            }

            libroService.guardar(existente);
            redirectAttributes.addFlashAttribute("mensaje", "✅ Libro actualizado correctamente");
            redirectAttributes.addFlashAttribute("tipo", "success");

            return "redirect:/libros";

        } catch (Exception e) {
            e.printStackTrace();
            redirectAttributes.addFlashAttribute("mensaje", "❌ Error al actualizar el libro");
            redirectAttributes.addFlashAttribute("tipo", "error");
            return "redirect:/libros/editar/" + id;
        }
    }

    // ===================== MÉTODOS DE IMAGEN =====================
    private String guardarImagen(MultipartFile file) {
        if (file.isEmpty()) return null;

        try {
            String extension = getFileExtension(file.getOriginalFilename());
            String uniqueName = UUID.randomUUID() + extension;

            Path uploadPath = Paths.get(uploadDirLibrosPhysical);
            Files.createDirectories(uploadPath);

            Path filePath = uploadPath.resolve(uniqueName);
            Files.write(filePath, file.getBytes());

            return uploadDirLibrosWebPath + uniqueName;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    private String actualizarImagen(String imagenActual, MultipartFile newFile) {
        // Solo eliminar si es una imagen local (no URL externa)
        if (imagenActual != null && !imagenActual.isEmpty() && esImagenLocal(imagenActual)) {
            try {
                String oldFileName = Paths.get(imagenActual).getFileName().toString();
                Path oldPath = Paths.get(uploadDirLibrosPhysical, oldFileName);
                Files.deleteIfExists(oldPath);
                System.out.println("Imagen anterior eliminada: " + oldFileName);
            } catch (IOException e) {
                System.err.println("No se pudo eliminar la imagen anterior: " + e.getMessage());
            }
        }
        return guardarImagen(newFile);
    }

    private boolean esImagenLocal(String imagenPath) {
        return imagenPath.startsWith(uploadDirLibrosWebPath);
    }

    private String getFileExtension(String filename) {
        if (filename == null || !filename.contains(".")) return ".jpg";
        return filename.substring(filename.lastIndexOf("."));
    }

    // ===================== ELIMINAR =====================
    @GetMapping("/eliminar/{id}")
    public String eliminarLibro(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("usuarioNombre") == null) {
            return "redirect:/libros";
        }

        try {
            Libro libro = libroService.obtenerPorId(id);
            if (libro != null) {
                eliminarImagenFisica(libro.getImagen());
                libroService.eliminar(id);
                redirectAttributes.addFlashAttribute("mensaje", "✅ Libro eliminado correctamente");
                redirectAttributes.addFlashAttribute("tipo", "success");
            }
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("mensaje", "❌ Error al eliminar el libro");
            redirectAttributes.addFlashAttribute("tipo", "error");
        }
        return "redirect:/libros";
    }

    private void eliminarImagenFisica(String imagenPath) {
        if (imagenPath != null && !imagenPath.isEmpty() && esImagenLocal(imagenPath)) {
            try {
                String fileName = Paths.get(imagenPath).getFileName().toString();
                Files.deleteIfExists(Paths.get(uploadDirLibrosPhysical, fileName));
            } catch (IOException e) {
                System.err.println("Error eliminando imagen: " + e.getMessage());
            }
        }
    }
}