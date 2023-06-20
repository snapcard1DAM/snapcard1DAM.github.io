'use strict';

const botonMeGusta = document.querySelector(".megusta");
let activado = false;

botonMeGusta.addEventListener("click", function (event) {
    if (!activado) {
        this.style.backgroundImage = "url(../img/MeGustaActivado.png)";
        activado = true;
    } else {
        this.style.backgroundImage = "url(../img/MeGustaDesactivado.png)";
        activado = false;
    }
})