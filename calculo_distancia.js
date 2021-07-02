/*-----------------DISTANCIA ENTRE CIUDADES---------------*/

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

function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("location-1").value,
        destination: document.getElementById("location-2").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        origin: "Girona,España",
        destination: "Madrid, España"
    }

    // Routing
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            var resultado_distancia = result.routes[0].legs[0].distance.value / 1000;
            var resultado_duracion = result.routes[0].legs[0].duration.value / 60;
            //Get distance and time            
            $("#output").html("<div class='result-table'> La distancia es: " + parseInt(resultado_distancia) + " km" + ".<br />Duración del trayecto: " + parseInt(resultado_duracion) + " minutos" + ".</div>");
            document.getElementById("output").style.display = "flex";
            Responder("La distancia es de: " + parseInt(resultado_distancia) + " km" + " y la duración del trayecto es de: " + parseInt(resultado_duracion) + " minutos");
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

artyom.on(["qué distancia hay hasta *", "distancia hasta *"], true).then(function(i, wildcard) {
    //create request
    var request = {
        origin: document.getElementById("location-1").value,
        destination: document.getElementById("location-2").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        origin: "Girona,España",
        destination: wildcard
    }

    // Routing
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            var resultado_distancia = result.routes[0].legs[0].distance.value / 1000;
            var resultado_duracion = result.routes[0].legs[0].duration.value / 60;
            //Get distance and time            
            $("#output").html("<div class='result-table'> La distancia es: " + parseInt(resultado_distancia) + " km" + ".<br />Duración del trayecto: " + parseInt(resultado_duracion) + " minutos" + ".</div>");
            document.getElementById("output").style.display = "flex";
            Responder("La distancia es de: " + parseInt(resultado_distancia) + " km" + " y la duración del trayecto es de: " + parseInt(resultado_duracion) + " minutos");
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

});

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
        })
};


/*----------------------MAPAS GOOGLE--------------------*

artyom.on(["qué distancia hay hasta *", "distancia hasta *"], true).then(function (i, wildcard) {
    Mapas();
    calcRoute();
    setTimeout(() => {
        var resultado_distancia = result.routes[0].legs[0].distance.text;
        var resultado_duracion = result.routes[0].legs[0].duration.text;
        Responder("la distancia desde Quart hasta " + wildcard + " es de " + resultado_distancia + "y la duración del trayecto en coche es de aproximadamente " + resultado_duracion + " minutos");
    }, 3000);

    var api_metrix = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=Girona&destinations=Barcelona,Es&key=AIzaSyAXsDIfZXOYl1Jgd89H0Gey_2R9ykZsaVM";
    fetch(api_metrix)
        .then(response => response.json())
        .then(data => {
            var distancia0 = data['rows'][0]['elements'][0]['distance']['text'].value;
            var duracion0 = data['rows'][0]['elements'][1]['duration']['text'].value;
        });
    setTimeout(() => {
        if (distancia0 == NaN || distancia0 == null || duracion0 == NaN || duracion1 == null) {
            distancia.innerHTML = resultado_distancia;
            duracion.innerHTML = resultado_duracion;

            Responder("la distancia desde Quart hasta " + wildcard + " es de " + resultado_distancia + "y la duración del trayecto en coche es de aproximadamente " + resultado_duracion + " minutos");
        } else {
            Responder("la distancia desde Quart hasta " + wildcard + " es de " + resultado_distancia + "y la duración del trayecto en coche es de aproximadamente " + resultado_duracion + " minutos");
        }
    }, 2000);
});
*/