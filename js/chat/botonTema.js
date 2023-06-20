'use strict'; 

// Cambiar boton del tema y establecer el tema
document.querySelector(".btn-tema").addEventListener("click", function (event) {
    if (this.querySelector("div").classList.contains('luna')) {
        // Cambiar y animar botón
        this.querySelector("div").className = "sol";
        this.style.backgroundImage = "url(../img/BtnTemaClaro.png)";

        document.querySelector(".contenedor-principal").style.backgroundColor = "#F2F2F2";
        document.querySelector(".contenedor-chat").style.backgroundColor = "#F2F2F2";
        document.querySelector(".contenedor-contactos").style.backgroundColor = "white";
        document.querySelector(".btn-crear-contacto").style.backgroundColor = "white";
        document.querySelector(".titulo-chat").style.color = "black";
        document.querySelector(".btn-crear-contacto").style.color = "black";
        document.querySelectorAll(".nombre-contacto").forEach(mensaje => { mensaje.style.color = "black" });
        document.querySelectorAll(".ultimo-mensaje").forEach(mensaje => { mensaje.style.color = "#6B6B6B" });
        document.querySelector(".cabecera-contacto-chat").style.backgroundColor = "white";
        document.querySelector(".popup-inputs").style.backgroundColor = "white";
        document.querySelector(".campo-texto-chat").style.backgroundColor = "white";
        document.querySelectorAll(".btn-seleccionar-contacto-oscuro").forEach(boton => {
            boton.classList.add("btn-seleccionar-contacto-claro");
            boton.classList.remove("btn-seleccionar-contacto-oscuro");
        });
        document.querySelector(".contacto-seleccionado-oscuro").className = "contacto-seleccionado-claro";
    } else {
        // Cambiar y animar botón
        this.querySelector("div").className = "luna";
        this.style.backgroundImage = "url(../img/BtnTemaOscuro.png)";

        // Cambiar colores del chat
        document.querySelector(".contenedor-principal").style.backgroundColor = "#6A6969";
        document.querySelector(".contenedor-chat").style.backgroundColor = "#6A6969";
        document.querySelector(".contenedor-contactos").style.backgroundColor = "#404040";
        document.querySelector(".btn-crear-contacto").style.backgroundColor = "#747474";
        document.querySelector(".btn-crear-contacto").style.color = "white";
        document.querySelector(".titulo-chat").style.color = "white";
        document.querySelectorAll(".nombre-contacto").forEach(mensaje => { mensaje.style.color = "white" });
        document.querySelectorAll(".ultimo-mensaje").forEach(mensaje => { mensaje.style.color = "#918F8F" });
        document.querySelector(".cabecera-contacto-chat").style.backgroundColor = "#404040";
        document.querySelector(".popup-inputs").style.backgroundColor = "#404040";
        document.querySelector(".campo-texto-chat").style.backgroundColor = "#404040";
        document.querySelectorAll(".btn-seleccionar-contacto-claro").forEach(boton => {
            boton.classList.add("btn-seleccionar-contacto-oscuro");
            boton.classList.remove("btn-seleccionar-contacto-claro");
        });
        document.querySelector(".contacto-seleccionado-claro").className = "contacto-seleccionado-oscuro";
    }
});
