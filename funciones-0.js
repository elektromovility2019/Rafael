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

var setTimeout;
var setInterval;
var tiempo_responder;
var setTempo;
var saludo_f_h;

/*----------------------ARRANCAR ARTYOM AL INICIO----------------------------------*/
artyom.initialize({
    lang: 'es-ES',
    recognizing: true,
    continuous: true,
    speed: 1,
    volume: 1,
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
    soundex: false,
    smart: true
});

window.onload = function () {
    var artyom = new Artyom();
    artyom.initialize();
};

function StartArtyom() {
    artyom.initialize();

};
StartArtyom();

// Stop libreria;
function stopArtyom() {
    artyom.fatality(); // Detener cualquier instancia previa
};

/*---------------------------FECHA HORA-----------------------*/
function fechaHora() {
    respuesta = fecha_hora;
    Responder(respuesta);
};

function horaMin() {
    respuesta = hora_min;
    Responder(respuesta);
};
/*----------------------------FUNCION FECHA ACTUAL---------------------------*/

function fechaDeHoy() {
    respuesta = fecha_actual;
    Responder(respuesta);
};

/*-----------------------------FUNCION LEER------------------------------*/

function startRespuesta() {
    $("#on_micro_asis").addClass("none");
    $("#off_micro_asis").removeClass("none");
    $("#row_uno_col2").css({
        border: "solid 2px #0ef50eaf",
        backgroundColor: "#000"
    });
    $texto0.innerHTML = ("");
};

/*--------------------------STOP LECTURA------------------------*/

function stopRespuesta() {
    $("#on_micro_asis,#on_altavoz_asis").removeClass("none");
    $("#off_micro_asis,#off_altavoz_asis").addClass("none");
    $("#texto0").innerHTML = ("");
    $("#texto1").addClass("none");
    $("#texto0").removeClass("none");
};


/*-----------------------FUNCION LEER CONTENIDO----------------------*/
const contenido0 = document.getElementById("contenido0");
const contenido1 = document.getElementById("contenido1");
const contenido2 = document.getElementById("contenido2");
const contenido3 = document.getElementById("contenido3");

function leerElContenido() {
    Responder("iniciando lectura automática");
    setTimeout(function () {
        Responder(contenido0.innerText);
        $("#contenido0").css("border", "solid 5px green");
        $("#h2_contenido0").css("backgroundColor", "green");
        setTimeout(function () {
            $("#contenido0").css("border", "none");
            $("#h2_contenido0").css("backgroundColor", "#000");
            $("#contenido1").css("border", "solid 5px green");
            $("#h2_contenido1").css("backgroundColor", "green");
            Responder(contenido1.innerText);
            setTimeout(function () {
                $("#contenido1").css("border", "none");
                $("#h2_contenido1").css("backgroundColor", "#000");
                $("#contenido2").css("border", "solid 5px green");
                $("#h2_contenido2").css("backgroundColor", "green");
                Responder(contenido2.innerText);
                setTimeout(function () {
                    $("#contenido2").css("border", "none");
                    $("#h2_contenido2").css("backgroundColor", "#000");
                    $("#contenido3").css("border", "solid 5px green");
                    $("#h2_contenido3").css("backgroundColor", "green");
                    Responder(contenido3.innerText);
                    setTimeout(function () {
                        $("#contenido3").css("border", "none")
                        $("#h2_contenido3").css("backgroundColor", "#000");
                        Responder("fin del texto");
                    }, 1000);
                }, 2000);
            }, 3000);
        }, 4000);
    }, 5000);
};

function leerElClima() {
    Responder("iniciando lectura automática");
    setTimeout(function () {
        Responder(contenido0.innerText);
        $("#contenido0").css("border", "solid 5px green");
        $("#h2_contenido0").css("backgroundColor", "green");
        setTimeout(function () {
            $("#contenido0").css("border", "none");
            $("#h2_contenido0").css("backgroundColor", "#000");
            $("#contenido1").css("border", "solid 5px green");
            $("#h2_contenido1").css("backgroundColor", "green");
            Responder(contenido1.innerText);
            setTimeout(function () {
                $("#contenido1").css("border", "none");
                $("#h2_contenido1").css("backgroundColor", "#000");
                $("#contenido2").css("border", "solid 5px green");
                $("#h2_contenido2").css("backgroundColor", "green");
                Responder(contenido2.innerText);
                setTimeout(function () {
                    $("#contenido2").css("border", "none");
                    $("#h2_contenido2").css("backgroundColor", "#000");
                    $("#contenido3").css("border", "solid 5px green");
                    $("#h2_contenido3").css("backgroundColor", "green");
                    Responder(contenido3.innerText);
                    setTimeout(function () {
                        $("#contenido3").css("border", "none")
                        $("#h2_contenido3").css("backgroundColor", "#000");
                        Responder("fin del texto");
                    }, 1000);
                }, 2000);
            }, 3000);
        }, 4000);
    }, 5000);
};
const home = document.getElementById("main_home");
const menu_home = document.getElementById("menu_tavat");
const info_dia = document.getElementById("reloj");

function leerPagina() {
    Responder(menu_home.innerText);
    Responder(home.innerText);
    infoDia();
};
const not_actualidad = document.getElementById("main_actualidad");

function leerActualidad() {
    setTimeout(() => {
        Responder(not_actualidad.innerText);
    }, 2000);

    Actualidad();
};

function infoDia() {
    respuesta = "Hola Rafael..te detallo cómo estamos en estos momentos en " + info_dia.innerText + "esto es todo";
    Responder(respuesta);
};

/*----------------------------FUNCION LEER TEXTO-------------------*/

function leer(texto) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};

/*------------------------------FUNCION Responder-------------------------*/
artyom.redirectRecognizedTextOutput(function (text, isFinal) {
    if (isFinal) {
        $texto0.val(text + artyom.isSpeaking().toString());
        setTimeout(function () {
            $texto0.innerHTML = ("");
        }, 5000);
    } else {
        $texto0.val(text + artyom.isSpeaking().toString());
    }
});
/*--------------------------RESPONDER--------------------*/

function Responder(texto) {
    var tiempo_responder = 5000;
    artyom.dontObey();
    $("#on_micro_asis").addClass("none");
    $("#off_micro_asis").removeClass("none");
    $("#row_uno_col2").css({
        border: "solid 2px #0ef50eaf",
        backgroundColor: "#000"
    });
    setTimeout(function () {
        $("#texto0").addClass("none");
        $("#texto1").removeClass("none");
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        $texto0.innerHTML = ("");
        $texto1.innerHTML = (texto);
    }, 500);
    if (pag_google == 0) {
        $("#texto0").focus();
    };
    if (pag_google == 1) {
        $("#texto_google").focus();
    };
    setTimeout(function () {
        $texto0.innerHTML = ("");
    }, 10000);

    setTimeout(function () {
        $texto0.innerHTML = ("");
        $texto1.innerHTML = ("");
        $("#on_micro_asis").removeClass("none");
        $("#off_micro_asis").addClass("none");
        $("#row_uno_col2").css({
            border: "solid 2px #000",
            backgroundColor: "rgba(0,0,0,0.5)"
        });
        setTimeout(() => {
            artyom.obey();
        }, 2000);
        tiempo_responder = 5000;
    }, tiempo_responder);
};

