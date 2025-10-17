package com.example.Entrepaginas.service;

import com.example.Entrepaginas.model.Prestamo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Entrepaginas.repository.PrestamoRepository;

import java.util.List;

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
}
