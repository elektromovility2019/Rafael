
console.log("el carrusel de HOME se empieza a cargar");

//-------------------------CARRUSEL HOME----------------------------------

window.addEventListener('load', function () {
    console.log('el slaider ha cargado');
    var imagenes3 = [];
    imagenes3[0] = 'assets/img/fondos_home/fondokuvawt0.jpg';
    imagenes3[1] = 'assets/img/fondos_home/fondokuvawt1.jpg';
    imagenes3[2] = 'assets/img/fondos_home/fondokuvawt2.jpg';
    imagenes3[3] = 'assets/img/fondos_home/fondokuvawt3.jpg';
    imagenes3[4] = 'assets/img/fondos_home/fondokuvawt4.jpg';
    imagenes3[5] = 'assets/img/fondos_home/fondokuvawt5.jpg';
    var indiceImagenes3 = 0;
    var tiempo3 = 15000;

    function cambiarImagenes3() {
        document.slider0.src = imagenes3[indiceImagenes3];
        if (indiceImagenes3 < 5) {
            indiceImagenes3++;
        } else {
            indiceImagenes3 = 0;
        }
    }
    setInterval(cambiarImagenes3, tiempo3);
});

console.log("el carrusel de home  se ha cargado");

// -------------------------------CARRUSEL DE IMAGENES DE FONDO-----------------------------------

window.addEventListener('load', function () {
    console.log('el slaider ha cargado');
    var imagenes = [];
    imagenes[0] = 'assets/img/google/1.png';
    imagenes[1] = 'assets/img/google/2.png';
    imagenes[2] = 'assets/img/google/3.png';
    imagenes[3] = 'assets/img/google/4.png';
    imagenes[4] = 'assets/img/google/5.png';
    imagenes[5] = 'assets/img/google/6.png';
    imagenes[6] = 'assets/img/google/7.png';
    imagenes[7] = 'assets/img/google/8.png';
    imagenes[8] = 'assets/img/google/9.png';
    var indiceImagenes = 0;
    var tiempo = 9000;

    function cambiarImagenes() {
        document.slider_goo.src = imagenes[indiceImagenes];
        if (indiceImagenes < 8) {
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }
    }
    setInterval(cambiarImagenes, tiempo);
});
//------------------------------CARRUSEL PAGINA GOOGLE------------------------------
window.addEventListener('load', function () {
    console.log('el slaider ha cargado');
    var imagenes2 = [];
    imagenes2[0] = "assets/img/FONDOS/1.jpg";
    imagenes2[1] = 'assets/img/FONDOS/2.jpg';
    imagenes2[2] = 'assets/img/FONDOS/3.jpg';
    imagenes2[3] = 'assets/img/FONDOS/4.jpg';
    imagenes2[4] = 'assets/img/FONDOS/5.jpg';
    imagenes2[5] = 'assets/img/FONDOS/6.jpg';
    imagenes2[6] = 'assets/img/FONDOS/7.jpg';
    imagenes2[7] = 'assets/img/FONDOS/8.jpg';
    imagenes2[8] = 'assets/img/FONDOS/9.jpg';
    imagenes2[9] = 'assets/img/FONDOS/10.jpg';
    imagenes2[10] = 'assets/img/FONDOS/11.jpg';
    imagenes2[11] = 'assets/img/FONDOS/12.jpg';
    imagenes2[12] = 'assets/img/FONDOS/13.jpg';
    imagenes2[13] = 'assets/img/FONDOS/14.jpg';
    imagenes2[14] = 'assets/img/FONDOS/15.jpg';
    imagenes2[15] = 'assets/img/FONDOS/16.jpg';
    imagenes2[16] = 'assets/img/FONDOS/17.jpg';
    imagenes2[17] = 'assets/img/FONDOS/18.jpg';
    imagenes2[18] = 'assets/img/FONDOS/19.jpg';
    imagenes2[19] = 'assets/img/FONDOS/20.jpg';
    imagenes2[20] = 'assets/img/FONDOS/21.jpg';
    imagenes2[21] = 'assets/img/FONDOS/22.jpg';

    var indiceImagenes2 = 0;
    var tiempo2 = 40000;

    function cambiarImagenes2() {
        document.slider_goo_2.src = imagenes2[indiceImagenes2];
        if (indiceImagenes2 < 21) {
            indiceImagenes2++;
        } else {
            indiceImagenes2 = 0;
        }
    }
    setInterval(cambiarImagenes2, tiempo2);
});

console.log("Hola Rafael,los scripst de click se ha cargado");
