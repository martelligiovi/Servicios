package com.example.servicio.dao;

import com.example.servicio.model.Servicio;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class ServicioDao {
    @PersistenceContext
    EntityManager entityManager;
    public List<Servicio> getServiciosPorTipo(String tipoServicio) {
        String query = "SELECT s FROM Servicio s WHERE s.tipoServicio = :tipoServicio";



        return null;
    }
}
