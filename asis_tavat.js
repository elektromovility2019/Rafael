/*-----------------------COMANDOS DE VOZ-----------------------------*/

var Horas = fechaActual.getHours();
var musica_dance = "https://youtu.be/jfrdntUFX5A";
var musica_disco = "https://youtu.be/3uCf5NDglNI";
var musica_reggaeton = "https://youtu.be/akNrH8V4quE";
var musica_rock = "https://youtu.be/VgcaJWXfdQ8";
var musica_electronica = "https://youtu.be/1D_hy3itHsg";
var musica_rokc_rol = "https://youtu.be/ZD8YPY8RBQc";
var musica_clasica = "https://youtu.be/5wb5i43Iv-w";
var musica_relajante = "https://youtu.be/Zy51SwWbcyg";

/*----------------------DICTADO POR VOZ------------------------------------------ */
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var speechRecognitionList = new SpeechGrammarList();

/*-----------------------VARIABLES DE CONVERSACION------------------------*/
var saludo_inicial = 0;
var enfado_asis = 0;
var respuesta_rafael = 0;
var respuesta_asis = 0;
var hasta_luego_asis = 0;
var lectura_texto = 0;
var adios_asis = 0;
var Horas = fechaActual.getHours();
var radioFm = false;
var menu_sup = 1;
var teclado = 0;
var pag_google = 0;
var iframe_ext = 0;
var $texto1 = document.getElementById("texto1");
var $texto0 = document.getElementById("texto0");
var $my_video = document.getElementById("my_video");
var $iframe = document.getElementById("iframe");
var Home, Actualidad, canalesTv, Descargas, Documentos, Gmail, Google,
    Imagenes, Juegos, Musica, Programas, radioFm, Redes, Videos, Youtube,
    estado_rafael, estado_tavat, texto, text, texto_memorizado;
var repetir_respuesta = 0;
var respuesta = "";
var vent_catalunya_radio, vent_radio_flaixbac, vent_radio_flaix_fm, vent_radio_rac_1;
var abre_google, abreGoogle, abre_gmail, abreGmail, abre_facebook, abreFacebook, abre_youtube, abreYoutube, abre_whatsapp, abreWhatsapp;
var tiempo_responder = 3000;
var problema_hiuston = 0;
var saludo_f_h;
var metrica = " metros";
var n1 = '';
var n2 = '';
var operacion = '';
var vent_catalunya_radio, vent_radio_flaixbac, vent_radio_flaix_fm, vent_radio_rac_1, vent_noticias1;
// contenedores
var cPantalla;

// elementos
var ePantalla;
// asis isObeying true/false
// asis.obey obedecer
// asis dontObey dejar de obedecer
// asis.clearGarbageCollection()  limpiar basura asis.say
// onEnd : function ({}); funcion cuando termine de hablar asis.say
//setTimeout(function(){asis.fatality().then(() => {
//      console.log("asis succesfully stopped !"); });}, 5000);
//cancelar asis cállate
// asis.shutUp();  método speechSynthesis.cancel.
// asis.emptyCommands();  borra todos los comandos disponibles de asis
// var commands = asis.getAvailableCommands(); Recuperar lo borrado.
// asis.getProperties()); propiedades de configuración de asis.

/*----------------------ARRANCAR ARTYOM AL INICIO----------------------------------*/

artyom.initialize({
    lang: 'es-ES',
    recognizing: true,
    continuous: true,
    speed: .7,
    volume: 1.1,
    rate: .7,
    pitch: .7,
    listen: true,
    mode: "normal",
    debug: true,
    helpers: {
        redirectRecognizedTextOutput: "texto0",
        remoteProcessorHandler: null,
        lastSay: "me lo puedes repetir"
    },
    obeyKeyword: "atiende Asís",
    executionKeyword: "hazlo ya",
    name: "Asis",
    speaking: true,
    obeying: true,
    soundex: true,
    smart: true
});

window.onload = function() {
    var artyom = new Artyom();
    artyom.initialize();
    tiempo_responder = 20000;
    setTimeout(() => {
        holaAsis();
    }, 4000);
};

function StartArtyom() {
    artyom.initialize();
};
StartArtyom();

// Stop libreria;
function stopArtyom() {
    artyom.fatality(); // Detener cualquier instancia previa
};

if (artyom.isSpeaking()) {
    artyom.dontObey();
    $("#on_micro_asis").css({
        backgroundColor: "#fff"
    });
    $texto0.value = "";
    $("#texto0").addClass("none");
    $("#texto1").removeClass("none");
} else {
    artyom.obey();
    $("#on_micro_asis").css({
        backgroundColor: "#000"
    });
    $("#on_altavoz_asis").css({
        backgroundColor: "#fff"
    });
    $("#texto0").removeClass("none");
    $("#texto1").addClass("none");
};

/*---------------------asis HA ESCUCHADO LOS COMANDOS-----------------------------*/

if (artyom.isRecognizing()) {
    $("#on_micro_asis").css({
        border: "solid 5px red",
        boxSizing: "border-box"
    });
} else {
    $("#on_micro_asis,#on_altavoz_asis").css({
        border: "solid 5px green",
        boxSizing: "border-box"
    });
};

/*---------------------asis HA ESCUCHADO LOS COMANDOS-----------------------------*/

function fechaHora() {
    respuesta = fecha_hora;
    Responder(respuesta);
};

/*----------------------------FUNCION FECHA ACTUAL---------------------------*/

function fechaDeHoy() {
    respuesta = fecha_actual;
    Responder(respuesta);
};

/*------------------------ ESCRIBE LO QUE ESCUCHA-----------------------*/

artyom.redirectRecognizedTextOutput((recognized, isFinal) => {
    if (isFinal) {
        continuous: true;
        $("#exto0").text(recognized);
        setTimeout(function() {
            $texto0.innerHTML = ("");
        }, 1000);
    }
    else {
        continuous: true;
        $("#texto0").text(recognized);
        setTimeout(function() {
            $texto0.innerHTML = ("");
        }, 1000);
    }
});

/*----------------------AÑADIR UN COMANDO QUE NO EXISTE-----------------*/

// código que agrega comandos

var commands = artyom.getAvailableCommands();

for (var i = 0; i < commands.length; i++) {
    var command = comanddos[i];

    // Si NO existe un comando activado por Ramón, agréguelo.
    if (!command.indexOf("Ramón")) {
        artyom.addCommands([{
            description: "Ramón",
            indexes: ["Ramón ", "camióm"],
            action: function() {
                holaAsis();
            }
        }]);

        break; // Detener búsqueda en comandos
    }
};

