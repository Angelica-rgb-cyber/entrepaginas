package com.example.Entrepaginas.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BibliotecaController {

    @GetMapping({"/", "/biblioteca", "/index"})
    public String mostrarBiblioteca() {
        return "biblioteca";
    }
}