/*----------------------------REPETIR------------------------*/
function repetirRespuesta() {
    if (repetir_respuesta == 0) {
        Responder(respuesta);
        setTimeout(function () {
            repetir_respuesta = 1
        }, 1000);
    }
    if (repetir_respuesta == 1) {
        Responder("Qué¡¡¡ " + respuesta);
        setTimeout(function () {
            repetir_respuesta = 2
        }, 1000);
    }
    if (repetir_respuesta == 2 && te_haces_el_sordo == false) {
        Responder(" ¨Rafael¡¡ estás cada vez más sordo¡¡. Te lo repito por última vez¡¡.. " + respuesta);
        setTimeout(function () {
            repetir_respuesta = 2
        }, 1000);
    }
};

function teHacesElSordo() {
    if (repetir_respuesta > 1 && te_haces_el_sordo == false) {
        respuesta = "Sé qué siempre me oyes¡¡.. y sólo me quieres hacer enrrabiar. Rafael¡¡ te conozco cómo si te hubiera parido";
        Responder(respuesta);
        setInterval(() => {
            te_haces_el_sordo == true;
        }, 1000);
    }
    if (repetir_respuesta > 2 && te_haces_el_sordo == true) {
        te_haces_el_sordo = null;
        Responder("cómo te gusta tocarme lo que no suena¡¡....")
        setInterval(() => {
            te_haces_el_sordo = false;
        }, 10000);
    }
};

/*---------------------DICTADO-------------------*/

var UserDictation = artyom.newDictation({
    continuous: true,
    onResult: function (text) {
        startRespuesta();
        $texto1.innerHTML = (text);
    },
    onStart: function () {
        $("#off_altavoz_asis").css("border", "solid 2px red");
    },
    onEnd: function () {
        $("#off_altavoz_asis").css("border", "#solid 2px #fff");

    }
});

function startDictado() {
    $texto1.innerHTML = ("");
    $("#texto0").addClass("none");
    $("#texto1").removeClass("none");
    $("#on_altavoz_asis").addClass("none");
    artyom.fatality();
    UserDictation.start();
    $("#off_altavoz_asis").css({
        backgroundColor: "yellow",
        display: "flex"
    });
};

function stopDictado() {
    $("#texto0").removeClass("none");
    $("#texto1").addClass("none");
    $("#off_altavoz_asis").addClass("none");
    UserDictation.stop();
    artyom.initialize();
    $("#on_altavoz_asis").css({
        backgroundColor: "#fff",
        display: "flex"
    });
    $("#texto0").focus();
};

/*--------------------------------FUNCION SALUDO--------------------*/

var fechaActual = new Date();
var Horas = fechaActual.getHours();
var saludo_inicial = 0;
var usuario = "Rafael";



/*------------------------------HOLA ASIS------------------------------*/

function holaAsis() {
    startRespuesta();
    if (saludo_inicial == 0) {
        respuesta = saludo + usuario;
        Responder(respuesta);
        setTimeout(function () {
            saludo_inicial = 1;
        }, 3000);
    }
    if (saludo_inicial == 1 && enfado_asis == 0) {
        respuesta = "Díme Rafael";
        Responder(respuesta);
        setTimeout(function () {
            saludo_inicial = 2;
        }, 3000);
    }
    if (saludo_inicial == 2 && enfado_asis == 0) {
        Responder('Díme...');
        setTimeout(function () {
            saludo_inicial = 3;
        }, 3000);
    }
    if (saludo_inicial == 3 && enfado_asis == 0) {
        Responder('ya te he oido!.Nooo estoy sorda!');
        setTimeout(function () {
            saludo_inicial = 4;
            enfado_asis = 10;
        }, 3000);
    }
    setTimeout(function () {
        stopRespuesta();
    }, 5000);
    setTimeout(function () {
        saludo_inicial = 0;
        enfado_asis = 0;
    }, 500000);
};

/*---------------------------ADIOS ASIS--------------------------*/
function adiosAsis() {
    $("#off_micro_asis").fadeOut();
    $("#on_micro_asis").fadeIn();
    respuesta = "Adiós Rafael";
    Responder(respuesta);
    saludo_inicial = 1;
    setTimeout(function () {
        saludo_inicial = 0;
    }, 60000);
};

function hastaLuegoAsis() {
    $("#on_micro_asis").fadeIn();
    $("#off_micro_asis").fadeOut();
    Responder("hasta luego Rafael");
};
/*-------------------leer texto ESCRITO-------------------------------------*/
function leerTexto1(text) {
    $("#on_altavoz_asis").fadeOut();
    $("#off_altavoz_asis").fadeIn();
    startRespuesta();
    var text = $('#texto0').val();
    lectura_texto = 0;
    texto_memorizado = text;
    if (text.length == 0) {
        respuesta = "No hay nada éscrito en el recuadro del texto.";
        Responder(respuesta);
        setTimeout(function () {
            respuesta = "Todos los textos memorizados son eliminados a los pocos minutos sí no me índicas lo contrario.";
            Responder(respuesta);
        }, 4000);
    }
};
/*-------------------leer texto ESCRITO-------------------------------------*/
function leerTexto0(e) {
    e.preventDefault();
    var text = $('#texto2').val();
    texto_memorizado = text;
    if (text) {
        var lines = $("#texto2").val().split("\n").filter(function (e) {
            return e
        });
        var totalLines = lines.length - 1;
        for (var c = 0; c < lines.length; c++) {
            var line = lines[c];
            if (totalLines == c) {
                Responder("te leo");
                respuesta = line;
                Responder(line);
                setTimeout(function () {
                    Responder("esto es todo");
                    $('#texto0').val("");
                    stopRespuesta();
                }, 3000);
            }
        }
    }
};

/*---------------------PAGINAS TAVAT  MENU NAVEGACION --------------------------------*/
var Home;
var Actualidad;
var canalesTv;
var Descargas;
var Documentos;
var Gmail;
var Google;
var Imagenes;
var Juegos;
var Musica;
var Programas;
var radioFm;
var Redes;
var Videos;
var Youtube;
var $my_video = document.getElementById("my_video");

function FullScreen() {
    if (menu_sup == 1) {
        $("#menu_tavat").addClass("none");
        $(".contenedor").css("top", "50px");
        $(".container").css("top", "-320px");
        $("#contenedor_google").css("top", "200px");
    }
    if (menu_sup == 0) {
        $("#menu_tavat").addClass("none");
        $("#contenedor_radio_fm").css("top", "75px");
        $(".contenedor").css("top", "-50px");
        $("#contenedor_google").css("top", "200px");
    }
};

function minContenido() {
    if (menu_sup == 1) {
        $("#menu_tavat").removeClass("none");
        $(".contenedor").css("top", "120px");
        $(".container").css("top", "-190px");
        $("#iframe").css("top", "110px");
        $("#contenedor_google").css("top", "250px");
        Responder("minimizada");
        if (iframe == 1) {
            Contraste();
        }
    }
    if (menu_sup == 0) {
        $("#menu_tavat").removeClass("none");
        $("#contenedor_radio_fm").css("top", "75px");
        $(".contenedor").css("top", "-50px");
        $("#contenedor_google").css("top", "250px");
        Responder("minimizada");
        if (iframe == 1) {
            Contraste();
        }
    }
};

