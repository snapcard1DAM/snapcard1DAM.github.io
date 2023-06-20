'use strict';

document.querySelector(".btn-mostrar-contactos").addEventListener("click", function (event) {
    // Cambiar menú: Chat o Contactos desde el móvil. No afecta en PC porque el "z-index" no tiene efecto.
    document.getElementById("contenedor-chat").style.zIndex = "0";
    document.getElementById("contenedor-contactos").style.zIndex = "1";
});

document.querySelector(".contactos").querySelectorAll("button").forEach(botonContacto => {
    botonContacto.addEventListener("click", function (event) {
        // Cambiar menú: Chat o Contactos desde el móvil. No afecta en PC porque el "z-index" no tiene efecto.
        document.getElementById("contenedor-chat").style.zIndex = "1";
        document.getElementById("contenedor-contactos").style.zIndex = "0";
        // Cargar contacto
        document.querySelector("#destinatario").textContent = botonContacto.querySelector(".nombre-contacto").textContent;
        document.querySelector("#imagen-destinatario").src = botonContacto.querySelector(".perfil-contacto").src;
        document.querySelector("#imagen-destinatario").alt = botonContacto.querySelector(".perfil-contacto").alt;
        if (botonContacto.querySelector(".perfil-contacto").classList.contains("conectado")) {
            document.querySelector("#estado-conexion-destinatario").textContent = "Conectad@";
            document.querySelector("#estado-conexion-destinatario").className = "texto-estado-conexion-conectado";
        } else {
            document.querySelector("#estado-conexion-destinatario").textContent = "Desconectad@";
            document.querySelector("#estado-conexion-destinatario").className = "texto-estado-conexion-desconectado";
        }
        // Cambiar clases de los botones para indicar el contacto seleccionado
        document.querySelector(".contactos").querySelectorAll("button").forEach(boton => {
            boton.className = "btn-seleccionar-contacto";
            boton.className += (document.querySelector("#tema-activado").classList.contains("sol")) ? " btn-seleccionar-contacto-claro" : " btn-seleccionar-contacto-oscuro";
        });
        botonContacto.className = (document.querySelector("#tema-activado").classList.contains("sol")) ? "contacto-seleccionado-claro" : "contacto-seleccionado-oscuro";
        // Carga chat contacto
        loadLDocMensajes("../xml/Chat/historial-chat.xml");
    });
});