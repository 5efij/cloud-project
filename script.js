var map = L.map('map').setView([20,0],2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom:5
}).addTo(map);

var attacks = [
{country:"Iraq",lat:33,lon:44,attacks:120},
{country:"USA",lat:37,lon:-95,attacks:320},
{country:"Germany",lat:51,lon:10,attacks:150},
{country:"China",lat:35,lon:105,attacks:420},
{country:"Brazil",lat:-14,lon:-51,attacks:110}
];

attacks.forEach(function(a){

L.circleMarker([a.lat,a.lon],{
radius:8,
color:"red"
}).addTo(map)

.bindPopup("Country: "+a.country+"<br>Attacks: "+a.attacks);

});