function maxContenido() {
    FullScreen();
    respuesta = "maximizada";
    Responder(respuesta);
};

function cerrarContenidoPagina() {
    $(".main,.contenedor").addClass("none");
    $("#main_home,#contenedor_home").removeClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    minContenido();
    Home();
    respuesta = "la pestaña se ha cerrado";
    Responder(respuesta);
};

/*-------------------------------VARIOS---------------------------*/

function cerrarGoogle() {
    cerrarContenidoPagina();
    respuesta = "Google se ha cerrado";
    Responder(respuesta);
};

function onModosAcceso() {
    $("#botoneracol1,#botoneracol3").removeClass("none");
    respuesta = "la barra de configuracion personal está visible";
    Responder(respuesta);
};

function offModosAcceso() {
    $("#botoneracol1,#botoneracol3").addClass("none");
    respuesta = "la barra de configuracion personal se ha ocultado";
    Responder(respuesta);
};


/*----------------------MENU APOLICACIONES DE GOOGLE----------------------------*/
var gooGmail, gooContacts, gooCalendar, gooDrive, gooYoutube, gooPhotos, gooMaps, gooTranslate, gooDictation, gootareas, goonoticias;

function GooGmail() {
    gooGmail = window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl", "_target ");
};

function GooContacts() {
    gooContacts = window.open("https://contacts.google.com/?hl=es&tab=rC", "_target");
};

function GooCalendar() {
    gooCalendar = window.open("https://calendar.google.com/calendar/r?tab=Tc&pli=1 ", "_target");
};

function GooDrive() {
    Driver = window.open("https://drive.google.com/drive/u/0/", "_target");
};

function GooYoutube() {
    gooYoutube = window.open("https://www.youtube.com/?gl=ES&hl=es", "_target");
};

function GooPhotos() {
    gooPhotos = window.open("https://photos.google.com/?tab=Cq&pageId=none", "_target");
};

function GooMaps() {
    gooMaps = window.open("https://www.google.es/maps?hl=es&tab=ql&authuser=0", "_target");
};

function GooDocs() {
    gooDocs = window.open("https://docs.google.com/document/u/0/", "_target");
};

function GooTranslate() {
    gooTranslate = window.open("https://translate.google.es/?hl=es&tab=rT&authuser=0", "_target");
};

function GooDictation() {
    gooDictation = window.open("https://dictation.io/speech", "_target");
};

function GooTareas() {
    gootareas = window.open("https://tavat.monday.com/boards/651654773", "_target");
};

function GooNoticias() {
    gooNoticias = window.open("https://www.europapress.es/", "_target");
};

/*-----------------------FUNCION BUSCAR EN GOOGLE----------------------------------*/

var texto = document.getElementById("texto");
var buscar = document.getElementById("buscar");

function buscarEnGoogle2() {
    window.open('https://www.google.com/search?q= ' + texto.value, +'_target, width=1380, height=1000px, left=0, top=0px');
    Responder("Te muestro algunas busquedas relacionadas con" + texto.value);
    texto.innerHTML = "";
    texto.value = "";
    borrar();
};

// Hide Header on on scroll down

var didScroll;
var lastScrollTop = 5;
var delta = 1;
var navbarHeight = $('#key_vir').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.

    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $("#texto0").focus();
        $("#key_vir").css({
            top: "1100px",
            opacity: "0"
        });
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $("#key_vir").css({
                top: "350px",
                opacity: "1"
            });
        }
        lastScrollTop = st;
    }
};

//------------MOSTRAR OCULUTAR TMENU SUPERIOR----------------*/

function offMenuSuperior() {
    if (menu_sup == 1) {
        setTimeout(function () {
            $("#off_menu_sup").addClass("none");
            $("#on_menu_sup").removeClass("none");
        }, 2000);
        $("#row_dos").css("top", "-200px");
        $("#inavcol1").css("left", "-75px");
        $("#inavcol3").css("right", "-35px");
        $("#botoneracol1,#botoneracol3").removeClass("none");
        $('#botoneracol1').removeClass('row_sup_lef');
        $('#botoneracol3').removeClass('row_sup_rig');
        $('#botoneracol1').addClass('col_sup_lef');
        $('#botoneracol3').addClass('col_sup_rig');
        $("#botoneracol1,#botoneracol3").removeClass("none");
        $("#main_radio_fm").css("top", "-130px");
        $(".contenedor").css("top", "120px");
        $("#on_menu_lat").addClass("none");
        $("#off_menu_lat").removeClass("none");
        Responder("el menú superior de configuración se ha ocultado");
        setInterval(function () {
            menu_sup = 0;
        }, 100);
    }
};

function onMenuSuperior() {
    if (menu_sup == 0) {
        setTimeout(function () {
            $("#on_menu_sup").addClass("none");
            $("#off_menu_sup").removeClass("none");
        }, 2000);
        $("#row_dos").css("top", "52px");
        $("#inavcol1").css("left", "0px");
        $("#inavcol3").css("right", "0px");
        $("#botoneracol1,#botoneracol3").removeClass("none");
        $('#botoneracol1').removeClass('col_sup_lef');
        $('#botoneracol3').removeClass('col_sup_rig');
        $('#botoneracol1').addClass('row_sup_lef');
        $('#botoneracol3').addClass('row_sup_rig');
        $("#main_radio_fm").css("top", "-90px");
        $(".contenedor").css("top", "120px");
        $("#on_menu_lat").removeClass("none");
        $("#off_menu_lat").addClass("none");
        Responder("el menú superior de configuración está visible");
        setInterval(function () {
            menu_sup = 1;
        }, 100);
    }
};

/*------------Pasar de menu superior a menu lateral----------------*/

function onMenuLateral() {
    offMenuSuperior();
    setTimeout(function () {
        $("#on_menu_lat").addClass("none");
        $("#off_menu_lat").removeClass("none");
    }, 2000);
    $("#row_dos").css("top", "-200px");
    $("#inavcol1").css("left", "-75px");
    $("#inavcol3").css("right", "-35px");
    $(".botonera").removeClass("none");
    $("#off_menu_sup").addClass("none");
    $("#on_menu_sup").removeClass("none");
    Responder("las barras de herramientas y opciones laterales están visibles");
};

function offMenuLateral() {
    $("#inavcol1").css("left", "-150px");
    $("#inavcol3").css("right", "-150px");
    setTimeout(function () {
        $("#off_menu_lat").addClass("none");
        $("#on_menu_lat").removeClass("none");
    }, 2000);
    $(".botonera, #botoneracol1").addClass("none");
    Responder("las barras de opciones y herramientas laterales se han ocultado");
};

//------------MOSTRAR OCULUTAR TECHADO VIRTUAL----------------*/