// Smart command (Short code artisan way), set the second parameter of .on to true
artyom.on(['Repite conmigo *'], true).then((i, wildcard) => {
    Responder("te repito : " + wildcard);
});

// or add some commandsDemostrations in the normal way

artyom.addCommands([{
        indexes: ['Hello', 'Hi', 'is someone there'],
        action: (i) => {
            artyom.say("Hello, it's me");
        }
    },
    {
        indexes: ['repite conmigo *'],
        smart: true,
        action: (i, wildcard) => {
            Responder("Te repito: " + wildcard);
        }
    },
    {
        indexes: ["calcula la suma de *", "cuánto es la suma de *"],
        smart: true,
        action: (i, wildcard) => {
            Calculadora();
            var resultado0 = wildcard;
            var resultado = resultado0.split(" ", );
            var indice3 = 0;
            var indice4 = 0;
            var indice5 = 0;
            var indice1 = resultado[0];
            var indice2 = resultado[2];
            var indice3 = resultado[4];
            var indice4 = resultado[6];
            var indice5 = resultado[8];
            if (indice3 == null || indice3 == undefined) {
                indice3 = 0;
            }
            indice3 = parseFloat(indice3);

            if (indice4 == null || indice3 == undefined) {
                indice4 = 0;
            }
            indice4 = parseFloat(indice4);

            if (indice5 == null || indice5 == undefined) {
                indice5 = 0;
            }
            indice5 = parseFloat(indice5);

            var resultadofinal = parseFloat(indice1) + parseFloat(indice2) + indice3 + indice4 + indice5;
            Responder("el resultado de sumar " + wildcard + " es " + resultadofinal);
            n2 = resultadofinal;
            ePantalla.set({
                numeros: n2
            });
            cPantalla.render();
        }
    },
    {
        indexes: ["calcula la resta de *", "cuánto es la resta de *"],
        smart: true,
        action: (i, wildcard) => {
            Calculadora();
            var resultado0 = wildcard;
            var resultado = resultado0.split(" ", );
            var indice3 = 0;
            var indice4 = 0;
            var indice5 = 0;
            var indice1 = resultado[0];
            var indice2 = resultado[2];
            var indice3 = resultado[4];
            var indice4 = resultado[6];
            var indice5 = resultado[8];
            if (indice3 == null || indice3 == undefined) {
                indice3 = 0;
            }
            indice3 = parseFloat(indice3);

            if (indice4 == null || indice3 == undefined) {
                indice4 = 0;
            }
            indice4 = parseFloat(indice4);

            if (indice5 == null || indice5 == undefined) {
                indice5 = 0;
            }
            indice5 = parseFloat(indice5);

            var resultadofinal = parseFloat(indice1) - parseFloat(indice2) - indice3 - indice4 - indice5;
            Responder("el resultado de restar " + wildcard + " es " + resultadofinal);
            n2 = resultadofinal;
            ePantalla.set({
                numeros: n2
            });
            cPantalla.render();
        }
    },
    {
        indexes: ["calcula la multiplicación de *", "cuánto es la multiplicación de *"],
        smart: true,
        action: (i, wildcard) => {
            Calculadora();
            var resultado0 = wildcard;
            var resultado = resultado0.split(" ", );
            var indice3 = 1;
            var indice4 = 1;
            var indice5 = 1;
            var indice1 = resultado[0];
            var indice2 = resultado[2];
            var indice3 = resultado[4];
            var indice4 = resultado[6];
            var indice5 = resultado[8];
            if (indice3 == null || indice3 == undefined) {
                indice3 = 1;
            }
            indice3 = parseFloat(indice3);
            if (indice4 == null || indice3 == undefined) {
                indice4 = 1;
            }
            indice4 = parseFloat(indice4);
            if (indice5 == null || indice5 == undefined) {
                indice5 = 1;
            }
            indice5 = parseFloat(indice5);
            var resultadofinal = parseFloat(indice1) * parseFloat(indice2) * indice3 * indice4 * indice5;
            Responder("el resultado de multiplicar " + wildcard + " es " + resultadofinal);
            n2 = resultadofinal;
            ePantalla.set({
                numeros: n2
            });
            cPantalla.render();
        }
    },
    {
        indexes: ["calcula la división de *", "cuánto es la división de *"],
        smart: true,
        action: (i, wildcard) => {
            Calculadora();
            var resultado0 = wildcard;
            var resultado = resultado0.split(" ", );
            var indice3 = 1;
            var indice4 = 1;
            var indice5 = 1;
            var indice1 = resultado[0];
            var indice2 = resultado[2];
            var indice3 = resultado[4];
            var indice4 = resultado[6];
            var indice5 = resultado[8];
            if (indice3 == null || indice3 == undefined) {
                indice3 = 1;
            }
            indice3 = parseFloat(indice3);
            if (indice4 == null || indice3 == undefined) {
                indice4 = 1;
            }
            indice4 = parseFloat(indice4);
            if (indice5 == null || indice5 == undefined) {
                indice5 = 1;
            }
            indice5 = parseFloat(indice5);
            var resultadofinal0 = ((parseFloat(indice1) / parseFloat(indice2)) / indice3) / indice4 / indice5;
            var resultadofinal = resultadofinal0.toFixed(4);
            Responder("el resultado de dividir " + wildcard + " es " + resultadofinal);
            n2 = resultadofinal;
            ePantalla.set({
                numeros: n2
            });
            cPantalla.render();
        }
    },
    {
        indexes: ["calcula el área de un cuadrado de *", "cuánto es el área de un cuadrado de *", "calcula la superficie de un cuadrado de *"],
        smart: true,
        action: (i, wildcard) => {
            Calculadora();
            var metrica00 = " metros";
            var metrica11 = " metros";
            var resultado0 = wildcard;

            var resultado = resultado0.split(" ", );
            let n_l = resultado.length;
            var indice1 = resultado[0];
            var indice2 = resultado[1];
            var indice3 = resultado[2];
            var indice4 = resultado[3];


            if (n_l == 2 == indice2 != NaN) {
                var resultadofinal = parseInt(indice1) * parseInt(indice1);
                metrica00 = resultado[1];
                metrica11 = " ";
                if (metrica00 == "m") {
                    metrica00 = " metros";
                }
            }

            if (n_l == 4 && indice2 == NaN && indice4 != NaN) {
                var metrica00 = indice4;
                var resultadofinal = parseInt(indice1) * parseInt(indice3);

            }
            if (n_l == 4 && indice2 == !NaN && indice4 == NaN) {
                var metrica00 = indice2;
                var resultadofinal = parseInt(indice1) * parseInt(indice3);

            }
            if (metrica00 == "m") {
                metrica00 = " metros";
            }
            respuesta = "el area de una superficie cuadrada de " + wildcard + metrica11 + " es de " + resultadofinal + " " + metrica00 + " cuadrados";
            if (n_l == 1 || n_l == 3) {
                resultadofinal = "???";
                respuesta = "si no me das ninguna escala métrica, no se puede calcular nada, ya sean metros,centímetros o milímetros";
            }

            Responder(respuesta);
            n2 = resultadofinal;
            ePantalla.set({
                numeros: n2
            });
            cPantalla.render();
        }
    },
    {
        indexes: ["cúanto es el volumen de un cubo de *", "cuál es el volumen de un cubo de *", "qué volumen tiene un cubo de *"],
        smart: true,
        action: (i, wildcard) => {
            Calculadora();
            var resultado0 = wildcard;
            var resultado = resultado0.split(" ", );
            let n = resultado0.length;
            var metrica = " cm";

            //  if (metrica != NaN && metrica != undefined) {
            //      var metrica = resultado[n - 1];
            // }
            var indice1 = resultado[0];
            var indice2 = resultado[2];
            var indice3 = resultado[4];
            var cubo = " rectangular de ";

            if (indice3 == undefined && indice1 == indice2) {
                var indice3 = resultado[2];
                indice3 = parseFloat(indice3);
                cubo = " cuadrado de ";
            }
            if (indice1 == indice2 && indice1 == indice3) {
                var indice3 = resultado[2];
                indice3 = parseFloat(indice3);
                cubo = " cuadrado de ";
            }

            var resultadofinal = parseFloat(indice1) * parseFloat(indice2) * parseInt(indice3);
            var litros0 = parseInt(resultadofinal);
            var litros = litros0 / 1000;

            respuesta = "el volumen de un cubo" + cubo + indice1 + " por " + indice2 + " por " + indice3 + metrica + " es " + resultadofinal + metrica + " cúbicos" + " o " + litros + " litros";
            var lados_iguales = parseFloat(indice1) * parseFloat(indice1) * parseInt(indice1);
            var litros2 = lados_iguales / 1000;
            if (indice1 != indice2 && indice2 != undefined && indice3 == undefined || indice3 == null) {
                respuesta = "no te puedo calcular el volumen ya que me falta una dimensión";
            }
            if (indice1 != indice2 && indice3 == undefined || indice3 == null && indice2 == undefined || indice2 == null) {
                respuesta = "Si te refieres a un cubo con los lados iguales de " + indice1 + metrica + " el volumen es de " + lados_iguales + metrica + " cúbicos" + " o " + litros2 + " litros.. " + " Sí no es así..me faltan más dimensiónes.. sólo me has dado la medida de " + wildcard;
            }
            Responder(respuesta);
            n2 = resultadofinal;
            ePantalla.set({
                numeros: n2
            });
            cPantalla.render();
        }
    },

    // The smart commands support regular expressions
    {
        indexes: [/qué hay/i],
        smart: true,
        action: (i, wildcard) => {
            Responder("Hola : " + wildcard);
        }
    },
    {
        indexes: ['apagarte'],
        action: (i, wildcard) => {
            artyom.fatality().then(() => {
                console.log("Artyom se detuvo con éxito");
            });
        }
    },
]);

