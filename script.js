/*var objetoJSON;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    var jsonResponse = xmlhttp.responseText;
    objetoJSON = JSON.parse(jsonResponse);
    // Para usarlo: objetoJSON.movilidad[0].pais
    xmlhttp.open('GET', 'BD.json', true);
    xmlhttp.send();
};
//console.log(objetoJSON.movilidad[0].pais);

/*
loadJSON('jsonerasmus.json',
    function (data) { console.log(data); },
    function (xhr) { console.error(xhr); }
);*/

//alert(objetoJSON.movilidad);
//var myObj2 = url('jsonerasmus.json');
    var paises = [];
    var tipos = [];
    var ciclos = [];
    var ciudades = [];
    var ciudadesporgrupo = [];
    var lat = [];
    var lng = [];
Object.keys(myObj2).forEach(key => {
    paises[paises.length] = myObj2[key].pais;
});
Object.keys(myObj2).forEach(key => {
    tipos[tipos.length] = myObj2[key].tipo;
});
Object.keys(myObj2).forEach(key => {
    ciclos[ciclos.length] = myObj2[key].ciclo;
});
Object.keys(myObj2).forEach(key => {
    ciudades[ciudades.length] = myObj2[key].ciudad;
});
Object.keys(myObj2).forEach(key => {
    lat[lat.length] = myObj2[key].lat;
});
Object.keys(myObj2).forEach(key => {
    lng[lng.length] = myObj2[key].lng;
});

Array.prototype.unique = function (a) {
    return function () { return this.filter(a) }
}(function (a, b, c) {
    return c.indexOf(a, b + 1) < 0
});

console.log(paises.unique());
console.log(tipos.unique());
console.log(ciclos.unique());
console.log(ciudades.unique());
console.log(lat.unique());
console.log(lng.unique());
//filtro("Pr", "", "Reino Unido");
var select1 = document.getElementById("hi");
for (i = 0; i < tipos.unique().length; i++) {
    var op = document.createElement("option");
    op.setAttribute("value", tipos.unique()[i]);
    op.innerHTML = tipos.unique()[i];
    select1.children[0].children[0].appendChild(op);
}
for (i=0; i<paises.unique().length; i++){
    var op = document.createElement("option");
    op.setAttribute("value", paises.unique()[i]);
    op.innerHTML =  paises.unique()[i];
    select1.children[1].children[0].appendChild(op);
}

for (i = 0; i < ciclos.unique().length; i++) {
    var op = document.createElement("option");
    op.setAttribute("value", ciclos.unique()[i]);
    op.innerHTML = ciclos.unique()[i];
    select1.children[3].children[0].appendChild(op);
}
for (i = 0; i < ciudades.unique().length; i++) {
    var op = document.createElement("option");
    op.setAttribute("value", ciudades.unique()[i]);
    op.innerHTML = ciudades.unique()[i];
    select1.children[4].children[0].appendChild(op);
}



//alert(select1.children[0].children[0].value);
//var myJSON = '{"tipo": "Grado Superior","ciclo": "","pais": "Noruega","ciudad": "Sortland"}';


function filtro(grupo, curso, paiss){
    var divfiltro = document.getElementById("resultfiltro");
    divfiltro.setAttribute("style", "text-align: center; font-size: 2em;")
    divfiltro.removeChild;
    var sector = grupo;
    
    divfiltro.innerHTML = "<p>"+sector+", "+curso+paiss+"</p>";
    var elementofiltrado = [];
    Object.keys(myObj2).forEach(key => {
        
        
        if (curso != "Elegir Ciclo"){
            if (grupo == "Grado Superior") {
                grupo = "GS";
            }
            if (grupo == "Grado Medio") {
                grupo = "GM";
            }
            if (grupo == "Profesorado") {
                grupo = "Pr";
            }
            if (key.substring(9, 11) == grupo && myObj2[key].ciclo == curso) {
                console.log(myObj2[key].pais);
                elementofiltrado[elementofiltrado.length] = { pais: myObj2[key].pais, ciclo: myObj2[key].ciclo, ciudad: myObj2[key].ciudad };
                var nuevof = document.createElement("div");
                nuevof.setAttribute("style", "font-size: 0.5em; margin: 1em;float: left;background-color: cyan; border: 2px ridge black; border-radius: 2em; padding: 0.5em; text-align: center;")
                nuevof.innerHTML += "<p>País: " + elementofiltrado[elementofiltrado.length - 1].pais + "</p>";
                nuevof.innerHTML += "<p>Ciudad: " + elementofiltrado[elementofiltrado.length - 1].ciudad + "</p>";
                nuevof.innerHTML += "<p>Ciclo: " + elementofiltrado[elementofiltrado.length - 1].ciclo + "</p>";
                divfiltro.appendChild(nuevof);
            }
        }
        if (paiss != "pais") {
            
            if (grupo == "Grado Superior") {
                grupo = "GS";
            }
            if (grupo == "Grado Medio") {
                grupo = "GM";
            }
            if (grupo == "Profesorado") {
                grupo = "Pr";
            }
            if (key.substring(9, 11) == grupo && myObj2[key].pais == paiss) {
                console.log(myObj2[key].pais);
                elementofiltrado[elementofiltrado.length] = { pais: myObj2[key].pais, ciclo: myObj2[key].ciclo, ciudad: myObj2[key].ciudad };
                console.log(elementofiltrado[elementofiltrado.length - 1].ciclo);
                var nuevof = document.createElement("div");
                nuevof.setAttribute("style", "font-size: 0.5em; margin: 1em;float: left;background-color: cyan; border: 2px ridge black; border-radius: 2em; padding: 0.5em; text-align: center;")
                nuevof.innerHTML += "<p>País: "+elementofiltrado[elementofiltrado.length - 1].pais+"</p>";
                nuevof.innerHTML += "<p>Ciudad: " + elementofiltrado[elementofiltrado.length - 1].ciudad + "</p>";
                nuevof.innerHTML += "<p>Ciclo: " + elementofiltrado[elementofiltrado.length - 1].ciclo + "</p>";
                divfiltro.appendChild(nuevof);
            }
        }
        
    });
    console.log(elementofiltrado);
    //return elementofiltrado;
}