function tecladoOn() {
    if (menu_sup == 1 && teclado == 0) {
        setTimeout(function () {
            $("#on_key_vir").addClass("none");
            $("#off_key_vir").removeClass("none");
        }, 2000);
        $("#key_vir").removeClass('nav-up');
        $("#texto").focus();
        $("#key_vir").removeClass("none");
        $("#key_vir").css({
            height: "242px",
            border: "4px solid #1be21b",
            backgroundColor: "#1be21b",
            boxShadow: "12px 12px 12px -7px #1be21b ) ",
            top: "350px"
        });
        $("#row_dos,#row_uno_col1,#row_uno_col3").addClass("none");
        $("#contenedor_musica,#contenedor_google").css("top", "200px");
        $(".contenedor").css("top", "-15px");
        $("#contenedor_google").css("top", "130px")
        Responder("el teclado táctil en la pantalla está visible");
        setInterval(function () {
            teclado = 1;
        }, 1000);
    }
    if (menu_sup == 0 && teclado == 0) {
        setTimeout(function () {
            $("#on_key_vir").addClass("none");
            $("#off_key_vir").removeClass("none");
        }, 2000);
        $("#key_vir").removeClass('nav-up');
        $("#texto").focus();
        $("#key_vir").removeClass("none");
        $("#key_vir").css({
            height: "242px",
            border: "4px solid #1be21b",
            backgroundColor: "#1be21b",
            boxShadow: "12px 12px 12px -7px #1be21b ) ",
            top: "350px"
        });
        $("#row_dos,#row_uno_col1,#row_uno_col3").addClass("none");
        $("#contenedor_radio_fm").css("top", "75px");
        $("#contenedor_musica,#contenedor_google").css("top", "200px");
        $(".contenedor").css("top", "-15px");
        $("#contenedor_google").css("top", "-80px")
        Responder("el teclado táctil en la pantalla está visible");
        setInterval(function () {
            teclado = 1;
        }, 1000);
    }
    setInterval(function () {
        if (google == 0) {
            $("#texto0").focus();
        }
        if (google == 1) {
            $("#texto0").addClass("none");
            $("#texto1").removeClass("none");
            $("#texto_google").focus();
        }
    }, 7000);
};

function tecladoOff() {
    if (menu_sup == 1) {
        setTimeout(function () {
            $("#off_key_vir").addClass("none");
            $("#on_key_vir").removeClass("none");
        }, 2000);
        $("#key_vir").addClass("none");
        $("#key_vir").css({
            height: "0",
            top: "1100px"
        });
        $("#row_dos,#row_uno_col1,#row_uno_col3").removeClass("none");
        $("#contenedor_musica,#contenedor_google").css("top", "250px");
        $(".contenedor").css("top", "120px");
        $("#contenedor_google").css("top", "260px");
        Responder("el teclado táctil de la pantalla se ha ocultado");
        setInterval(function () {
            teclado = 0;
        }, 1000);
    }
    if (menu_sup == 0) {
        setTimeout(function () {
            $("#off_key_vir").addClass("none");
            $("#on_key_vir").removeClass("none");
        }, 2000);
        $("#key_vir").addClass("none");
        $("#key_vir").css({
            height: "0",
            top: "1100px"
        });
        $("#row_dos,#row_uno_col1,#row_uno_col3").removeClass("none");
        $("#contenedor_radio_fm").css("top", "75px");
        $("#contenedor_musica,#contenedor_google").css("top", "250px");
        $(".contenedor").css("top", "120px");
        $("#contenedor_google").css("top", "30px");

        Responder("el teclado táctil de la pantalla se ha ocultado");
        setInterval(function () {
            teclado = 0;
        }, 1000);
    }

    setInterval(function () {
        if (google == 0) {
            $("#texto0").focus();
        }
        if (google == 1) {
            $("#texto2").addClass("none");
            $("#texto1").removeClass("none");
            $("#texto_google").focus();
        }
    }, 7000);
};

/* -------------------------EMISORAS DE RADIO-------------------*/
var vent_catalunya_radio, vent_radio_flaixbac, vent_radio_flaix_fm, vent_radio_rac_1, vent_noticias1, vent_musica_dance, vent_musica_disco;

function CatalunyaRadio() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_rfm").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_catalunya_radio = window.open('https://www.ccma.cat/catradio/', 'CatalunyaRadio', 'width=1350,  height=500, left=0, top=250');
    Responder("Catalunya Radio");
    radioFm = true;
};

function RadioFlaixBac() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_rfm").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_radio_flaixbac = window.open('https://www.flaixbac.cat/', 'RadioFlaixBac', 'width=1350,  height=500, left=0, top=250');
    Responder("Radio Flaixbac");
    radioFm = true;
};

function RadioFlaixFm() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_rfm").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_radio_flaix_fm = window.open('https://www.flaixfm.cat/', 'RadioFlaixFm', 'width=1350,  height=500, left=0, top=250');
    Responder("Radio Flaix FM");
    radioFm = true;
};

function RadioRac1() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_rfm").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main").addClass("none");
    vent_radio_rac_1 = window.open('https://www.rac1.cat/directe', 'RadioRac1', 'width=1350,  height=500, left=0, top=250');
    Responder("Radio Rac 1");
    radioFm = true;
};

function Noticias1() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_rfm").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_noticias1 = window.open('https://www.inoreader.com/all_articles', 'noticias1', 'width=1370,  height=500, left=-10, top=250');
    Responder("Noticias");
    noticias1 = true;
};

var vent_musica_dance;
var vent_musica_disco;

function quitarMusicaDance() {
    vent_musica_dance.close();
};

function quitarMusicaDisco() {
    vent_musica_disco.close();
};

function quitarMusica() {
    quitarMusicaDance();
    quitarMusicaDisco();
};

function musicaDance() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_mus").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_musica_dance = window.open('https://youtu.be/jfrdntUFX5A', 'musicaFondoDance', 'width=1370,  height=500, left=-10, top=250');
    respuesta = "música dance de fondo";
    quitarMusicaDisco();
    return Responder(respuesta);
};

function musicaDisco() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_mus").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_musica_disco = window.open('https://youtu.be/g9yjVbJ2YdM', 'musicaFondoDisco', 'width=1370,  height=500, left=-10, top=250');
    respuesta = "Música disco de fondo";
    quitarMusicaDance();
    return Responder(respuesta);
};

function CerrarVentanas() {
    vent_catalunya_radio.close();
    vent_radio_flaixbac.close();
    vent_radio_flaix_fm.close();
    vent_radio_rac_1.close();
    vent_noticias1.close();

}
/*----------------------CANALES DE TELEVISION----------------------------*/
var vent_antena3;

function Antena3() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_tv").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_antena3 = window.open('https://www.atresplayer.com/directos/antena3/', '_blank', 'width=1370,  height=500, left=-10, top=250');
};

var vent_tele5;

function Tele5() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_tv").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_tele5 = window.open('https://www.telecinco.es/endirecto/', '_blank', 'width=1370,  height=500, left=-10, top=250');
};
var vent_lasexta

function LaSexta() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_tv").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_lasexta = window.open('https://www.atresplayer.com/directos/lasexta/', '_blank', 'width=1370,  height=500, left=-10, top=250');
};

var vent_lacuatro;

function LaCuatro() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_tv").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_lacuatro = window.open('https://www.cuatro.com/en-directo/', '_blank', 'width=1370,  height=500, left=-10, top=250');
};

var vent_tv3;

function TV3() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_tv").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_tv3 = window.open('https://www.ccma.cat/tv3/directe/tv3/', '_blank', 'width=1370,  height=500, left=-10, top=250');
};

var vent_tve;

function TVE() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_tv").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_tve = window.open('https://www.rtve.es/directo/la-1/', '_blank', 'width=1370,  height=500, left=-10, top=250');
};

