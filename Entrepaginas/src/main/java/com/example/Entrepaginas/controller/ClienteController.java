package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.Entrepaginas.service.ClienteService;
import jakarta.servlet.http.HttpSession;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/entrepaginas")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping("/clientes")
    public String listarClientes(Model model, HttpSession session) {
        // Check session
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        // Add data to model
        model.addAttribute("clientes", clienteService.obtenerTodos());
        model.addAttribute("usuarioNombre", nombre.toString());
        model.addAttribute("usuarioRol", session.getAttribute("usuarioRol"));
        
        return "clientes";
    }

    @GetMapping("/clientes/nuevo")
    public String formularioNuevoCliente(Model model, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        model.addAttribute("cliente", new Cliente());
        model.addAttribute("usuarioNombre", nombre.toString());
        model.addAttribute("usuarioRol", session.getAttribute("usuarioRol"));
        return "nuevo-cliente";
    }

    @PostMapping("/clientes")
    public String guardarCliente(@ModelAttribute Cliente cliente) {
        clienteService.guardar(cliente);
        return "redirect:/entrepaginas/clientes";
    }

    @GetMapping("/clientes/eliminar/{id}")
    public String eliminarCliente(@PathVariable Long id, HttpSession session) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre == null) {
            return "redirect:/entrepaginas/login";
        }

        clienteService.eliminar(id);
        return "redirect:/entrepaginas/clientes";
    }

    @GetMapping("/clientes/consultar-dni/{dni}")
    public ResponseEntity<Map<String, Object>> consultarDni(@PathVariable String dni) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("data", Map.of("nombre", "Juan Pérez"));
        return ResponseEntity.ok(response);
    }
}
