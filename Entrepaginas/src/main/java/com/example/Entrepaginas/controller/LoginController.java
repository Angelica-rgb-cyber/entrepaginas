package com.example.Entrepaginas.controller;


import com.example.Entrepaginas.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.example.Entrepaginas.repository.UsuarioRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.security.crypto.password.PasswordEncoder;

@Controller
@RequestMapping("/entrepaginas")
public class LoginController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/login")
    public String showLoginForm(Model model, @RequestParam(value = "error", required = false) String error,
                                @RequestParam(value = "logout", required = false) String logout) {
        if (error != null) {
            model.addAttribute("error", "Usuario o contraseña incorrectos.");
        }
        if (logout != null) {
            model.addAttribute("message", "Has cerrado sesión correctamente.");
        }
        return "login"; // Returns login.html
    }

    @PostMapping("/acceder")
    public String processLogin(@RequestParam String correo,
                           @RequestParam String contrasena,
                           Model model,
                           HttpSession session) {
        Usuario usuario = usuarioRepository.findByCorreo(correo);
        if (usuario != null && passwordEncoder.matches(contrasena, usuario.getContrasena())) {
            // Guardar datos en sesión
            session.setAttribute("usuarioNombre", usuario.getCorreo());
            session.setAttribute("usuarioRol", usuario.getRol());
            return "redirect:/entrepaginas/dashboard";  // Make sure this matches your route
        } else {
            model.addAttribute("error", "Usuario o contraseña incorrectos.");
            return "login";
        }
    }


    @GetMapping("/logout")
    public String logout() {
        SecurityContextHolder.clearContext();
        return "redirect:/entrepaginas/login?logout";
    }

    // @GetMapping("/dashboard")
    // public String showDashboard(Model model, HttpSession session) {
    //     Object usuarioNombre = session.getAttribute("usuarioNombre");
    //     Object usuarioRol = session.getAttribute("usuarioRol");
    //     if (usuarioNombre != null) {
    //         model.addAttribute("loggedInUser", usuarioNombre.toString());
    //     }
    //     if (usuarioRol != null) {
    //         model.addAttribute("userRole", usuarioRol.toString());
    //     }
    //     return "dashboard";
    // }

    @GetMapping("/catalogo")
    public String showCatalog(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        model.addAttribute("loggedInUser", auth.getName());
        model.addAttribute("userRole", auth.getAuthorities().stream()
                .findFirst().orElse(null).getAuthority().replace("ROLE_", ""));
        return "catalogo";
    }
}