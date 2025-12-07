package com.example.Entrepaginas.controller;

import com.example.Entrepaginas.model.Venta;
import com.example.Entrepaginas.model.Cliente;
import com.example.Entrepaginas.model.Libro;
import com.example.Entrepaginas.service.VentaService;
import com.example.Entrepaginas.service.ClienteService;
import com.example.Entrepaginas.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
@RequestMapping("/ventas")
public class VentaController {

    @Autowired
    private VentaService ventaService;

    @Autowired
    private ClienteService clienteService;

     @Autowired
    private LibroService libroService;    
    
    // Asumimos que tienes un servicio de usuario o una forma de obtener el usuario logueado
    // private UserService userService;

    // ====================================================================
    // 1. LISTAR VENTAS
    // ====================================================================

    @GetMapping
    public String listarVentas(Model model) {
        // En un entorno real, podrías necesitar implementar paginación aquí
        List<Venta> ventas = ventaService.listarTodasLasVentas(); 
        model.addAttribute("ventas", ventas);
        
        // Simulación de usuario logueado para el navbar (ajústalo según tu Auth)
        model.addAttribute("loggedInUser", "JuanPerez"); 
        model.addAttribute("userRole", "Administrador");

        return "ventas/ventas"; // Retorna el archivo ventas.html
    }
    
    // ====================================================================
    // 2. NUEVA VENTA (Formulario GET)
    // ====================================================================

    @GetMapping("/nueva")
    public String mostrarFormularioNuevaVenta(Model model) {
        List<Cliente> clientes = clienteService.listarClientes(); // Clientes para el <select>
        
        // Solo listar libros que tengan stock > 0
        List<Libro> libros = libroService.listarLibrosConStock(); 

        model.addAttribute("clientes", clientes);
        model.addAttribute("libros", libros);
        model.addAttribute("venta", new Venta()); // Objeto vacío para el formulario (opcional, pero buena práctica)

        return "ventas/nueva-venta"; // Retorna el archivo nueva-venta.html
    }

    // ====================================================================
    // 3. GUARDAR VENTA (Formulario POST)
    // ====================================================================

    /**
     * Procesa el formulario de la nueva venta.
     * La clase Venta recibida debe contener la lista de DetallesVenta.
     */
    @PostMapping("/guardar")
    public String guardarVenta(@ModelAttribute Venta venta, 
                               @RequestParam(value = "clienteId", required = false) Long clienteId,
                               RedirectAttributes redirectAttributes) {
        try {
            // Asignar Cliente (si se seleccionó uno)
            if (clienteId != null) {
                Cliente cliente = clienteService.buscarClientePorId(clienteId);
                venta.setCliente(cliente);
            }
            
            // Asignar el usuario que realiza la venta (simulado)
            // venta.setUsuario(userService.getUsuarioLogueado()); 

            // Llama al servicio para guardar la venta y ACTUALIZAR EL STOCK
            Venta ventaGuardada = ventaService.guardarVentaYActualizarStock(venta);
            
            redirectAttributes.addFlashAttribute("successMessage", 
                                                "Venta N° " + ventaGuardada.getId() + " registrada con éxito.");
            
            return "redirect:/ventas";
            
        } catch (Exception e) {
            // Manejo de errores (ej: stock insuficiente, datos inválidos)
            redirectAttributes.addFlashAttribute("errorMessage", 
                                                "Error al registrar la venta: " + e.getMessage());
            return "redirect:/ventas/nueva";
        }
    }
    
    // ====================================================================
    // 4. VER DETALLE DE VENTA (Voucher POS)
    // ====================================================================
    
    @GetMapping("/detalle/{id}")
    public String verDetalleVenta(@PathVariable("id") Long id, Model model, RedirectAttributes redirectAttributes) {
        try {
            Venta venta = ventaService.buscarVentaPorId(id);
            if (venta == null) {
                redirectAttributes.addFlashAttribute("errorMessage", "Venta no encontrada.");
                return "redirect:/ventas";
            }
            model.addAttribute("venta", venta);
            return "ventas/detalleventa"; // Retorna el voucher POS
        } catch (Exception e) {
             redirectAttributes.addFlashAttribute("errorMessage", "Error al cargar el detalle: " + e.getMessage());
             return "redirect:/ventas";
        }
    }
    
    // ====================================================================
    // 5. ANULAR VENTA (Eliminar/Cancelar Lógico)
    // ====================================================================

    @GetMapping("/anular/{id}")
    public String anularVenta(@PathVariable("id") Long id, RedirectAttributes redirectAttributes) {
        try {
            // Llama al servicio para marcar como anulada y REACOMODAR EL STOCK
            ventaService.anularVentaYReponerStock(id);
            
            redirectAttributes.addFlashAttribute("successMessage", "Venta N° " + id + " ha sido ANULADA y el stock repuesto.");
            return "redirect:/ventas";
            
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", "Error al anular la venta: " + e.getMessage());
            return "redirect:/ventas";
        }
    }
    
    // ====================================================================
    // 6. EDITAR VENTA (Formulario GET)
    // ====================================================================

    @GetMapping("/editar/{id}")
    public String mostrarFormularioEdicionVenta(@PathVariable("id") Long id, Model model, RedirectAttributes redirectAttributes) {
        try {
            Venta venta = ventaService.buscarVentaPorId(id);
            if (venta == null || venta.isAnulada()) {
                 redirectAttributes.addFlashAttribute("errorMessage", "La venta no existe o ya está anulada y no puede ser editada.");
                 return "redirect:/ventas";
            }

            model.addAttribute("venta", venta);
            model.addAttribute("clientes", clienteService.listarClientes());
            model.addAttribute("libros", libroService.listarLibrosConStock());
            
            return "ventas/editar-venta"; // Retorna el formulario de edición
        } catch (Exception e) {
             redirectAttributes.addFlashAttribute("errorMessage", "Error al cargar datos de edición: " + e.getMessage());
             return "redirect:/ventas";
        }
    }

    // ====================================================================
    // 7. GUARDAR EDICIÓN (Formulario POST)
    // ====================================================================

    @PostMapping("/guardarEdicion")
    public String guardarEdicionVenta(@ModelAttribute Venta venta, 
                                      @RequestParam(value = "clienteId", required = false) Long clienteId,
                                      RedirectAttributes redirectAttributes) {
        try {
            // Asignar Cliente
            if (clienteId != null) {
                Cliente cliente = clienteService.buscarClientePorId(clienteId);
                venta.setCliente(cliente);
            }
            
            // Llama al servicio. Esta es la lógica MÁS COMPLEJA, ya que debe comparar 
            // los detalles Viejos vs Nuevos y ajustar el STOCK en consecuencia.
            Venta ventaActualizada = ventaService.actualizarVenta(venta);
            
            redirectAttributes.addFlashAttribute("successMessage", 
                                                "Venta N° " + ventaActualizada.getId() + " actualizada con éxito.");
            return "redirect:/ventas";
            
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", 
                                                "Error al guardar la edición de la venta: " + e.getMessage());
            return "redirect:/ventas/editar/" + venta.getId(); // Vuelve al formulario
        }
    }
}