/*---------------------------------FUNCION DE FECHA HORA---------------------------------*/
var respuesta = "";
var Lugar = "Quart ";
var fechaActual = new Date();
var diaSem = fechaActual.getDay();
var Dia = fechaActual.getDate();
var Mes = fechaActual.getMonth();
var Año = fechaActual.getFullYear();
var Horas00 = fechaActual.getHours();
var Horas11 = fechaActual.getHours();
var Minutos00 = fechaActual.getMinutes();
var Minutos11 = fechaActual.getMinutes();
var Segundos00 = fechaActual.getSeconds();
var minutos = " minutos";
var franja_horaria = "";
var son_las = " son las ";
var y = " y ";
var saludo = " ";


if (Horas00 > 12) {
    Horas00 = Horas00 - 12;
}
if (Horas00 == 0) {
    Horas00 = 12;
}
if (Minutos11 < 10) {
    Minutos11 = "0" + Minutos11;
}
if (Segundos00 < 10) {
    Segundos00 = "0" + Segundos00;
}
if (Horas00 == 1) {
    Horas00 = "";
    horas = "";
    son_las = "son la una ";
}
if (Minutos00 == 01 || Minutos00 == 1) {
    Minutos00 = " un";
    minutos = " minuto";
}
if (Minutos00 == 0 || Minutos00 == 00) {
    Minutos00 = "";
    minutos = " en punto";
}
if (Minutos00 == 0 || Minutos00 == 00 && Segundos00 == 2 || Segundos00 == 02) {
    horaMin();
}
if (Horas11 < 12) {
    franja_horaria = " de la mañana";
    saludo = "Buenos días";
}
if (Horas11 == 12) {
    franja_horaria = " del mediodia";
    saludo = "Buenos días ";
}
if (Horas11 > 12 && Horas11 < 21) {
    franja_horaria = " de la tarde";
    saludo = "Buenas tardes ";
}
if (Horas11 > 20) {
    franja_horaria = " de la noche";
    saludo = "Buenas noches ";
}
if (Minutos00 == 15) {
    Minutos00 = " cuarto ";
    minutos = "";
}
if (Minutos00 == 30) {
    Minutos00 = " media ";
    minutos = "";
}
if (Minutos00 == 45) {
    Horas00 = Horas00 + 1;
    Minutos00 = 60 - Minutos00;
    minutos = "";
}
if (Minutos00 > 45 && Minutos00 <= 59) {
    Horas00 = Horas00 + 1 + " menos ";
    Minutos00 = 60 - Minutos00;
    y = "";
}
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

var Mes = new Date();
switch (Mes.getMonth()) {
    case 0:
        Mes = "Enero";
        break;
    case 1:
        Mes = "Febrero";
        break;
    case 2:
        Mes = "Marzo";
        break;
    case 3:
        Mes = "Abril";
        break;
    case 4:
        Mes = "Mayo";
        break;
    case 5:
        Mes = "Junio";
        break;
    case 6:
        Mes = "Julio";
        break;
    case 7:
        Mes = "Agosto";
        break;
    case 8:
        Mes = "Septiembre";
        break;
    case 9:
        Mes = "Octubre";
        break;
    case 10:
        Mes = "Noviembre";
        break;
    case 11:
        Mes = "Diciembre";
        break;
};
document.getElementById("info_fecha").innerHTML = diaSem + "  " + Dia + " de " + Mes + " de " + Año;

var hora_min = son_las + " " + Horas00 + y + Minutos00 + " " + minutos + franja_horaria;
var fecha_actual = "Estamos a " + diaSem + " " + Dia + " de " + Mes;
var fecha_hora = "Estamos a " + diaSem + " " + Dia + " de " + Mes + " " + son_las + Horas00 + y + Minutos00 + " " + minutos + franja_horaria;

function actualizarHora() {
    Lugar = "Quart";
    fechaActual = new Date();
    diaSem = fechaActual.getDay();
    Dia = fechaActual.getDate();
    Mes = fechaActual.getMonth();
    Año = fechaActual.getFullYear();
    Horas00 = fechaActual.getHours();
    Minutos00 = fechaActual.getMinutes();
    Segundos00 = fechaActual.getSeconds();

    if (Horas00 > 12) {
        Horas00 = Horas00 - 12;
    }
    if (Horas00 == 0) {
        Horas00 = 12;
    }
    if (Minutos11 < 10) {
        Minutos11 = "0" + Minutos11;
    }
    if (Segundos00 < 10) {
        Segundos00 = "0" + Segundos00;
    }
    if (Horas00 == 1) {
        Horas00 = "";
        horas = "";
        son_las = "son la una ";
    }
    if (Minutos00 == 01 || Minutos00 == 1) {
        Minutos00 = " un";
        minutos = " minuto";
    }
    if (Minutos00 == 0 || Minutos00 == 00) {
        Minutos00 = "";
        minutos = " en punto";
    }
    if (Minutos00 == 00 && Segundos00 == 02) {
        horaMin();
    }
    if (Horas11 < 12) {
        franja_horaria = " de la mañana";
    }
    if (Horas11 == 12) {
        franja_horaria = " del mediodia";
    }
    if (Horas11 > 12 && Horas11 < 21) {
        franja_horaria = " de la tarde";
    }
    if (Horas11 > 20) {
        franja_horaria = " de la noche";
    }
    if (Minutos00 == 15) {
        Minutos00 = " cuarto ";
        minutos = "";
    }
    if (Minutos00 == 30) {
        Minutos00 = " media ";
        minutos = "";
    }
    if (Minutos00 == 45) {
        Horas00 = Horas00 + 1;
        Minutos00 = 60 - Minutos00;
        minutos = "";
    }
    if (Minutos00 > 45 && Minutos00 <= 59) {
        Horas00 = Horas00 + 1 + " menos ";
        Minutos00 = 60 - Minutos00;
        y = "";
    }
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

    var Mes = new Date();
    switch (Mes.getMonth()) {
        case 0:
            Mes = "Enero";
            break;
        case 1:
            Mes = "Febrero";
            break;
        case 2:
            Mes = "Marzo";
            break;
        case 3:
            Mes = "Abril";
            break;
        case 4:
            Mes = "Mayo";
            break;
        case 5:
            Mes = "Junio";
            break;
        case 6:
            Mes = "Julio";
            break;
        case 7:
            Mes = "Agosto";
            break;
        case 8:
            Mes = "Septiembre";
            break;
        case 9:
            Mes = "Octubre";
            break;
        case 10:
            Mes = "Noviembre";
            break;
        case 11:
            Mes = "Diciembre";
            break;
    };
    setTimeout(function () {
        actualizarHora();
    }, 1000);
    hora_min = son_las + " " + Horas00 + y + Minutos00 + " " + minutos + franja_horaria;
    fecha_actual = "Estamos a " + diaSem + " " + Dia + " de " + Mes;
    fecha_hora = "Estamos a " + diaSem + " " + Dia + " de " + Mes + " " + son_las + Horas00 + y + Minutos00 + " " + minutos + franja_horaria;
};