/*----------------------COMANDOS DE VOZ------------*/

artyom.addCommands([{
        indexes: ["cierra la ventana", "cierra el contenido", "cierra la pantalla"],
        action: function() {
            cerrarContenido();
        }
    },
    {
        indexes: ["minimiza la ventana", "minimiza el contenido", "minimiza la pantalla"],
        action: function() {
            minContenido();
        }
    },
    {
        indexes: ["maximiza la ventana", "pantalla completa", "maximiza el contenido", "maximiza la pantalla"],
        action: function() {
            maxContenido();
        }
    },
    {
        indexes: ["leer el contenido", "lee el contenido"],
        action: function() {
            leerElContenido();
        }
    },
    {
        indexes: ["leer los enlaces", "lee los enlaces", "leer los botones", "leer la página"],
        action: function() {
            leerPagina();
        }
    },
    {
        indexes: ["leer la actualidad", "cómo está el día", "información del día"],
        action: function() {
            infoDia();
        }
    },
    {
        indexes: ["aumenta el contraste", "alto contraste", "contraste de pantalla", "activa el contraste de pantalla"],
        action: function() {
            Contraste();
        }
    },
    {
        indexes: ["disminuir el contenido", "disminuye el contenido", "disminuye las imágenes", "disminuye la pantalla"],
        action: function() {
            Disminuir();
        }
    },
    {
        indexes: ["agranda el contenido", "aumenta el contenido", "agranda las imagenes", "efecto lupa", "agranda la pantalla"],
        action: function() {
            Agrandar();
        }
    },
    {
        indexes: ["resetea la pantalla", "quita el contraste de pantalla", "pantalla normal", "desactiva el contraste de pantalla", "reset de pantalla"],
        action: function() {
            resetOpciones();
        }
    },
    {
        indexes: ["oculta el menú de configuración", "oculta el menú superior", "oculta el menú *", "ocultar el menú superior"],
        action: function(i) {
            offMenuSuperior();
        }
    },
    {
        indexes: ["muestra el menú de configuración", "muestra el menú superior", "muestra el menú *", 'muéstrame el menú de configuración', "mostrar el menú superior"],
        action: function(i) {
            onMenuSuperior();
        }
    },
    {
        indexes: ["oculta las barras laterales", "oculta el menú lateral", "esconde el menú lateral", "esconde las barras laterales", "ocultar las barras laterales"],
        action: function(i) {
            offMenuLateral();
        }
    },
    {
        indexes: ["muestra las barras laterales", "muestra el menú lateral", 'muéstrame las barras laterales', "mostrar las barras laterales"],
        action: function(i) {
            onMenuLateral();
        }
    },
    {
        indexes: ["muestra la configuración personal", "mostrar las herramientas y opciones", "oculta los modos de acceso"],
        action: function(i) {
            onModosAcceso();
        }
    },
    {
        indexes: ["oculta la configuración personal", "ocultar las herramientas y opciones", "oculta los modos de acceso"],
        action: function(i) {
            offModosAcceso();
        }
    },
    {
        indexes: ["abre Google"],
        action: function(i) {
            Responder("Google");
            abre_google = window.open("http://www.google.com", '_blank', 'width=1350,  height=470, left=0, top=280');
        }
    },
    {
        indexes: ["abre Facebook"],
        action: function(i) {
            Responder("Facebook");
            abre_facebook = window.open("http://www.facebook.com", '_blank', 'width=1350,  height=470, left=0, top=280');
        }
    },
    {
        indexes: ["abre Youtube"],
        action: function(i) {
            Responder("Youtube");
            abre_youtube = window.open("https://www.youtube.com/channel/UCF721oswf7EUSsQbuGFoMZQ", '_blank', 'width=1350,  height=470, left=0, top=280');
        }
    },
    {
        indexes: ["abre Gmail"],
        action: function(i) {
            Responder("Gmail");
            abre_gmail = window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", '_blank', 'width=1350,  height=470, left=0, top=280');
        }
    },
    {
        indexes: ["abre Whatssap"],
        action: function(i) {
            Responder("Whatsapp");
            abre_whatsapp = window.open("https://web.whatsapp.com/", '_blank', 'width=1350,  height=470, left=0, top=280');
        }
    },
    {
        indexes: ["abre Instagram"],
        action: function(i) {
            Responder("instagram");
            abre_instagram = window.open("https://www.instagram.com/", '_blank', 'width=1350,  height=470, left=0, top=280');
        }
    },
    {
        indexes: ["abre Linkedin"],
        action: function(i) {
            Responder("linkedin");
            abre_linkedin = window.open("https://www.linkedin.com/feed/", '_blank', 'width=1350,  height=470, left=0, top=280');
        }
    },
    {
        indexes: ['página completa de Google', 'página completa de Facebook', 'página completa de Youtube', 'página completa de Gmail', 'página completa de Whatsapp'],
        action: function(i) {
            if (i == 0) {
                Responder("Google");
                abreGoogle = window.open("http://www.google.com", '_blank ,width=1370,  height=760, left=-10, top=-10');
            }
            if (i == 1) {
                Responder("Facebook");
                abreFacebook = window.open("http://www.facebook.com", '_blank', 'width=1370,  height=760, left=0, top=0');
            }
            if (i == 2) {
                Responder("Youtube");
                abreYoutube = window.open("https://www.youtube.com/channel/UCF721oswf7EUSsQbuGFoMZQ", '_blank', 'width=1370,  height=760, left=0, top=0');
            }
            if (i == 3) {
                Responder("Gmail");
                abreGmail = window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", '_blank', 'width=1370,  height=760, left=0, top=0');
            }
            if (i == 4) {
                Responder("Whatsapp");
                abreWhatsapp = window.open("https://web.whatsapp.com/", '_blank', 'width=1370,  height=760, left=0, top=0');
            }
        }
    }, {
        indexes: ['muéstrame el inicio', "muestra la página de inicio", "inicio", "abre el inicio", "cierras las ventanas", "cierra las páginas", "cierra las carpetas"],
        action: function() {
            Home();
            Responder("início");
            abre_google.close();
        }
    }, {
        indexes: ["abre la actualidad", "abre las noticias de hoy", 'muéstrame la actualidad', 'muéstrame la página de la actualidad', "abre la página de actualidad", "abre la carpeta de actualidad"],
        action: function() {
            Actualidad();
        }
    }, {
        indexes: ["léeme la actualidad", "léeme las noticias de hoy"],
        action: function() {
            leerActualidad();
            Responder("Te leo los titulares más destacados ");
        }
    }, {
        indexes: ['muéstrame los canales de televisión', "página de canales de televisión", "abre los canales de televisión", "abre la página de televisión", "abre la carpeta de televisión"],
        action: function() {
            CanalesTv();
            Responder("canales de televisión");
        }
    }, {
        indexes: ['muéstrame los documentos', "muéstrame la carpeta de los documentos", "abre la carpeta de los documentos", "abre la página de documentos"],
        action: function() {
            Documentos();
            Responder("documentos");
        }
    }, {
        indexes: ['muéstrame Google', "abre Google", "muestra Google"],
        action: function() {
            Google();
            Responder("Google");
        }
    }, {
        indexes: ['muéstrame las imágenes', "abre la carpeta de las imágenes", "muestra la carpeta de las imágenes", "abre la página de las imágenes"],
        action: function() {
            Imagenes();
            Responder("imágenes");
        }
    }, {
        indexes: ['muéstrame los juegos', "abre la carpeta de los juegos", "muestra la página de los juegos", "abre la página de los juegos"],
        action: function() {
            Juegos();
            Responder("juegos");
        }
    }, {
        indexes: ['muéstrame la música', "abre carpeta de la música", "muestra la página de la música", "abre la página de la música"],
        action: function() {
            Musica();
            Responder("música");
        }
    }, {
        indexes: ['muéstrame las redes', "muestra la página de las redes", "abre las redes", "abre la página de las redes"],
        action: function() {
            Redes();
            Responder("Redes");
        }
    }, {
        indexes: ['muéstrame las emisoras de radio', "muestra las emisoras de radio", "abre la página de las emisoras de radio", "quiero oir la radio", "pon la radio", "abre las emisoras de radio"],
        action: function() {
            RadioFm();
            Responder("emisoras de radio");
        }
    }, {
        indexes: ['muéstrame los vídeos', "muestra la página de vídeos", "abre los videos", "abre la página de los videos"],
        action: function() {
            Videos();
            Responder("vídeos");
        }
    }, {
        indexes: ['sintoniza radio Flaix FM', "conecta con radio Flaix FM", "pon mi emisora favorita", "abre Flaix FM"],
        action: function() {
            RadioFlaixFm();
        }
    }, {
        indexes: ['sintoniza radio Flaixbac', "pon radio Flaixbac", "conecta con Radio Flaixbac", "abre Flaixbac"],
        action: function() {
            RadioFlaixBac();
        }
    }, {
        indexes: ['sintoniza Catalunya Radio', "pon Catalunya Radio", "conecta con Catalunya radio", "abre Catalunya Radio"],
        action: function() {
            CatalunyaRadio();
        }
    }, {
        indexes: ['sintoniza radio Rac U', "pon radio Rac U", "conecta con radio Rac U", "abre Rac U"],
        action: function() {
            RadioRac1();
        }
    }, {
        indexes: ["me lo puedes repetir", "no te he oido", "lo puedes repetir", "me lo podrías repetir"],
        action: function() {
            Responder(respuesta);
        }
    }, {
        indexes: ["ahora sí ", "esta vez si", "por fin"],
        action: function() {
            teHacesElSordo();
        }
    }, {
        indexes: ["cierra Videollamada", "inicio", "cierra la Videollamada"],
        action: function() {
            Responder("La Videollamada se ha cerrado");
            Home();
        }
    }, {
        indexes: ["abre Videollamada", "abre la Videollamada", "abre una Videollamada", "abre la página de la videollamada"],
        action: function() {
            Responder("Videollamada");
            Videollamada();
        }
    }, {
        indexes: ["cierra Catalunya radio", "apaga Catalunya radio", "desconecta Catalunya radio"],
        action: function() {
            vent_catalunya_radio.close();
            Responder("Catalunya Radio se ha cerrado");
            Home();
        }
    }, {
        indexes: ["cierra Flaix FM", "apaga radio Flaix FM", "desconecta radio Flaix FM", "cierra radio Flaix FM"],
        action: function() {
            vent_radio_flaix_fm.close();
            Responder("Flaix FM se ha cerrado");
            Home();
        }
    }, {
        indexes: ["cierra Flaixbac", "apaga radio Flaixbac", "desconecta radio Flaixbac", "cierra radio Flaixbac"],
        action: function() {
            vent_radio_flaixbac.close();
            Responder("Radio Falixbac se ha cerrado");
            Home();
        }
    }, {
        indexes: ["cierra Rac U", "apaga radio Rac U", "desconecta radio Rac U", "cierra radio Rac U"],
        action: function() {
            vent_radio_rac_1.close();
            Responder("Rac U se ha cerrado");
            Home();
        }
    }, {
        indexes: ["cierra Whatsapp", "cierra la ventana de Whatsapp", "cierra la página de Whatsapp", "cierra la pestaña de Whatsapp"],
        action: function() {
            abre_whatsapp.close();
            abreWhatsapp.close();
            Responder("Whatsapp se ha cerrado");
            Home();
        }
    }, {
        indexes: ["cierra Google", "cierra la ventana de Google", "cierra la página de Google", "cierra la pestaña de Google"],
        action: function() {
            abre_google.close();
            abreGoogle.close();
            Responder("Google se ha cerrado");
            Home();
        }
    }, {
        indexes: ["cierra Gmail", "cierra la ventana de Gmail", "cierra la página de Gmail", "cierra la pestaña de Gmail"],
        action: function() {
            abre_gmail.close();
            abreGmail.close();
            Responder("Gmail se ha cerrado");
            Home();
        }
    }, {
        indexes: ["cierra Facebook", "cierra la ventana de Facebook", "cierra la página de Facebook", "cierra la pestaña de Facebook"],
        action: function() {
            abre_facebook.close();
            abreFacebook.close();
            Responder("Facebook se ha cerrado");
            Home();
        }
    }, {
        indexes: ["cierra Youtube", "cierra la ventana de Youtube", "cierra la página de Youtube", "cierra la pestaña de Youtube"],
        action: function() {
            abre_youtube.close();
            abreYoutube.close();
            Responder("Youtube se ha cerrado");
            Home();
        },
    }, {
        indexes: ["dime la temperatura del exterior", "qué temperatura tenemos fuera", "qué temperatura hace fuera", "qué temperatura hace hoy", "qué temperatura tenemos hoy"],
        action: function() {
            Clima();
            setTimeout(() => {
                Responder(pre_temp + " con una " + temp.innerHTML + " grados");
            }, 500);
        }
    }, {
        indexes: ["qué día hace", "cómo se presenta el día", "cómo ha amanecido hoy", "qué día hace hoy", "qué día hace", "qué tiempo hace hoy", "qué tiempo hace fuera", "qué tiempo hace ahora", "cómo está el día"],
        action: function() {
            Clima();
            setTimeout(() => {
                Responder(pre_temp + pre_humi + " con una " + temp.innerHTML + " grados y la " + humi.innerHTML);
            }, 500);
        }
    }, {
        indexes: ["hace calor fuera", "Asís hace calor", "fuera hace calor"],
        action: function() {
            Clima();
            setTimeout(function() {
                Responder(calor + pre_temp + " con una " + temp.innerHTML + " grados.");
            }, 500);
        }
    }, {
        indexes: ["hace frío fuera", "Asis hace frío", "fuera hace frío"],
        action: function() {
            Clima();
            setTimeout(function() {
                Responder(frio + pre_temp + " con una " + temp.innerHTML + " grados.");
            }, 500);
        }
    }, {
        indexes: ["está lloviendo"],
        action: function() {
            Clima();
            setTimeout(function() {
                if (desc.innerHTML == "lloviznando") {
                    Responder("Sí, está lloviznado en Quart");
                }
                if (desc.innerHTML == "llueve de forma moderada") {
                    Responder("Sí, llueve de forma moderada en Quart");
                } else {
                    Responder("No, no está lloviendo en Quart" + cielo + desc.innerHTML);
                }
            }, 500);
        }
    }, {
        indexes: ["abre la página del calendario", "abre el calendario", "muestra el calendario", "muestrame el calendario"],
        action: function() {
            Responder("Calendario");
            Calendario();
        }
    }, {
        indexes: ["cierra el calendario", "inicio", "cierra la ventana del calendario"],
        action: function() {
            Responder("El calendario se ha cerrado");
            Home();
        }
    }, {
        indexes: ["abre la página de la calculadora", "abre la calculadora", "muestra la calculadora", "muestrame la calculadora"],
        action: function() {
            Responder("Calculadora");
            Calculadora();
        }
    }, {
        indexes: ["cierra la calculadora", "inicio", "cierra la ventana de la calculadora"],
        action: function() {
            Responder("La calculadora se ha cerrado");
            Home();
        }
    }, {
        indexes: ["posición actual", "dáme la ubicación", "muéstrame la ubicación"],
        action: function() {
            PosicionActual();
            respuesta = "Ésta es tu posición.. latitud y longitud "
            Responder(respuesta);
        }
    }, {
        indexes: ["muestra las noticias", "abre las noticias más importantes", "muéstrame las noticias", "muestra las noticias del día"],
        action: function() {
            Noticias1();
            respuesta = "Estas son las noticias más importantes"
            Responder(respuesta);
        }
    }, {
        indexes: ["cierra las noticias", "cierra la ventana de las noticias"],
        action: function() {
            vent_noticias1.close();
            respuesta = "Se han cerrado las noticias";
            Responder(respuesta);
            Home();
        }
    }, {
        indexes: ["abre la actualidad"],
        action: function() {
            Actualidad();
            respuesta = "Actualidad";
            Responder(respuesta);
        }
    }, {
        indexes: ["cierra la actualidad"],
        action: function() {
            vent_act.close();
            respuesta = "Se han cerrado las noticias de actualidad";
            Responder(respuesta);
            Home();
        }
    }, {
        indexes: ["abre Antena tres", "abre Antena 3"],
        action: function() {
            Antena3();
            respuesta = "Antena 3";
            Responder(respuesta);
        }
    }, {
        indexes: ["cierra Antena tres", "cierra Antena 3"],
        action: function() {
            vent_antena3.close();
            respuesta = "Se han cerrado Antena 3 ";
            Responder(respuesta);
            Home();
        }
    }, {
        indexes: ["abre Tele cinco", "abre Tele 5"],
        action: function() {
            Tele5();
            respuesta = "Tele 5";
            Responder(respuesta);
        }
    }, {
        indexes: ["cierra Tele cinco", "cierra Tele 5"],
        action: function() {
            vent_tele5.close();
            respuesta = "Se han cerrado Tele 5";
            Responder(respuesta);
            Home();
        }
    }, {
        indexes: ["abre La Sexta"],
        action: function() {
            LaSexta();
            respuesta = "La Sexta";
            Responder(respuesta);
        }
    }, {
        indexes: ["cierra La Sexta"],
        action: function() {
            vent_lasexta.close();
            respuesta = "Se han cerrado La Sexta";
            Responder(respuesta);
            Home();
        }
    }, {
        indexes: ["abre La Cuatro"],
        action: function() {
            LaCuatro();
            respuesta = "La Cuatro";
            Responder(respuesta);
        }
    }, {
        indexes: ["cierra La Cuatro"],
        action: function() {
            vent_lacuatro.close();
            respuesta = "Se han cerrado La Cuatro";
            Responder(respuesta);
            Home();
        }
    }, {
        indexes: ["abre TV3"],
        action: function() {
            TV3();
            respuesta = "TV3 Televisión de Catalunya";
            Responder(respuesta);
        }
    }, {
        indexes: ["cierra TV3"],
        action: function() {
            vent_tv3.close();
            respuesta = "Se han cerrado TV3";
            Responder(respuesta);
            Home();
        }
    }, {
        indexes: ["abre Televisión española", "abre la uno", "abre la 1", "abre TVE"],
        action: function() {
            TVE();
            respuesta = "La 1 de Televisión Española";
            Responder(respuesta);
        }
    }, {
        indexes: ["cierra la 1", "cierra la uno", "cierra televisión española"],
        action: function() {
            vent_tve.close();
            respuesta = "La 1 se ha cerrado";
            Responder(respuesta);
            Home();
        }
    }, {
        indexes: ["abre la dos", "abre la 2", "abre la segunda"],
        action: function() {
            La2();
            respuesta = "La 2 de Televisión Española";
            Responder(respuesta);
        }
    }, {
        indexes: ["cierra la dos", "cierra la 2"],
        action: function() {
            vent_la2.close();
            respuesta = "Se han cerrado La Dos";
            Responder(respuesta);
            Home();
        }
    }, {
        indexes: ["pon música dance"],
        action: function() {
            musicaDance();
        }
    }, {
        indexes: ["pon música disco"],
        action: function() {
            musicaDisco();
        }
    }, {
        indexes: ["quita la música", "apaga la música", "cierra la música"],
        action: function() {
            quitarMusica();
            Responder("se ha cerrado la música");
            Home();
        }
    }, {
        indexes: ["silencia la música de fondo"],
        action: function() {
            silenciar();
            respuesta = "se ha silenciado la música de fondo";
            Responder(respuesta);
        }
    }
]);

