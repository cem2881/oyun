let secilen = "";
let zipliyor = false;
let skor = 0;

function karakterSec(isim){

secilen = isim;

document.getElementById("yazi").innerText = isim + " seçildi";

if(isim==="Berat"){

document.getElementById("karakter").innerHTML="😎";

}

if(isim==="Ali"){

document.getElementById("karakter").innerHTML="🧢";

}

}

function oyunuBaslat(){

if(secilen===""){

alert("Karakter seç");

return;

}

document.getElementById("menu").style.display="none";

document.getElementById("oyun").style.display="block";

oyunuCalistir();

}

function oyunuCalistir(){

let engel=document.getElementById("engel");

let konum=-100;

setInterval(()=>{

konum+=8;

engel.style.right=konum+"px";

if(konum>window.innerWidth){

konum=-100;

skor++;

document.getElementById("skor").innerText=skor;

}

},20);

}

document.getElementById("ziplaBtn").onclick=function(){

if(zipliyor){

return;

}

zipliyor=true;

let karakter=document.getElementById("karakter");

karakter.style.bottom="260px";

setTimeout(()=>{

karakter.style.bottom="100px";

zipliyor=false;

},500);

}