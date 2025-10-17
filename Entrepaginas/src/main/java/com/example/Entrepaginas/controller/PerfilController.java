package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Perfil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.Entrepaginas.service.PerfilService;

@Controller
@RequestMapping("/perfiles")
public class PerfilController {

    @Autowired
    private PerfilService perfilService;

    @GetMapping
    public String listarPerfiles(Model model) {
        model.addAttribute("perfiles", perfilService.obtenerTodos());
        return "perfiles";
    }

    @GetMapping("/nuevo")
    public String formularioNuevoPerfil(Model model) {
        model.addAttribute("perfil", new Perfil());
        return "nuevo-perfil";
    }

    @PostMapping
    public String guardarPerfil(@ModelAttribute Perfil perfil) {
        perfilService.guardar(perfil);
        return "redirect:/perfiles";
    }

    @GetMapping("/editar/{id}")
    public String formularioEditarPerfil(@PathVariable Long id, Model model) {
        Perfil perfil = perfilService.obtenerPorId(id);
        model.addAttribute("perfil", perfil);
        return "editar-perfil";
    }

    @PostMapping("/editar/{id}")
    public String actualizarPerfil(@PathVariable Long id, @ModelAttribute Perfil perfil) {
        Perfil perfilExistente = perfilService.obtenerPorId(id);
        perfilExistente.setNombre(perfil.getNombre());
        perfilExistente.setDescripcion(perfil.getDescripcion());
        perfilService.guardar(perfilExistente);
        return "redirect:/perfiles";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminarPerfil(@PathVariable Long id) {
        perfilService.eliminar(id);
        return "redirect:/perfiles";
    }
}