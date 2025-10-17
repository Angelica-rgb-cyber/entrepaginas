package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Cliente;
import com.example.Entrepaginas.model.Libro;
import com.example.Entrepaginas.model.Prestamo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.Entrepaginas.service.ClienteService;
import com.example.Entrepaginas.service.LibroService;
import com.example.Entrepaginas.service.PrestamoService;
import jakarta.servlet.http.HttpSession;
import java.time.LocalDate;

@Controller
@RequestMapping("/prestamos")  // Changed base path
public class PrestamoController {

    @Autowired
    private PrestamoService prestamoService;

    @Autowired
    private ClienteService clienteService;  // Added missing autowiring

    @Autowired
    private LibroService libroService;      // Added missing autowiring

    @GetMapping
    public String listarPrestamos(Model model, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        model.addAttribute("prestamos", prestamoService.obtenerTodos());
        model.addAttribute("usuarioNombre", nombre.toString());
        model.addAttribute("usuarioRol", session.getAttribute("usuarioRol"));
        
        return "prestamos";
    }

    @GetMapping("/nuevo")
    public String formularioNuevoPrestamo(Model model, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        model.addAttribute("prestamo", new Prestamo());
        model.addAttribute("clientes", clienteService.obtenerTodos());
        model.addAttribute("libros", libroService.obtenerTodos());
        model.addAttribute("usuarioNombre", nombre.toString());
        model.addAttribute("usuarioRol", session.getAttribute("usuarioRol"));
        
        return "nuevo-prestamo";
    }

    @PostMapping
    public String guardarPrestamo(@ModelAttribute Prestamo prestamo, 
                                @RequestParam Long clienteId, 
                                @RequestParam Long libroId,
                                HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        Cliente cliente = clienteService.obtenerPorId(clienteId);
        Libro libro = libroService.obtenerPorId(libroId);
        
        if (cliente != null && libro != null && libro.isDisponible()) {
            prestamo.setCliente(cliente);
            prestamo.setLibro(libro);
            prestamo.setFechaPrestamo(LocalDate.now());
            prestamo.setActivo(true);
            libro.setDisponible(false);
            
            libroService.guardar(libro);
            prestamoService.guardar(prestamo);
        }
        
        return "redirect:/entrepaginas/prestamos";
    }

    @GetMapping("/devolver/{id}")
    public String devolverPrestamo(@PathVariable Long id, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        Prestamo prestamo = prestamoService.obtenerPorId(id);
        if (prestamo != null && prestamo.isActivo()) {
            prestamo.setActivo(false);
            prestamo.setFechaDevolucion(LocalDate.now());
            Libro libro = prestamo.getLibro();
            if (libro != null) {
                libro.setDisponible(true);
                libroService.guardar(libro);
            }
            prestamoService.guardar(prestamo);
        }
        
        return "redirect:/entrepaginas/prestamos";
    }
}