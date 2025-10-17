package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.Entrepaginas.service.CategoriaService;

@Controller
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public String listarCategorias(Model model) {
        model.addAttribute("categorias", categoriaService.obtenerTodos());
        return "categorias";
    }

    @GetMapping("/nuevo")
    public String formularioNuevoCategoria(Model model) {
        model.addAttribute("categoria", new Categoria());
        return "nuevo-categoria";
    }

    @PostMapping
    public String guardarCategoria(@ModelAttribute Categoria categoria) {
        categoriaService.guardar(categoria);
        return "redirect:/categorias";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminarCategoria(@PathVariable Long id) {
        categoriaService.eliminar(id);
        return "redirect:/categorias";
    }
}