var toggle = document.getElementById("toggle");
toggle.onclick = esconde;
function esconde() {
    if (this.checked == true) {
        select1.children[1].children[0].setAttribute("style", "visibility:hidden;");
        select1.children[1].children[1].setAttribute("style", "visibility:hidden;");
        select1.children[3].children[0].setAttribute("style", "visibility:visible;");
        select1.children[3].children[1].setAttribute("style", "visibility:visible;");
    }
    else {
        select1.children[3].children[0].setAttribute("style", "visibility:hidden;");
        select1.children[3].children[1].setAttribute("style", "visibility:hidden;");
        select1.children[1].children[0].setAttribute("style", "visibility:visible;");
        select1.children[1].children[1].setAttribute("style", "visibility:visible;");
    }
}

var buttonpais = document.getElementById("botonpais");
//buttonpais.setAttribute("onclick", filtro(select1.children[0].children[0].value, select1.children[1].children[0].value, ""));
buttonpais.addEventListener('click', //Type
    function (event) { //Listener
        var group = (select1.children[0].children[0].value);
        if (group == "Grado Superior") {
            group = "GS";
        }
        if (group == "Grado Medio") {
            group = "GM";
        }
        if (group == "Profesorado") {
            group = "Pr";
        }
        filtro(group,"", select1.children[1].children[0].value);
    },
    false); 

var buttonciclo = document.getElementById("botonciclo");
//buttonpais.setAttribute("onclick", filtro(select1.children[0].children[0].value, select1.children[1].children[0].value, ""));
buttonciclo.addEventListener('click', //Type
    function (event) { //Listener
        var group = (select1.children[0].children[0].value);
        if (group == "Grado Superior") {
            group = "GS";
        }
        if (group == "Grado Medio") {
            group = "GM";
        }
        if (group == "Profesorado") {
            group = "Pr";
        }
        filtro(group, select1.children[3].children[0].value, "");
    },
    false); 

function generamarker(map, latitud, longitud, nombre){
    var marker2 = new google.maps.Marker({
        map: map,
        position: { lat: latitud, lng: longitud },
        title: nombre
    });
    //alert(ciudades.unique()[0]);
    return marker2;
    
}

