var Video;
var Neurona;

function setup() {
  noCanvas();
  console.log("iniciando");
  video = createCapture(VIDEO).parent('video');
  Neurona = new ml5.KNNImageClassifier(2, 1, CargarModelo, video.elt);
  //Neurona.load('inteligencia.json', updateExampleCounts);

  BotonNada = select('#nada');
  BotonNada.mousePressed(() => EntrenarNada());

  BotonMouse = select('#mouse');
  BotonMouse.mousePressed(() => EntrenarMouse());

  BotonReloj = select('#reloj');
  BotonReloj.mousePressed(() => EntrenarReloj());

  BotonCartera = select('#cartera');
  BotonCartera.mousePressed(() => EntrenarCartera());

  BotonRafael = select('#rafael');
  BotonRafael.mousePressed(() => EntrenarRafael());

  BotonEntrenar = select('#entrenar');
  BotonEntrenar.mousePressed(() => Entrenando());

  BotonSalvar = select('#salvar');
  BotonSalvar.mousePressed(() => Salvador());
}

function Salvador() {
  Neurona.save("test");

}

function Entrenando() {
  console.log("Empezando a Entrenar")
  Neurona.predictFromVideo(ClasificarImagen);
}

function ClasificarImagen(Resultado) {
  var Mensaje;
  if (Resultado.classIndex == 0) {
    Mensaje = "Nada";

  }
  if (Resultado.classIndex == 1) {
    Mensaje = "mouse";

  }
  if (Resultado.classIndex == 2) {
    Mensaje = "reloj";

  }
  if (Resultado.classIndex == 3) {
    Mensaje = "cartera";

  }

  select('#texto').html(Mensaje)
  setTimeout(function () {
    Entrenando();
  }, 50);
};

function EntrenarNada() {
  console.log("Entrenar Nada");
  Neurona.addImageFromVideo(0);
};

function EntrenarMouse() {
  console.log("Entrenar mouse ");
  Neurona.addImageFromVideo(1);
};

function EntrenarReloj() {
  console.log("Entrenar reloj");
  Neurona.addImageFromVideo(2);
};

function EntrenarCartera() {
  console.log("Entrenar cartera");
  Neurona.addImageFromVideo(3);
};

function EntrenarRafael() {
  console.log("Entrenar Rafael");
  Neurona.addImageFromVideo(4);
};

function CargarModelo() {
  console.log("Modelo Cargado");
};