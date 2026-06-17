let secilen="";

function karakterSec(isim){

secilen=isim;

}

function oyunuBaslat(){

if(secilen==""){

alert("Karakter seç");

return;

}

document.getElementById("oyun").style.display="block";

let karakter=document.getElementById("karakter");

karakter.style.backgroundImage=

`url(images/${secilen}.png)`;

}

document.addEventListener("keydown",(e)=>{

let karakter=

document.getElementById("karakter");

if(e.code=="Space"){

karakter.style.bottom="150px";

setTimeout(()=>{

karakter.style.bottom="0px";

},500);

}

});