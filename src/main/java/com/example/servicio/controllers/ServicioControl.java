package com.example.servicio.controllers;

import com.example.servicio.dao.ServicioDao;
import com.example.servicio.model.Servicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ServicioControl {
    @Autowired
    private ServicioDao servicioDao;

@GetMapping("api/serviciosPorTipo/{tipoServicio}")
    public List<Servicio> getServiciosPorTipo(@PathVariable String tipoServicio) {
        return servicioDao.getServiciosPorTipo(tipoServicio);
    }




}
