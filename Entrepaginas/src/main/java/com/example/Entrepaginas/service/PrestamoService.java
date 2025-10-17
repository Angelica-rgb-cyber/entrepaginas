package com.example.Entrepaginas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entrepaginas.model.Prestamo;
import com.example.Entrepaginas.repository.PrestamoRepository;

@Service
public class PrestamoService {

    @Autowired
    private PrestamoRepository prestamoRepository;

    public List<Prestamo> obtenerTodos() {
        return prestamoRepository.findAll();
    }

    public Prestamo obtenerPorId(Long id) {
        return prestamoRepository.findById(id).orElse(null);
    }

    public Prestamo guardar(Prestamo prestamo) {
        return prestamoRepository.save(prestamo);
    }

    public void eliminar(Long id) {
        prestamoRepository.deleteById(id);
    }

    public long contarPrestamosActivos() {
        return prestamoRepository.countByActivoTrue();
    }

    public long contarPrestamos() {
        return prestamoRepository.count();
    }

    public List<Prestamo> obtenerUltimosPrestamos(int cantidad) {
        return prestamoRepository.findAll()
                .stream()
                .sorted((p1, p2) -> p2.getFechaPrestamo().compareTo(p1.getFechaPrestamo()))
                .limit(cantidad)
                .toList();
    }
}