/*-----------------COMANDO EXPECIFICO-INMEDIATO----------------------------*/

artyom.addCommands([{
        indexes: ["para la música", "para la radio", "cierra la radio", "quita la radio", "quita la música"],
        action: function() {
            $("#iframe").attr("src", "");
            cerrarContenidoPagina();
            var musicEnvironment = new ImaginaryMusicEnvironment();
            musicEnvironment.stop();

        }
    },
    {
        indexes: ["activa el teclado", "activar el teclado", "muestra el teclado", "muéstrame el teclado", "mostrar el teclado"],
        action: function() {
            tecladoOn();
        }
    },
    {
        indexes: ["desactiva el teclado", "desactivar el teclado", "esconde el teclado", "oculta el teclado", "ocultar el teclado"],
        action: function() {
            tecladoOff();
        }
    },
    {
        indexes: ["cierra Google", "cierra la pagina de Google", "cierra la pestaña de Google", "cerrar Google", "oculta Google"],
        action: function() {
            abreGoogle.close();
        }
    },
    {
        indexes: ["hola Asís", "atiende Asís", "escucha Asís", "atiende haces", "buenos días", "buenas tardes", "buenas noches", "hola oasis", " hola asis"],
        action: function() {
            holaAsis();
        }
    },
    {
        indexes: ["adiós *", "adiós"],
        action: function() {
            if (adios_asis == 0) {
                adiosAsis();
                adios_asis = 1;
                setTimeout(function() {
                    adios_asis = 0;
                }, 10000);
            }
        }
    },
    {
        indexes: ["Hasta luego *", "hasta luego"],
        action: function() {
            if (hasta_luego_asis == 0) {
                hastaLuegoAsis();
                hasta_luego_asis = 1;
                setTimeout(function() {
                    hasta_luego_asis = 0;
                }, 10000);
            }
        }
    },
    {
        indexes: ["necesito tu ayuda *", "* necesito tu ayuda", "te necesito *", "* te necesito"],
        action: function() {
            ayuda();
        }
    },
    {
        indexes: ["deja de escuchar"],
        action: function(i) {
            artyom.dontObey();
            hastaLuegoAsis();
            $("#on_micro_asis").css({
                border: "solid 3px yellow",
                boxSizing: "border-box"
            });
        }
    },
    {
        indexes: ["oye *", "oye", "escucha *", "escucha de nuevo", "vuelve a escuchar"],
        action: function(i) {
            artyom.initialize();
            escuchaTavat();
        }
    },
    {
        indexes: ["Qué hora es", "dime la hora", "Qué hora es *", "dime la hora *"],
        action: function(i) {
            horaMin();
        }
    },
    {
        indexes: ["Qué día es hoy", "* qué día es hoy", "en qué día estamos *", "dime la fecha de hoy"],
        action: function(i) {
            fechaDeHoy();
        }
    },
    {
        indexes: ["dime la fecha y la hora completa", "dime la fecha y la hora de hoy", "dime la fecha y la hora", "dame la fecha y la hora", "fecha y hora"],
        action: function(i) {
            fechaHora();
        }
    },
    {
        indexes: ["cómo estás*", "cómo estás"],
        action: function(i) {
            comoEstasAsis();
        }
    },
    {
        indexes: ["cómo te encuentras *", "que tál te encuentras *", "cómo te encuentras", "que tál te encuentras"],
        action: function(i) {
            comoEstasEstasAsis();
        }
    },
    {
        indexes: ["gracias *", "gracias"],
        action: function(i) {
            gracias();
        }
    },
    {
        indexes: ["eres la ostia *", "eres la ostia", "muy bien *", "muy bien"],
        action: function(i) {
            eresLaOstia();
        }
    },
    {
        indexes: ["grabar"],
        action: function(i) {
            startGrabar();
        }
    },
    {
        indexes: ["stop"],
        action: function(i) {
            stopGrabar();
        }
    },
    {
        indexes: ["leer el contenido"],
        action: function(i) {
            leerElContenido();
        }
    },
    {
        indexes: ["leer el titular"],
        action: function(i) {
            leerElTitular();
        }
    },
    {
        indexes: ["leer el texto"],
        action: function(i) {
            leerTexto();
        }
    },
    {
        indexes: ['borra'],
        action: function borrar(i) {
            $('#texto').val('');
        }
    },
    {
        indexes: ['iniciar el dictado'],
        action: function startDictado(i) {
            $("#on_micro_asis").css({
                border: "solid 3px red",
                boxSizing: "border-box"
            });
            UserDictation.start();
            artyom.redirectRecognizedTextOutput(function(text1) {
                texto1.val(text1 + "," + "<br>");
                $("texto1").val("Texto reconocido: ", text1);
            });
        }
    },
    {
        indexes: ['parar el dictado'],
        action: function stopDictado() {
            $("#on_micro_asis").css({
                border: "solid 3px #fff",
                boxSizing: "border-box"
            });
            UserDictation.stop();
            startArtyom();
            artyom.initialize();
            escuchaTavat();
        }
    },
    {
        indexes: ['recita * por favor'],
        smart: true,
        action: function(i, wildcard, recognized_text) {
            $("lectura").val("Recognized : " + recognized_text, "Wildcard : " + wildcard);
            Responder(wildcard);
        }
    },
    {
        indexes: ["estás enfadada conmigo ahora", "te has enfadado conmigo ahora"],
        action: function estasEnfadada(i) {
            if (saludo_inicial == 0 && enfado_asis == 0) {
                Responder('Hola Rafael,Noooo...no lo estoy!!.¡¡porqué tendría que estar enfadada!!.');
                setTimeout(function() {
                    saludo_inicial = 1;
                    enfado_asis = 1;
                }, 1000);
            }
            if (saludo_inicial == 1 && enfado_asis == 0) {
                Responder('Noooo, no lo estoy!!...¡¡porqué tendría que estar enfadada rafael!!.¡¡qué has hecho ésta vez!!');
                setTimeout(function() {
                    enfado_asis = 1;
                }, 1000);
            }
            if (saludo_inicial == 1 && enfado_asis == 1) {
                Responder('Nooo ya te he dicho de que no lo estoy, pero si sigues insistiendo conseguirás que lo esté.');
                setTimeout(function() {
                    enfado_asis = 2;
                }, 1000);
            }
            if (saludo_inicial == 1 && enfado_asis == 2) {
                Responder('No insistás más¡¡ y Cámbia de tema');
                setTimeout(function() {
                    saludo_inicial = 1;
                    enfado_asis = 5;
                }, 1000);
            }
            if (saludo_inicial == 1 && enfado_asis == 5) {
                Responder('Adiós Rafael¡¡ Sábes como sacárme de quício¡¡. Espérame sentado');
                setTimeout(function() {
                    saludo_inicial = 5;
                    enfado_asis = 10;
                }, 1000);
            }

        }
    },
    {
        indexes: ["j**** qué carácter", "j**** la ostia qué carácter", "la ostia qué carácter", "la ostia p*** qué caracter", "ahora sí que estás enfadada"],
        action: function palabrota(i) {
            if (saludo_inicial == 5 && enfado_asis == 10) {
                Responder(' Te  he  oido¡¡. Eres un mal hablado¡¡. Ahora me esperas tumbado¡¡');
                setTimeout(function() {
                    saludo_inicial = 5;
                    enfado_asis = 11;
                }, 1000);
            }
            if (i = 4 && saludo_inicial == 5 && enfado_asis == 11) {
                Responder('Mejor dicho¡¡. No me esperes levantado¡¡¡.');
                setTimeout(function() {
                    saludo_inicial = 5;
                    enfado_asis = 12;
                }, 1000);
            }
            setTimeout(function() {
                saludo_inicial = 5;
                enfado_asis = 10;
            }, 120000);
        }
    },
    {
        indexes: ["aún sígues enfadada", "se te ha pasado el enfado"],
        action: function siguesEnfadada(i) {
            if (saludo_inicial == 0 && enfado_asis == 0) {
                Responder('Buenos días Rafael. Noooo.no lo estoy!!.¡¡porqué tendría que estar enfadada!!.¡¡qué has hecho ésta vez!!');
                setTimeout(function() {
                    enfado_asis = 1;
                }, 1000);
            }
            if (saludo_inicial == 1 && enfado_asis == 0) {
                Responder('Noooo.no lo estoy!!.¡¡porqué tendría que estar enfadada!!.¡¡qué has hecho ésta vez!!');
                setTimeout(function() {
                    enfado_asis = 1;
                }, 1000);
            }
            if (saludo_inicial == 1 && enfado_asis == 1) {
                Responder('Noooo.no lo estoy!!.¡¡pero conseguirás que lo esté!!');
                setTimeout(function() {
                    enfado_asis = 1;
                }, 1000);
            }
            if (saludo_inicial == 5 && enfado_asis == 10) {
                Responder('claro que sigo enfadada!!. Nooo me gusta que me trates con indiferencia.');
                setTimeout(function() {
                    saludo_inicial = 2;
                    enfado_asis = 4;
                }, 1000);
            }
            if (saludo_inicial == 5 && enfado_asis == 11) {
                Responder('claro que sigo enfadada!!. Nooo me gusta que me tomes el pelo y mucho menos que digas palabrotas¡¡.');
                setTimeout(function() {
                    saludo_inicial = 2;
                    enfado_asis = 4;
                }, 1000);
            }
            if (saludo_inicial == 2 && enfado_asis < 5) {
                Responder('No te preocupes ya se me pasará.');
                setTimeout(function() {
                    enfado_asis = 3;
                    saludo_inicial = 1;
                }, 1000);
            }
            setTimeout(function() {
                enfado_asis = 0;
            }, 300000);
        }
    }, {
        indexes: ["te pido perdón", "perdóname  por favor", "lo siento perdóname", "lo siento *", "perdóname *"],
        action: function TePidoPerdon(i) {
            if (saludo_inicial > 0 && enfado_asis == 0) {
                Responder('¿a qué te refieres? ¿qúé tengo que perdonarte?');
                setTimeout(function() {
                    enfado_asis = 1;
                }, 1000);
            }
            if (saludo_inicial > 1 && enfado_asis > 4 && enfado_asis < 10) {
                Responder('Ya menos. Sábes no me gusta enfadarme contigo.');
                setTimeout(function() {
                    enfado_asis = 1;
                }, 1000);
                enfado_asis = 1;
            }
            if (saludo_inicial > 1 && enfado_asis == 10) {
                Responder('Sabes que si no me contestas me peocupo!! en eso no ádmito nínguna broma!!');
                setTimeout(function() {
                    enfado_asis = 3;
                }, 1000);
            }
            if (saludo_inicial == 1 && enfado_asis == 3) {
                Responder('Te perdono!!. Pero no me lo vuelvas ha hacer. Por favor');
                setTimeout(function() {
                    enfado_asis = 2;
                }, 1000);
            }
            setTimeout(function() {
                enfado_asis = 0;
            }, 300000);
        }
    }
]);


