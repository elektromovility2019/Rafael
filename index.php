<!DOCTYPE html>
<html lang="es-ES">

<head id="head">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="./assets/js/reloj_analogico.js"></script>
    <title>Tavat</title>
    <meta name="autor" content="Rafael Almansa Tejada">
    <meta name="descripción" content="Tavat es Tu Asistente Virtual de Accesivilidad Total en la nube">
    <meta property="og:Tavat"
        content="TAVAT podrás acceder tu ordenador personal virtual en la nube, podras acceder desde cualquier terminal a través de la voz, el movimiento, sensores neuronales,tosas las tegnologías al tu alcance desde culaquier lugar del mundo ">

    <link rel="stylesheet" href="./assets/css/stylo.css" />
    <link rel="Stylesheet" href="./assets/css/VirtualKeyboard.neon.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin="" />
    <link href="https://vjs.zencdn.net/7.11.4/video-js.css" rel="stylesheet" />
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
</head>
<header>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-50C2ZYB73M"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-50C2ZYB73M');
    </script>
    <div id="servicios_off" class="servicios_off none">
        <p id="asis_micro0" class="a">a</p>
        <p id="asis_micro1" class="a">b</p>
        <p id="asis_micro2" class="a">c</p>
        <p id="asis_micro3" class="a">d</p>
    </div>
</header>