actualizarHora();

function darLaHora() {
    Horas00 = fechaActual.getHours();
    Horas11 = fechaActual.getHours();
    Minutos11 = fechaActual.getMinutes();
    minutos = "minutos";
    franja_horaria = "";
    son_las = " son las ";

    if (Horas00 > 12) {
        Horas00 = Horas00 - 12;
    }
    if (Horas00 == 0) {
        Horas00 = 12;
    }
    if (Minutos11 < 10) {
        Minutos11 = "0" + Minutos;
    }
    if (Horas00 == 1) {
        Horas00 = "una";
        horas = "";
        son_las = "son la";
    }
    if (Minutos00 == 01 || Minutos00 == 1) {
        Minutos00 = " un";
        minutos = " minuto";
    }
    if (Horas11 < 12) {
        franja_horaria = " de la mañana";
    }
    if (Horas11 == 12) {
        franja_horaria = " del mediodia";
    }
    if (Horas11 > 12 && Horas11 < 21) {
        franja_horaria = " de la tarde";
    }
    if (Horas11 > 20) {
        franja_horaria = " de la noche";
    }
    if (Horas00 == 1) {
        Horas00 = Horas00.toString(1);
        Horas00 = " una ";
    }
    if (Minutos00 == 01 || Minutos00 == 1) {
        Minutos00 = Minutos00.toString(1);
        Minutos00 = " un ";
        minutos = " minuto ";
    }
    if (Minutos00 == 0 || Minutos00 == 00) {
        Minutos00 = "";
        y = "";
        minutos = " en punto ";
    }
    if (Minutos00 == 00 && Segundos00 == 02) {
        horaMin();
    }
    if (Minutos00 == 15) {
        Minutos00 = " cuarto ";
        minutos = "";
    }
    if (Minutos00 == 30) {
        Minutos00 = " media ";
        minutos = "";
    }
    if (Minutos00 == 45) {
        Horas00 = Horas00 + 1;
        Minutos00 = 60 - Minutos;
        minutos = "";
    }
    if (Minutos00 > 45 && Minutos00 <= 59) {
        Horas00 = Horas00 + 1 + " menos ";
        Minutos00 = 60 - Minutos;
        y = "";
    }
    setTimeout(function () {
        darLarHora();
    }, 1000);
};

darLaHora();


var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var fechaActual0 = new Date();
    var Horas01 = fechaActual0.getHours();
    var Minutos01 = fechaActual0.getMinutes();
    var Segundos01 = fechaActual0.getSeconds();
    var fechaActual3 = new Date();
    var Horas03 = fechaActual3.getHours();
    var Minutos03 = fechaActual3.getMinutes();
    var Segundos03 = fechaActual3.getSeconds();
    var franja_horaria_reloj = document.getElementById("franja_horaria_reloj");

    if (Horas01 < 12) {
        franja_horaria_reloj.innerHTML = "AM";
    }
    if (Horas01 >= 12) {
        franja_horaria_reloj.innerHTML = "PM";
    }
    if (Horas03 > 12) {
        Horas03 = Horas03 - 12;
    }
    if (Horas03 == 0) {
        Horas03 = 12;
    }
    if (Horas03 > 0 && Horas03 < 10) {
        Horas03 = "0" + Horas03;
    }
    if (Minutos03 < 10) {
        Minutos03 = "0" + Minutos03;
    }
    if (Segundos03 < 10) {
        Segundos03 = "0" + Segundos03;
    }
    if (Horas01 > 0 && Horas01 < 10) {
        Horas01 = "0" + Horas01;
    }
    if (Minutos01 < 10) {
        Minutos01 = "0" + Minutos01;
    }
    if (Segundos01 < 10) {
        Segundos01 = "0" + Segundos01;
    }

    var reloj_h1_12h = Horas03 + ":" + Minutos03 + ":" + Segundos03;
    var reloj_h1_24h = Horas01 + ":" + Minutos01 + ":" + Segundos01;

    document.getElementById("reloj_h1_12h").innerHTML = reloj_h1_12h;
    document.getElementById("reloj_h1_24h").innerHTML = reloj_h1_24h;
    setTimeout(function () {
        myTimer();
    }, 1000);
};