var map = L.map('map').setView([20,0],2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Cyber Threat Map'
}).addTo(map);

var attacks = [
{country:"USA",lat:37,lon:-95,attacks:320},
{country:"Germany",lat:51,lon:10,attacks:150},
{country:"Russia",lat:60,lon:90,attacks:500},
{country:"China",lat:35,lon:105,attacks:420},
{country:"Brazil",lat:-14,lon:-51,attacks:110}
];

attacks.forEach(a=>{
L.circleMarker([a.lat,a.lon],{
radius:8,
color:"red"
}).addTo(map)
.bindPopup(a.country+"<br>Attacks: "+a.attacks);
});
