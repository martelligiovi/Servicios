package com.example.servicio.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NonNull;

@Entity
@Table(name = "Servicio")
@Data
public class Servicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nombrePersona")
    private String nombrePersona;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "numeroCelular")
    private String numeroCelular;

    @Column(name = "instagram")
    private String instagram;

    @Column(name = "tipoServicio")
    private String tipoServicio;
}
