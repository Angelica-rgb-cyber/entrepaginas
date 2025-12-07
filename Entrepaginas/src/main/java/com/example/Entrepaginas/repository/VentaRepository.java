package com.example.Entrepaginas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Entrepaginas.model.Venta;

// La anotación @Repository es opcional en las interfaces que extienden de JpaRepository,
// pero es buena práctica incluirla.
@Repository
public interface VentaRepository extends JpaRepository<Venta, Long> {
    
    // Spring Data JPA ya proporciona:
    // - findAll() para listar todas las ventas.
    // - findById(Long id) para buscar una venta por ID.
    // - save(Venta venta) para guardar o actualizar una venta.
    // - delete(Venta venta) para eliminar una venta (físicamente).

    // Puedes agregar consultas personalizadas aquí si las necesitas. Por ejemplo:
    
    // List<Venta> findByFechaVentaBetween(LocalDateTime fechaInicio, LocalDateTime fechaFin);
    // List<Venta> findByAnuladaFalseOrderByFechaVentaDesc();

}