var vent_la2;

function La2() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_tv").addClass("encendido");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_la2 = window.open('https://www.rtve.es/directo/la-2/', '_blank', 'width=1370,  height=500, left=-10, top=250');
};


/*-------------------- DÏALOGOS CON ASIS----------------------*/

function gracias() {
    Responder("De nada Rafael");
};

function comoEstasAsis() {
    Responder("Muy bien,por aquí dentro andamos, un poco apretaditos entre tantos ceros y unos, pero muy contenta en poder compartir mi tiempo contigo");
};

function comoEstasEstasAsis() {
    Responder("¡yá lo ves! ¡un poco extresada!,aquí,organizando carpetas y archivos y ordenando bytes como una loca, ¡me lo dejáis todo por medio! y después me cuesta encontar las cosas");
};

function ayudaAsis() {
    Responder("Díme rafael, en qué puedo ayudarte?");
};

function eresLaOstiaAsis() {
    Responder("hago lo que puedo");
};

/*---------------------------FUNCIONES DE PANTALLA USUARIO-------------------*/

function Contraste() {
    $("#row_cuatro").css("backgroundColor", "#000");
    $("#carrusel_fondo_home").addClass("none");
    respuesta = "el contraste está activo";
    Responder(respuesta);
};

function resetOpciones() {
    $("#row_cuatro").css("backgroundColor", "");
    $("#carrusel_fondo_home").removeClass("none");
    $(".contenido").css("transform", "scale(1,1)");
    respuesta = "configuracion original de pantalla restablecida";
    Responder(respuesta);
};

function Agrandar() {
    $(".contenido").css("transform", "scale(1.5,1.5)");
    respuesta = "contenido aumentado";
    Responder(respuesta);
};

function Disminuir() {
    $(".contenido").css("transform", "scale(.7,.7)");
    respuesta = "contenido disminuido";
    Responder(respuesta);
};

function cerrarGoogle() {
    cerrarContenidoPagina();
    Responder("Google se ha cerrado");
};

/*-----------------FUNCION DE VOLUMEN--------------------*/

var $mus_fondo = document.getElementById("mus_fondo");
var $src_mus_fondo = document.getElementById("src_mus_fondo");

function silenciar() {
    $mus_fondo.volume = 0;
    $("#div_silenciar,#img_silenciar").css({
        backgroundColor: "red",
        border: "none"
    });
    $("#img_bajar_volumen,#img_subir_volumen").css({
        backgroundColor: "#fff",
        border: "none"
    });
    $("#div_bajar_volumen,#div_subir_volumen").css({
        backgroundColor: "#000",
        border: "none"
    });
};

function masVolumen() {
    $mus_fondo.volume = 1;
    $("#div_subir_volumen,#img_subir_volumen").css({
        backgroundColor: "hsl(108, 90%, 48%)",
        border: "none"
    });
    $("#img_bajar_volumen,#img_silenciar").css({
        backgroundColor: "#fff",
        border: "none"
    });
    $("#div_bajar_volumen,#div_silenciar").css({
        backgroundColor: "#000",
        border: "none"
    });
};

function menosVolumen() {
    $mus_fondo.volume = 0.2;
    $("#div_bajar_volumen,#img_bajar_volumen").css({
        backgroundColor: "#fff",
        border: "solid 3px #fff"
    });
    $("#img_subir_volumen,#img_silenciar").css({
        backgroundColor: "#fff",
        border: "none"
    });
    $("#div_subir_volumen,#div_silenciar").css({
        backgroundColor: "#000",
        border: "none"
    });
};

/*-----------------------FUNCIONES CLICK MENU PRINCIPAL-------------------*/

function Home() {
    $(".main,.contenedor,.main_continente,#iframe_home,#mus_fondo").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_home").addClass("encendido");
    $("#carrusel_fondo_google,#main_calendario,#main_calculadora,#main_mapas,#main_actualidad,#contenedor_actualidad").addClass("none");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico").removeClass("none");
    $mus_fondo.pause();
    cerrarNavegador();
    buscaEnGoogle.close();
    abreWhatsapp.close();
    vent_noticias1.close();
};

function cerrarNavegador() {
    abre_google.close();
}
var vent_act;

function Actualidad() {
    $(".main,.contenedor,.main_continente,#reloj_analogico,#info_asis,#iframe_clima").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_act").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_actualidad,#contenedor_actualidad").removeClass("none");
    vent_act = window.open('https://www.inoreader.com/all_articles', '_blank', 'width=1350,  height=500, left=0, top=250');
    respuesta = "Actualidad. Te muestro las noticias más importantes del momento";
    Responder(respuesta);
};

function CanalesTv() {
    $(".main,.contenedor,.main_continente").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_tv").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_canales_tv,#contenedor_canales_tv,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function RadioFm() {
    $(".main,.contenedor,.main_continente").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_rfm").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_radio_fm,#contenedor_radio_fm,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Google() {
    $(".main,.contenedor,.main_continente,#reloj_analogico,#info_asis,#iframe_clima").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_goo").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_google,#carrusel_fondo_google,#contenedor_google").removeClass("none");
    $("#texto_google").focus();
    google = 1;
};

var vent_youtube;

function Youtube() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_ytb").addClass("encendido");
    $("#carrusel_fondo_google,.main,.contenedor,.main_continente").addClass("none");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico").removeClass("none");
    vent_youtube = window.open('https://www.youtube.com/?gl=ES&hl=es', '_blank', 'width=1350,  height=500, left=0, top=250');
};

var vent_facebook = "https://www.facebook.com/";

function Facebook() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_fcb").addClass("encendido");
    $("#carrusel_fondo_google,.main,.contenedor,.main_continente").addClass("none");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico").removeClass("none");
    window.open(vent_facebook, '_blank', 'width=1350,  height=500, left=0, top=250');
};

function Facebook2() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_fcb").addClass("encendido");
    vent_facebook = window.open('https://www.facebook.com/', '_blank', 'width=1350,  height=500, left=0, top=250');
};
var vent_whatsapp;

function Whatsapp() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_whsp").addClass("encendido");
    $("#carrusel_fondo_google,.main,.contenedor,.main_continente").addClass("none");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico").removeClass("none");
    vent_whatsapp = window.open('https://web.whatsapp.com/', '_blank', 'width=1350,  height=500, left=0, top=250');
};

function Whatsapp2() {
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_whsp").addClass("encendido");
    vent_whatsapp = window.open('https://web.whatsapp.com/', '_blank', 'width=1350,  height=500, left=0, top=250');
};
var vent_instagram;

function Instagram() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_instagram = window.open('https://www.instagram.com/?hl=es', '_blank', 'width=1350,  height=500, left=0, top=250');
};

var vent_linkedin;

function Linkedin() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    vent_linkedin = window.open('https://www.linkedin.com/feed/', '_blank', 'width=1350,  height=500, left=0, top=250');
};

function Juegos() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_jgs").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_juegos,#contenedor_juegos,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Redes() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_red").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_redes,#contenedor_redes,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Videollamada() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_vidllam").addClass("encendido");
    $(".carrusel,#info_asis,#iframe_clima").addClass("none");
    $("#main_vidllam,#contenedor_vidllam").removeClass("none");
};

