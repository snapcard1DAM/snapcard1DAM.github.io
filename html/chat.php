<?php 
    if(isset($_POST["mensaje"]) && isset($_POST["destinatario"]) && !empty(trim($_POST["mensaje"])) && !empty(trim($_POST["destinatario"]))) {
        $hora_actual = new DateTime();
        $fecha_actual = date("d-m-Y");
        $rutaXmlOriginal = "../xml/historial-chat.xml";   
        $rutaXmlNuevo = "../xml/temp.xml";    

        // Abrir el archivo original en modo lectura
        $archivo_origen = fopen($rutaXmlOriginal, 'r');
        // Abrir el archivo destino en modo escritura
        $archivo_destino = fopen($rutaXmlNuevo, 'a'); // add
        // Ciclo para leer línea por línea el archivo original
        while ($linea = fgets($archivo_origen)) {
            // Verificar si la cadena de texto que se desea omitir está presente en la línea actual
            if (strpos($linea, '</historial-chat>') === false) {
                // Si la cadena de texto no está presente, escribir la línea en el archivo destino
                fwrite($archivo_destino, $linea);
            }
        }
        $nuevo_contenido = 
        "\t<mensaje>\n" .
        "\t\t<origen>Yo</origen>\n" . 
        "\t\t<destino>{$_POST['destinatario']}</destino>\n" .
        "\t\t<fecha>{$fecha_actual}</fecha>\n" .
        "\t\t<imagen>../img/Perfil.png</imagen>\n" . 
        "\t\t<contenido>{$_POST['mensaje']}</contenido>\n" . 
        "\t\t<hora-envio>{$hora_actual->format("H:i")}</hora-envio>\n" . 
        "\t</mensaje>\n" .
        "</historial-chat>\n";
        fwrite($archivo_destino, $nuevo_contenido);

        // Cerrar ambos archivos
        fclose($archivo_origen);
        fclose($archivo_destino); 
        
        rename($rutaXmlNuevo, $rutaXmlOriginal);
        unset($_POST);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"> <!-- Eliminar caché -->
    <title>chat</title>
    <link rel="stylesheet" href="../css/chat.css">
    <link rel="shortcut icon" href="../img/Logo.png">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap" rel="stylesheet">

</head>
<body>
    <div class="contenedor" id="contenedor">
        <div class="botones">
            <a href="paginaPrincipal.html">
                <button class="btn-logo">
                    <img src="../img/Logo.png" alt="VolverAtras">
                </button>
            </a>
            <a href="perfil.html">
                <button>
                    <img src="../img/PerfilUsuario.png" alt="VolverAtras" class="boton">
                </button>
            </a>
            <a href="notificaciones.html">
                <button>
                    <img src="../img/Notificacion.png" alt="VolverAtras" class="boton btn-notificacion">
                </button>
            </a>
            <a href="publicacionesAmigos.html">
                <button>
                    <img src="../img/BotonPublicaciones.png" alt="VolverAtras" class="boton">
                </button>
            </a>
            <a href="listaDeAmigos.html">
                <button>
                    <img src="../img/BotonContactos.png" alt="VolverAtras" class="boton">
                </button>
            </a>
            <a href="historias.html">
                <button>
                    <img src="../img/Historias.png" alt="VolverAtras" class="boton">
                </button>
            </a>
            <a href="" target="_self">
                <button>
                    <img src="../img/Mensajes.png" alt="VolverAtras" class="boton">
                </button>
            </a>
        </div>
        <div class="contenedor-principal" id="contenedor-principal">
            <div class="contenedor-contactos" id="contenedor-contactos">
                <div class="interfaz-contactos">
                    <button class="btn-crear-contacto"><img src="../img/CrearContacto.png" alt="CrearContacto">Crear contacto</button>
                    <h2 class="titulo-chat">Chat</h2>
                    <input type="search" class="buscador-contactos" placeholder="Buscar contacto">
                </div>
                <div class="contactos">
                    <button class="btn-seleccionar-contacto btn-seleccionar-contacto-claro">
                        <img src="../img/Contactos/Alex.png" alt="Contacto" class="perfil-contacto conectado">
                        <div class="datos-contacto">
                            <p class="nombre-contacto">Alex</p>
                            <p class="ultimo-mensaje">Ya me contarás qué tal el examen...</p>
                            <p class="mensajes">3</p>
                        </div>
                    </button>
                    <hr>
                    <button class="btn-seleccionar-contacto btn-seleccionar-contacto-claro">
                        <img src="../img/Contactos/Angela.png" alt="Contacto" class="perfil-contacto desconectado">
                        <div class="datos-contacto">
                            <p class="nombre-contacto">Angela</p>
                            <p class="ultimo-mensaje">¿Has hecho los deberes que mando ayer la profesora?</p>
                        </div>
                    </button>
                    <hr>
                    <button class="contacto-seleccionado-claro">
                        <img src="../img/Contactos/Juan.png" alt="Contacto" class="perfil-contacto conectado">
                        <div class="datos-contacto">
                            <p class="nombre-contacto">Juan</p>
                            <p class="ultimo-mensaje">Ahora nos vemos!</p>
                        </div>
                    </button>
                    <hr>
                    <button class="btn-seleccionar-contacto btn-seleccionar-contacto-claro">
                        <img src="../img/Contactos/Lucia.png" alt="Contacto" class="perfil-contacto conectado">
                        <div class="datos-contacto">
                            <p class="nombre-contacto">Lucia</p>
                            <p class="ultimo-mensaje">Llevo solo 1 día en el gym y ya noto los cambios eh</p>
                        </div>
                    </button>
                    <hr>
                    <button class="btn-seleccionar-contacto btn-seleccionar-contacto-claro">
                        <img src="../img/Contactos/Pedro.png" alt="Contacto" class="perfil-contacto desconectado">
                        <div class="datos-contacto">
                            <p class="nombre-contacto">Pedro</p>
                            <p class="ultimo-mensaje">¿Dónde está Viena?</p>
                            <p class="mensajes">1</p>
                        </div>
                    </button>
                    <hr>
                    <button class="btn-seleccionar-contacto btn-seleccionar-contacto-claro">
                        <img src="../img/Contactos/Raul.png" alt="Contacto" class="perfil-contacto desconectado">
                        <div class="datos-contacto">
                            <p class="nombre-contacto">Raul</p>
                            <p class="ultimo-mensaje">Cuando nos vamos al cine?</p>
                            <p class="mensajes">7</p>
                        </div>
                    </button>
                    <hr>
                </div>
            </div>
            <div class="contenedor-chat" id="contenedor-chat">
                <div class="cabecera-contacto-chat">
                    <div class="datos-contacto-chat">
                        <button class="btn-mostrar-contactos"><img src="../img/VolverAtras.png" alt="VolverAtrás"></button>
                        <img src="../img/Contactos/Juan.png" alt="Contacto" class="perfil-contacto" id="imagen-destinatario">
                        <div class="contenedor-datos-chat">
                            <p class="nombre-contacto" id="destinatario">Juan</p>
                            <p class="texto-estado-conexion-conectado" id="estado-conexion-destinatario">Conectad@</p>
                        </div>
                    </div>
                    <button class="btn-tema">
                        <div class="sol" id="tema-activado"></div>
                    </button>
                </div>
                <div class="chat"> 
                </div>
                <div class="contendor-inputs">
                    <form class="popup-inputs" method="POST">
                        <button class="btn-input"><img src="../img/AnyadirMedios.png" alt="CrearContacto"></button>
                        <input type="text" class="campo-texto-chat" placeholder="Escribe un mensaje" name="mensaje" value="" autocomplete="off">
                        <input type="hidden" name="destinatario" value="" id="input-destinatario">
                        <button class="btn-input"><img src="../img/Emoji.png" alt="EnviarMensaje"></button>
                        <button class="btn-input" id="btn-enviar-mensaje" type="submit"><img src="../img/EnviarMensaje.png" alt="EnviarMensaje"></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    <script src="../js/chat/ajaxMensajes.js"></script>
    <script src="../js/chat/cargarMensajes.js"></script>
    <script src="../js/chat/ajaxUltimoMensaje.js"></script>
    <script src="../js/chat/cargarUltimoMensaje.js"></script>
    <script src="../js/chat/botonEnviarMensaje.js"></script>
    <script src="../js/chat/botonContactos.js"></script>
    <script src="../js/chat/botonTema.js"></script>
</body>
</html>