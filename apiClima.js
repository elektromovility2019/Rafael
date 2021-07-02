
/*----------------FUNCION CLIMA-------------------------------*/
var respuesta = "";
var lluvia = "";
var frio = "";
var calor = "";
var temperatura = "";
var ciudad_clima = "Quart,es";
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var humi = document.querySelector('.humi');
var pres = document.querySelector('.pres');
var vent = document.querySelector('.vent');
var desc = document.querySelector('.desc');
var sensa = document.querySelector('.sensa');
var api_weather = 'https://api.openweathermap.org/data/2.5/weather?q=' + ciudad_clima + '&units=metric&lang=sp,es&appid=cef382dabba592ad9f897fd610cc4d28';
var intro_clima = "";
var pre_temp = "";
var pre_humi = "";
var cielo = " el cielo ";
var tiempo_respuesta = 6000;
var asis_micro = document.getElementById("asis_micro");
var nameValue = "";
var tempValue = "";
var tempMinValue = "";
var humiValue = "";
var presValue = "";
var ventValue = "";
var descValue = "";
var sensaValue = "";
var final_clima = "";
var separador = ", ";


var fechaActual_clima = new Date();

var Mes = fechaActual_clima.getMonth();
var Mes = new Date();
switch (Mes.getMonth()) {
    case 0:
        Mes = "1";
        break;
    case 1:
        Mes = "2";
        break;
    case 2:
        Mes = "3";
        break;
    case 3:
        Mes = "4";
        break;
    case 4:
        Mes = "5";
        break;
    case 5:
        Mes = "6";
        break;
    case 6:
        Mes = "7";
        break;
    case 7:
        Mes = "8";
        break;
    case 8:
        Mes = "9";
        break;
    case 9:
        Mes = "10";
        break;
    case 10:
        Mes = "11";
        break;
    case 11:
        Mes = "12";
        break;
};

