var objetoJSON;
var xmlhttp = new XMLHttpRequest();

xmlhttp.open('GET', 'jsonerasmus.json', true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    var jsonResponse = xmlhttp.responseText;
    objetoJSON = JSON.parse(jsonResponse);
    // Para usarlo: objetoJSON.movilidad[0].pais
};

//PRUEBA Sincrona
<div id="id01"></div>

	<script>
		/*var objetene = {
			"results" : [
				{
					"address_components": [
						{
							"long_name": "Tenerife",
							"short_name": "Tenerife",
							"types": ["establishment", "natural_feature"]
						},
						{
							"long_name": "Santa Cruz de Tenerife",
							"short_name": "TF",
							"types": ["administrative_area_level_2", "political"]
						},
						{
							"long_name": "Canarias",
							"short_name": "CN",
							"types": ["administrative_area_level_1", "political"]
						},
						{
							"long_name": "España",
							"short_name": "ES",
							"types": ["country", "political"]
						}
					],
					"formatted_address": "Tenerife, Santa Cruz de Tenerife, España",
					"geometry": {
						"bounds": {
							"northeast": {
								"lat": 28.5887168,
								"lng": -16.1193963
							},
							"southwest": {
								"lat": 27.9980726,
								"lng": -16.9259232
							}
						},
						"location": {
							"lat": 28.2915637,
							"lng": -16.6291304
						},
						"location_type": "APPROXIMATE",
						"viewport": {
							"northeast": {
								"lat": 28.5887168,
								"lng": -16.1193963
							},
							"southwest": {
								"lat": 27.9980726,
								"lng": -16.9259232
							}
						}
					},
					"place_id": "ChIJ7YKG_u8pQAwRPK9LyPFLGrA",
					"types": ["establishment", "natural_feature"]
				}
			],
				"status" : "OK"};*/
		//console.log(objetene.results[0].geometry.location.lat);
		//alert(objetene.results.geometry.location.lat);
		//alert(objetene.results.geometry.location.lng);
			var xmlhttp = new XMLHttpRequest();
			var url = "https://maps.googleapis.com/maps/api/geocode/json?address=Tenerife";
			xmlhttp.onreadystatechange = function () {
				var posi;
				if (this.readyState == 4 && this.status == 200) {
					myArr = JSON.parse(this.responseText);
					posi = [myArr.results[0].geometry.location.lat, myArr.results[0].geometry.location.lng];
					//guardarposi(myArr.results[0].geometry.location.lat, myArr.results[0].geometry.location.lng);
					alert(posi[0] + "," + posi[1]);
				}
				if (posi){
					alert(posi[0]+"aaa"+ posi[1])
				} 
			};
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
			//alert(posi[0]);
			//var valor = xmlhttp.getResponseHeader("lat");
			//alert(valor);
			//alert(posi[0]);
			function myFunction(arr) {
				var out = "";
				var i;
				for (i = 0; i < arr.length; i++) {
					out += '<a href="' + arr[i].url + '">' +
						arr[i].display + '</a><br>';
				}
				document.getElementById("id01").innerHTML = out;
			}
		
	</script>