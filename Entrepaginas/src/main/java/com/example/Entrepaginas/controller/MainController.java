package com.example.Entrepaginas.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping({"/", "/index", "/biblioteca", "/biblioteca.html"})
    public String biblioteca() {
        return "biblioteca";
    }

    @GetMapping("/catalogos")
    public String catalogo() {
        return "catalogo";
    }
 
    @GetMapping({"/maraton", "/maraton.html"})
    public String maraton() { return "maraton"; }

    @GetMapping({"/eventos", "/eventos.html"})
    public String eventos() { return "eventos"; }

    @GetMapping({"/escribe", "/escribe.html"})
    public String escribe() { return "escribe"; }

    @GetMapping({"/contacto", "/contacto.html"})
    public String contacto() { return "contacto"; }


    @GetMapping({"/dashboard", "/Dashboard", "/Dashboard.html", "/dashboard.html"})
    public String dashboard(HttpSession session, Model model) {
        Object nombre = session.getAttribute("usuarioNombre");
        if (nombre != null) model.addAttribute("usuarioNombre", nombre.toString());
        return "Dashboard"; // Respeta mayúscula si tu template se llama Dashboard.html
    }
}