function insertafiltrociclo(){
    var platin = document.createElement("div");
    platin.setAttribute("style", "width: 70%; background-color:cyan;heigth: 20px; border-radius: 20px; border: 1px ridge green; margin: 0 auto;margin-top: 7px;margin-bottom: 7px; padding: 5px;box-shadow: -2px -2px 1px black;text-align: center;font-size: 20px; ")
    contador++;
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("style", "position: absolute; left: 20%;");
    check.setAttribute("class", "c");
    check.setAttribute("value", textarea.innerHTML);
    platin.appendChild(check);
    var nombreplato = document.createElement("span");
    nombreplato.innerHTML = textarea.value;
    divplatos.appendChild(platin);
    platin.appendChild(nombreplato);
}
var marker;
var marker2 = [];
function myMap() {
    var contentString = "hola info";
    var mapProp = {
        center: new google.maps.LatLng(47.508742, -0.120850),
        zoom: 4,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: 28.5087128, lng: -16.1800156 },
        title: '¡Casita!',//color del borde
        content: "hola"
    });
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    var infowindow = [];
    for (i = 0; i < ciudades.unique().length; i++){
        marker2[i] = generamarker(map, parseInt(lat.unique()[i]), parseInt(lng.unique()[i]), ciudades.unique()[i]);
        marker2[i].addListener('click', toggleBounce);
    };
    var text = filtratextoporciudad(ciudades.unique()[1]);
    for (i = 0; i < ciudades.unique().length; i++) {
        
        infowindow[i] = new google.maps.InfoWindow({
            content: filtratextoporciudad(ciudades.unique()[i])
        });
    }
    infowindow[0] = new google.maps.InfoWindow({
        content: filtratextoporciudad(ciudades.unique()[0])
    });
    
    marker2[0].addListener('click', function () {
        infowindow[0].open(map, this);
    });
    marker2[1].addListener('click', function () {
        infowindow[1].open(map, this);
    });
    marker2[2].addListener('click', function () {
        infowindow[2].open(map, this);
    });
    marker2[3].addListener('click', function () {
        infowindow[3].open(map, this);
    });
    marker2[4].addListener('click', function () {
        infowindow[4].open(map, this);
    });
    marker2[5].addListener('click', function () {
        infowindow[5].open(map, this);
    });
    marker2[6].addListener('click', function () {
        infowindow[6].open(map, this);
    });
    marker2[7].addListener('click', function () {
        infowindow[7].open(map, this);
    });
    marker2[8].addListener('click', function () {
        infowindow[8].open(map, this);
    });
    marker2[9].addListener('click', function () {
        infowindow[9].open(map, this);
    });
    marker2[10].addListener('click', function () {
        infowindow[10].open(map, this);
    });
    marker2[11].addListener('click', function () {
        infowindow[11].open(map, this);
    });
    marker2[12].addListener('click', function () {
        infowindow[12].open(map, this);
    });
    marker2[13].addListener('click', function () {
        infowindow[13].open(map, this);
    });
    marker2[14].addListener('click', function () {
        infowindow[14].open(map, this);
    });
    marker2[15].addListener('click', function () {
        infowindow[15].open(map, this);
    });
    marker2[16].addListener('click', function () {
        infowindow[16].open(map, this);
    });
    marker2[17].addListener('click', function () {
        infowindow[17].open(map, this);
    });
    marker2[18].addListener('click', function () {
        infowindow[18].open(map, this);
    });
    marker2[19].addListener('click', function () {
        infowindow[19].open(map, this);
    });
    marker2[20].addListener('click', function () {
        infowindow[20].open(map, this);
    });
    marker2[21].addListener('click', function () {
        infowindow[21].open(map, this);
    });
    marker2[22].addListener('click', function () {
        infowindow[22].open(map, this);
    });
    marker2[23].addListener('click', function () {
        infowindow[23].open(map, this);
    });
    marker2[24].addListener('click', function () {
        infowindow[24].open(map, this);
    });
    marker2[25].addListener('click', function () {
        infowindow[25].open(map, this);
    });
        //marker2[i].addListener('mouseover', toggleBounce);
    
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        marker2.forEach(element => {
            this.setAnimation(null);
        });
        
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        marker2.forEach(element => {
            this.setAnimation(google.maps.Animation.BOUNCE);
        });
    }
}
buttonciclo.setAttribute("disabled", "disabled");
buttonpais.setAttribute("disabled", "disabled");

selectporpais = document.getElementById("pais").children[0];
selectporpais.addEventListener('click', //Type
    function (event) { //Listener
        if ((select1.children[0].children[0].value != "Todos") && (select1.children[1].children[0].value != "pais")) {
            
            buttonpais.disabled = false;
        }
        else {
            
            buttonpais.disabled = true;
        }
    },
    false); 
selectcicl = document.getElementById("cicl").children[0];
selectcicl.addEventListener('click', //Type
    function (event) { //Listener
        if ((select1.children[0].children[0].value != "Todos") && (select1.children[3].children[0].value != "")) {
            buttonciclo.disabled = false;
            
        }
        else {
            buttonciclo.disabled = true;
        }
    },
    false); 

    function filtratextoporciudad(ciudad){
        var elementofiltrado;
        var info2 = "<span style='color: darkred; margin-left: 40%; font-size: 2em;'><strong>"+ciudad+"</strong></span></br>";
        Object.keys(myObj2).forEach(key => {

                if (myObj2[key].ciudad == ciudad) {
                    elementofiltrado = { grupo: myObj2[key].tipo, ciclo: myObj2[key].ciclo, ciudad: myObj2[key].ciudad, pais: myObj2[key].pais };
                    var info = "Grupo: " + elementofiltrado.grupo + "\n" + "Ciclo: " + elementofiltrado.ciclo + "\n";
                    info2 += "\r"+info+"</br>";
                }

        });
        return info2;
    }

//https://www.w3schools.com/js/js_json_http.asp

   // 'https://maps.googleapis.com/maps/api/geocode/json?address=Tenerife',
    