function Clima(name) {
    

    $("#iframe_clima").attr("src", "https://api.openweathermap.org/data/2.5/weather?q=Quart,es&mode=html&units=metric&lang=sp,es&appid=cef382dabba592ad9f897fd610cc4d28");
    fetch(api_weather)
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var tempMaxValue = data['main']['temp_max'];
            var tempMinValue = data['main']['temp_min'];
            var humiValue = data['main']['humidity'];
            var presValue = data['main']['pressure'];
            var ventValue = data['wind']['speed'];
            var nameValue = data['name'];
            var sensaValue = data['main']['feels_like'];
            var descValue = data['weather'][0]['description'];
            var mensage = data['sys']['message'];
            var codigo = data['sys']['cod'];
            var nameValue = data['name'];
            main.innerHTML = nameValue;
            ciudad_clima = main.innerHTML;

            if (descValue == "few clouds") {
                descValue = " poco nuvoso ";
                cielo = " el cielo está ";
                lluvia = 2;
            }
            if (descValue == "scattered clouds") {
                descValue = " nubes dispersas ";
                cielo = " en el cielo hay ";
                lluvia = 1;
            }
            if (descValue == "broken clouds") {
                descValue = " nubes y claros ";
                cielo = " el cielo está con ";
                lluvia = 3;
            }
            if (descValue == "overcast clouds") {
                descValue = " nublado ";
                cielo = " el cielo está ";
                lluvia = 4;
            }
            if (descValue == "light rain" || descValue == "drizzle") {
                descValue = " lloviznando ";
                cielo = " está ";
                lluvia = 5;
            }
            if (descValue == "thunderstorm") {
                descValue = " cae una tormenta ";
                cielo = " ";
                lluvia = 4;
            }
            if (descValue == "shower rain") {
                descValue = " cae un aguacero ";
                cielo = " ";
                lluvia = 4;
            }
            if (descValue == "moderate rain") {
                descValue == " llueve de forma moderada ";
                cielo = " está ";
                lluvia = 6;
            }
            if (descValue == "clear sky") {
                descValue = " despejado ";
                cielo = " el cielo está ";
                lluvia = 0;
            }
            if (descValue == "fog" || descValue == "mist") {
                descValue = " hay niebla ";
                cielo = " ";
                lluvia = 0;
            }
            if (tempValue >= 15 && tempValue <= 19) {
                pre_temp = " el aire es fresquito ";
                temperatura = " agradable";
                frio = "No hace frío,";
                calor = "No,";
            }
            if (tempValue >= 15 && tempValue <= 19) {
                pre_temp = " el aire es fresquito ";
                temperatura = " agradable";
                frio = "No,";
                calor = "No,";
            }
            if (tempValue >= 15 && tempValue <= 19) {
                pre_temp = "";
                temperatura = " agradable";
                frio = "No,";
                calor = "No,";
            }
            if (tempValue >= 15 && tempValue <= 19) {
                pre_temp = " el aire es fresquito";
                temperatura = " agradable ";
                frio = "Sí,un poco,";
                calor = "No,más bién ";
            }
            if (tempValue > 19 && tempValue < 28) {
                pre_temp = " la sensación es muy agradable";
                temperatura = " agradable ";
                frio = "No,";
                calor = "No,";
            }
            if (tempValue > 19 && tempValue) {
                pre_temp = " la sensación es muy agradable ";
                temperatura = " agradable ";
                frio = "No,";
                calor = "No,";
            }
            if (tempValue > 19 && tempValue < 28) {
                pre_temp = " la sensación es muy agradable";
                temperatura = " agradable ";
                frio = "No,";
                calor = "No,";
            }
            if (tempValue > 19 && tempValue < 28) {
                pre_temp = " la sensación es agradable ";
                temperatura = " agradable ";
                frio = "No,";
                calor = "No,";
            }
            if (tempValue >= 29 && tempValue < 33) {
                pre_temp = " hace calor ";
                temperatura = " calor";
                frio = "No,";
                calor = "Sí,";
            }
            if (tempValue > 32 && tempValue < 40) {
                pre_temp = " hace mucho calor";
                temperatura = " mucho calor ";
                frio = "No,";
                calor = "Sí,";
            }
            if (tempValue > 39) {
                pre_temp = " hace muchisimo calor";
                temperatura = " muchísimo calor..";
                frio = "No,";
                calor = "Sí,";
            }
            if (tempValue > 35 && humiValue > 80) {
                pre_temp = " el calor es insoportable, enganchosa ";
                temperatura = " una calor insoportable..";
                frio = "No,";
                calor = "Sí,";
            }
            if (tempValue > 20 && tempValue < 15) {
                pre_temp = " hace fresquito ";
                temperatura = " fresquito ";
                frio = "No,";
                calor = "No,";
            }
            if (tempValue < 15 && tempValue > 8) {
                pre_temp = " hace algo de fresco ";
                temperatura = " un poco de frio ";
                frio = "Sí,";
                calor = "No,";
            }
            if (tempValue < 9 && tempValue > 2) {
                pre_temp = " hace frio";
                temperatura = " frio";
                frio = "Sí,";
                calor = "No,";
            }
            if (tempValue < 3 && tempValue >= 0) {
                pre_temp = " hace bastante frio ";
                temperatura = " bastante frio ";
                frio = "Sí,";
                calor = "No,";
            }
            if (tempValue < 0 && tempValue >= -5) {
                pre_temp = " hace mucho frio ";
                temperatura = " mucho frio ";
                frio = "Sí,";
                calor = "No,";
            }
            if (tempValue < -5) {
                pre_temp = " hace muchisimo frio ";
                temperatura = " muchísimo frio ";
                frio = "Sí,";
                calor = "No,";
            }
            if (humiValue >= 85) {
                pre_humi = " con mucha humedad ";
                humedad = " muy humedo ";
            }
            if (humiValue >= 70 && humiValue < 85) {
                pre_humi = " con mucha humedad ";
                humedad = " humedo ";
            }
            if (humiValue >= 50 && humiValue < 70) {
                pre_humi = " con un poco de humedad ";
                humedad = " algo de humedad ";
            }
            if (humiValue >= 30 && humiValue < 50) {
                pre_humi = " con poca humedad ";
                humedad = " con poca humedad ";
            }
            if (humiValue >= 20 && humiValue < 30) {
                pre_humi = " y un poco seco ";
                humedad = " seco";
            }
            if (humiValue < 20 && humiValue <= 10) {
                pre_humi = " y es seco ";
                humedad = " muy seco ";
            }
            if (humiValue < 10) {
                pre_humi = " y muy seco ";
                humedad = " muy seco ";
            }
            if (nameValue != "Quart") {
                intro_clima = "Si tienes que viajar hoy a " + main.innerHTML + ",";
                separador = ", ";
            }
            if (nameValue == "Quart") {
                intro_clima = "Sí te dispones a salir,";
                separador = ", ";
            }
            if (mensage == "city not found" || codigo == "404") {
                Responder("No eecuentro la población en mi base de datos, mira de decirmela con otro nombre");
                $("#iframe_clima").attr("src", 'https://api.openweathermap.org/data/2.5/weather?q=Gitona,es&mode=html&units=metric&lang=sp,es&appid=c4aab19549360e5b3d7562058db3835e');
            }
            if (humiValue == 100 && descValue == "nublado") {
                final_clima = " Sí tienes que salir, no te olvídes de cojer el paráguas, el riesgo de lluvia es elevado.";
            }

            main.innerHTML = nameValue;
            desc.innerHTML = descValue;
            temp.innerHTML = "temperatura de " + tempValue;
            temp_max.innerHTML = "máximas de " + tempMaxValue + " ºC";
            temp_min.innerHTML = "mínimas de " + tempMinValue + " ªC";
            humi.innerHTML = "humedad es del " + humiValue + " %";
            pres.innerHTML = "presión de " + presValue + " mb";
            vent.innerHTML = "viento de " + ventValue + " ms";
            sensa.innerHTML = "temperatura de " + sensaValue + " ºC";
            var tempValue0 = tempValue.toFixed(1);
            respuesta_clima = intro_clima + pre_temp + pre_humi + separador + "en estos momentos en " + main.innerHTML + cielo + desc.innerHTML + " la " + humi.innerHTML + " y la temperatura es de " + tempValue0 + " grados " + final_clima;
        })
    setInterval(() => {
        Clima();
    }, 3600000);
};