<body id="body_tavat" class="body">
    <div id="row_asis">
        <a src="#">
            <div id="micro_asis">
                <img id="on_micro_asis" class="micro_asis" src="./assets/img/micro.png" alt="">

                <img id="off_micro_asis" class="micro_asis none" src="./assets/img/micro.png" alt="">
                <p class="displaynone">micrófono Asis </p>
            </div>
        </a>

        <div id="lec_esc_asis" class="lec_esc_asis">
            <div id="info_fecha2" class="info_fecha"></div>
            <textarea id="texto0" type="text" placeholder="" rows="5" cols="8" autofocus="autofocus" name="texto"
                class="form-control inputs texto "></textarea>
            <textarea id="texto1" type="text" rows="5" cols="8" name="texto1"
                class="form-control inputs texto1 none"></textarea>
        </div>
        <a href="#">
            <div id="altavoz_asis" class="">
                <img id="on_altavoz_asis" class="altavoz_asis" src="./assets/img/dictado.png" alt="">
                <img id="off_altavoz_asis" class="altavoz_asis none" src="./assets/img/dictado.png" alt="">
                <p class="displaynone">lectura Asis</p>
            </div>
        </a>
    </div>
    <div id="info_asis" class="">
        <div id="reloj" class="reloj">
            <div id="api_clima" class="api_clima">
                <div id="div_clima">
                    <iframe id="iframe_clima" class="iframe_clima" src="" frameborder="0" class="iframe"
                        poster=""></iframe>
                </div>
            </div>
            <div id="api_matrix" class="none">
                <p id="distancia" class=""></p>
                <p id="duracion" class=""></p>
                <iframe id="iframe_matrix" class="none" src="" frameborder="0" class="iframe" poster=""></iframe>
            </div>
            <div id="clima_div" class="">
                <div class="container">
                    <div class="card" id="card_clima">
                        <h1 class="name" id="name"></h1>
                        <p class="temp none" id="temp"></p>
                        <p class="temp_mim" id="temp_min"></p>
                        <p class="temp_max" id="temp_max"></p>
                        <p class="humi" id="humi"></p>
                        <p class="pres" id="pres"></p>
                        <p class="vent" id="vent"></p>
                        <p class="sensa" id="sensa"></p>
                        <p class="desc" id="descrip"></p>
                    </div>
                </div>
            </div>
            <div id="info_fecha" class="info_fecha"></div>
            <div id="reloj_analogico" class="reloj" alt="reloj" name="reloj">
                <h1 id="reloj_h1_12h" class=""></h1>
                <h2 id="franja_horaria_reloj" class=""></h2>
                <h1 id="reloj_h1_24h" class="none"></h1>
                <div id="liveclock" class="outer_face" alt="reloj">
                    <div class="marker oneseven"></div>
                    <div class="marker twoeight"></div>
                    <div class="marker fourten"></div>
                    <div class="marker fiveeleven"></div>
                    <div class="inner_face">
                        <div class="hand hour"></div>
                        <div class="hand minute"></div>
                        <div class="hand second"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="carrusel_fondo_home" class="carousel slider0 carrusel carousel-inner" data-ride="carousel"
        data-interval="false" role="listbox">
        <div class="solojs">
            <img src="assets/img/fondos_home/fondokuvawt0.jpg" class="img_slider autoplay" name="slider0">
        </div>
    </div>
    <div id="carrusel_fondo_google" class="carousel slider_goo_2 carrusel none  carousel-inner" data-ride="carousel"
        data-interval="false" role="listbox">
        <div class="solojs">
            <img src="assets/img/FONDOS/1.jpg" class="img_slider autoplay" name="slider_goo_2">
        </div>
    </div>
    <div id="volumen" class="volumen menu">
        <a href="#">
            <div id="div_bajar_volumen" class="div_volumen">
                <img id="img_bajar_volumen" class="img_volumen" src="assets/img/bajarvolumen.png" alt="">
            </div>
            <p class="displaynone">bajar volumen</p>
        </a>
        <a href="#">
            <div id="div_silenciar" class="div_volumen">
                <img id="img_silenciar" class="img_volumen" src="assets/img/silenciar.png" alt="">
            </div>
            <p class="displaynone">silenciar</p>
        </a>
        <a href="#">
            <div id="div_subir_volumen" class="div_volumen">
                <img id="img_subir_volumen" class="img_volumen" src="assets/img/subirvolumen.png" alt="">
            </div>
            <p class="displaynone">subir volumen</p>
        </a>

    </div>
    <div id="paginacion" class="paginacion menu">
        <a href="#">
            <div class="div_paginacion">
                <img id="btn_min" src="assets/img/minimizar.png" alt="minimizar ventana" class="btn_min">
            </div>
            <p class="displaynone">minimizar</p>
        </a>
        <a href="#">
            <div class="div_paginacion">
                <img id="btn_max" src="assets/img/maximizar.png" alt="maximizar ventana" class="btn_max">
            </div>
            <p class="displaynone">maximizar</p>
        </a>
        <a href="#">
            <div class="div_paginacion">
                <img id="btn_off" src="assets/img/cerrar.png" alt="cerrar ventana" class="btn_off">
            </div>
            <p class="displaynone">cerrar ventana</p>
        </a>
    </div>
    <div id="on_off_men_sup" class="on_off_men_sup  menu"> <a class="">
            <img id="off_menu_sup" class="off_menu_sup" src="assets/img/kuvawt.png"
                alt="Ocultar panel de configuración" />
        </a>
        <a class="">
            <img id="on_menu_sup" class=" on_menu_sup none " src="assets/img/kuvawt.png"
                alt="mostrar panel de configuración" />
        </a>
    </div>
    <div id="on_off_men_lat" class="on_off_men_lat menu">
        <a><img id="on_menu_lat" class="on_menu_lat" src="assets/img/kuvawt.png"
                alt="abrir panel de control en el lateral de pantalla"></a>
        <a><img id="off_menu_lat" class=" off_menu_lat none" src=" assets/img/kuvawt.png"
                alt="abrir panel de control en el la parte superior de la pantalla">
        </a>
    </div>
    <main id="tavat_home" class="tavat_home">
        <div id="menu_tavat">
            <section id="row_uno" class="row_uno">
                <div id="row_uno_col1">
                    <div id="inavcol1" class="navcol1">
                        <div id="botoneracol1" class="botoneracol1 none row_sup_lef">
                            <a class="boton">
                                <img id="imicro" class="activa" src="assets/img/voz.png" alt="activa comandos de voz">
                                <p class="displaynone">Activar los comandos de voz</p>
                            </a>
                            <a class="boton">
                                <img id="imicro" class="inactiva" src="assets/img/voz.png" alt="activa comandos de voz">
                                <p class="displaynone">Desactivar comandos de voz</p>
                            </a>
                            <a class="boton">
                                <img id="ivoz" class="activa" src="assets/img/vozmicro.png"
                                    alt="activar lectura automatica">
                                <p class="displaynone">Activar lectura automatica</p>
                            </a>
                            <a class="boton">
                                <img id="ivoz" class="inactiva" src="assets/img/vozmicro.png"
                                    alt="activar lectura automatica">
                                <p class="displaynone">Descativar lectura automatica</p>
                            </a>
                            <a class="boton">
                                <img id="itecladosp" class="activa" src="assets/img/teclado.png"
                                    alt="Activar teclado especial">
                                <p class="displaynone">Activar teclado especial</p>
                            </a>
                            <a class="boton">
                                <img id="itecladosp" class="inactiva" src="assets/img/teclado.png"
                                    alt="Activar teclado especial">
                                <p class="displaynone">Desactivar teclado especial</p>
                            </a>
                            <a class="boton">
                                <img id="sensoresmov" class="activa" src="assets/img/manosmov.png"
                                    alt="Activar sensores de movimiento">
                                <p class="displaynone">Activar sensores de movimiento</p>
                            </a>
                            <a class="boton">
                                <img id="sensoresmov" class="inactiva" src="assets/img/manosmov.png"
                                    alt="Activar sensores de movimiento">
                                <p class="displaynone">Desactivar sensores de movimiento</p>
                            </a>
                            <a class="boton">
                                <img id="sensoresneur" class="activa" src="assets/img/sensorcereblal.png"
                                    alt="Activar sensores neuronales">
                                <p class="displaynone">Activar neuronales</p>
                            </a>
                            <a class="boton">
                                <img id="sensoresneur" class="inactiva" src="assets/img/sensorcereblal.png"
                                    alt="Activar sensores neuronales">
                                <p class="displaynone">Desactivar sensores neuronales</p>
                            </a>
                            <a class="boton">
                                <img id="igafaslaser" class="activa" src="assets/img/gafas.png"
                                    alt="activar gafas laser">
                                <p class="displaynone">Activar gafas laser</p>
                            </a>
                            <a class="boton">
                                <img id="igafaslaser" class="inactiva" src="assets/img/gafas.png"
                                    alt="activar gafas laser">
                                <p class="displaynone"> Desactivar gafas laser</p>
                            </a>
                            <a class="boton">
                                <img id="nav_pcl " class="activa" src="assets/img/tactil.png"
                                    alt="activar pantalla táctil">
                                <p class="displaynone">Activar pantalla táctil</p>
                            </a>
                            <a class="boton">
                                <img id="nav_pcl táctil" class="inactiva" src="assets/img/tactil.png"
                                    alt="activar pantalla táctil">
                                <p class="displaynone">Desactivar pantalla táctil</p>
                            </a>
                            <a class="boton">
                                <img id="iborrarconfig" class="activa" src="assets/img/reset.png"
                                    alt="Resetear configuración">
                                <p class="displaynone">Resetear configuración</p>
                            </a>
                            <a class="boton">
                                <img id="iborrarconfig" class="inactiva" src="assets/img/reset.png"
                                    alt="Resetear configuración">
                                <p class="displaynone">Resetear configuración</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="row_uno_col2">
                </div>
                <div id="row_uno_col3">
                    <div id="inavcol3" class="navcol3">
                        <div id="botoneracol3" class="botoneracol3 row_sup_rig">
                            <a href="#" class="boton">
                                <img id="imicrofono" src="assets/img/microfono.png" alt="microfono">
                                <p class="displaynone">Microfono</p>
                            </a>
                            <a class="boton">
                                <img id="ialtavoz" src="assets/img/altavoz.png" alt="altavoz">
                                <p class="displaynone">Altavoz</p>
                            </a>
                            <a class="boton">
                                <img id="icontraste" src="assets/img/contraste.png" alt="contraste">
                                <p class="displaynone">Contraste</p>
                            </a>
                            <a class="boton">
                                <img id="ilupa1" src="assets/img/lupa mas.png" alt="aumentar imagen">
                                <p class="displaynone">Agrandar</p>
                            </a>
                            <a class="boton">
                                <img id="ilupa0" src="assets/img/lupa menos.png" alt="disminuir imagen">
                                <p class="displaynone">Disminuir</p>
                            </a>
                            <a class="boton">
                                <img id="iplay" src="assets/img/play.png" alt="play">
                                <p class="displaynone">Play</p>
                            </a>
                            <a class="boton">
                                <img id="ipausa" src="assets/img/pausa.png" alt="pausa">
                                <p class="displaynone">Pausar</p>
                            </a>
                            <a class="boton">
                                <img id="ireset" src="assets/img/reset.png" alt="reset">
                                <p class="displaynone">Reset</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="row_dos" class="row_dos nav-down">
                <div id="row_dos_row1" class="row_dos_row1">
                    <div class="btn_row_dos_row1">
                        <li id="btn_home" class="btn_0 encendido"><a><span>Home</span></a></li>
                    </div>
                    <div class="btn_row_dos_row1">
                        <li id="btn_act" class="btn_0"><a><span>Actualidad</span></a></li>
                    </div>
                    <div class="btn_row_dos_row1">
                        <li id="btn_tv" class="btn_0"><a><span>CanalesTv</span></a></li>
                    </div>
                    <div class="btn_row_dos_row1">
                        <li id="btn_rfm" class="btn_0"><a><span>RadioFm</span></a></li>
                    </div>
                    <div class="btn_row_dos_row1">
                        <li id="btn_goo" class="btn_0"><a><span>Google</span></a></li>
                    </div>
                    <div class="btn_row_dos_row1">
                        <li id='btn_ytb' class="btn_0"><a><span>Youtube</span></a></li>
                    </div>
                    <div class="btn_row_dos_row1">
                        <li id="btn_fcb" class="btn_0"><a><span>Facebook</span></a></li>
                    </div>
                    <div class="btn_row_dos_row1">
                        <li id="btn_whsp" class="btn_0"><a><span>whatsapp</i></span></a></li>
                    </div>
                    <div class="btn_row_dos_row1">
                        <li id="btn_jgs" class="btn_0"><a><span>Juegos</span></a></li>
                    </div>
                    <div class="btn_row_dos_row1">
                        <li id="btn_red" class="btn_0"><a><span>Redes</span></a></li>
                    </div>
                    <div class="btn_row_dos_row1">
                        <li id='btn_vidllam' class="btn_0"><a><span>Videollamada</span></a></li>
                    </div>
                </div>
                <div id="row_dos_row2" class="row_dos_row2">
                    <div class="btn_row_dos_row2">
                        <li id="btn_serv" class="btn_1"><a>Servicios</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_fav" class="btn_1"><a>Favoritos</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_trs" class="btn_1"><a>Tareas</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_record" class="btn_1"><a>Recordatorios</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_agda" class="btn_1"><a>Agenda</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_calen" class="btn_1"><a>Calendario</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_calcu" class="btn_1"><a>Calculadora</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_mapas" class="btn_1"><a>Mapas</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_contac" class="btn_1"><a>Contactos</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_doc" class="btn_1"><a>Documentos</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_img" class="btn_1"><a>Imagenes</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_mus" class="btn_1"><a>Música</a></li>
                    </div>
                    <div class="btn_row_dos_row2">
                        <li id="btn_vid" class="btn_1"><a>Videos</a></li>
                    </div>
                </div>
            </section>
        </div>

        <!-----------------------------MENU PRINCIPAL--------------------------------------->

        <section id="row_cuatro" class="row_cuatro">
            <div id="main_home" class="main">
                <div id="contenedor_home" class="contenedor">
                    <div class="continente_left">
                        <div id="contenido0" class=" contenido contenido0">
                            <img id="img_recordatorios" src="assets/img/recordatorios.jpg" class="img_contenido"
                                alt="fotografía módulo contenido">
                            <h2 id="h2_contenido0" class="h2_contenido"><a>Recordatorios</a></h2>
                        </div>
                        <div id="contenido1" class="contenido contenido1">
                            <img id="img_mensajes" src="assets/img/mensajes.jpg" class="img_contenido"
                                alt="fotografía módulo mensajes">
                            <h2 id="h2_contenido1" class="h2_contenido"><a>Mensajes</a></h2>
                        </div>
                    </div>
                    <div class=" continente_right">
                        <div id="contenido2" class="contenido contenido2">
                            <img id="img_noticias" src="assets/img/noticias.jpg" class="img_contenido"
                                alt="fotografía módulo noticias">
                            <h2 id="h2_contenido2" class="h2_contenido"><a id="noticias1" class="noticias">Noticias</a>
                            </h2>
                        </div>
                        <div id="contenido3" class="contenido contenido3">
                            <img id="img_tareas" src="assets/img/tareas.jpg" class="img_contenido"
                                alt="fotografía módulo tareas">
                            <h2 id="h2_contenido3" class="h2_contenido"><a>Tareas</a></h2>
                        </div>
                        <div class="none"></div>
                    </div>
                </div>
            </div>
            <div id="main_actualidad" class="main none">
                <div id="contenedor_actualidad" class="contenedor none">
                </div>
            </div>

            <div id="main_canales_tv" class="none main">
                <div id="contenedor_canales_tv" class="contenedor none">
                    <div class="continente_left">
                        <div id="contenido_tv3_tv" class="contenido">
                            <img id="img_tv3_tv" class="img_contenido" src="assets/img/fondos_main/tv3_tv.jpg">
                            <h2 class="h2_contenido">TV3</h2>
                        </div>
                        <div id="contenido_tele5_tv" class="contenido ">
                            <img id="img_tele5_tv" class="img_contenido" src="assets/img/fondos_main/tele5_tv.jpg">
                            <h2 class="h2_contenido">Tele5</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="contenido_antena3_tv" class="contenido">
                            <img id="img_antena3_tv" class="img_contenido" src="assets/img/fondos_main/antena3_tv.jpg">
                            <h2 class="h2_contenido">Antena3</h2>
                        </div>
                        <div id="contenido_cuatro_tv" class="contenido">
                            <img id="img_cuatro_tv" class="img_contenido" src="assets/img/fondos_main/cuatro_tv.jpg">
                            <h2 class="h2_contenido">Cuatro</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_radio_fm" class="main none">
                <div id="contenedor_radio_fm" class="contenedor none">
                    <div class="continente_left">
                        <div id="radio_flaix_fm" class="contenido">
                            <img id="img_flaix_fm" src="assets/img/fondos_main/radio flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido"> Radio Flaix Fm</h2>
                        </div>
                        <div id="radio_flaixbac" class="contenido">
                            <img id="img_flaixbac" src="assets/img/fondos_main/radio flaixbac.jpg"
                                class="img_contenido">
                            <h2 class="h2_contenido"> Radio FlaxBac</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="radio_catalunya_radio" class="contenido">
                            <img id="img_catalunya_radio" src="assets/img/fondos_main/radio catalunya radio.jpg"
                                class="img_contenido">
                            <h2 class="h2_contenido"> Catalunya Radio</h2>
                        </div>
                        <div id="radio_rac_1" class="contenido">
                            <img id="img_Rac_1" src="assets/img/fondos_main/radio rac1.jpeg" class="img_contenido">
                            <h2 class="h2_contenido"> Radio Rac 1</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_google" class="none main">
                <div id="contenedor_google" class="contenedor none">
                    <div id="row1_goo" class="divcarrusel">
                        <div id="carrusel_goo" class="carousel slider_goo" data-ride="carousel" data-interval="false">
                            <div class="carousel-inner" role="listbox">
                                <div class="solojs">
                                    <img src="assets/img/google/1.png" class="img_slider autoplay" name="slider_goo">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="row2_goo" class="div_input_goo">
                        <input id="texto_google" type="text" class="texto_google" name="texto"
                            x-webkit-speech="x-webkit-speech" onwebkitspeechchange="grabar()" autofocus="autofocus">
                        <a id="btn_bus_goo" class="btn_bus_goo" alt="buscar en Google"></a>
                        <a id="on_rec_goo" class="btn_rec_goo" alt="Activar microfono"></a>
                        <a id="off_rec_goo" class="btn_rec_goo none" alt="Cerrar microfono"></a>
                        <div id="buscar_goo" class="buscar "><span id="span_goo">Buscar</span>
                            <p class="displaynone">Buscar</p>
                        </div>
                    </div>
                    <div id="row3_goo" class="div_apli_goo">
                        <a><img id="btn_goo_gml" class="img_apli_goo" src="assets/img/goo_apli/gmail.png" alt=""></a>
                        <a><img id="btn_goo_cts" class="img_apli_goo" src="assets/img/goo_apli/contactos.png"
                                alt=""></a>
                        <a><img id="btn_goo_clr" class="img_apli_goo" src="assets/img/goo_apli/calendario.png"
                                alt=""></a>
                        <a><img id="btn_goo_drv" class="img_apli_goo" src="assets/img/goo_apli/drive.png" alt=""></a>
                        <a><img id="btn_goo_ytb" class="img_apli_goo" src="assets/img/goo_apli/youtube.png" alt=""></a>
                        <a><img id="btn_goo_fts" class="img_apli_goo" src="assets/img/goo_apli/fotos.png" alt=""></a>
                        <a><img id="btn_goo_mps" class="img_apli_goo" src="assets/img/goo_apli/maps.png" alt=""></a>
                        <a><img id="btn_goo_dcs" class="img_apli_goo" src="assets/img/goo_apli/docs.png" alt=""></a>
                        <a><img id="btn_goo_tlt" class="img_apli_goo" src="assets/img/goo_apli/translate.png"
                                alt=""></a>
                        <a><img id="btn_goo_dtn" class="img_apli_goo" src="assets/img/goo_apli/dictado.png" alt=""></a>
                    </div>
                </div>
            </div>
            <div id="main_youtube" class="none main_continente">
                <div id="contenedor_youtube" class="contenedor none"></div>
            </div>
            <div id="main_facebook" class="none main_continente">
                <div id="contenedor_facebook"></div>
            </div>
            <div id="main_whatsapp" class="none main_continente">
                <div id="contenedor_whatssap"></div>
            </div>
            <div id="main_juegos" class="none main">
                <div id="contenedor_juegos" class="contenedor none">
                    <div class="continente_left">
                        <div id="div_juego1" class=" ">
                            <img id="img_juego1" src="assets/img/Flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Juego1</h2>
                        </div>
                        <div id="div_juego2" class=" ">
                            <img id="img_juego2" src="assets/img/radio_Flaixbac.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Juego2</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="div_juego3" class=" ">
                            <img id="img_juego3" src="assets/img/Catalunya_radio.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Juego3</h2>
                        </div>
                        <div id="div_juego4" class=" ">
                            <img id="img_juego4" src="assets/img/radio_Rac1.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Juego4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_redes" class="none main">
                <div id="contenedor_redes" class="contenedor none">
                    <div class="continente_left">
                        <div id="div_instagram" class="contenido">
                            <img id="img_instagram" src="assets/img/instagram.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Instagram</h2>
                        </div>
                        <div id="div_linkedin" class="contenido">
                            <img id="img_linkedin" src="assets/img/linkedin.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Linkedin</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="div_facebook" class="contenido">
                            <img id="img_facebook" src="assets/img/facebook.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Facebook</h2>
                        </div>
                        <div id="div_whatsapp" class="contenido">
                            <img id="img_whatsapp" src="assets/img/whatsapp.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Whatsapp</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_vidllam" class="none main">
                <div id="canvas1_ext_left" class="canvas1_ext_left ">
                    <canvas id="canvas1_left1" class="canvas_left" autoplay>
                        <video id="video_canvas_left1" class="video_canvas_ext" autoplay></video>
                        <img src="" id="photo" alt="photo">
                    </canvas>
                    <canvas id="canvas1_left2" class="canvas_left " autoplay>
                        <video id="video_canvas_left2" class="video_canvas_ext" autoplay></video>
                        <img src="" id="photo" alt="photo">
                    </canvas>
                    <canvas id="canvas1_left3" class="canvas_left " autoplay>
                        <video id="video_canvas_left3" class="video_canvas_ext" autoplay></video>
                        <img src="" id="photo" alt="photo">
                    </canvas>
                </div>
                <div id="div_canvas_ext_central" class="div_canvas_ext_central">
                    <canvas id="canvas_ext1" class="canvas_ext1" autoplay>
                        <video id="video_canvas_ext1" class="video_canvas_ext1" autoplay></video>
                        <img src="" id="photo" alt="photo">
                    </canvas>
                </div>
                <div id="canvas1_ext_right" class="canvas1_ext_right">
                    <canvas id="canvas1_right1" class="canvas_right" autoplay>
                        <video id="video_canvas_right1" class="video_canvas_ext" autoplay></video>
                        <img src="" id="photo" alt="photo">
                    </canvas>
                    <canvas id="canvas1_right2" class="canvas_right" autoplay>
                        <video id="video_canvas_right2" class="video_canvas_ext" autoplay></video>
                        <img src="" id="photo" alt="photo">
                    </canvas>
                    <canvas id="canvas1_right3" class="canvas_right" autoplay>
                        <video id="video_canvasr_right3" class="video_canvas_ext autoplay"></video>
                        <img src="" id=" photo" alt="photo">
                    </canvas>
                </div>
            </div>

            <!-----------------------------MENU SECUNDARIO--------------------------------------->

            <div id="main_servicios" class="none main_continente ">
                <div id="contenedor_servicios" class="contenedor none">
                    <div class="continente_left">
                        <div id="div_servicios1" class="contenido">
                            <img id="img_servicios1" src="assets/img/Flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Servicios1</h2>
                        </div>
                        <div id="div_servicios2" class="contenido">
                            <img id="img_servicios2" src="assets/img/radio_Flaixbac.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Servicios2</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="div_servicios3" class="contenido">
                            <img id="img_servicios3" src="assets/img/Catalunya_radio.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Servicios3</h2>
                        </div>
                        <div id="div_servicios4" class="contenido">
                            <img id="img_servicios4" src="assets/img/radio_Rac1.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Servicios4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_favoritos" class="none main_continente">
                <div id="contenedor_favoritos" class="contenedor none">
                    <div class="continente_left">
                        <div id="div_favoritos1" class="contenido">
                            <img id="img_favoritos1" src="assets/img/Flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Favoritos1</h2>
                        </div>
                        <div id="div_favoritos2" class="contenido">
                            <img id="img_favoritos2" src="assets/img/radio_Flaixbac.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Favoritos2</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="div_favoritos3" class="contenido">
                            <img id="img_favoritos3" src="assets/img/Catalunya_radio.jpg" class="img_contenido">
                            <h2 class="h2_contenido">favoritos3</h2>
                        </div>
                        <div id="div_favoritos4" class="contenido">
                            <img id="img_favoritos4" src="assets/img/radio_Rac1.jpg" class="img_contenido">
                            <h2 class="h2_contenido">favoritos4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_tareas" class="none main_continente">
                <div id="contenedor_tareas" class="contenedor none">
                    <div class="continente_left">
                        <div id="div_tareas1" class="contenido">
                            <img id="img_tareas1" src="assets/img/Flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Tareas1</h2>
                        </div>
                        <div id="div_tareas2" class="contenido">
                            <img id="img_tareas2" src="assets/img/radio_Flaixbac.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Tareas2</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="div_tareas3" class="contenido">
                            <img id="img_tareas3" src="assets/img/Catalunya_radio.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Tareas3</h2>
                        </div>
                        <div id="div_tareas4" class="contenido">
                            <img id="img_tareas4" src="assets/img/radio_Rac1.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Tareas4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_recordatorios" class="none main_continente">
                <div id="contenedor_recordatorios" class="contenedor none">
                    <div class="continente_left">
                        <div id="div_recordatorios1" class="contenido">
                            <img id="img_recordatorios1" src="assets/img/Flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Recordatorios1</h2>
                        </div>
                        <div id="div_recordatorios2" class="contenido">
                            <img id="img_recordatorios2" src="assets/img/radio_Flaixbac.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Recordatorios2</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="div_recordatorios3" class="contenido">
                            <img id="img_recordatorios3" src="assets/img/Catalunya_radio.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Recordatorios3</h2>
                        </div>
                        <div id="div_recordatorios4" class="contenido">
                            <img id="img_recordatorios4" src="assets/img/radio_Rac1.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Recordatorios4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_agenda" class="none main_continente">
                <div id="contenedor_agenda" class="contenedor none">
                    <div class="continente_left">
                        <div id="div_agenda1" class="contenido">
                            <img id="img_agenda1" src="assets/img/Flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Agenda1</h2>
                        </div>
                        <div id="div_agenda2" class="contenido">
                            <img id="img_agenda2" src="assets/img/radio_Flaixbac.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Agenda2</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="div_agenda3" class="contenido">
                            <img id="img_agenda3" src="assets/img/Catalunya_radio.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Agenda3</h2>
                        </div>
                        <div id="div_agenda4" class="contenido">
                            <img id="img_agenda4" src="assets/img/radio_Rac1.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Agenda4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_calendario" class="none main_continente main">
                <div class="container_calendario">
                    <div class="header_calendar">
                        <h1 id="text_day">00</h1>
                        <h5 id="text_month">Null</h5>
                    </div>
                    <div class="body_calendar">
                        <div class="container_details">
                            <div class="detail_1">
                                <div class="detail">
                                    <div class="circle">
                                        <div class="column"></div>
                                    </div>
                                </div>
                                <div class="detail">
                                    <div class="circle">
                                        <div class="column"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="detail_2">
                                <div class="detail">
                                    <div class="circle">
                                        <div class="column"></div>
                                    </div>
                                </div>
                                <div class="detail">
                                    <div class="circle">
                                        <div class="column"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container_change_month">
                            <button id="last_month">&lt;</button>
                            <div>
                                <span id="text_month_02">Null</span>
                                <span id="text_year">0000</span>
                            </div>
                            <button id="next_month">&gt;</button>
                        </div>
                        <div class="container_weedays">
                            <span class="week_days_item">DOM</span>
                            <span class="week_days_item">LUN</span>
                            <span class="week_days_item">MAR</span>
                            <span class="week_days_item">MÍE</span>
                            <span class="week_days_item">JUE</span>
                            <span class="week_days_item">VIE</span>
                            <span class="week_days_item">SÁB</span>
                        </div>
                        <div class="container_days">
                            <span class="week_days_item item_day"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_calculadora" class="none main_calculadora  main ">
                <div class="container_calculadora">
                    <elements>
                        <ePantalla>
                            <div class="ePantalla">{{numeros}}</div>
                        </ePantalla>
                        <eBotonN>
                            <div class="eBotonN" onclick="fNumero('{{numero}}')">{{numero}}</div>
                        </eBotonN>
                        <eBotonO>
                            <div class="eBotonO" onclick="fOperacion('{{operador}}')">{{operador}}</div>
                        </eBotonO>
                    </elements>
                    <div class="calculadora">
                        <div id="cPantalla"></div>
                        <div id="cBotonesN"></div>
                        <div id="cBotonesO"></div>
                        <div class="Reset_Calc" id="Reset_Calc">RESET</div>
                    </div>
                </div>
            </div>
            <div id="main_mapas" class="none main_mapas  main ">
                <div class="container_distancia" id="container_distancias">
                    <form class="form_mapa">
                        <!-- Location 1 -->
                        <div id="ciudad_origen" class="row input_ciudades">
                            <div class="ciudades">
                                <div class="location-label">

                                </div>
                                <div class="location-input1">
                                    <input type="text" id="location-1" name="origen"
                                        placeholder="Origen: Girona / España">
                                </div>
                            </div>
                            <div id="ciudad_destino" class="ciudades">
                                <div class="location-label">

                                </div>
                                <div class="location-input2">
                                    <input type="text" id="location-2" name="destinación"
                                        placeholder="Entrar la localidad de destino...">
                                </div>
                            </div>
                        </div>
                        <div id="container_coordenadas" class="container_coordenadas">
                            <table class="table_elements">
                                <tr>
                                    <td>
                                        <input type="button" value="Ubicación Actual" onclick="PosicionActual();"
                                            class="btn">
                                    </td>
                                    <td><input type="text" name="longitud" id="my_lat" placeholder="Latitud" readonly>
                                    </td>
                                    <td><input type="text" name="latitud" id="my_lng" placeholder="Longitud" readonly>
                                    </td>
                                    <td>
                                        <input class="none" id="latlng" type="text" value="41.3696,2.1168128">
                                        <input id="submit" type="button" value="Obtener Nombre"
                                            onclick=" geocodeLatLng();">
                                    </td>
                                </tr>
                            </table>
                        </div <!-- Submit button -->
                        <div class="btn_ciudades">
                            <button id="limpiar_ruta" class="button" type="button">Limpiar</button>
                            <button id="iniciar_ruta" class="button" type="button">Enviar</button>
                        </div>
                        <!-- Stats table -->
                        <div id="output" class="result-table"></div>
                    </form>
                    <div class="google_mapa_ruta none" id="google-map"></div>
                    <div class="google_mapa0 none" id="google_mapa0"></div>
                    <img id="market" class="market_img none" src="./assets/img/a-Market.png" alt="" srcset="">
                </div>
            </div>
            <div id="main_contactos" class="none main_continente">
                <div id="contenedor_contactos" class="contenedor none">
                    <div class="continente_left">
                        <div id="div_contactos1" class="contenido">
                            <img id="img_contacto1" src="assets/img/Flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Contactos1</h2>
                        </div>
                        <div id="div_contactos2" class="contenido">
                            <img id="img_contacto2" src="assets/img/radio_Flaixbac.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Contactos2</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="div_contactos3" class="contenido_lef contenido ">
                            <img id="img_contactos3" src="assets/img/Catalunya_radio.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Contactos3</h2>
                        </div>
                        <div id="div_contactos4" class="  contenido ">
                            <img id="img_contactos4" src="assets/img/radio_Rac1.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Contactos4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_documentos" class="none main_continente">
                <div id="contenedor_documentos" class="contenedor none">
                    <div class="continente_left">
                        <div id="radio_flaix_fm" class="  contenido ">
                            <img id="img_flaix_fm" src="assets/img/Flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Documento1</h2>
                        </div>
                        <div id="radio_flaixbac" class="  contenido ">
                            <img id="img_flaixbac" src="assets/img/radio_Flaixbac.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Documento2</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="radio_catalunya_radio" class="contenido">
                            <img id="img_catalunya_radio" src="assets/img/Catalunya_radio.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Documento3</h2>
                        </div>
                        <div id="radio_rac_1" class="  contenido ">
                            <img id="img_Rac_1" src="assets/img/radio_Rac1.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Documento4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_imagenes" class="none main_continente">
                <div id="contenedor_imagenes" class="contenedor none">
                    <div class="continente_left">
                        <div id="div_imagenes1" class="  contenido ">
                            <img id="img_imagenes1" src="assets/img/Flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Imagenes1</h2>
                        </div>
                        <div id="div_imagenes2" class="contenido">
                            <img id="img_imagenes2" src="assets/img/radio_Flaixbac.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Imagenes2</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="div_imagenes3" class="  contenido ">
                            <img id="img_imagenes3" src="assets/img/Catalunya_radio.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Imagenes3</h2>
                        </div>
                        <div id="div_imagenes4" class="contenido">
                            <img id="img_imagenes4" src="assets/img/radio_Rac1.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Imagenes4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_musica" class="none main_continente">
                <div id="contenedor_musica" class="contenedor none">
                    <div class="continente_left">
                        <div id="musica_dance" class="contenido">
                            <img id="img_musica_dance" src="assets/img/Flaixfm.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Música Dance</h2>
                        </div>
                        <div id="musica_disco" class="contenido">
                            <img id="img_musica_disco" src="assets/img/radio_Flaixbac.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Música Disco</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="musica_3" class="  contenido ">
                            <img id="musica_3" src="assets/img/Catalunya_radio.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Musica3</h2>
                        </div>
                        <div id="musica_4" class="contenido">
                            <img id="img_musica_4" src="assets/img/radio_Rac1.jpg" class="img_contenido">
                            <h2 class="h2_contenido">Musica4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_videos" class="none main_continente">
                <div id="contenedor_videos" class="contenedor none">
                    <div class="continente_left">
                        <div id="contenido_video1" class="contenido">
                            <video id="vid_video1" class="fm-video video-js" poster="assets/img/fondos_main/video1.jpg"
                                src="assets/videos/Límites éticos para la inteligencia artificial DW Documental.mp4"
                                type="video/mp4" controls></video>
                            <h2 class="h2_contenido">Video1</h2>
                        </div>
                        <div id="contenido_video2" class="contenido">
                            <video id="vid_video2" class="fm-video video-js" poster="assets/img/fondos_main/video2.jpg"
                                src="assets/videos/Límites éticos para la inteligencia artificial DW Documental.mp4"
                                type="video/mp4" controls></video>
                            <h2 class=" h2_contenido">Video2</h2>
                        </div>
                    </div>
                    <div class="continente_right">
                        <div id="contenido_video3" class="  contenido ">
                            <video id="vid_video3" class="fm-video video-js" poster="assets/img/fondos_main/video3.jpg"
                                src="assets/videos/Límites éticos para la inteligencia artificial DW Documental.mp4"
                                type="video/mp4" controls></video>
                            <h2 class="h2_contenido">Video3</h2>
                        </div>
                        <div id="contenido_video4" class="  contenido ">
                            <video id="vid_video4" class="fm-video video-js" poster="assets/img/fondos_main/video4.jpg"
                                src="assets/videos/Límites éticos para la inteligencia artificial DW Documental.mp4"
                                type="video/mp4" controls></video>
                            <h2 class="h2_contenido">Video4</h2>
                        </div>
                    </div>
                </div>
            </div>
            <video id="mus_fondo" class="video-js mus_fondo none" controls preload="auto" poster="" data-setup="{}">
                <source id="src_mus_fondo" class="src_mus_fondo"  src="" type="video/mp4"></video>
            <iframe src="" frameborder="0" id="iframe_home" class="iframe_home none"></iframe>
        </section>
        <section id="row_cinco" class="row_cinco">
            <div id="key_vir" class="key_vir none">
                <div id="key_std" class=""></div>
                <div id="key_num" class=""></div>
            </div>
            <div id="on_off_key_vir" class="on_off_key nav-down ">
                <a><img id="on_key_vir" class="on_key_vir" src="assets/img/teclado(4).png"
                        alt="ocultar teclado virtual" />
                </a>
                <a><img id="off_key_vir" class=" off_key_vir none" src=" assets/img/teclado(4).png"
                        alt="mostrar teclado virtual" />
                </a>
            </div>
        </section>
        <section id="row_seis" class="row_seis">
            <div id="footer" class="footer ">
                <div id="pie_pag" class="pie_pag">
                    <a>
                        <p id="kuv_foo"><span id="kuv_foo1">TAVAT</span><span class="separador">&copy;</span><br><span
                                id="any">2021</p>
                        <p class="displaynone">Tavat es una herramienta de accesibilidad web para todos</p>
                    </a>
                    <div id="copy_rafael" class="copy_rafael">
                        <a href="mailto:rafaelmansa@gmail.com"> &copy; 2021 Rafael Almansa Tejada
                        </a>
                    </div>
                </div>
                <a><img id="off_kuv_inf" class="logo_footer" src="assets/img/Logo KUVAWT.png"
                        alt=" Kuvawt, Keyboard Universal Virtual De accesibilidad web para tod@s" />
                    <p class="displaynone">Ocultar Tavat en la pantalla </p>
                </a>
                <a><img id="on_kuv_inf" class="logo_footer none" src="assets/img/Logo KUVAWT.png"
                        alt=" Kuvawt, Keyboard Universal Virtual De accesibilidad web para tod@s" />
                    <p class="displaynone">Mostrar Tavat en la pantalla</p>
                </a>
            </div>
        </section>
    </main>
    <script src="https://vjs.zencdn.net/7.11.4/video.min.js"></script>
    <script src="https://newsapi.org/v2/everything?q=keyword&apiKey=4806341a227345f3941ad4c5495af761"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"></script>
    <script type="text/javascript" src="https://code.responsivevoice.org/responsivevoice.js?key=cEirgdsd"></script>
    <script type="text/javascript" src="https://momentjs.com/downloads/moment.min.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/es.js"></script>

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXsDIfZXOYl1Jgd89H0Gey_2R9ykZsaVM&libraries=places"
        async>
    </script>
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXsDIfZXOYl1Jgd89H0Gey_2R9ykZsaVM&callback=initMap&libraries=&v=weekly"
        async></script>

    <!-------------------------------SCRIPTS INTERNOS----------------------------->

    <script type="text/javascript" src="./assets/js/countdown.js"></script>
    <script type="text/javascript" src="./assets/js/simplyCountdown.min.js"></script>
    <script type="text/javascript" src="./assets/js/moment.js"></script>
    <script type="text/javascript" src="./assets/js/moment_local.js"></script>
    <script type="text/javascript" src="./assets/js/calculadora_script.js"></script>
    <script type="text/javascript" src="./assets/js/calendario_script.js"></script>
    <script type="text/javascript" src="./assets/js/reloj_analogico.js"></script>
    <script type="text/javascript" src="./assets/js/artyom.js"></script>
    <script type="text/javascript" src="./assets/js/artyom.min.js"></script>
    <script type="text/javascript" src="./assets/js/jquery3410.min.js"></script>
    <script type="text/javascript" src="./assets/js/ResponsiveVoice164.js"></script>
    <script type="text/javascript" src="./assets/js/speechRecognition.js"></script>
    <script type="text/javascript" src="./assets/js/Comandos_voz_audio_video.min.js"></script>
    <script type="text/javascript" src="./assets/js/notas_voz_gmail.js"></script>
    <script type="text/javascript" src="./assets/js/face_api.js"></script>
    <script type="text/javascript" src="./assets/js/det_ml5.js"></script>
    <script type="text/javascript" src="./assets/js/carrusel.js"></script>
    <script type="text/javascript" src="./assets/js/Keyboard.js"></script>
    <script type="text/javascript" src="./assets/js/numpad.js"></script>
    <script type="text/javascript" src="./assets/js/key_num.js"></script>
    <script type="text/javascript" src="./assets/js/fecha_hora.js"></script>
    <script type="text/javascript" src="./assets/js/apiClima.js"></script>
    <script type="text/javascript" src="./assets/js/funciones.js"></script>
    <script type="text/javascript" src="./assets/js/asis_tavat.js"></script>
    <script type="text/javascript" src="./assets/js/asis_tavat_w.js"></script>
    <script type="text/javascript" src="components/jquery/jquery.min.js"></script>
   
</body>
</html>