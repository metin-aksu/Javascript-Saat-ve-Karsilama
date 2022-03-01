let isim = prompt("İsminizi giriniz : ");

let hitap = isim ? isim : "ziyaretçi";

document.querySelector("#myName").innerHTML = hitap;

let now = new Date();
let tarih = `${now.getDate()}.${now.getMonth()}.${now.getFullYear()}`;
let saat = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

document.querySelector("#myDate").innerHTML = tarih;
document.querySelector("#myClock").innerHTML = saat; 

function showTime() {
    now = new Date();
    saat = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    document.querySelector("#myClock").innerHTML = saat; 
}
setInterval(showTime, 1000);