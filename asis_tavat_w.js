(function (window) {

    /*-----------------------CUANTO FALTA PARATAL HORA------*/

    artyom.on(['cuánto falta para las *', 'cuántas horas faltan para las *', "cuánto tiempo queda las *", "cuánto queda para las *"], true).then(function (i, wildcard) {
        Calendario();
        var fechaActual0 = new Date();
        var Horas0 = fechaActual0.getHours();
        var fechaActual1 = new Date();
        var Horas1 = fechaActual1.getHours();
        var Minutos1 = fechaActual1.getMinutes();
        var minutos = " minutos ";
        var setTempo = 1000;
        var hora_actual = Horas0 + 1;
        var horas = " horas ";
        var y1 = " y ";
        var y2 = " y ";
        var faltan = "faltan ";
        var de_las = " de las ";
        var para_las = "para las ";
        var hora_propuesta0 = wildcard;
        var hora_propuesta1 = hora_propuesta0.split(":");
        var hora_propuestaS = hora_propuesta1[0];
        var hora_propuesta = parseInt(hora_propuesta1[0]);
        var minutos_propuestosS = hora_propuesta1[1];
        var minutos_propuestos = parseInt(hora_propuesta1[1]);
        var n1 = '';
        var n2 = '';
        var operacion = '';
        var n = hora_propuesta1.length;

        if (n == 1) {
            minutos_propuestos = 0;
        }
        if (hora_propuestaS == "una") {
            hora_propuesta = 1;
        }
        if (Horas0 >= 12 && hora_propuesta <= 12) {
            hora_propuesta = hora_propuesta + 12;
            if (hora_propuesta < Horas0) {
                hora_propuesta = hora_propuesta + 12;
            }
        }

        if (minutos_propuestosS == "cuarto") {
            minutos_propuestosS = 15;
        }
        if (minutos_propuestosS == "media") {
            minutos_propuestosS = 30;
        }
        if (minutos_propuestosS = "menos cuarto") {
            Horas = Horas + 1;
            minutos_propuestosS = 45;
        }
        if (Horas0 == 1 || Horas0 == 13) {
            de_las = " de la una ";
            wildcard = "";
        }
        var horas_pendientes = hora_propuesta - hora_actual;
        var minutos_pendientes = (60 - Minutos1) + minutos_propuestos;

        if (minutos_propuestos == null || minutos_propuestos == NaN) {
            minutos_propuestos = 0;
        }
        if (hora_propuesta == null || hora_propuesta == NaN) {
            hora_propuesta = 0;
        }
        if (minutos_pendientes >= 60) {
            horas_pendientes = horas_pendientes + 1;
            minutos_pendientes = minutos_pendientes - 60;
        }
        if (horas_pendientes == 0) {
            horas_pendientes = "";
            horas = "",
                y1 = "";
        }
        if (minutos_pendientes == 1) {
            minutos = " minuto ";
        }
        if (hora_propuesta <= 3) {
            franja_horaria = " de la madrugada";
        }
        if (hora_propuesta > 3 && hora_propuesta < 12) {
            franja_horaria = " de la mañana";
        }
        if (hora_propuesta == 12) {
            franja_horaria = " del mediodia";
        }
        if (hora_propuesta > 12 && hora_propuesta < 21) {
            franja_horaria = " de la tarde";
        }
        if (hora_propuesta > 20) {
            franja_horaria = " de la noche";
        }
        if (horas_pendientes < 0 || hora_propuesta < Horas0) {
            respuesta = "ja,es más tarde" + de_las + wildard;
        }
        if (minutos_pendientes == 1) {
            minutos_pendientes = "un";
        }
        if (minutos_pendientes == 0) {
            minutos_pendientes = "";
            minutos = "";
            y1 = "";
        }
        if (minutos_propuestos == 0) {
            minutos_propuestos = "";
            y2 = "";
        }
        if (hora_propuesta > 24) {
            hora_propuesta = hora_propuesta - 24;
        }
        if (hora_propuesta > 12 && hora_propuesta <= 24) {
            hora_propuesta = hora_propuesta - 12;
        }
        if (hora_propuesta == 1) {
            hora_propuesta = " una";
            para_las = "para la";
        }

        respuesta = faltan + horas_pendientes + horas + y1 + minutos_pendientes + minutos + para_las + hora_propuesta + y2 + minutos_propuestos + franja_horaria;

        if (horas_pendientes < 0) {
            respuesta = "Es más tarde.. ";
            setTimeout(() => {
                Responder(respuesta);
                horaMin();
            }, 1000);
        } else {
            setTimeout(() => {
                Responder(respuesta);
            }, 1500);
        }
    });

    /*------------------------------------*/
    // Comando inteligente (código corto de forma artesanal), establezca el segundo parámetro de .on en verdadero

    artyom.on(['Repeite lo que digo *'], true).then((i, wildcard) => {
        Responder("has dicho : " + wildcard);
    });

    artyom.on(['cambia el reloj a *', 'cambia el formato del reloj a *', 'cambia el formato horario a *', 'cambia el formato horario del reloj a *'], true).then((i, wildcard) => {

        var formato_reloj = wildcard.toString();

        if (formato_reloj == "12 horas") {
            $("#reloj_h1_12h,#franja_horaria_reloj").removeClass("none");
            $("#reloj_h1_24h").addClass("none");
            Responder("El formato del reloj se ha cambiado a 12 horas");
        }
        if (formato_reloj == "24 horas") {
            $("#reloj_h1_24h").removeClass("none");
            $("#reloj_h1_12h,#franja_horaria_reloj").addClass("none");
            Responder("El formato del reloj se ha cambiado a 24 horas");
        }
    });

    artyom.on(['qué día hace hoy en *', 'qué día hace en *', "qué tiempo hace hoy en *", "qué tiempo hace en *", "cómo se presenta el día en *", "qué tál tiempo hace hoy en *", "qué tál tiempo hace en *"], true).then(function (i, wildcard) {
        var ciudad_clima = wildcard;
        var tiempo_responder = 14000;
        api_weather = 'https://api.openweathermap.org/data/2.5/weather?q=' + wildcard + '&units=metric&lang=sp,es&appid=043307b6d8fc86b7c4635e7738f4319b';
        Clima();
        $("#iframe_clima").attr("src", 'https://api.openweathermap.org/data/2.5/weather?q=' + wildcard + '&mode=html&units=metric&lang=sp,es&appid=043307b6d8fc86b7c4635e7738f4319b');
        setTimeout(() => {
            darElClima();
        }, 1500);
        setTimeout(() => {
            tiempo_responder = 6000;
        }, 3000);
        setTimeout(() => {
            api_weather = 'https://api.openweathermap.org/data/2.5/weather?q=Quart,es&units=metric&lang=sp,es&appid=043307b6d8fc86b7c4635e7738f4319b';
            $("#iframe_clima").attr("src", 'https://api.openweathermap.org/data/2.5/weather?q=Gitona,es&mode=html&units=metric&lang=sp,es&appid=043307b6d8fc86b7c4635e7738f4319b');
            Clima();
        }, 15000);
    });
    artyom.on(["llueve hoy en *", "tienen lluvia hoy en *"], true).then(function (i, wildcard) {
        var ciudad_clima = wildcard;
        var tiempo_responder = 6000;
        var api_weather = 'https://api.openweathermap.org/data/2.5/weather?q=' + wildcard + '&units=metric&lang=sp,es&appid=043307b6d8fc86b7c4635e7738f4319b';
        Clima();

        setTimeout(() => {
            if (desc.innerHTML == "lloviznando") {
                Responder("Sí, está lloviznadon en " + wildcard);
            }
            if (desc.innerHTML == "llueve de forma moderada") {
                Responder("Sí, llueve de fotrma moderada " + wildcard);
            } else {
                Responder("No, en estos momentos no llueve en " + wildcard + cielo + desc.innerHTML);
            }
        }, 1500);
        setTimeout(() => {
            tiempo_responder = 6000;
        }, 3000);
        setTimeout(() => {
            api_weather = 'https://api.openweathermap.org/data/2.5/weather?q=Quart,es&units=metric&lang=sp,es&appid=043307b6d8fc86b7c4635e7738f4319b';
            Clima();
        }, 15000);
    });

    artyom.on(["cuánto falta para el *"], true).then(function (i, wildcard) {
        Calendario();
        var fechaActual0 = new Date();
        var diaSem0 = fechaActual0.getDay();
        diaSem0 = diaSem0 + 1;
        var diaSemana = wildcard.toString();
        var faltan = "faltan ";

        if (diaSemana == "domingo") {
            diaSemana = 1;
        }
        if (diaSemana == "lunes") {
            diaSemana = 2;
        }
        if (diaSemana == "martes") {
            diaSemana = 3;
        }
        if (diaSemana == "miércoles") {
            diaSemana = 4;
        }
        if (diaSemana == "jueves") {
            diaSemana = 5;
        }
        if (diaSemana == "viernes") {
            diaSemana = 6;
        }
        if (diaSemana == "sábado") {
            diaSemana = 7;
        }

        var dias_pendientes = diaSemana - diaSem0;
        var dias = " días para el ";


        if (diaSemana < diaSem0) {
            dias_pendientes = (7 - diaSem0) + diaSemana;
        }
        if (dias_pendientes == 0) {
            respuesta = ("no falta ningún día ya que hoy es " + wildcard);
        }
        if (dias_pendientes > 0) {
            respuesta = (faltan + dias_pendientes + dias + wildcard)
        }
        if (dias_pendientes == 1) {
            respuesta = "falta sólo un día.. mañana ya es " + wildcard;
            if (diaSem0 = 1) {
                respuesta = "falta sólo un día.. mañana ya es " + wildcard;
            }
        }
        if (dias_pendientes == 2 && diaSem0 == 7) {
            respuesta = "tienes todo el fin de semana por delante.. aún faltan..dos días hasta el lunes..";
        }
        setTimeout(() => {
            Responder(respuesta);
        }, 1000);
    });

    artyom.on(["calcula lo siguiente *", "dime el resultado de *", "resuelve la siguiente operación aritmética *"], true).then(function (i, wildcard) {
        Calculadora();
        var resultado0 = wildcard;
        var resultado = resultado0.split(" ", );
        let indiceA0 = 0;
        let indiceA1 = 0;
        let indiceA2 = 0;
        let indiceA4 = 0;

        indiceA0 = resultado[0];
        indiceA1 = resultado[1];
        indiceA2 = resultado[2];
        indiceA4 = resultado[4];

        var operador;
        var resultadofinal;
        if (resultado.length == 3 && indiceA1 == "más" || indiceA1 == "+") {
            var resultadofinal = parseFloat(indiceA0) + parseFloat(indiceA2);
            operador = "sumar ";
        }
        if (resultado.length == 3 && indiceA1 == "menos" || indiceA1 == "-") {
            var resultadofinal = parseFloat(indiceA0) - parseFloat(indiceA2);
            operador = "restar ";
        }
        if (resultado.length == 3 && indice1 == "por" || indice1 == "x") {
            var resultadofinal = parseFloat(indiceA0) * parseFloat(indiceA2);
            operador = "multiplicar ";
        }
        if (resultado.length == 3 && indiceA1 == "entre") {
            var resultadofinal = parseFloat(indiceA0) / parseFloat(indiceA2);
            operador = "dividir ";
        }
        if (resultado.length == 5 && indiceA1 == "menos" || indiceA1 == "-") {
            var resultadofinal = parseFloat(indiceA0) - parseFloat(indiceA2) - parseFloat(indiceA4);
            operador = "restar ";
        }
        if (resultado.length == 5 && indiceA1 == "por") {
            var resultadofinal = parseFloat(indiceA0) * parseFloat(indiceA2) * parseFloat(indiceA4);
            operador = "multiplicar ";
        }
        if (resultado.length == 5 && indiceA1 == "entre") {
            var resultadofinal = (parseFloat(indiceA0) / parseFloat(indiceA2)) / parseFloat(indiceA4);
            operador = "dividir ";
        }
        if (resultado.length == 2 || resultado.length == 4 || resultado.length == 6 || resultado.length == 8) {
            Responder("No te he entendido Rafael!!..Repítemelo por favor!");
        } else {
            Responder("el resultado de " + operador + wildcard + " es  " + resultadofinal);
            operador = "dividir ";
        }
        setTimeout(() => {
            n2 = resultadofinal;
            ePantalla.set({
                numeros: n2
            });
            cPantalla.render();
        }, 1000);
    });

    artyom.on(["Cuánto es la raíz cuadrada de *", "díme la raíz cuadrada de *", "calcula la raíz cuadrada de *"], true).then(function (i, wildcard) {
        Calculadora();
        numeroRaiz0 = wildcard;
        numeroRaiz1 = parseInt(numeroRaiz0);
        resultadoRaiz2 = Math.sqrt(numeroRaiz1);
        resultadofinal2 = resultadoRaiz2.toFixed(1);
        Responder("la raíz cuadrada de " + wildcard + " es " + resultadofinal2);
        n2 = resultadofinal2;
        ePantalla.set({
            numeros: n2
        });
        cPantalla.render();
    });

    artyom.on(["Cuánto es la raíz cúbica de *", "díme la raíz cúbica de *", "calcula la raíz cúbica de *", "calcula la raíz al cubo de *", "cúanto es la raíz al cubo de *"], true).then(function (i, wildcard) {
        Calculadora();
        numeroRaizCub0 = wildcard;
        numeroRaizCub1 = parseInt(numeroRaizCub0);
        const raizCubica2 = Math.pow(numeroRaizCub1, 1 / 3);
        resultadofinalcub = raizCubica2.toFixed(1);
        Responder("la raíz cúbica de " + wildcard + " es " + resultadofinalcub);
        n2 = resultadofinalcub;
        ePantalla.set({
            numeros: n2
        });
        cPantalla.render();
    });

    artyom.on(["cuánto es el *"], true).then(function (i, wildcard) {
        Calculadora();
        var pregunta0 = wildcard;
        var pregunta = pregunta0.split(" ", );
        var indicea = pregunta[0];
        var indiceb = pregunta[3];

        resultadofinal = (indicea * indiceb) / 100;
        Responder("el " + wildcard + " es " + resultadofinal);
        n2 = resultadofinal;
        ePantalla.set({
            numeros: n2
        });
        cPantalla.render();
    });

    artyom.on(["cuántos días han pasado desde el *", "cuántos días han transcurrido desde el *"], true).then(function (i, wildcard) {
        Calendario();
        let resultado01 = wildcard;
        resultado01 = [];
        let resultado1 = resultado01.split(" ", );
        let indice01 = resultado1[4];
        let indice02 = resultado1[2];
        let indice03 = resultado1[0];
        let indice04 = resultado1[5];
        let indice05 = resultado1[6];
        if (indice01 == null) {
            var fechaActual = new Date();
            indice01 = fechaActual.getFullYear();
        }
        if (indice02 == "enero") {
            indice02 = 1;
        }
        if (indice02 == "febrero") {
            indice02 = 2;
        }
        if (indice02 == "marzo") {
            indice02 = 3;
        }
        if (indice02 == "abril") {
            indice02 = 4;
        }
        if (indice02 == "mayo") {
            indice02 = 5;
        }
        if (indice02 == "junio") {
            indice02 = 6;
        }
        if (indice02 == "julio") {
            indice02 = 7;
        }
        if (indice02 == "agosto") {
            indice02 = 8;
        }
        if (indice02 == "septiembre") {
            indice02 = 9;
        }
        if (indice02 == "octubre") {
            indice02 = 10;
        }
        if (indice02 == "noviembre") {
            indice02 = 11;
        }
        if (indice02 == "diciembre") {
            indice02 = 12;
        }
        if (indice01 == "año" && indice04 == "pasado" || indice01 == "pasado" && indice04 == "año") {
            var fechaActual = new Date();
            indice01 = fechaActual.getFullYear() - 1;
        }
        var fechaPasada0 = parseInt(indice01) + "-" + parseInt(indice02) + "-" + parseInt(indice03);


        setTimeout(() => {
            var fechaActualM = moment();
            var fechaPasada = moment(fechaPasada0);
            var diasTranscurridos = fechaActualM.diff(fechaPasada, 'days');
            Responder("Hola Rafael desde el " + wildcard + " hasta hoy,han transcurrido: " + diasTranscurridos + " días");
        }, 500);
    });

    artyom.on(["cuántos días quedan para el *", "cuántos días faltan para el *", "cuántos días faltan hasta el *"], true).then(function (i, wildcard) {
        Calendario();
        if (wildcard == "lunes" || wildcard == "martes" || wildcard == "miércoles" || wildcard == "jueves" || wildcard == "viernes" || wildcard == "sábado" || wildcard == "domingo") {
            var fechaActual0 = new Date();
            var diaSem0 = fechaActual0.getDay();
            var diaSem = new Date();
            switch (diaSem.getDay()) {
                case 0:
                    diaSem = "Domingo";
                    break;
                case 1:
                    diaSem = "Lunes";
                    break;
                case 2:
                    diaSem = "Martes";
                    break;
                case 3:
                    diaSem = "Miércoles";
                    break;
                case 4:
                    diaSem = "Jueves";
                    break;
                case 5:
                    diaSem = "Viernes";
                    break;
                case 6:
                    diaSem = "Sábado";
                    break;
            };
            diaSem0 = diaSem0 + 1;
            var diaSemana = wildcard.toString();
            var faltan = "faltan ";

            if (diaSemana == "domingo") {
                diaSemana = 1;
            }
            if (diaSemana == "lunes") {
                diaSemana = 2;
            }
            if (diaSemana == "martes") {
                diaSemana = 3;
            }
            if (diaSemana == "miércoles") {
                diaSemana = 4;
            }
            if (diaSemana == "jueves") {
                diaSemana = 5;
            }
            if (diaSemana == "viernes") {
                diaSemana = 6;
            }
            if (diaSemana == "sábado") {
                diaSemana = 7;
            }

            var dias_pendientes = diaSemana - diaSem0;
            var dias = " días para el ";


            if (diaSemana < diaSem0) {
                dias_pendientes = (7 - diaSem0) + diaSemana;
            }
            if (dias_pendientes == 0) {
                respuesta = ("no falta ningún día ya que hoy es " + wildcard);
            }
            if (dias_pendientes > 0) {
                respuesta = ("estamos a " + diaSem + " " + faltan + dias_pendientes + dias + wildcard)
            }
            if (dias_pendientes == 1) {
                respuesta = "hoy es " + diaSem + " mañana ya será " + wildcard;
                if (diaSem0 = 1) {
                    respuesta = "estamos a " + diaSem + " mañana ya será " + wildcard;
                }
            }
            if (dias_pendientes == 2 && diaSem0 == 7) {
                respuesta = "estamos a " + diaSem + " tienes todo el fin de semana por delante.. aún faltan..dos días hasta el lunes..";
            }
            setTimeout(() => {
                Responder(respuesta);
            }, 1000);
        } else {
            let resultado01 = wildcard;
            let resultado1 = resultado01.split(" ", );

            let indice01 = resultado1[4];
            let indice02 = resultado1[2];
            let indice03 = resultado1[0];
            let indice04 = resultado1[5];
            let indice05 = resultado1[6];
            if (indice01 == null) {
                var fechaActual = new Date();
                indice01 = fechaActual.getFullYear();
            }
            if (indice02 == "enero") {
                indice02 = 1;
            }
            if (indice02 == "febrero") {
                indice02 = 2;
            }
            if (indice02 == "marzo") {
                indice02 = 3;
            }
            if (indice02 == "abril") {
                indice02 = 4;
            }
            if (indice02 == "mayo") {
                indice02 = 5;
            }
            if (indice02 == "junio") {
                indice02 = 6;
            }
            if (indice02 == "julio") {
                indice02 = 7;
            }
            if (indice02 == "agosto") {
                indice02 = 8;
            }
            if (indice02 == "septiembre") {
                indice02 = 9;
            }
            if (indice02 == "octubre") {
                indice02 = 10;
            }
            if (indice02 == "noviembre") {
                indice02 = 11;
            }
            if (indice02 == "diciembre") {
                indice02 = 12;
            }
            if (indice01 == "este" && indice04 == "año") {
                var fechaActual = new Date();
                indice01 = fechaActual.getFullYear();
            }
            if (indice01 == "año" && indice04 == "que" && indice05 == "viene") {
                var fechaActual = new Date();
                indice01 = fechaActual.getFullYear() + 1;
            }
            var fechaFutura0 = parseInt(indice01) + "-" + parseInt(indice02) + "-" + parseInt(indice03);

            setTimeout(() => {
                var fechaActualM = moment();
                var fechaFutura = moment(fechaFutura0);
                var diasRestantes = fechaFutura.diff(fechaActualM, 'days');
                Responder("Hola Rafael,desde hoy hasta el " + wildcard + " faltan: " + diasRestantes + " días");
            }, 500);
        }
    });

    /*-------------------------Responder si está en la lista----------------*/

    function Capitalizar(palabra) {
        return palabra[0].toUpperCase() + palabra.slice(1);
    };

    artyom.on(["conoces a *", "sabes quién es *"], true).then(function (i, wildcard) {
        let listaConocidos = ["ingrid", "laura", "jordi", "sandra"];
        let conocido0 = wildcard;
        let conocido = Capitalizar(conocido0);
        if (listaConocidos.includes(conocido0) == true) {
            if (i == 0) {
                respuesta = "Sí que conozco a " + conocido;
                Responder(respuesta);
            }
            if (i == 1) {
                respuesta = "Sí que sé quién es " + conocido;
                Responder(respuesta);
            }
            setTimeout(() => {
                if (listaConocidos[0] == conocido0) {
                    respuesta = "es tu hija mayor";
                    Responder(respuesta);
                }
                if (listaConocidos[1] == conocido0) {
                    respuesta = "es tu hija pequeña";
                    Responder(respuesta);
                }
                if (listaConocidos[2] == conocido0) {
                    respuesta = "es tu cuñado";
                    Responder(respuesta);
                }
                if (listaConocidos[3] == conocido0) {
                    respuesta = "es la compañera de la Ingrid";
                    Responder(respuesta);
                }
            }, 2000)
        } else {
            if (i == 0) {
                respuesta = "No conozco a " + conocido;
                Responder(respuesta);
            }
            if (i == 1) {
                respuesta = "No sé quién es " + conocido;
                Responder(respuesta);
            }
        }
    });

    //-------------------BUSCAR EN GOOGLE / YOYUTUBE----------------------------*/

    var buscaEnGoogle;
    var buscaEnYoutube;
    var buscaEnGmail;
    var buscaEnFacebook;
    var abreWhatsapp;


    artyom.addCommands([{
            indexes: ['abre Whatsapp'],
            action: function () {
                abreWhatsapp = window.open("https://web.whatsapp.com/", '_blank', 'width=1350,  height=470, left=0, top=280');
                Responder("aquí tienes Whatsapp");
            }
        },
        {
            indexes: ["Rafael", "cierra Whatssapp"],
            action: function () {
                abreWhatsapp.close();
                Responder(" Whatsapp se ha cerrado");
            }
        }
    ]);


    artyom.on(['busca en Google *'], true).then(function (i, wildcard) {
        buscaEnGoogle = window.open('https://www.google.com/search?q= ' + wildcard, '_blank', 'width=1350,  height=470, left=0, top=280');
        Responder("aquí tienes algunas busquedas de " + wildcard);
    });

    artyom.on(['Asìs comprueba *'], true).then(function (i, wildcard) {
        buscaEnGoogle = window.open('https://www.google.com/search?q= ' + wildcard, '_blank', 'width=1350,  height=470, left=0, top=280');
        Responder("aquí tienes" + wildcard);
    });

    artyom.on(['busca en Youtube *'], true).then(function (i, wildcard) {
        buscaEnYoutube = window.open('https://www.youtube.com/search?q= ' + wildcard, '_blank', 'width=1350,  height=470, left=0, top=280');
        Responder("aquí tienes algunas busquedas de " + wildcard + " en Youtube");
    });

    artyom.on(['busca en Gmail *'], true).then(function (i, wildcard) {
        buscaEnGmail = window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/' + wildcard, '_blank', 'width=1350,  height=470, left=0, top=280');
        Responder("te muestro algunas busquedas de " + wildcard + " en Gmail");
    });

    artyom.on(['busca en Facebook *'], true).then(function (i, wildcard) {
        buscaEnFacebook = window.open('https://www.facebook.com/search?q= ' + wildcard, '_blank', 'width=1350,  height=470, left=0, top=280');
        Responder("Te muestro algunas busquedas de " + wildcard + " en Facebook");
    });

})(window);