Clima();

function darElClima() {
    $("#asis_voz").css("fontSize", "11px");
    $("#lec_esc_asis").css("height", "80px");
    $("#texto1").css("paddingTop", "15px");
    Responder(respuesta_clima);
    setTimeout(() => {
        $("#asis_voz").css("fontSize", "14px");
        $("#lec_esc_asis").css("height", "55px");
        $("#texto1").css("paddingTop", "40px");
    }, 15000);
};

function darElClimaClick() {
    $("#asis_voz").css("fontSize", "11px");
    $("#lec_esc_asis").css("height", "80px");
    Responder(respuesta_clima);
    setTimeout(() => {
        $("#asis_voz").css("fontSize", "14px");
        $("#lec_esc_asis").css("height", "55px");
    }, 15000);
};

$("#on_altavoz_asis").on("click", function climaClick() {
    $("#off_altavoz_asis").removeClass("none");
    $("#on_altavoz_asis").addClass("none");
    if (asis_micro.value != "") {
        ciudad_clima = asis_micro.value;
        intro_clima = "";
        pre_temp = "";
        pre_humi = "";
        setTimeout(() => {
            darElClimaClick();
            asis_micro.value = "";
        }, 1500);
        setTimeout(() => {
            asis_voz.value = "";
        }, 12000);
    } else {
        Responder("la casilla del texto está vacía");
        setTimeout(() => {
            asis_voz.value = "";
        }, 4000);
    }
    setTimeout(() => {
        $("#on_altavoz_asis").removeClass("none");
        $("#off_altavoz_asis").addClass("none");
    }, 2000);

});