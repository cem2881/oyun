let secilenKarakter = "";
let zipliyor = false;
let skor = 0;

function karakterSec(isim){

secilenKarakter = isim;

alert(isim.toUpperCase()+" seçildi");

}

function oyunuBaslat(){

if(secilenKarakter==""){

alert("Önce karakter seç");

return;

}

document.getElementById("menu").style.display="none";

document.getElementById("oyun").style.display="block";

}

document.addEventListener("keydown",function(e){

if(e.code==="Space"){

zipla();

}

});

function zipla(){

if(zipliyor){

return;

}

zipliyor=true;

let karakter=document.getElementById("karakter");

karakter.style.bottom="180px";

setTimeout(function(){

karakter.style.bottom="0px";

zipliyor=false;

},500);

}

setInterval(function(){

skor++;

document.getElementById("skor").innerText=skor;

},1000);
let engel=document.getElementById("engel");

setInterval(()=>{

let konum=window.innerWidth;

engel.style.right=konum+"px";

let hareket=setInterval(()=>{

konum-=5;

engel.style.right=konum+"px";

if(konum<-100){

konum=window.innerWidth;

}

},20);

},3000);