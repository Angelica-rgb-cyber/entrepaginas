package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Prestamo;
import com.example.Entrepaginas.service.LibroService;
import com.example.Entrepaginas.service.ClienteService;
import com.example.Entrepaginas.service.PrestamoService;
import com.example.Entrepaginas.service.UsuarioService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

@Controller
@RequestMapping("/entrepaginas")
public class DashboardController {

    @Autowired
    private LibroService libroService;

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private PrestamoService prestamoService;

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping({"/", "/dashboard"})
    public String showDashboard(Model model, HttpSession session) {
        // Verify session
        Object usuarioNombre = session.getAttribute("usuarioNombre");
        if (usuarioNombre == null) {
            return "redirect:/entrepaginas/login";
        }

        try {
            // Get statistics
            long totalLibros = libroService.contarLibros();
            long totalClientes = clienteService.contarClientes();
            long totalPrestamos = prestamoService.contarPrestamos();
            long prestamosActivos = prestamoService.contarPrestamosActivos();
            long librosDisponibles = libroService.contarLibrosDisponibles();

            // Get last 5 loans
            List<Prestamo> ultimosPrestamos = prestamoService.obtenerUltimosPrestamos(5);

            // Add data to model
            model.addAttribute("totalLibros", totalLibros);
            model.addAttribute("totalClientes", totalClientes);
            model.addAttribute("totalPrestamos", totalPrestamos);
            model.addAttribute("prestamosActivos", prestamosActivos);
            model.addAttribute("librosDisponibles", librosDisponibles);
            model.addAttribute("ultimosPrestamos", ultimosPrestamos);

            // Session data
            model.addAttribute("usuarioNombre", usuarioNombre.toString());
            Object usuarioRol = session.getAttribute("usuarioRol");
            model.addAttribute("usuarioRol", usuarioRol != null ? usuarioRol.toString() : "USER");

            return "Dashboard";
            
        } catch (Exception e) {
            model.addAttribute("error", "Error al cargar el dashboard: " + e.getMessage());
            return "error";
        }
    }
}