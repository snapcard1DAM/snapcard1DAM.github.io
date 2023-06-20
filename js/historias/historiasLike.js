'use strict';

const foto = document.querySelector(".foto");
const like = document.querySelector("#icono-like");

foto.addEventListener("dblclick", function (event) {
    console.log("hola");
    like.classList.add("like");
    document.querySelector(".megusta").click();
    setTimeout(() => { like.classList.remove("like") }, 1000);
});