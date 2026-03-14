function login(){

var u = document.getElementById("user").value;
var p = document.getElementById("pass").value;

if(u=="admin" && p=="1234"){

document.getElementById("loginPage").style.display="none";
document.getElementById("dashboard").style.display="block";

initMap();

}

else{

alert("Wrong login");

}

}

var map;
var markers=[];

var attacks = [

{country:"Iraq",lat:33,lon:44,type:"malware",attacks:120},

{country:"USA",lat:37,lon:-95,type:"ddos",attacks:320},

{country:"Germany",lat:51,lon:10,type:"phishing",attacks:150},

{country:"China",lat:35,lon:105,type:"ddos",attacks:420},

{country:"Brazil",lat:-14,lon:-51,type:"malware",attacks:110}

];

function initMap(){

map = L.map('map').setView([20,0],2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:5
}).addTo(map);

drawAttacks(attacks);

simulateAttackLines();

createChart();

}

function drawAttacks(data){

markers.forEach(m=>map.removeLayer(m));
markers=[];

data.forEach(function(a){

var marker = L.circleMarker([a.lat,a.lon],{

radius:8,
color:"red"

}).addTo(map)

.bindPopup("Country: "+a.country+"<br>Type: "+a.type+"<br>Attacks: "+a.attacks);

markers.push(marker);

});

}

function filterAttacks(){

var type = document.getElementById("filter").value;

if(type=="all"){

drawAttacks(attacks);

}

else{

var filtered = attacks.filter(a=>a.type==type);

drawAttacks(filtered);

}

}

function simulateAttackLines(){

setInterval(function(){

var a = attacks[Math.floor(Math.random()*attacks.length)];
var b = attacks[Math.floor(Math.random()*attacks.length)];

var line = L.polyline([[a.lat,a.lon],[b.lat,b.lon]],{
color:"red"
}).addTo(map);

setTimeout(function(){

map.removeLayer(line);

},2000);

},3000);

}

function createChart(){

var ctx = document.getElementById('attackChart').getContext('2d');

new Chart(ctx,{
type:'bar',
data:{
labels:['Phishing','Malware','DDoS'],
datasets:[{
label:'Attack Types',
data:[150,230,420],
backgroundColor:['orange','yellow','red']
}]
}
});

}