artyom.addCommands([{
        indexes: ["cierra la ventana de Google", "cierra la pestaña de Google", "cierra la búsqueda en Google", "apaga Google", "desconecta Google", "cierra Google"],
        action: function () {
            buscaEnGoogle.close();
            Responder("Google se ha cerrado");
        }
    },
    {
        indexes: ["Rafael"],
        action: function () {
            buscaEnGoogle.close();
            abre_google.close();
            Responder("El navegador se ha cerrado");
        }
    },
    {
        indexes: ["cierra las ventanas", "cierra Youtube", "cierra la ventana de Youtube"],
        action: function () {
            buscaEnYoutube.close();
            Responder("Youtube se ha cerrado");
        }
    },
    {
        indexes: ["cierra las ventanas", "cierra Gmail", "cierra la ventana de Gmail"],
        action: function () {
            buscaEnGmail.close();
            Responder("Gmail se ha cerrado");
        }
    },
    {
        indexes: ["cierra las ventanas", "cierra Facebook", "cierra la ventana de Facebook"],
        action: function () {
            buscaEnFacebook.close();
            Responder("Facebook se ha cerrado");
        }
    }
]);

/*-----------------DISTANCIA ENTRE CIUDADES---------------*/
// CLAVE: AIzaSyAXsDIfZXOYl1Jgd89H0Gey_2R9ykZsaVM
var myLatLng = {
    lat: 41.942947,
    lng: 2.839484
};
var mapOptions = {
    center: myLatLng,
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// Hide result box
document.getElementById("output").style.display = "none";

// Create/Init map
var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

// Create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

// Create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

// Bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);

var resultado_distancia;
var resultado_duracion;
// Define calcRoute function

var calcular_distancia = 0;

artyom.on(["qué distancia hay hasta *", "distancia hasta *", "calcula la distancia hasta *", "calcula el recorrido hasta *"], true).then(function calcRoute(i, wildcard) {
    Mapas();
    var punto_destino = wildcard;

    if (punto_destino == "barcelona") {
        punto_destino = "Barcelona España";
    }
    if (punto_destino == "parís") {
        punto_destino = "París Francia";
    }
    if (punto_destino == "londres") {
        punto_destino = "Londre Inglaterra";
    }
    if (punto_destino == "moscú") {
        punto_destino = "Moscú Rusia";
    }
    if (punto_destino == "roma") {
        punto_destino = "Roma Italia";
    }
    if (punto_destino == "madrid") {
        punto_destino = "Madrid España";
    }
    if (calcular_distancia == 0) {
        respuesta = "Un momento Rafael..necesito unos segundos para conectar con el servidor y calcular la ruta correcta";
        Responder(respuesta);
        setTimeout(() => {
            calcular_distancia = 1;
        }, 500);
    }
    if (calcular_distancia == 1) {
        respuesta = "Un momento Rafael.. mientras recalculo la ruta hasta " + punto_destino;
        Responder(respuesta);
    }

    var posicion_actual = "Girona España";
    document.getElementById("location-1").value = posicion_actual;
    document.getElementById("location-2").value = punto_destino;

    //creatwilde request
    setTimeout(() => {
        var request = {
            origin: document.getElementById("location-1").value,
            destination: document.getElementById("location-2").value,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            origin: posicion_actual,
            destination: punto_destino
        }

        // Routing
        directionsService.route(request, function (result, status) {
            var Horas = fechaActual.getHours();
            var Horas = fechaActual.getHours();
            if (status == google.maps.DirectionsStatus.OK) {
                var resultado_distancia = result.routes[0].legs[0].distance.value / 1000;
                var resultado_duracion = result.routes[0].legs[0].duration.text;
                var resultado_duracion_lec = result.routes[0].legs[0].duration.text;
                var resultado_duracion_m = result.routes[0].legs[0].duration.value / 60;
                var duracion_h = result.routes[0].legs[0].duration.value / 3600;
                var duracion_horas_min = duracion_h.toFixed(2);
                var duracion_horas = duracion_h.toFixed();
                var duracion_minutos = duracion_horas_min - duracion_horas;
                var duracion_min = duracion_minutos.toFixed(2) * 60;
                var duracion_min_final = parseInt(duracion_min);
                var minutos = " minutos";
                var horas = " horas";
                if (resultado_duracion_m > 60 && resultado_duracion_m < 1440) {
                    resultado_duracion_lec = " ";
                    minutos = " minutos";
                    horas = " horas";
                }
                if (resultado_duracion_m > 1440) {
                    duracion_horas = " ";
                    horas = " ";
                    duracion_min_final = " ";
                    minutos = " ";
                }
                if (resultado_duracion_m < 60) {
                    minutos = " minutos";
                    duracion_horas = "";
                    horas = " ";
                    duracion_min_final = " ";
                    minutos = "utos";
                }
                if (Horas > 12) {
                    Horas = Horas + 12;
                }
                //Get distance and time            
                $("#output").html("<div class='result-table'> La distancia es: " + parseInt(resultado_distancia) + " km" + ".<br />Duración del trayecto: " + resultado_duracion + "</div>");
                document.getElementById("output").style.display = "flex";
                Responder("La distancia desde Girona hasta " + punto_destino + " es de: " + parseInt(resultado_distancia) + " km" + " y la duración del trayecto es de aproximadamente " + resultado_duracion_lec + duracion_horas + horas + duracion_min_final + minutos);
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
    }, 3000);
    setTimeout(() => {
        clearRoute();
    }, 50000);
});
/*-----------------------DISTANCI ENTRE CIUDADES---------------------*/

artyom.on(["qué distancia hay entre *", "calcula la distancia entre *", "calcula el recorrido entre *", "cuál es la distancia entre *", "calcula la ruta entre *"], true).then(function calcRoute(i, wildcard) {
    Mapas();
    var distRuta = wildcard;
    document.getElementById("location-1").value = "Origen";
    document.getElementById("location-2").value = "Destino";
    var PuntoOrigen = document.getElementById("location-1").value;
    var PuntoDestino = document.getElementById("location-2").value;
    var Ruta = distRuta.split(" ", );
    var nl = Ruta.length;

    if (Ruta[0] == "barcelona") {
        Ruta[0] = "Barcelona España";
    }
    if (Ruta[nl - 1] == "barcelona") {
        Ruta[nl - 1] = "Barcelona España";
    }
    if (Ruta[0] == "parís") {
        Ruta[0] = "París Francia";
    }
    if (Ruta[nl - 1] == "parís") {
        Ruta[nl - 1] = "París Francia";
    }
    if (Ruta[0] == "londres") {
        Ruta[0] = "Londres Inglaterra";
    }
    if (Ruta[nl - 1] == "londres") {
        Ruta[nl - 1] = "Londres Ingraterra";
    }
    if (Ruta[0] == "moscú") {
        Ruta[0] = "Moscú Rusia";
    }
    if (Ruta[nl - 1] == "moscú") {
        Ruta[nl - 1] = "Moscú Rusia";
    }
    if (Ruta[0] == "roma") {
        Ruta[0] = "Roma Italia";
    }
    if (Ruta[nl - 1] == "roma") {
        Ruta[nl - 1] = "Roma Italia";
    }
    if (Ruta[0] == "madrid") {
        Ruta[0] = "Madrid España";
    }
    if (Ruta[nl - 1] == "madrid") {
        Ruta[nl - 1] = "Madrid España";
    }
    if (Ruta[0] == "berlín") {
        Ruta[0] = "Berlín Alemania";
    }
    if (Ruta[nl - 1] == "berlín") {
        Ruta[nl - 1] = "Berlín Alemania";
    }
    PuntoOrigen = Ruta[0];
    PuntoDestino = Ruta[nl - 1];
    if (calcular_distancia == 0) {
        respuesta = "Un momento Rafael..necesito unos segundos para conectar con el servidor y calcular la ruta correcta entre " + distRuta;
        Responder(respuesta);
        setTimeout(() => {
            calcular_distancia = 1;
        }, 500);
    }
    if (calcular_distancia == 1) {
        respuesta = "Un momento Rafael.. mientras recalculo la ruta entre " + distRuta;
        Responder(respuesta);
    }
    document.getElementById("location-1").value = PuntoOrigen;
    document.getElementById("location-2").value = PuntoDestino;
    //creatwilde request
    setTimeout(() => {
        var request = {
            origin: PuntoOrigen,
            destination: PuntoDestino,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC
        }

        // Routing
        directionsService.route(request, function (result, status) {

            if (status == google.maps.DirectionsStatus.OK) {
                var resultado_distancia = result.routes[0].legs[0].distance.value / 1000;
                var resultado_duracion = result.routes[0].legs[0].duration.text;
                var resultado_duracion_lec = result.routes[0].legs[0].duration.text;
                var resultado_duracion_m = result.routes[0].legs[0].duration.value / 60;
                var duracion_h = result.routes[0].legs[0].duration.value / 3600;
                var duracion_horas_min = duracion_h.toFixed(2);
                var duracion_horas = duracion_h.toFixed();
                var duracion_minutos = duracion_horas_min - duracion_horas;
                var duracion_min = duracion_minutos.toFixed(2) * 60;
                var duracion_min_final = parseInt(duracion_min);
                var minutos = " minutos ";
                var horas = " horas ";
                if (resultado_distancia == undefined || resultado_distancia == null) {
                    Responder("indicamé el pais de origen y destino por favor");
                }
                if (resultado_duracion_m > 60 && resultado_duracion_m < 1440) {
                    resultado_duracion_lec = " ";
                    minutos = " minutos ";
                    horas = " horas ";
                }
                if (resultado_duracion_m > 1440) {
                    duracion_horas = " ";
                    horas = " ";
                    duracion_min_final = " ";
                    minutos = " ";
                }
                if (resultado_duracion_m < 60) {
                    minutos = " minutos ";
                    duracion_horas = "";
                    horas = " ";
                    duracion_min_final = " ";
                    minutos = "utos ";
                }

                //Get distance and time            
                $("#output").html("<div class='result-table'> La distancia es: " + parseInt(resultado_distancia) + " km" + ".<br />Duración del trayecto: " + resultado_duracion + "</div>");
                document.getElementById("output").style.display = "flex";
                Responder("El trayecto es de " + distRuta + " es de: " + parseInt(resultado_distancia) + " km" + " y la duración es de aproximadamente " + resultado_duracion_lec + duracion_horas + horas + duracion_min_final + minutos);
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
    }, 3000);
    setTimeout(() => {
        clearRoute();
    }, 50000);
});


/*---------------------RESTO----------*/

// Clear results

function clearRoute() {
    document.getElementById("output").style.display = "none";
    document.getElementById("location-1").value = "";
    document.getElementById("location-2").value = "";
    directionsDisplay.setDirections({
        routes: []
    });
}

// Create autocomplete objects for all inputs

var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("location-1");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("location-2");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);

/*--------------------------MAPAS2----------------*/
const getLocations = () => {
    fetch('https://www.datos.gov.co/resource/g373-n3yy.json')
        .then(response => response.json())
        .then(locations => {
            let locationsInfo = []

            locations.forEach(location => {
                let locationData = {
                    position: {
                        lat: location.punto.coordinates[1],
                        lng: location.punto.coordinates[0]
                    },
                    name: location.nombre_sede
                }
                locationsInfo.push(locationData)
            })
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((data) => {
                    let currentPosition = {
                        lat: data.coords.latitude,
                        lng: data.coords.longitude
                    }
                    dibujarMapa(currentPosition, locationsInfo)
                })
            }
        });
};