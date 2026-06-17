let secilen="";
let zipliyor=false;

let skor=0;

let can=3;

function karakterSec(isim){

secilen=isim;

document.getElementById("yazi").innerText=isim+" seçildi";

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

let karakter=document.getElementById("karakter");

let konum=-100;

setInterval(()=>{

konum+=8;

engel.style.right=konum+"px";

if(konum>window.innerWidth){

konum=-100;

skor++;

document.getElementById("skor").innerText=skor;

}

let karakterSol=70;

let engelSol=window.innerWidth-konum-50;

let karakterAlt=parseInt(karakter.style.bottom)||100;

if(

engelSol<150 &&

engelSol>50 &&

karakterAlt<180

){

can--;

if(can===2){

document.getElementById("can").innerText="❤️❤️";

}

if(can===1){

document.getElementById("can").innerText="❤️";

}

if(can===0){

document.getElementById("can").innerText="💀";

alert("OYUN BİTTİ\nSkor: "+skor);

location.reload();

}

konum=-100;

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