function Servicios() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_serv").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_servicios,#contenedor_servicios,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Favoritos() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_fav").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_favoritos,#contenedor_favoritos,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Tareas() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_trs").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_tareas,#contenedor_tareas,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Recordatorios() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_record").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_recordatorios,#contenedor_recordatorios,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Agenda() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_agda").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_agenda,#contenedor_agenda,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Calendario() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_calen").addClass("encendido");
    $("#main_calendario,#contenedor_calendario,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima,#main_calculadora").addClass("none");
    $("#main_calendario,#contenedor_calendario").removeClass("none");
};

function Calculadora() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_calcu").addClass("encendido");
    $("#main_calculadora,#contenedor_calculadora,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima,#main_calendario").addClass("none");
    $("#main_calculadora,#contenedor_calculadora").removeClass("none");
};

function Mapas() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_mapas").addClass("encendido");
    $("#main_calculadora,#contenedor_calculadora,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima,#main_calendario").addClass("none");
    $(".main_mapas,.google_mapa_ruta").removeClass("none");
    $("img#market,img.market_img").css("display", "none");
    get_my_location();
};

function PosicionActual() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_mapas").addClass("encendido");
    $("#main_calculadora,#contenedor_calculadora,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima,#main_calendario,.google_mapa_ruta").addClass("none");
    $(".main_mapas,.google_mapa0,#market").removeClass("none");
    $("img#market,img.market_img").css("display", "flex");
    respuesta = "Te muestro tu ubicación actual en el mapa";
    Responder(respuesta);
    initMap();
    showLocationOnMap();
};

function Contactos() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $("#btn_contac").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_contactos,#contenedor_contactos,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Documentos() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_doc").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_documentos,#contenedor_documentos,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Imagenes2() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_img").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_imagenes,#contenedor_imagenes,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Musica() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_mus").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_musica,#contenedor_musica,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

function Videos() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    $(".btn_0,.btn_1").removeClass("encendido");
    $("#btn_vid").addClass("encendido");
    $("#row_uno,#row_dos_row1,#row_dos_row2,#on_off_men_sup,#on_off_men_lat").removeClass("none");
    $("#main_videos,#contenedor_videos,#reloj_analogico,#carrusel_fondo_home,#info_asis,#iframe_clima").removeClass("none");
};

/* ----------------Funcion LLamada de EMERGEMCIA----------------------*/

function llamadaEmergencia() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    respuesta = "solicitada llamada de emergencia";
    Responder(respuesta);
    window.open("tel:+34611302071");
    window.open("skype:aquí_el_usuario_de_skype?call");
    respuesta = "efectuando llamada de Socorro";
    Responder(respuesta);
}

var telefono;
$('#altavoz_asis').on('click', function () {
    llamadaEmergencia();
});

function llamadaIndrid() {
    $("#carrusel_fondo_home,#info_asis,#iframe_clima,#main_home,#contenedor_home,#reloj_analogico,.main,.contenedor,.carrusel").addClass("none");
    respuesta = "llamando a tu hija Ingrid";
    Responder(respuesta);
    window.open("tel:+34722294488");
    window.open("skype:Ingrid?call");
};

/*----------------------MENU APOLICACIONES DE GOOGLE----------------------------*/
var gooGmail, gooContacts, gooCalendar, gooDrive, gooYoutube, gooPhotos, gooMaps, gooTranslate, gooDictation, tareas, noticias;

$('#btn_goo_gml,#mensajes').on('click', function GooGmail() {
    gooGmail = window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl", "_target ");
});
$('#btn_goo_cts').on('click', function GooContacts() {
    gooContacts = window.open("https://contacts.google.com/?hl=es&tab=rC", "_target");
});
$('#btn_goo_clr,#recordatorios').on('click', function GooCalendar() {
    gooCalendar = window.open("https://calendar.google.com/calendar/r?tab=Tc&pli=1 ", "_target");
});
$('#btn_goo_drv').on('click', function GooDrive() {
    Driver = window.open("https://drive.google.com/drive/u/0/", "_target");
});
$('#btn_goo_ytb').on('click', function GooYoutube() {
    gooYoutube = window.open("https://www.youtube.com/?gl=ES&hl=es", "_target");
});
$('#btn_goo_fts').on('click', function GooPhotos() {
    gooPhotos = window.open("https://photos.google.com/?tab=Cq&pageId=none", "_target");
});
$('#btn_goo_mps').on('click', function GooMaps() {
    gooMaps = window.open("https://www.google.es/maps?hl=es&tab=ql&authuser=0", "_target");
});
$('#btn_goo_dcs,#notas').on('click', function GooDocs() {
    gooDocs = window.open("https://docs.google.com/document/u/0/", "_target");
});
$('#btn_goo_tlt').on('click', function GooTranslate() {
    gooTranslate = window.open("https://translate.google.es/?hl=es&tab=rT&authuser=0", "_target");
});
$('#btn_goo_dtn,#tareas').on('click', function GooDictation() {
    gooDictation = window.open("https://dictation.io/speech", "_target");
});
$('#tareas').on('click', function GooTareas() {
    gootareas = window.open("https://tavat.monday.com/boards/651654773", "_target");
});

/*-----------------------FUNCION BUSCAR EN GOOGLE----------------------------------*/

var texto = document.getElementById("texto");
var buscar = document.getElementById("buscar");

$("#buscar_goo").on("click", function buscarEnGoogle() {
    window.open('https://www.google.com/search?q= ' + texto.value, '_target', 'width=1380, height=1000px, left=0, top=0px');
    Responder("Te muestro algunas busquedas relacionadas con" + texto.value);
    texto.innerHTML = "";
    texto.value = "";
    borrar();
});

// Hide Header on on scroll down

var didScroll;
var lastScrollTop = 5;
var delta = 1;
var navbarHeight = $('#key_vir').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.

    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $("#texto0").focus();
        $("#key_vir").css({
            top: "1100px",
            opacity: "0"
        });
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $("#key_vir").css({
                top: "350px",
                opacity: "1"
            });
        }
        lastScrollTop = st;
    }
};

$("#btn_dia,#calendario").on("click", function CalendarDia() {
    $("#calendario").css("top", "90px");
});

/*-------------------------------CALCULAR LA RUTA------------------------*/

function calcRoute() {
    Mapas();
    //create request
    var request = {
        origin: document.getElementById("location-1").value,
        destination: document.getElementById("location-2").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        origin: "Girona,España",
    }

    // Routing
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            var resultado_distancia = result.routes[0].legs[0].distance.value / 1000;
            var resultado_duracion = result.routes[0].legs[0].duration.text;
            //Get distance and time            
            $("#output").html("<div class='result-table'> La distancia es: " + parseInt(resultado_distancia) + " km" + ".<br />Duración del trayecto: " + resultado_duracion + ".</div>");
            document.getElementById("output").style.display = "flex";
            Responder("La distancia es de: " + parseInt(resultado_distancia) + " km" + " y la duración del trayecto es de: " + resultado_duracion + "utos");
            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({
                routes: []
            });
            //center map in London
            map.setCenter(myLatLng);

            //Show error message           

            alert("Can't find road! Please try again!");
            clearRoute();
        }
    });
};

// Clear results

