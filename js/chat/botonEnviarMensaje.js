'use strict';

document.getElementById("btn-enviar-mensaje").addEventListener("click", function (event) {
    let inputInvisible = document.querySelector("#input-destinatario");
    let nombreDestinatario = document.querySelector("#destinatario").textContent;

    inputInvisible.value = nombreDestinatario;
    loadLDocMensajes("../xml/Chat/historial-chat.xml");
});