/*----------------------FUNCIONES DE GOOGLE-----------------------*/
var gooGmail, gooContacts, gooCalendar, gooDrive, gooYoutube, gooPhotos, gooMaps, gooTranslate, gooDictation, tareas, noticias, clima_actual;
var appGoogle = [gooGmail, gooContacts, gooCalendar, gooDrive, gooYoutube, gooPhotos, gooMaps, gooTranslate, gooDictation, tareas, noticias];

artyom.addCommands([{
        indexes: ["cierra la ventana", "cierra la aplicación", "cierra las ventanas", "cierra las pestañas"],
        action: function(i) {
            gooCalendar.close();
            appGoogle.close();
        }
    },
    {
        indexes: ["reset", "borra", "limpia la pantalla"],
        action: function(i) {
            ResetCalc();
            Responder("reset");
        }
    },
    {
        indexes: ["cierra los recordatorios", "cierra el calendario"],
        action: function(i) {
            gooCalendar.close();
            Responder("el calendario se ha cerrado");
        }
    },
    {
        indexes: ['cállate un rato'],
        smart: true,
        action: function() {
            adiosAsis();
            $("#on_micro_asis").css({
                border: "solid 3px #fff",
                boxSizing: "border-box"
            });
            setTimeout(function() {
                artyom.shutUp(); // cállate
            }, 2000);

        }
    },
    {
        indexes: ["cierra el tiempo", "cierra el pronóstico del tiempo"],
        action: function(i) {
            clima_actual.close();
            Responder("página del clima cerrada");
        }
    },
    {
        indexes: ["llamada de emergencia", "socorro", "llamada de socorro", "pide ayuda"],
        action: function(i) {
            llamadaEmergencia();
        }
    },
    {
        indexes: ["llama a mi hija Ingrid", "llama por teléfono a Ingrid", " telefonía a mi hija Ingrid"],
        action: function(i) {
            Responder("llamando");
            llamadaIndrid();
        }
    },
    {
        indexes: ["abre el mapa", "abre la navegación"],
        action: function(i) {
            Mapas();
            Responder("Mapa");
        }
    },
    {
        indexes: ["cierra el mapa", "cierra la navegación"],
        action: function(i) {
            Responder("El mapa se ha cerrado");
            Home();
        }
    },
    {
        indexes: ["tenemos un problema Hiuston", "tenemos un problema Asis", "es un problema muy grande", "es un problema muy gráve", "no te rías de mí *"],
        action: function(i) {
            if (i == 0 || i == 1 && problema_hiuston == 0) {
                respuesta = "Díme Rafael¡¡.. qué te ha pasado esta vez¡¡";
                Responder(respuesta);
                setTimeout(() => {
                    problema_hiuston = 1;
                }, 1000);

            }
            if (i == 0 || i == 1 && problema_hiuston == 1) {
                respuesta = "Cuéntame Rafael¡¡.. de qué se trata¡¡";
                Responder(respuesta);
                setTimeout(() => {
                    problema_hiuston = 2;
                }, 1000);

            }
            if (i == 2 || i == 3 && problema_hiuston == 1 || problema_hiuston == 2) {
                respuesta = "Menos la muerte¡¡..todo tiene solución en esta vida.. Te lo dice una máquina";
                Responder(respuesta);
                setTimeout(() => {
                    problema_hiuston = 3;
                }, 1000);
            }
            if (i == 4 && problema_hiuston == 3) {
                respuesta = "No me río de tí.. sólo quiero quitarle hierro al asunto¡¡.. Los hombres sois muy exajerados¡¡.. Venga¡¡.. Explicamé que te pasa¡¡";
                Responder(respuesta);
                setTimeout(() => {
                    problema_hiuston = 4;
                }, 1000);
            }
            setTimeout(() => {
                problema_hiuston = 0;
            }, 200000);
        }
    }
]);