function clearRoute() {
    PosicionActual();
    document.getElementById("output").style.display = "none";
    document.getElementById("location-1").value = "";
    document.getElementById("location-2").value = "";
    directionsDisplay.setDirections({
        routes: []
    });

};

// Create autocomplete objects for all inputs

var options = {
    types: ['(cities)']
};

var input1 = document.getElementById("location-1");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("location-2");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);

function get_my_location() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $("#my_lat").val(position.coords.latitude);
            $("#my_lng").val(position.coords.longitude);
            map = new google.maps.Map(document.getElementById("google_mapa0"));
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var marker = google.maps.Marker({
                draggable: false,
                anumation: google.maps.Animation.DROP,
                postion: pos
            });
        });
    }
};

/*------------------MI POSICION GEOLOCALIZACION--------------------*/

function Geolocalizacion() {
    var infoWindow;
    var map;
    var mapOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("google_mapa0"), mapOptions);
    navigator.geolocation.getCurrentPosition(function (position) {
        var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude, market);
        var infoWindow = new google.maps.InfoWindow({
            position: geolocate,
            content: "Ésta es tu poosición actual: " + "<br>" + "latitud: " + position.coords.latitude + " <br>" + "longitud: " +
                position.coords.longitude + "<br> <br> <br>"
        });
        map.setCenter(geolocate);
    });
};
/*------------------------------UBICACION MAPA----------------------------*/

var map;
var market;
var pos;
var watchID;
var geoLoc;
var infoWindow;
var myLat = document.getElementById("my_lat");
var myLng = document.getElementById("my_lng");

function getPosition() {
    if (navigator.golocation) {
        var options = {
            timeout: 60000
        };
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(shooLocationOnMap, errorHandler, options);
    } else {
        alert("lo sentimos, el navegador no soporta la geolocalización");
    }
};

function initMap() {
    const myLatLng = {
        lat: 41.942947,
        lng: 2.839484
    };
    map = new google.maps.Map(document.getElementById("google_mapa0"), {
        zoom: 18,
        center: myLatLng
    });
    marker = new google.maps.Market({
        position: myLatLng,
        map: map,
        title: " tu ubicación "
    });
    infoWindow = new google.maps.InfoWindow({
        map: map,
        position: geolocate,
        content: "Ésta es tu poosición actual: " + "<br>" + "latitud: " + position.coords.latitude + " <br>" + "longitud: " +
            position.coords.longitude + "<br> <br> <br>"
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $("#my_lat").val(position.coords.latitude);
            $("#my_lng").val(position.coords.longitude);
            map = new google.maps.Map(document.getElementById("google_mapa0"));
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            marker = google.maps.Marker({
                animation: google.maps.Animation.DROP,
                position: pos
            });
        });
    }
    map.setCenter(geolocate);
    getPosition();
};

function showLocationOnMap(position) {
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    respuesta = " latitud : " + latitud + " Longitud : " + longitud;
    Responder(respuesta);
    const myLatLng = {
        lat: latitud,
        lng: longitud
    };
    market.setPosition(myLatLng);
    map.setCenter(myLatLng);
    map.setCenter(geolocate);
    myLat.innerText = "lat: 41.942947";
    myLng.innerText = "lng: 2.839484";
};

function errorHandler(err) {
    if (err.code == 1) {
        alert("error: Acceso denegado!!");
    } else if (err.code == 2) {
        alert("Error: Posición no existe o no se encuentra");
    }
};

function getPosition() {
    if (navigator.golocation) {
        var options = {
            timeout: 60000
        };
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(shooLocationOnMap, errorHandler, options);
    } else {
        alert("lo sentimos, el navegador no soporta la geolocalización");
    }
};

/*--------------------NOTICIAS GOOGLE-----------------------------*/
function googleNews() {
    const axios = require('axios');

    // set up the request parameters
    const params = {
        api_key: "DCD472EB53A34398B9427CE3D8B3963C",
        q: "news",
        search_type: "news",
        news_type: "all",
        show_duplicates: "false",
        gl: "es",
        hl: "es",
        location: "Spain",
        google_domain: "google.es",
        time_period: "last_year",
        sort_by: "date",
        device: "desktop",
        output: "html",
        page: "2",
        num: "20",
        include_html: "true",
        url: "https://www.google.es/"
    }

    // make the http GET request to Scale SERP
    axios.get('https://api.scaleserp.com/search', {
            params
        })
        .then(response => {

            // print the HTML response from Scale SERP
            console.log(response.data);

        }).catch(error => {
            // catch and print the error
            console.log(error);
        })
};
/*------------------NOTICIAS BING-----------------------*/

// clave 1 c8d7345cdf4a4a9299a71cef78940241
// clave2 e6454ddc02d848138ac494a3208c1fce

// web : https://api.bing.microsoft.com/
// ubicacion : global
// ID d608df54-4b5c-438d-b2f0-b0533a254091


/*---------------------PAGINAS TAVAT  MENU NAVEGACION --------------------------------*/

var $btn_home = document.getElementById("btn_home");
$btn_home.addEventListener("click", Home);

var $btn_act = document.getElementById("btn_act");
$btn_act.addEventListener("click", Actualidad);

var $btn_tv = document.getElementById("btn_tv");
$btn_tv.addEventListener("click", CanalesTv);

var $btn_rfm = document.getElementById("btn_rfm");
$btn_rfm.addEventListener("click", RadioFm);

var $btn_goo = document.getElementById("btn_goo");
$btn_goo.addEventListener("click", Google);

var $btn_ytb = document.getElementById("btn_ytb");
$btn_ytb.addEventListener("click", Youtube);

var $btn_fcb = document.getElementById("btn_fcb");
$btn_fcb.addEventListener("click", Facebook);

var $btn_whsp = document.getElementById("btn_whsp");
$btn_whsp.addEventListener("click", Whatsapp);

var $btn_jgs = document.getElementById("btn_jgs");
$btn_jgs.addEventListener("click", Juegos);

var $btn_red = document.getElementById("btn_red");
$btn_red.addEventListener("click", Redes);

var $btn_vidllam = document.getElementById("btn_vidllam");
$btn_vidllam.addEventListener("click", Videollamada);

var $btn_serv = document.getElementById("btn_serv");
$btn_serv.addEventListener("click", Servicios);

var $btn_fav = document.getElementById("btn_fav");
$btn_fav.addEventListener("click", Favoritos);

var $btn_trs = document.getElementById("btn_trs");
$btn_trs.addEventListener("click", Tareas);

var $btn_record = document.getElementById("btn_record");
$btn_record.addEventListener("click", Recordatorios);

var $btn_agda = document.getElementById("btn_agda");
$btn_agda.addEventListener("click", Agenda);

var $btn_calen = document.getElementById("btn_calen");
$btn_calen.addEventListener("click", Calendario);

var $btn_calcu = document.getElementById("btn_calcu");
$btn_calcu.addEventListener("click", Calculadora);

var $iniciar_ruta = document.getElementById("iniciar_ruta");
$iniciar_ruta.addEventListener("click", calcRoute);

var $limpiar_ruta = document.getElementById("limpiar_ruta");
$limpiar_ruta.addEventListener("click", clearRoute);

var $btn_mapas = document.getElementById("btn_mapas");
$btn_mapas.addEventListener("click", PosicionActual);

var $btn_contac = document.getElementById("btn_contac");
$btn_contac.addEventListener("click", Contactos);

