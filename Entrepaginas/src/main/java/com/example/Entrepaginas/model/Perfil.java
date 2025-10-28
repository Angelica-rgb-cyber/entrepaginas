package com.example.Entrepaginas.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import com.example.Entrepaginas.model.Permiso;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Perfil {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String descripcion;
    private String imagen;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "perfil_permiso",
        joinColumns = @JoinColumn(name = "perfil_id"),
        inverseJoinColumns = @JoinColumn(name = "permiso_id")
    )
    private java.util.Set<Permiso> permisos;
}
