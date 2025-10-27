package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Perfil;
import com.example.Entrepaginas.repository.PerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.Base64;

@Controller
@RequestMapping("/perfiles")
public class PerfilController {

    @Autowired
    private PerfilRepository perfilRepository;

    @GetMapping
    public String listarPerfiles(Model model) {
        model.addAttribute("perfiles", perfilRepository.findAll());
        return "listarPerfiles";
    }

    @GetMapping("/nuevo")
    public String nuevoPerfil(Model model) {
        model.addAttribute("perfil", new Perfil());
        return "editarPerfil";
    }

    @GetMapping("/editar/{id}")
    public String editarPerfil(@PathVariable Long id, Model model) {
        Perfil perfil = perfilRepository.findById(id).orElse(new Perfil());
        model.addAttribute("perfil", perfil);
        return "editarPerfil";
    }

    @PostMapping("/guardar")
    public String guardarPerfil(@RequestParam(value = "id", required = false) Long id,
                                @RequestParam("nombre") String nombre,
                                @RequestParam("descripcion") String descripcion,
                                @RequestParam(value = "fotoFile", required = false) MultipartFile fotoFile) {
        Perfil perfil = (id != null && id > 0)
                ? perfilRepository.findById(id).orElse(new Perfil())
                : new Perfil();

        perfil.setNombre(nombre);
        perfil.setDescripcion(descripcion);

        if (fotoFile != null && !fotoFile.isEmpty()) {
            try {
                String base64 = Base64.getEncoder().encodeToString(fotoFile.getBytes());
                perfil.setFoto("data:image/png;base64," + base64);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        perfilRepository.save(perfil);
        return "redirect:/perfiles";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminarPerfil(@PathVariable Long id) {
        perfilRepository.deleteById(id);
        return "redirect:/perfiles";
    }
}