var $btn_doc = document.getElementById("btn_doc");
$btn_doc.addEventListener("click", Documentos);

var $btn_img = document.getElementById("btn_img");
$btn_img.addEventListener("click", Imagenes2);

var $btn_mus = document.getElementById("btn_mus");
$btn_mus.addEventListener("click", Musica);

var $btn_vid = document.getElementById("btn_vid");
$btn_vid.addEventListener("click", Videos);

var $div_instagram = document.getElementById("div_instagram");
$div_instagram.addEventListener("click", Instagram);

var $div_facebook = document.getElementById("div_facebook");
$div_facebook.addEventListener("click", Facebook2);

var $div_whatsapp = document.getElementById("div_whatsapp");
$div_whatsapp.addEventListener("click", Whatsapp2);

var $div_linkedin = document.getElementById("div_linkedin");
$div_linkedin.addEventListener("click", Linkedin);

var $musica_dance = document.getElementById("musica_dance");
$musica_dance.addEventListener("click", musicaDance);

var $musica_disco = document.getElementById("musica_disco");
$musica_disco.addEventListener("click", musicaDisco);

/*-----------------------ENLACES---------------------------*/

var $noticias1 = document.getElementById("noticias1");
$noticias1.addEventListener("click", Noticias1);
/*-----------------FUNCION DE VOLUMEN--------------------*/

var $div_silenciar = document.getElementById("div_silenciar");
$div_silenciar.addEventListener("click", silenciar);

var $div_subir_volumen = document.getElementById("div_subir_volumen");
$div_subir_volumen.addEventListener("click", masVolumen);

var $div_bajar_volumen = document.getElementById("div_bajar_volumen");
$div_bajar_volumen.addEventListener("click", menosVolumen);

/*---------------------------FUNCIONES ASIS---------------------*/

var $on_micro_asis = document.getElementById("on_micro_asis");
$on_micro_asis.addEventListener("click", holaAsis);

var $off_micro_asis = document.getElementById("off_micro_asis");
$off_micro_asis.addEventListener("click", adiosAsis);

var $on_altavoz_asis = document.getElementById("on_altavoz_asis");
$on_altavoz_asis.addEventListener("click", startDictado);

var $off_altavoz_asis = document.getElementById("off_altavoz_asis");
$off_altavoz_asis.addEventListener("click", stopDictado);

/*-------------------------FECHA HORA ACTUAL------------------------------*/

var $info_fecha = document.getElementById("info_fecha");
$info_fecha.addEventListener("click", fechaHora);

var $imicro = document.getElementById("imicro");
$imicro.addEventListener("click", leerElContenido);

/*------------FUNCIONES PANTALLA--------------*/

var $btn_min = document.getElementById("btn_min");
$btn_min.addEventListener("click", minContenido);

var $btn_max = document.getElementById("btn_max");
$btn_max.addEventListener("click", maxContenido);

var $btn_off = document.getElementById("btn_off");
$btn_off.addEventListener("click", cerrarContenidoPagina);

/*------------MOSTRAR OCULUTAR  MENU SUPERIOR---------------*/

var $on_menu_sup = document.getElementById("on_menu_sup");
$on_menu_sup.addEventListener("click", onMenuSuperior);


var $off_menu_sup = document.getElementById("off_menu_sup");
$off_menu_sup.addEventListener("click", offMenuSuperior);

/*------------Pasar de menu superior a menu lateral----------------*/

var $on_menu_lat = document.getElementById("on_menu_lat");
$on_menu_lat.addEventListener("click", onMenuLateral);

var $off_menu_lat = document.getElementById("off_menu_lat");
$off_menu_lat.addEventListener("click", offMenuLateral);

//------------MOSTRAR OCULUTAR TECHADO VIRTUAL----------------*/

var $on_key_vir = document.getElementById("on_key_vir");
$on_key_vir.addEventListener("click", tecladoOn);

var $off_key_vir = document.getElementById("off_key_vir");
$off_key_vir.addEventListener("click", tecladoOff);

/* -------------------------EMISORAS DE RADIO-------------------*/

var $radio_rac_1 = document.getElementById("radio_rac_1");
$radio_rac_1.addEventListener("click", RadioRac1);

var $radio_flaix_fm = document.getElementById("radio_flaix_fm");
$radio_flaix_fm.addEventListener("click", RadioFlaixFm);

var $radio_flaixbac = document.getElementById("radio_flaixbac");
$radio_flaixbac.addEventListener("click", RadioFlaixBac);

var $radio_catalunya_radio = document.getElementById("radio_catalunya_radio");
$radio_catalunya_radio.addEventListener("click", CatalunyaRadio);

/*-------------------------FUNCIONES MENU PANTALLA USUARIO---------------------*/
var $icontraste = document.getElementById("icontraste");
$icontraste.addEventListener("click", Contraste);

var $ireset = document.getElementById("ireset");
$ireset.addEventListener("click", Reset);

var $ilupa1 = document.getElementById("ilupa1");
$ilupa1.addEventListener("click", Agrandar);

var $ilupa0 = document.getElementById("ilupa0");
$ilupa0.addEventListener("click", Disminuir);

//------------MOSTRAR OCULUTAR  MENU SUPERIOR---------------*/

var $on_menu_sup = document.getElementById("on_menu_sup");
$on_menu_sup.addEventListener("click", onMenuSuperior);

var $off_menu_sup = document.getElementById("off_menu_sup");
$off_menu_sup.addEventListener("click", offMenuSuperior);

/*------------Pasar de menu superior a menu lateral----------------*/

var $on_menu_lat = document.getElementById("on_menu_lat");
$on_menu_lat.addEventListener("click", onMenuLateral);

var $off_menu_lat = document.getElementById("off_menu_lat");
$off_menu_lat.addEventListener("click", offMenuLateral);


//------------MOSTRAR OCULUTAR TECHADO VIRTUAL----------------*/

var $on_key_vir = document.getElementById("on_key_vir");
$on_key_vir.addEventListener("click", tecladoOn);

var $off_key_vir = document.getElementById("off_key_vir");
$off_key_vir.addEventListener("click", tecladoOff);

/* -------------------------EMISORAS DE RADIO-------------------*/

var $radio_rac_1 = document.getElementById("radio_rac_1");
$radio_rac_1.addEventListener("click", RadioRac1);

var $radio_flaix_fm = document.getElementById("radio_flaix_fm");
$radio_flaix_fm.addEventListener("click", RadioFlaixFm);

var $radio_flaixbac = document.getElementById("radio_flaixbac");
$radio_flaixbac.addEventListener("click", RadioFlaixBac);

var $radio_catalunya_radio = document.getElementById("radio_catalunya_radio");
$radio_catalunya_radio.addEventListener("click", CatalunyaRadio);

/*-------------------------FUNCIONES MENU PANTALLA USUARIO---------------------*/

var $icontraste = document.getElementById("icontraste");
$icontraste.addEventListener("click", Contraste);

var $ireset = document.getElementById("ireset");
$ireset.addEventListener("click", Reset);

var $ilupa1 = document.getElementById("ilupa1");
$ilupa1.addEventListener("click", Agrandar);

var $ilupa0 = document.getElementById("ilupa0");
$ilupa0.addEventListener("click", Disminuir);