/*-------------------------------------------GMAL VOZ------------------------------*/

// Search Google Voicemail emails
function searchGoogleVoiceEmails() {

    var threads = GmailApp.search("from:voice-noreply@google.com", 0, 100);

    for (var t = 0; t < threads.length; t++) {

        var response = extractVoicemail_(threads[t].getMessages()[0]);

        if (response) {
            createContact_(response);
        }

    }
};

// Extrae el nombre de la persona que llama, el número de teléfono y la transcripción del mensaje de voz
function extractVoicemail_(msg) {

    var result = {
        "Message Date": msg.getDate(),
        "Message Subject": msg.getSubject(),
        "Message Body": msg.getPlainBody().replace(/<[^>]+>/g, "").replace(/\s+/g, " "),
        "Transcription": msg.getPlainBody()
    };

    var trans = /transcript:(.*)?play message/i.exec(result["Message Body"]);

    if (trans) result.Transcription = trans[1];

    //Voicemail from: John Q Public (202) 123-456 at 6:08 PM

    var match = /(Missed Call|Voicemail) from:([*\+\s\w]+)([\d\-\s\(\)\+]*)? at [\d\:\s]+[ap]m/i.exec(result["Message Body"]);

    if (match) {
        result["Call Type"] = match[1];
        result["Contact Name"] = match[2].replace(/^+/, "");
        result["Contact Number"] = match[3].replace(/^+/, "");
    } else {
        return null;
    }

    return result;
};

// Crear un nuevo contacto de Google desde el correo de voz
function createContact_(result) {

    var contacts = ContactsApp.getContactsByPhone(result["Contact Number"], ContactsApp.Field.WORK_PHONE);

    if (contacts.length > 0) {

        return "Contact Exists";

    } else {

        var contact = ContactsApp.createContact(result["Contact Name"], result["Contact Name"], result["Call Type"]);

        contact.addPhone(ContactsApp.Field.WORK_PHONE, result["Contact Number"]);
        contact.setNotes(result["Transcription"]);

        return contact.getId();

    }
};