let secilen="";

let zipliyor=false;

let skor=0;

let can=3;

let rekor=0;

let oyun;

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

oyun=setInterval(()=>{

konum+=8;

engel.style.right=konum+"px";

if(konum>window.innerWidth){

konum=-100;

skor++;

document.getElementById("skor").innerText=skor;

if(skor>rekor){

rekor=skor;

document.getElementById("rekor").innerText="REKOR:"+rekor;

}

}

let engelSol=window.innerWidth-konum;

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

clearInterval(oyun);

document.getElementById("oyun").style.display="none";

document.getElementById("bitis").style.display="flex";

document.getElementById("sonSkor").innerText="Skor:"+skor;

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

document.getElementById("menuBtn").onclick=function(){

location.reload();

}

function yenidenBaslat(){

location.reload();

}