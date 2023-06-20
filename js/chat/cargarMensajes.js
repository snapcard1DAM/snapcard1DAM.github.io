'use strict';

loadLDocMensajes("../xml/Chat/historial-chat.xml");

function gestionarFicheroXML(xmlDoc) {
    let chat, divElementosMensaje, imgPerfil, divMensaje, pMensaje, pHoraEnvio, imagen;
    let patronMensaje = /(.\/.)+/;
    
    chat = document.querySelector(".chat");
    chat.textContent = "";
    xmlDoc.querySelectorAll("mensaje").forEach(mensaje => {
        console.log(document.querySelector("#destinatario"))
        if(mensaje.querySelector("origen").textContent == "Yo" && mensaje.querySelector("destino").textContent == document.querySelector("#destinatario").textContent) { // Mensaje de parte del usuario
            divElementosMensaje = document.createElement("div");
            divElementosMensaje.className = "elementos-mensaje-origen";
            
            divMensaje = document.createElement("div");
            divMensaje.className = "mensaje-origen";
            
            if (patronMensaje.test(mensaje.querySelector("contenido").textContent)) { // Es una imagen
                pMensaje = document.createElement("p");
                imagen = document.createElement("img");
                imagen.src = mensaje.querySelector("contenido").textContent;
                pMensaje.appendChild(imagen);
            } else {
                pMensaje = document.createElement("p");
                pMensaje.appendChild(document.createTextNode(mensaje.querySelector("contenido").textContent));
            }

            pHoraEnvio = document.createElement("p");
            pHoraEnvio.className = "hora-envio";
            pHoraEnvio.appendChild(document.createTextNode(mensaje.querySelector("hora-envio").textContent));

            imgPerfil = document.createElement("img");
            imgPerfil.className = "perfil-contacto";
            imgPerfil.src = mensaje.querySelector("imagen").textContent;

            divMensaje.appendChild(pMensaje);
            divMensaje.appendChild(pHoraEnvio);
            divElementosMensaje.appendChild(divMensaje);
            divElementosMensaje.appendChild(imgPerfil);

            chat.appendChild(divElementosMensaje);
        } else if(mensaje.querySelector("origen").textContent == document.querySelector("#destinatario").textContent && mensaje.querySelector("destino").textContent == "Yo"){ // Mensaje de parte del destino
            divElementosMensaje = document.createElement("div");
            divElementosMensaje.className = "elementos-mensaje-destino";
            
            divMensaje = document.createElement("div");
            divMensaje.className = "mensaje-destino";
            
            if (patronMensaje.test(mensaje.querySelector("contenido").textContent)) { // Es una imagen
                pMensaje = document.createElement("p");
                imagen = document.createElement("img");
                imagen.src = mensaje.querySelector("contenido").textContent;
                pMensaje.appendChild(imagen);
            } else {
                pMensaje = document.createElement("p");
                pMensaje.appendChild(document.createTextNode(mensaje.querySelector("contenido").textContent));
            }

            pHoraEnvio = document.createElement("p");
            pHoraEnvio.className = "hora-envio";
            pHoraEnvio.appendChild(document.createTextNode(mensaje.querySelector("hora-envio").textContent));

            imgPerfil = document.createElement("img");
            imgPerfil.className = "perfil-contacto";
            imgPerfil.src = mensaje.querySelector("imagen").textContent;

            divElementosMensaje.appendChild(imgPerfil);
            divMensaje.appendChild(pMensaje);
            divMensaje.appendChild(pHoraEnvio);
            divElementosMensaje.appendChild(divMensaje);

            chat.appendChild(divElementosMensaje);
        }
    });
    // Hacer scroll hacia abajo automáticamente
    document.querySelector(".chat").scrollTop = document.querySelector(".chat").scrollHeight; 
}