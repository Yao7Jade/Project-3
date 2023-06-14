// Create a map object.
let myMap = L.map("map", {
  center: [40.777129, -111.887584],
  zoom: 5
});

console.log(131231);

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


function markerSize(mass){
return mass *0.01;
}

let url = "static/data/final.json";
d3.json(url).then(function(meteos) {

    console.log(meteos);


for (let i = 0; i < meteos.length; i++) {
  meteo = meteos[i];
  L.marker([meteo.reclat, meteo.reclong], {
  draggable: true
  }).bindPopup(`<h1>${meteo.name}</h1> <hr> <h3>Mass: ${meteo.mass}</h3>`).addTo(myMap);
}


}
);

// Read the CSV data and add markers
//fetch('Resources/Final.csv')
//    .then(response => response.text())
//    .then(csvData => {
//        const markers = L.csvLayer.csvToLayer(csvData, {
//            latfield: 'reclat',
//            lonfield: 'reclong',
//            pointToLayer: (feature, latlng) => {
//                return L.marker(latlng).bindPopup(feature.properties.name);
//            }
//        }).addTo(myMap);
//    });

