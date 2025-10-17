package com.example.Entrepaginas.repository;

import com.example.Entrepaginas.model.Prestamo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrestamoRepository extends JpaRepository<Prestamo, Long> {
    Long countByActivoTrue();
}
