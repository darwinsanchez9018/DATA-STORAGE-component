const size = [1000, 2000, 3000, 4000, 5000];
const i = Math.floor(Math.random()*5);
const maxStorage= size[i];
const usedStorage = maxStorage*Math.random();
const freeStorage = maxStorage - usedStorage;

// Capacidad MÁXIMA
const maxStorageHTML = document.getElementById("maxStorage");
maxStorageHTML.innerText = maxStorage+ " GB";

// Espacio USADO
const usedStorageHTML = document.getElementById("usedStorage");
usedStorageHTML.innerText = Math.floor(usedStorage)+ " GB ";

// Espacio LIBRE
const freeStorageHTML = document.getElementById("freeStorage");
freeStorageHTML.innerText = Math.floor(freeStorage);

// Movimiento BARRA de PROGRESO
const progressBar = document.querySelector(".progress-bar-color");
progressBar.style.width = (usedStorage / maxStorage * 100).toString()+'%';

console.log(maxStorage, usedStorage, freeStorage);