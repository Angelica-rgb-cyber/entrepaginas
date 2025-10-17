package com.example.Entrepaginas.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Prestamo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Cliente cliente;

    @ManyToOne
    private Libro libro;

    private LocalDate fechaPrestamo;
    private LocalDate fechaDevolucion;
    private boolean activo;

    public void setCliente(Cliente cliente) {
    }

    public void setLibro(Libro libro) {
    }

    public void setFechaPrestamo(LocalDate now) {
    }

    public void setActivo(boolean b) {
    }

    public void setFechaDevolucion(LocalDate now) {
    }

    public Libro getLibro() {
        return null;
    }
}