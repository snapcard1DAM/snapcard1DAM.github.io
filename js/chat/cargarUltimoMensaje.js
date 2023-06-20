'use strict';

loadLDocUltimoMensaje("../xml/Chat/historial-chat.xml");

function cargarUltimoMensaje(xmlDoc) {
    let nombreContacto, ultimoMensaje;

    document.querySelector(".contactos").querySelectorAll("button").forEach(botonContacto => {
        nombreContacto = botonContacto.querySelector(".nombre-contacto").textContent;        
        xmlDoc.querySelectorAll("mensaje").forEach(mensaje => {
            if (mensaje.querySelector("origen").textContent == nombreContacto || mensaje.querySelector("destino").textContent == nombreContacto) {
                ultimoMensaje = mensaje.querySelector("contenido").textContent.split(" ").slice(0, 5).join(" ") + "...";
            }
        });
        botonContacto.querySelector(".ultimo-mensaje").textContent = ultimoMensaje;
    });
}
