package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.Entrepaginas.service.UsuarioService;

@Controller
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public String listarUsuarios(Model model) {
        model.addAttribute("usuarios", usuarioService.obtenerTodos());
        return "usuarios";
    }

    @GetMapping("/nuevo")
    public String formularioNuevoUsuario(Model model) {
        model.addAttribute("usuario", new Usuario());
        return "nuevo-usuario";
    }

    @PostMapping
    public String guardarUsuario(@ModelAttribute Usuario usuario) {
        usuarioService.guardar(usuario);
        return "redirect:/usuarios";
    }

    @GetMapping("/editar/{id}")
    public String formularioEditarUsuario(@PathVariable Long id, Model model) {
        Usuario usuario = usuarioService.obtenerPorId(id);
        model.addAttribute("usuario", usuario);
        return "editar-usuario";
    }

    @PostMapping("/editar/{id}")
    public String actualizarUsuario(@PathVariable Long id, @ModelAttribute Usuario usuario) {
        Usuario usuarioExistente = usuarioService.obtenerPorId(id);
        usuarioExistente.setCorreo(usuario.getCorreo());
        if (usuario.getContrasena() != null && !usuario.getContrasena().isEmpty()) {
            usuarioExistente.setContrasena(usuario.getContrasena());
        }
        usuarioExistente.setRol(usuario.getRol());
        usuarioService.guardar(usuarioExistente);
        return "redirect:/usuarios";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminarUsuario(@PathVariable Long id) {
        usuarioService.eliminar(id);
        return "redirect:/usuarios";
    }
}