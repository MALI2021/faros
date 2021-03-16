var triggers = document.getElementsByClassName("triggerFunction");
var skews = document.getElementsByClassName("page");
var container = document.getElementById("wrapper");
var closers = document.getElementsByClassName("closer");
var visibles = document.getElementsByClassName("no-visible");
var tabTrigger = document.getElementsByClassName("tabs-item--text");
var triggerContainer = document.getElementById("trigger-container");
var contentItems = document.getElementsByClassName("tab-content-item");
var textoIntro = document.getElementById("texto-intro");
var animatedBoxes = document.getElementsByClassName("box-1");
var animatedBoxesTempo = document.getElementsByClassName("box-2");
var langChanger = document.getElementById("english-changer");
var langChanger2 = document.getElementById("spanish-changer");
var lesserlinks = document.getElementsByClassName("linktopage");
var flippers = document.getElementsByClassName("flip-container");
var accordions = document.getElementsByClassName("c-tab--items--header");
// var accordions = document.getElementsByClassName("c-tab--items");
var closers2 = document.getElementsByClassName("arrow-back");
var potenceChanger = document.getElementById("potence-reverser");
var alturaChanger = document.getElementById("altura-changer");
var rangeChanger = document.getElementById("range-changer");
var flipChanger = document.getElementById("flip-changer");
var periodChanger = document.getElementById("period-changer");
// var mailingInput = document.getElementById("record-mail");
var mailingLaunch = document.querySelectorAll(".launch");
var activePotence = true;
var activeAltura = true;
var activeRange = true;
var activeFlip = true;
var activePeriod = true;
var potenceItemsBoxes;
var alturaItemsBoxes;
var rangeItemsBoxes;
var periodItemsBoxes;
var getUrlHere = window.location.hash;
var globalIdiom = "spanish";

var db = firebase.firestore();

var periods = [
  {
    period: "15",
    destellos: 3,
    lines: ["L. 05 -- Ecl. 1.5", "L. 05 -- Ecl. 1.5", "L. 05 -- Ecl. 10.5"],
    delay: "9000",
    show: "500",
    hide: "1500",
    time: 3,
    image: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 05 -- Ecl. 9.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "20",
    destellos: 3,
    lines: ["L. 0.5 Ecl. 2.5", "L. 0.5 Ecl. 6", "L. 0.5 Ecl. 10"],
    delay: "11000",
    show: "500",
    hide: "2500",
    time: 3,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "10",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 6", "L. 0.5 Ecl. 3"],
    delay: "3000",
    show: "500",
    hide: "3000",
    time: 2,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "15",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 2", "L. 0.5 Ecl. 12"],
    delay: "10000",
    show: "500",
    hide: "2000",
    time: 2,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 2 Ecl. 8"],
    delay: "0",
    show: "2000",
    hide: "8000",
    time: 1,
    image: "./static/assets/img/rectangulo-linea.svg",
  },
  {
    period: "20",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 3.5", "L. 0.5 Ecl. 15.5"],
    delay: "12000",
    show: "500",
    hide: "3500",
    time: 2,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "15",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 1", "L. 0.5 Ecl. 13"],
    delay: "12000",
    show: "500",
    hide: "1000",
    time: 2,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "15",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 2", "L. 0.5 Ecl. 12"],
    delay: "10000",
    show: "500",
    hide: "2000",
    time: 2,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 9.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "20",
    destellos: 4,
    lines: [
      "L. 0.5 Ecl. 1.5",
      "L. 0.5 Ecl. 1.5",
      "L. 0.5 Ecl. 1.5",
      "L. 0.5 Ecl. 13.5",
    ],
    delay: "12000",
    show: "500",
    hide: "1500",
    time: 4,
    image: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    period: "4",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 1", "L. 0.5 Ecl. 2"],
    delay: "1000",
    show: "500",
    hide: "1000",
    time: 2,
    image: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    period: "15",
    destellos: 3,
    lines: ["L. 0.75 Ecl. 0.75", "L. 0.75 Ecl. 0.75", "L. 0.75 Ecl. 11.25"],
    delay: "10500",
    show: "750",
    hide: "750",
    time: 3,
    image: "./static/assets/img/cuadrado-rojo.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 0.25 Ecl. 9.75"],
    delay: "9000",
    show: "250",
    hide: "750",
    time: 1,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 9.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "15",
    destellos: 3,
    lines: ["L. 0.5 Ecl. 2", "L. 0.5 Ecl. 2", "L. 0.5 Ecl. 9.5"],
    delay: "7500",
    show: "500",
    hide: "2000",
    time: 3,
    image: "./static/assets/img/triangulo-medio.svg",
  },
  {
    period: "10",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 7.5"],
    delay: "6000",
    show: "500",
    hide: "1500",
    time: 2,
    image: "./static/assets/img/triangulo-amarillo.svg",
  },
  {
    period: "10",
    destellos: 3,
    lines: ["L. 0.5 Ecl. 1", "L. 0.5 Ecl. 1", "L. 0.5 Ecl. 6.5"],
    delay: "5500",
    show: "500",
    hide: "1000",
    time: 3,
    image: "./static/assets/img/triangulo-naranja.svg",
  },
  {
    period: "5",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 4.5"],
    delay: "3000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "10",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 7.5"],
    delay: "6000",
    show: "500",
    hide: "1500",
    time: 2,
    image: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    period: "15",
    destellos: 3,
    lines: ["L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 10.5"],
    delay: "9000",
    show: "500",
    hide: "1500",
    time: 3,
    image: "./static/assets/img/triangulo-amarillo.svg",
  },
  {
    period: "30",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 4.5", "L. 0.5 Ecl. 24.5"],
    delay: "20000",
    show: "500",
    hide: "4500",
    time: 2,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 9.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 9.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "4",
    destellos: 1,
    lines: ["L. 1 Ecl. 3"],
    delay: "2000",
    show: "1000",
    hide: "1000",
    time: 1,
    image: "./static/assets/img/cuadrado-linea.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 9.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "20",
    destellos: 4,
    lines: [
      "L. 0.5 Ecl. 1.5",
      "L. 0.5 Ecl. 1.5",
      "L. 0.5 Ecl. 1.5",
      "L. 0.5 Ecl. 13.5",
    ],
    delay: "12000",
    show: "500",
    hide: "1500",
    time: 4,
    image: "./static/assets/img/triangulo-gris.svg",
  },
  {
    period: "15",
    destellos: 3,
    lines: ["L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 10.5"],
    delay: "9000",
    show: "500",
    hide: "1500",
    time: 3,
    image: "./static/assets/img/triangulo-amarillo.svg",
  },
  {
    period: "4",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 3.5"],
    delay: "3000",
    show: "500",
    hide: "500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "3",
    destellos: 1,
    lines: ["L. 1 Ecl. 2"],
    delay: "1000",
    show: "1000",
    hide: "1000",
    time: 1,
    image: "./static/assets/img/cuadrado-linea.svg",
  },
  {
    period: "20",
    destellos: 4,
    lines: [
      "L. 0.5 Ecl. 1.5",
      "L. 0.5 Ecl. 1.5",
      "L. 0.5 Ecl. 1.5",
      "L. 0.5 Ecl. 13.5",
    ],
    delay: "12000",
    show: "500",
    hide: "1500",
    time: 4,
    image: "./static/assets/img/triangulo-azul.svg",
  },
  {
    period: "10",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 7.5"],
    delay: "6000",
    show: "500",
    hide: "1500",
    time: 2,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "10",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 7.5"],
    delay: "6000",
    show: "500",
    hide: "1500",
    time: 2,
    image: "./static/assets/img/triangulo-azul.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 9.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "20",
    destellos: 3,
    lines: ["L. 0.5 Ecl. 3", "L. 0.5 Ecl. 6", "L. 0.5 Ecl. 9.5"],
    delay: "9500",
    show: "500",
    hide: "3000",
    time: 3,
    image: "./static/assets/img/triangulo-gris.svg",
  },
  {
    period: "15",
    destellos: 3,
    lines: ["L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 6", "L. 0.5 Ecl. 6"],
    delay: "7500",
    show: "500",
    hide: "2000",
    time: 3,
    image: "./static/assets/img/triangulo-azul.svg",
  },
  {
    period: "15",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 2", "L. 0.5 Ecl. 12"],
    delay: "10000",
    show: "500",
    hide: "2000",
    time: 2,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "8",
    destellos: 1,
    lines: ["L. 1 Ecl. 7"],
    delay: "6000",
    show: "1000",
    hide: "1000",
    time: 1,
    image: "./static/assets/img/cuadrado-linea.svg",
  },
  {
    period: "10",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 7.5"],
    delay: "6000",
    show: "500",
    hide: "1500",
    time: 2,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 9.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "5",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 4.5"],
    delay: "3000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 1 Ecl. 9"],
    delay: "8000",
    show: "1000",
    hide: "1000",
    time: 1,
    image: "./static/assets/img/cuadrado-medio.svg",
  },
  {
    period: "10",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 1.5", "L. 0.5 Ecl. 7.5"],
    delay: "6000",
    show: "500",
    hide: "1500",
    time: 2,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "7",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 6.5"],
    delay: "5500",
    show: "500",
    hide: "1000",
    time: 1,
    image: "./static/assets/img/triangulo-medio.svg",
  },
  {
    period: "6",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 5.5"],
    delay: "4500",
    show: "500",
    hide: "1000",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "15",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 4", "L. 0.5 Ecl. 10"],
    delay: "6000",
    show: "500",
    hide: "4000",
    time: 2,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "7",
    destellos: 1,
    lines: ["L. 1 Ecl. 6"],
    delay: "5000",
    show: "1000",
    hide: "1000",
    time: 1,
    image: "./static/assets/img/cuadrado-rojo.svg",
  },
  {
    period: "20",
    destellos: 3,
    lines: ["L. 0.5 Ecl. 3", "L. 0.5 Ecl. 3", "L. 0.5 Ecl. 12.5"],
    delay: "9500",
    show: "500",
    hide: "3000",
    time: 3,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "15",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 14.5"],
    delay: "13000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 9.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
  {
    period: "10",
    destellos: 1,
    lines: ["L. 1 Ecl. 9"],
    delay: "8000",
    show: "1000",
    hide: "1000",
    time: 1,
    image: "./static/assets/img/cuadrado-linea.svg",
  },
  {
    period: "10",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 2", "L. 0.5 Ecl. 7"],
    delay: "5000",
    show: "500",
    hide: "2000",
    time: 2,
    image: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    period: "15",
    destellos: 2,
    lines: ["L. 0.5 Ecl. 2.5", "L. 0.5 Ecl. 11.5"],
    delay: "9000",
    show: "500",
    hide: "2500",
    time: 2,
    image: "./static/assets/img/triangulo-linea.svg",
  },
  {
    period: "5",
    destellos: 1,
    lines: ["L. 1 Ecl. 4"],
    delay: "3000",
    show: "1000",
    hide: "1000",
    time: 1,
    image: "./static/assets/img/cuadrado-linea.svg",
  },
  {
    period: "15",
    destellos: 1,
    lines: ["L. 0.5 Ecl. 14.5"],
    delay: "13000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    period: "6",
    destellos: 1,
    lines: ["L. 1 Ecl. 5"],
    delay: "3000",
    show: "1000",
    hide: "2000",
    time: 1,
    image: "./static/assets/img/cuadrado-negro.svg",
  },
];

var potences = [
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "835 cd",
    clase4: "",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "75 100 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "46 600 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 600 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "75 100 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "75 100 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "75 100 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "14 700 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "75 100 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "2 100 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "835 cd",
    clase4: "",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "77 cd",
    clase4: "",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "77 cd",
    clase4: "",
  },
  {
    percentage: 100,
    line1: "1 500 000 cd",
    clase1: "",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "18 500 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "14 700 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "2 100 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 100,
    line1: "160 000 cd",
    clase1: "",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "2 100 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "2 100 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "1 200 cd",
    clase4: "",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "23 867 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "38 400 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "70 500 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "840 cd",
    clase4: "",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "14 700 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "2 100 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "1 700 cd",
    clase4: "",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "35 597 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "1 700 cd",
    clase4: "",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "840 cd",
    clase4: "",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "2 100 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "70 cd",
    clase4: "",
  },
  {
    percentage: 100,
    line1: "140 700 cd",
    clase1: "",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "60 800 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "40 200 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "81 951 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "1 050 cd",
    clase4: "",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "976 cd",
    clase4: "",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "38 500 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "60 cd",
    clase4: "",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "2 100 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "2 100cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "23 516 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 100,
    line1: "698 182 cd",
    clase1: "",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "35 597 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "2 100cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "976 cd",
    clase4: "",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "38 500 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 600 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 50,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 000 cd",
    clase2: "c-gray",
    line3: "15 597 cd",
    clase3: "",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "58 500 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "80 500 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "1 668 cd",
    clase4: "",
  },
  {
    percentage: 75,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "56 800 cd",
    clase2: "",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "0 - 2000 cd",
    clase4: "c-gray",
  },
  {
    percentage: 25,
    line1: "+ 100 001 cd",
    clase1: "c-gray",
    line2: "25 001 - 100 001 cd",
    clase2: "c-gray",
    line3: "2001 - 25 000 cd",
    clase3: "c-gray",
    line4: "1 668 cd",
    clase4: "",
  },
];

var alturas = [
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "20 msnm",
    clase5: "",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "64 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "57 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "39 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "73 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "72 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "60 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "184 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "37 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "64 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "14 msnm",
    clase5: "",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "19 msnm",
    clase5: "",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "86 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "16 msnm",
    clase5: "",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "24 msnm",
    clase5: "",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "46 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "126 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "139 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "91 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "242 msnm",
    clase1: "",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "74 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "81 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "82 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "127 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "62 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "67 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "172 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "47 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "38 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "32 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "15 msnm",
    clase5: "",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "",
  },
  {
    line1: "309 msnm",
    clase1: "",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "42 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "108 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "102 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "130 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "128 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "93 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "20 msnm",
    clase5: "",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "",
  },
  {
    line1: "385 msnm",
    clase1: "",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "206 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "40 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "46.5 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "95 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "27 msnm",
    clase5: "",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "149 msnm",
    clase2: "",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "",
    clase3b: "c-gray",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "101 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "96 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "96 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "65 msnm",
    clase3: "",
    line4: "31 - 60 msnm",
    clase4: "c-gray",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "",
    clase4b: "c-gray",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "37 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "37 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "51 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
  {
    line1: "+ 241 msnm",
    clase1: "c-gray",
    line2: "121 - 240 msnm",
    clase2: "c-gray",
    line3: "61 - 120 msnm",
    clase3: "c-gray",
    line4: "30.5 msnm",
    clase4: "",
    line5: "0 - 30 msnm",
    clase5: "c-gray",
    clase1b: "c-gray",
    clase2b: "c-gray",
    clase3b: "c-gray",
    clase4b: "",
    clase5b: "c-gray",
  },
];

var ranges = [
  {
    param1: "semi-alto-medio",
    param2: "alto-medio",
    millas1: 13,
    millas2: 9,
    imagen: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    param1: "semi-bajo",
    param2: "medio",
    millas1: 20,
    millas2: 19,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "semi-bajo",
    param2: "medio",
    millas1: 19,
    millas2: 18,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "semi-alto-medio",
    param2: "medio-medio",
    millas1: 17,
    millas2: 16,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "semi-bajo-medio",
    param2: "medio-medio",
    millas1: 20,
    millas2: 19,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "semi-bajo-medio",
    param2: "medio-medio",
    millas1: 22,
    millas2: 19,
    imagen: "./static/assets/img/rectangulo-linea.svg",
  },
  {
    param1: "semi-bajo-medio",
    param2: "medio-medio",
    millas1: 22,
    millas2: 18,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "semi-alto-medio",
    param2: "medio-medio",
    millas1: 20,
    millas2: 15,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "semi-bajo-medio",
    param2: "medio-medio",
    millas1: 32,
    millas2: 19,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "semi-bajo",
    param2: "semi-alto",
    millas1: 21,
    millas2: 10,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "semi-bajo",
    param2: "semi-alto",
    millas1: 21,
    millas2: 9,
    imagen: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    param1: "semi-alto",
    param2: "alto",
    millas1: 12,
    millas2: 5,
    imagen: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    param1: "semi-alto",
    param2: "alto",
    millas1: 11,
    millas2: 5,
    imagen: "./static/assets/img/cuadrado-rojo.svg",
  },
  {
    param1: "semi-bajo",
    param2: "bajo",
    millas1: 27,
    millas2: 23,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "medio",
    param2: "medio",
    millas1: 16,
    millas2: 16,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "semi-alto-medio",
    param2: "medio-medio",
    millas1: 17,
    millas2: 15,
    imagen: "./static/assets/img/triangulo-medio.svg",
  },
  {
    param1: "semi-alto",
    param2: "semi-bajo",
    millas1: 20,
    millas2: 10,
    imagen: "./static/assets/img/triangulo-amarillo.svg",
  },
  {
    param1: "semi-bajo",
    param2: "bajo",
    millas1: 20,
    millas2: 21,
    imagen: "./static/assets/img/triangulo-naranja.svg",
  },
  {
    param1: "semi-alto",
    param2: "bajo",
    millas1: 28,
    millas2: 10,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "semi-alto",
    param2: "bajo",
    millas1: 24,
    millas2: 10,
    imagen: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    param1: "semi-alto",
    param2: "bajo",
    millas1: 36,
    millas2: 10,
    imagen: "./static/assets/img/triangulo-amarillo.svg",
  },
  {
    param1: "semi-bajo",
    param2: "medio",
    millas1: 23,
    millas2: 16,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "semi-bajo",
    param2: "medio",
    millas1: 22,
    millas2: 17,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "semi-bajo-medio",
    param2: "medio-medio",
    millas1: 23,
    millas2: 19,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "semi-bajo",
    param2: "semi-alto",
    millas1: 23,
    millas2: 9,
    imagen: "./static/assets/img/cuadrado-linea.svg",
  },
  {
    param1: "bajo",
    param2: "medio",
    millas1: 27,
    millas2: 15,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "semi-bajo",
    param2: "semi-alto",
    millas1: 20,
    millas2: 10,
    imagen: "./static/assets/img/triangulo-gris.svg",
  },
  {
    param1: "semi-bajo",
    param2: "semi-alto",
    millas1: 21,
    millas2: 10,
    imagen: "./static/assets/img/triangulo-amarillo.svg",
  },
  {
    param1: "bajo",
    param2: "medio",
    millas1: 31,
    millas2: 17,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "medio",
    param2: "semi-alto",
    millas1: 18,
    millas2: 10,
    imagen: "./static/assets/img/cuadrado-linea.svg",
  },
  {
    param1: "medio",
    param2: "semi-alto",
    millas1: 17,
    millas2: 9,
    imagen: "./static/assets/img/triangulo-azul.svg",
  },
  {
    param1: "medio",
    param2: "semi-bajo",
    millas1: 16,
    millas2: 10,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "alto",
    param2: "semi-alto",
    millas1: 12,
    millas2: 4,
    imagen: "./static/assets/img/triangulo-azul.svg",
  },
  {
    param1: "bajo",
    param2: "semi-bajo",
    millas1: 40,
    millas2: 20,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "medio",
    param2: "semi-bajo",
    millas1: 19,
    millas2: 18,
    imagen: "./static/assets/img/triangulo-gris.svg",
  },
  {
    param1: "bajo",
    param2: "medio",
    millas1: 25,
    millas2: 18,
    imagen: "./static/assets/img/triangulo-azul.svg",
  },
  {
    param1: "bajo",
    param2: "semi-bajo",
    millas1: 25,
    millas2: 19,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "bajo",
    param2: "semi-alto",
    millas1: 27,
    millas2: 9,
    imagen: "./static/assets/img/cuadrado-linea.svg",
  },
  {
    param1: "bajo",
    param2: "semi-alto",
    millas1: 27,
    millas2: 9,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "medio",
    param2: "semi-bajo",
    millas1: 23,
    millas2: 17,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "medio",
    param2: "alto",
    millas1: 14,
    millas2: 5,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "bajo",
    param2: "semi-alto",
    millas1: 43,
    millas2: 10,
    imagen: "./static/assets/img/cuadrado-medio.svg",
  },
  {
    param1: "bajo",
    param2: "semi-alto",
    millas1: 32,
    millas2: 10,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "medio",
    param2: "medio",
    millas1: 17,
    millas2: 16,
    imagen: "./static/assets/img/triangulo-medio.svg",
  },
  {
    param1: "bajo",
    param2: "medio",
    millas1: 25,
    millas2: 18,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "bajo",
    param2: "medio",
    millas1: 24,
    millas2: 17,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "semi-alto",
    param2: "medio",
    millas1: 15,
    millas2: 10,
    imagen: "./static/assets/img/cuadrado-rojo.svg",
  },
  {
    param1: "semi-alto",
    param2: "medio",
    millas1: 28,
    millas2: 9,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "bajo",
    param2: "semi-alto",
    millas1: 24,
    millas2: 17,
    imagen: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    param1: "bajo",
    param2: "medio",
    millas1: 24,
    millas2: 16,
    imagen: "./static/assets/img/triangulo-negro.svg",
  },
  {
    param1: "bajo",
    param2: "medio",
    millas1: 24,
    millas2: 15,
    imagen: "./static/assets/img/cuadrado-linea.svg",
  },
  {
    param1: "semi-bajo",
    param2: "medio",
    millas1: 18,
    millas2: 20,
    imagen: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    param1: "semi-bajo",
    param2: "medio",
    millas1: 19,
    millas2: 16,
    imagen: "./static/assets/img/triangulo-linea.svg",
  },
  {
    param1: "semi-alto",
    param2: "medio",
    millas1: 16,
    millas2: 10,
    imagen: "./static/assets/img/cuadrado-linea.svg",
  },
  {
    param1: "semi-bajo",
    param2: "medio",
    millas1: 19,
    millas2: 18,
    imagen: "./static/assets/img/triangulo-rojo.svg",
  },
  {
    param1: "semi-alto",
    param2: "medio",
    millas1: 15,
    millas2: 10,
    imagen: "./static/assets/img/cuadrado-negro.svg",
  },
];

var places = [
  {
    number: "01",
    title: "PUNTA CAPONES",
    subtitle: "Punta Capones, Tumbes",
    year: "1975",
    s: "03º24’43”",
    w: "80º18’46”",
    coords: "https://goo.gl/maps/mR4V9nCeqNgwrxFE8",
  },
  {
    number: "02",
    title: "CONTRALMIRANTE VILLAR",
    subtitle: "Puerto Zorritos, Tumbes",
    year: "1975",
    s: "03º40’52”",
    w: "80º40’59”",
    coords: "https://goo.gl/maps/UxydeReLinh7DCU89",
  },
  {
    number: "03",
    title: "MÁNCORA",
    subtitle: "Caleta Máncora, Piura",
    year: "1975",
    s: "04º06’29”",
    w: "81º03’25”",
    coords: "https://goo.gl/maps/oV17jT843pPxqEjg9",
  },
  {
    number: "04",
    title: "CABO BLANCO",
    subtitle: "Caleta Cabo Blanco, Piura",
    year: "1978",
    s: "04º15’09”",
    w: "81º14’16”",
    coords: "https://goo.gl/maps/Azx81iK811sGkKJy7",
  },
  {
    number: "05",
    title: "PUNTA TALARA",
    subtitle: "Puerto Talara, Piura",
    year: "1942",
    s: "04º34’27”",
    w: "81º17’05”",
    coords: "https://goo.gl/maps/pSxikSEFZ1hKeTwYA",
  },
  {
    number: "06",
    title: "PUNTA PARIÑAS",
    subtitle: "Punta Pariñas, Piura",
    year: "1974",
    s: "04º40’12”",
    w: "81º19’38”",
    coords: "https://goo.gl/maps/SUQh2Q5oMw1yQhTg9",
  },
  {
    number: "07",
    title: "PUNTA TELÉGRAFO",
    subtitle: "Puerto Paita, Piura",
    year: "1974",
    s: "05º04’26”",
    w: "81º07’36”",
    coords: "https://goo.gl/maps/4enh87bJxkcH6hR99",
  },
  {
    number: "08",
    title: "ISLA FOCA",
    subtitle: "Isla Foca, Piura",
    year: "1931",
    s: "05º12’36”",
    w: "81º12’19”",
    coords: "https://goo.gl/maps/Po86r1SvWk9uUWfC6",
  },
  {
    number: "09",
    title: "BAYÓVAR",
    subtitle: "Puerto Bayóvar, Piura",
    year: "1977",
    s: "05º47’54”",
    w: "81º04’00”",
    coords: "https://goo.gl/maps/mPay5ZdK3BaTbf7f9",
  },
  {
    number: "10",
    title: "PUNTA LA NEGRA",
    subtitle: "Punta La Negra, Piura",
    year: "1981",
    s: "06º03’43”",
    w: "81º06’30”",
    coords: "https://goo.gl/maps/Pfj3bMZyeQx8seXA8",
  },
  {
    number: "11",
    title: "ISLA LOBOS DE TIERRA",
    subtitle: "Isla Lobos de Tierra, Lambayeque",
    year: "1937",
    s: "06º25’15”",
    w: "80º51’20”",
    coords: "https://goo.gl/maps/QB96eNVBgBEXAzUs5",
  },
  {
    number: "12",
    title: "SAN JOSÉ",
    subtitle: "Caleta San José, Lambayeque",
    year: "1998",
    s: "06º46’09”",
    w: "79º58’13”",
    coords: "https://goo.gl/maps/sqW91RbnDcvZtzrK6",
  },
  {
    number: "13",
    title: "SANTA ROSA",
    subtitle: "Caleta Santa Rosa, Lambayeque",
    year: "1998",
    s: "06º53’35”",
    w: "79º54’49”",
    coords: "https://goo.gl/maps/6hViEGDVkgHaSkvu7",
  },
  {
    number: "14",
    title: "ISLA LOBOS DE AFUERA",
    subtitle: "Isla Lobos de Afuera, Lambayeque",
    year: "1975",
    s: "06º56’35”",
    w: "80º43’23”",
    coords: "https://goo.gl/maps/6GgHbuQWGtiBixMi6",
  },
  {
    number: "15",
    title: "ETEN",
    subtitle: "Puerto Eten, Lambayeque",
    year: "1975",
    s: "06º57’27”",
    w: "79º51’09”",
    coords: "https://goo.gl/maps/eeJEf3P98fXb3P9c8",
  },
  {
    number: "16",
    title: "PUNTA PACASMAYO",
    subtitle: "Puerto Pacasmayo, La Libertad",
    year: "1935",
    s: "07º24’50”",
    w: "79º35’13”",
    coords: "https://goo.gl/maps/cA8D9qzAqRtWzaoJ6",
  },
  {
    number: "17",
    title: "ISLA MACABÍ",
    subtitle: "Isla Macabí, La libertad",
    year: "1930",
    s: "07º48’52”",
    w: "79º29’59”",
    coords: "https://goo.gl/maps/1WRAv8fediix1rKp9",
  },
  {
    number: "18",
    title: "MORRO CARRETAS",
    subtitle: "Puerto Salaverry, La Libertad",
    year: "1974",
    s: "08º13’38”",
    w: "78º58’42”",
    coords: "https://goo.gl/maps/mNZpTduHsPb6hN65A",
  },
  {
    number: "19",
    title: "ISLA GUAÑAPE",
    subtitle: "Isla Guañape Sur, La Libertad",
    year: "1930",
    s: "08º33’58”",
    w: "78º58’07”",
    coords: "https://goo.gl/maps/WeS54Nfm3TzuuZvR9",
  },
  {
    number: "20",
    title: "ISLA FERROL DEL NORTE",
    subtitle: "Puerto Chimbote, Ancash",
    year: "1973",
    s: "09º08’22”",
    w: "78º37’15”",
    coords: "https://goo.gl/maps/oqrvaPftxQbp5ax99",
  },
  {
    number: "21",
    title: "MORRO CALVARIO",
    subtitle: "Puerto Casma, Ancash",
    year: "1978",
    s: "09º28’02”",
    w: "78º23’29”",
    coords: "https://goo.gl/maps/B6QYFqVJHuEoKP3H8",
  },
  {
    number: "22",
    title: "PUNTA CABEZA DE LAGARTO",
    subtitle: "Puerto Huarmey, Ancash",
    year: "1930",
    s: "10º06’28”",
    w: "78º11’04”",
    coords: "https://goo.gl/maps/ZgrqgFVwgdWsqhVRA",
  },
  {
    number: "23",
    title: "PUNTA THOMAS",
    subtitle: "Puerto Supe, Lima",
    year: "1930",
    s: "10º48’16”",
    w: "77º45’15”",
    coords: "https://goo.gl/maps/8SMvswMC5Q38gPs48",
  },
  {
    number: "24",
    title: "PUNTA HUACHO",
    subtitle: "Puerto Huacho, Lima",
    year: "1974",
    s: "11º07’34”",
    w: "77º37’05”",
    coords: "https://goo.gl/maps/Wt2ov6t4hxYKgAaWA",
  },
  {
    number: "25",
    title: "SALINAS",
    subtitle: "Salinas, Lima",
    year: "1973",
    s: "11º13’06”",
    w: "77º38’12”",
    coords: "https://goo.gl/maps/6SkJdXiofXUMzWSD9",
  },
  {
    number: "26",
    title: "ISLA MAZORCA",
    subtitle: "Grupo de Huaura, Lima",
    year: "1928",
    s: "11º23’01”",
    w: "77º44’39”",
    coords: "https://goo.gl/maps/2UZ7i7NgDVLjqMdCA",
  },
  {
    number: "27",
    title: "ISLOTE PELADO",
    subtitle: "Grupo de Huaura, Lima",
    year: "1973",
    s: "11º26’30”",
    w: "70º50’38”",
    coords: "https://goo.gl/maps/bxA1pZF8a877n68h9",
  },
  {
    number: "28",
    title: "PUNTA CHANCAY",
    subtitle: "Puerto Chancay, Lima",
    year: "1973",
    s: "11º35’13”",
    w: "77º16’55”",
    coords: "https://goo.gl/maps/Ek1rWcbxZf5ihqHL8",
  },
  {
    number: "29",
    title: "ANCÓN",
    subtitle: "Ancón, Lima",
    year: "1986",
    s: "11º46’23”",
    w: "77º11’36”",
    coords: "https://goo.gl/maps/Sfn77gWvCdNN2KVa6",
  },
  {
    number: "30",
    title: "ISLA GRANDE",
    subtitle: "Ancón, Lima",
    year: "1973",
    s: "11º46’31”",
    w: "77º15’52”",
    coords: "https://goo.gl/maps/8pph8F9DCBvwPr7r8",
  },
  {
    number: "31",
    title: "ISLOTE HUAQUILLO",
    subtitle: "Ancón, Lima",
    year: "1973",
    s: "11º46’45”",
    w: "77º11’50”",
    coords: "https://goo.gl/maps/t2c7T1LhGJyhbnEU6",
  },
  {
    number: "32",
    title: "ISLA HORMIGAS DE AFUERA",
    subtitle: "Isla Hormigas de Afuera, Lima",
    year: "1973",
    s: "11º57’29”",
    w: "77º43’58”",
    coords: "https://goo.gl/maps/nYnKjFVu2fwAQLyG6",
  },
  {
    number: "33",
    title: "TORRE RELOJ",
    subtitle: "Puerto Callao, Lima",
    year: "1930",
    s: "12º03’29”",
    w: "77º08’56”",
    coords: "https://goo.gl/maps/xWqAYEFWBQscVuBp7",
  },
  {
    number: "34",
    title: "GRAN ALMIRANTE GRAU",
    subtitle: "Isla San Lorenzo, Lima, Callao",
    year: "1973",
    s: "12º03’45”",
    w: "77º14’45”",
    coords: "https://goo.gl/maps/9cuckuxnBzigPKDz8",
  },
  {
    number: "35",
    title: "LA PUNTA",
    subtitle: "Escuela Naval, Lima, Callao",
    year: "1973",
    s: "12º04’18”",
    w: "77º09’58”",
    coords: "https://goo.gl/maps/ePZwpmFDAiu2p3Uy5",
  },
  {
    number: "36",
    title: "LA MARINA",
    subtitle: "Bahía Miraflores, Lima",
    year: "1974",
    s: "12º07’25”",
    w: "77º02’24”",
    coords: "https://goo.gl/maps/TCmeLnyVdYjeJtQP8",
  },
  {
    number: "37",
    title: "ISLA CHILCA",
    subtitle: "Puerto Pucusana, Lima",
    year: "1974",
    s: "12º28’31”",
    w: "76º48’06”",
    coords: "https://goo.gl/maps/p4zNWrhkHga41BhPA",
  },
  {
    number: "38",
    title: "ISLA ASIA",
    subtitle: "Isla Asia, Lima",
    year: "2008",
    s: "12º47’41”",
    w: "76º37’25”",
    coords: "https://goo.gl/maps/WGeqerMpGgeL5PeWA",
  },
  {
    number: "39",
    title: "CERRO AZUL",
    subtitle: "Cañete, Lima",
    year: "1974",
    s: "13º01’48”",
    w: "76º29’22”",
    coords: "https://goo.gl/maps/jRbAykbokhd17H8F6",
  },
  {
    number: "40",
    title: "ISLA CHINCHA DEL CENTRO",
    subtitle: "Isla Chincha, Ica",
    year: "1928",
    s: "13º38’32”",
    w: "76º24’07”",
    coords: "https://goo.gl/maps/9jSSR1vhjWgaVLAT7",
  },
  {
    number: "41",
    title: "ISLA BLANCA",
    subtitle: "Puerto Pisco, Ica",
    year: "-",
    s: "13º44’09”",
    w: "76º18’43”",
    coords: "https://goo.gl/maps/jAjQDBhE4LNvhYHF7",
  },
  {
    number: "42",
    title: "ISLA SAN GALLÁN",
    subtitle: "Isla San Galián, Ica",
    year: "1981",
    s: "13º50’45”",
    w: "76º27’47”",
    coords: "https://goo.gl/maps/gcPHiDDFGNR8bMF89",
  },
  {
    number: "43",
    title: "CERRO CARRETAS",
    subtitle: "Bahía Independencia, Ica",
    year: "1978",
    s: "14º11’40”",
    w: "76º16’18”",
    coords: "https://goo.gl/maps/rSaw2feVcw6qS14L9",
  },
  {
    number: "44",
    title: "INFIERNILLOS",
    subtitle: "Infiernillos, Ica",
    year: "1961",
    s: "14º40’11”",
    w: "75º53’08”",
    coords: "https://goo.gl/maps/NEJAHi1RuQUWv69A8",
  },
  {
    number: "45",
    title: "PUNTA SAN NICOLÁS",
    subtitle: "Puerto San Nicolás, Ica",
    year: "1959",
    s: "15º15’22”",
    w: "75º15’23”",
    coords: "https://goo.gl/maps/qELCvUVd3M63BPJQ7",
  },
  {
    number: "46",
    title: "PUNTA SAN JUAN",
    subtitle: "Puerto San Juan de Marcona, Ica",
    year: "1935",
    s: "15º21’40”",
    w: "75º10’50”",
    coords: "https://goo.gl/maps/mMuWe8xRby4zbn4b9",
  },
  {
    number: "47",
    title: "PUNTA LOMAS",
    subtitle: "Caleta Lomas, Arequipa",
    year: "1935",
    s: "15º34’17”",
    w: "74º51’10”",
    coords: "https://goo.gl/maps/A8F9AEmnY1SC33fx6",
  },
  {
    number: "48",
    title: "CHALA",
    subtitle: "Caleta Chala, Arequipa",
    year: "1974",
    s: "15º52’27”",
    w: "74º14’16”",
    coords: "https://goo.gl/maps/thwfXcdJ9fwxbWrc7",
  },
  {
    number: "49",
    title: "PUNTA ATICO",
    subtitle: "Caleta Atico, Arequipa",
    year: "1979",
    s: "16º14’13”",
    w: "73º41’55”",
    coords: "https://goo.gl/maps/FkhbTCiiUn4dEuMF7",
  },
  {
    number: "50",
    title: "LA PLANCHADA",
    subtitle: "Caleta La Plancha, Arequipa",
    year: "1976",
    s: "16º24’36”",
    w: "74º13’30”",
    coords: "https://goo.gl/maps/zdMRP51BAQRpJYDh7",
  },
  {
    number: "51",
    title: "PUNTA QUILCA",
    subtitle: "Caleta Quilca, Arequipa",
    year: "1936",
    s: "16º42’59”",
    w: "72º26’10”",
    coords: "https://goo.gl/maps/wXDiGUTiodJbiav39",
  },
  {
    number: "52",
    title: "PUNTA ISLAY",
    subtitle: "Matarani-Islay, Arequipa",
    year: "1930",
    s: "17º00’56”",
    w: "72º06’42”",
    coords: "https://goo.gl/maps/Cf7ZdSGDScjHRaTy6",
  },
  {
    number: "53",
    title: "PUNTA COLES",
    subtitle: "Puerto Ilo, Moquegua",
    year: "1958",
    s: "17º42’26”",
    w: "71º22’51”",
    coords: "https://goo.gl/maps/KK8y5SkoBMvfpWKY6",
  },
  {
    number: "54",
    title: "PUNTA SAMA",
    subtitle: "Puerto Grau, Tacna",
    year: "1978",
    s: "18º00’20”",
    w: "70º53’16”",
    coords: "https://goo.gl/maps/kYZnHFuEgodiBKhb9",
  },
  {
    number: "55",
    title: "BOCA DEL RÍO",
    subtitle: "Río Sama, Tacna",
    year: "1982",
    s: "18º09’26”",
    w: "70º40’12”",
    coords: "https://goo.gl/maps/AACZi713c7Ur12vD7",
  },
  {
    number: "56",
    title: "LOS PALOS",
    subtitle: "Tacna",
    year: "1967",
    s: "18º17’53”",
    w: "70º25’41”",
    coords: "https://goo.gl/maps/tinYZ7EzZ4d2gRQ78",
  },
];

window.onload = function () {
  langChanger.addEventListener("click", toEnglishChange);
  langChanger2.addEventListener("click", toSpanishChange);
  potenceChanger.addEventListener("click", reversePotence);
  alturaChanger.addEventListener("click", reverseAltura);
  rangeChanger.addEventListener("click", reverseRange);
  flipChanger.addEventListener("click", reverseFlip);
  periodChanger.addEventListener("click", reversePeriod);
  console.log(mailingLaunch);
  if (getUrlHere !== "") {
    switch (getUrlHere) {
      case "#presentation":
        openPageFromElsewhere("english", getUrlHere, "#p2");
        break;
      case "#presentacion":
        openPageFromElsewhere("spanish", getUrlHere, "#p2");
        break;
      case "#soundpieces":
        openPageFromElsewhere("english", getUrlHere, "#p6");
        break;
      case "#piezassonoras":
        openPageFromElsewhere("spanish", getUrlHere, "#p6");
        break;
      case "#podcast":
        openPageFromElsewhere("english", getUrlHere, "#p7");
        break;
      case "#podcasts":
        openPageFromElsewhere("spanish", getUrlHere, "#p7");
        break;
      case "#score":
        openPageFromElsewhere("english", getUrlHere, "#p5");
        break;
      case "#partitura":
        openPageFromElsewhere("spanish", getUrlHere, "#p5");
        break;
      case "#listafaros":
        openPageFromElsewhere("spanish", getUrlHere, "#p3");
        break;
      case "#lighthouseslist":
        openPageFromElsewhere("english", getUrlHere, "#p3");
        break;
      case "#process":
        openPageFromElsewhere("english", getUrlHere, "#p4");
        break;
      case "#proceso":
        openPageFromElsewhere("spanish", getUrlHere, "#p4");
        break;
      case "#credits":
        openPageFromElsewhere("english", getUrlHere, "#p8");
        break;
      case "#creditos":
        openPageFromElsewhere("spanish", getUrlHere, "#p8");
        break;
    }
  }

  docGet();
  docPod();

  places.forEach((element) => {
    let addPlace = /*html */ `
        <li class="list-faros--item coords-launcher" data-coords="${element.coords}">
          <div class="list-faros--item--title">
            <div>
              <p class="m-0"><span class="c-gray font-pitch">${element.number}</span> ${element.title}</p>
              <p class="m-0">${element.subtitle}</p>
            </div>
            <span class="font-pitch">${element.year}</span>
          </div>
          <div class="list-faros--item--info">
            <span class="c-gray font-pitch">${element.s} S - ${element.w} W</span>
            <img src="./static/assets/img/point.svg" class=""  alt="" />
          </div>
        </li>
    `;
    let parent = document.querySelector("#placesList");
    parent.insertAdjacentHTML("beforeend", addPlace);
  });

  var maptrigger = document.getElementsByClassName("coords-launcher");

  for (let i = 0; i < maptrigger.length; i++) {
    maptrigger[i].addEventListener("click", mapLaunch);
  }

  for (let i = 0; i < mailingLaunch.length; i++) {
    mailingLaunch[i].addEventListener("click", writeMails);
  }

  periods.forEach((element) => {
    let toAdd = /*html*/ `
          <div class="box-container-items bb-dkt-3">
          <div class="box-2 cat1 active">
            <div class="grid-box-text">
              <p class="pt-0" data-translatable><span>Period<br /> ${element.period} seconds</span><span>Periodo<br /> ${element.period} segundos</span></p>`;

    if (element.destellos < 2) {
      toAdd =
        toAdd +
        `<p data-translatable><span>${element.destellos} flash</span><span>${element.destellos} destello</p>`;
    } else {
      toAdd =
        toAdd +
        `<p data-translatable><span>${element.destellos} flashes</span><span>${element.destellos} destellos</p>`;
    }

    for (let i = 0; i < element.destellos; i++) {
      toAdd = toAdd + `<p class="m-0">${element.lines[i]}</p>`;
    }

    toAdd =
      toAdd +
      `</div>
          </div>
          <div class="box-2 cat2 upper titilating" data-delay="${element.delay}" data-show="${element.show}" data-hide="${element.hide}" data-times="${element.time}">
            <div class="box-1--item">
              <img class="grf-period" src="${element.image}" alt="" />
            </div>
          </div>
        </div>
    `;
    let parent = document.querySelector("#periodsItems");
    parent.insertAdjacentHTML("beforeend", toAdd);
  });

  potences.forEach((element) => {
    let addPotence = /*html*/ `
      <div class="box-container-items bb-dkt-3">
        <div class="box-1 box-potence short-ones cat1 active">
          <div class="box-1--item">
            <span class="${element.clase1}">${element.line1}</span>
          </div>
          <div class="box-1--item">
            <span class="${element.clase2}">${element.line2}</span>
          </div>
          <div class="box-1--item">
            <span class="${element.clase3}">${element.line3}</span>
          </div>
          <div class="box-1--item">
            <span class="${element.clase4}">${element.line4}</span>
          </div>
        </div>
        <div class="box-1 box-potence short-ones cat2 percent" data-percentage="${element.percentage}">
          <div class="box-1--graphic">
            <div class="graphic-black">`;

    for (let i = 0; i < element.percentage / 25; i++) {
      let identifier = i + 1;
      let classToAddHere = 25 * identifier;
      addPotence =
        addPotence +
        `
          <p class="fat-lines line-${classToAddHere}"></p>
        `;
    }

    addPotence =
      addPotence +
      /** html */ `
            </div>
          </div>
        </div>
      </div>
    `;
    let parent = document.querySelector("#potenceItems");
    parent.insertAdjacentHTML("beforeend", addPotence);
    potenceItemsBoxes = document.getElementsByClassName("box-potence");
  });

  alturas.forEach((element) => {
    // clase1b: "c-gray",
    // clase2b: "c-gray",
    // clase3b: "c-gray",
    // clase4b: "c-gray",
    // clase5b: "",
    let elemental = "";
    if (element.clase1b == "") {
      elemental = "xlento";
    }
    if (element.clase2b == "") {
      elemental = "lento";
    }
    if (element.clase3b == "") {
      elemental = "moderado";
    }
    if (element.clase4b == "") {
      elemental = "rapido";
    }
    if (element.clase5b == "") {
      elemental = "xrapido";
    }

    let addAltura = /* html */ `
    <div class="box-container-items bb-dkt-3">
      <div class="box-1 altura-box cat1 active">
        <div class="box-1--item">
          <span class="${element.clase1}">${element.line1}</span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase2}">${element.line2}</span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase3}">${element.line3}</span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase4}">${element.line4}</span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase5}">${element.line5}</span>
        </div>
      </div>
      <div class="box-1 altura-box cat2">
        <div class="box-1--item">
          <span class="${element.clase1b} ${elemental}" data-translatable><span>Very Slow</span><span>Muy lento</span></span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase2b} ${elemental}" data-translatable><span>Slow</span><span>Lento</span></span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase3b} ${elemental}" data-translatable><span>Moderate</span><span>Moderado</span></span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase4b} ${elemental}" data-translatable><span>Fast</span><span>Rápido</span></span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase5b} ${elemental}" data-translatable><span>Very fast</span><span>Muy rápido</span></span>
        </div>
      </div> 
    </div> 
    `;
    let parent = document.querySelector("#alturaboxes");
    parent.insertAdjacentHTML("beforeend", addAltura);
    alturaItemsBoxes = document.getElementsByClassName("altura-box");
  });

  ranges.forEach((element) => {
    let addRange = /* html */ `
    <div class="box-container-items bb-dkt-3">
      <div class="box-1 box-range cat1 moving active" data-param1="${element.param1}" data-param2="${element.param2}">
        <div class="box-1--item" style="overflow: hidden;">
          <span class="upper" data-translatable><span>Nominal range<br /> ${element.millas1} miles</span><span>Alcance nominal<br /> ${element.millas1} millas</span></span>
        </div>
        <div class="box-1--item" style="overflow: hidden;">
          <span class="downer" data-translatable><span>Geographic range<br /> ${element.millas2} miles</span><span>Alcance geográfico<br /> ${element.millas2} millas</span></span>
        </div>
      </div>
      <div class="box-1 box-range cat2 double">
        <div class="box-1--item"></div>
        <div class="box-1--item"></div>
        <div class="box-1--item"></div>
        <div class="box-1--item"></div>
        <div class="box-1--item last-border"></div>
        <img class="graphic-tono" src="${element.imagen}" alt="" />
        <img class="graphic-tono" src="${element.imagen}" alt="" />
      </div>
    </div>
    `;
    let parent = document.querySelector("#rangeBoxes");
    parent.insertAdjacentHTML("beforeend", addRange);
    rangeItemsBoxes = document.getElementsByClassName("box-range");
  });

  for (let i = 0; i < 56; i++) {
    let valor = i + 1;
    let addpic = /* html */ `
      <div class="box-container-items bb-dkt-3 no-border">
        <div class="flip-container">
          <div class="flipper">
            <div class="front">
              <img class="faros-img" src="./static/assets/img/farosb/${valor}.jpg" alt="" />
            </div>
            <div class="back">
              <img class="faros-img" src="./static/assets/img/farosb/${valor}b.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    `;
    let parent = document.querySelector("#imagesBox");
    parent.insertAdjacentHTML("beforeend", addpic);
  }

  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", changePosition);
    // console.log(triggers[i]);
  }

  for (let i = 0; i < potenceItemsBoxes.length; i++) {
    potenceItemsBoxes[i].addEventListener("click", changePotence);
    // console.log('this are the potences: ',potenceItemsBoxes[i]);
  }

  for (let i = 0; i < alturaItemsBoxes.length; i++) {
    alturaItemsBoxes[i].addEventListener("click", changeAltura);
    // console.log('this are the potences: ',potenceItemsBoxes[i]);
  }

  for (let i = 0; i < rangeItemsBoxes.length; i++) {
    rangeItemsBoxes[i].addEventListener("click", changeRange);
    // console.log('this are the potences: ',potenceItemsBoxes[i]);
  }

  for (let i = 0; i < lesserlinks.length; i++) {
    lesserlinks[i].addEventListener("click", openPage);
    // console.log(triggers[i]);
  }

  for (let i = 0; i < closers.length; i++) {
    closers[i].addEventListener("click", closePage);
    // console.log(triggers[i]);
  }

  for (let i = 0; i < tabTrigger.length; i++) {
    tabTrigger[i].addEventListener("click", showTabs);
  }

  for (let i = 0; i < animatedBoxesTempo.length; i++) {
    animatedBoxesTempo[i].addEventListener("click", changeBox);
    // console.log(animatedBoxes[i]);
  }

  // for (let i = 0; i < animatedBoxes.length; i++) {
  //   animatedBoxes[i].addEventListener("click", changeBox);
  //   // console.log(animatedBoxes[i]);
  // }

  for (let i = 0; i < flippers.length; i++) {
    flippers[i].addEventListener("click", flipbox);
    // console.log(animatedBoxes[i]);
  }

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", accord);
  }

  document.getElementById("closerSect").addEventListener("click", hideTabs);
};

function writeMails() {
  let parent = event.target.parentNode;
  console.log("writing");
  let dates = new Date();
  let emailuser = parent.querySelectorAll(".record-mail")[0];
  let emailuse = parent.querySelectorAll(".record-mail")[0].value;
  let name = emailuse;
  let idate = dates.getTime();
  if (
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailuse
    )
  ) {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        console.log("gonna write on emails");
        db.collection("mails")
          .doc(name)
          .set({
            id: parseInt(idate),
            mail: emailuse,
          })
          .then(function () {
            // alert("mail registrado satisfactoriamente");
            emailuser.value = "Mail registrado satisfactoriamente";
            emailuser.classList.add("error-sucess");
            parent.getElementsByTagName("a")[0].style.display = "none";
          })
          .catch(function (error) {
            console.error("Error writing doc", error);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  } else {
    emailuser.value = "Por favor escriba un mail correcto";
    emailuser.classList.add("error-mail");
  }
}

function accord(event) {
  event.stopImmediatePropagation();
  let elementer = event.target.parentNode;
  console.log(elementer);
  console.log(elementer.classList);
  // for(let i = 0; i < accordions.length; i ++) {
  //   accordions[i].classList.remove('active');
  // }
  elementer.classList.toggle("active");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

var i18n = window.domI18n({
  languages: ["es", "en"],
  selector: "[data-translatable]",
  defaultLanguage: "es",
});

function toEnglishChange() {
  console.log("the change you need");
  langChanger.classList.remove("active");
  langChanger2.classList.add("active");
  i18n.changeLanguage("es");
  globalIdiom = "english";

  for (let i = 0; i < lesserlinks.length; i++) {
    lesserlinks[i].addEventListener("click", openPage);
    // console.log(triggers[i]);
  }
}

function toSpanishChange() {
  console.log("the change i need");
  langChanger2.classList.remove("active");
  langChanger.classList.add("active");
  i18n.changeLanguage("en");
  globalIdiom = "spanish";

  for (let i = 0; i < lesserlinks.length; i++) {
    lesserlinks[i].addEventListener("click", openPage);
    // console.log(triggers[i]);
  }
}

async function closePage() {
  container.classList.remove("closed");
  console.log("this is the container", container);
  let element = event.target;
  let parent = element.parentNode;
  let siblin = parent.getElementsByClassName("no-visible")[0];
  container.classList.remove("closed");
  element.classList.remove("visible");
  siblin.classList.remove("visible");
  parent.parentNode.classList.remove("normal");
  parent.parentNode.style.zIndex = 0;
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].classList.add("showing");
  }
  console.log("getting there");
  window.history.pushState(
    "page 2",
    "Todos los faros de la costa peruana",
    "/"
  );
}

async function changePosition() {
  container.scrollTo(0, 0);
  for (let i = 0; i < skews.length; i++) {
    skews[i].scrollTo(0, 0);
  }
  let element = event.target;
  let modifier = element.getAttribute("rel");
  let newState = element.dataset.url;
  let elementToChange = document.querySelector(modifier);
  elementToChange.style.zIndex = "1000";
  elementToChange.classList.add("normal");
  // await sleep(800);
  let child = elementToChange.getElementsByClassName("no-visible")[0];
  let child2 = elementToChange.getElementsByClassName("closer")[0];
  child.classList.add("visible");
  child2.classList.add("visible");
  container.classList.add("closed");
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].classList.remove("showing");
  }

  if (newState === "#presentacion" && globalIdiom === "english") {
    newState = "#presentation";
  }

  if (newState === "#listafaros" && globalIdiom === "english") {
    newState = "#lighthouseslist";
  }

  if (newState === "#proceso" && globalIdiom === "english") {
    newState = "#process";
  }

  if (newState === "#partitura" && globalIdiom === "english") {
    newState = "#score";
  }

  if (newState === "#piezassonoras" && globalIdiom === "english") {
    newState = "#soundpieces";
  }

  if (newState === "#podcasts" && globalIdiom === "english") {
    newState = "#podcast";
  }

  if (newState === "#creditos" && globalIdiom === "english") {
    newState = "#credits";
  }

  window.history.pushState(
    "page 2",
    "Todos los faros de la costa peruana",
    newState
  );
}

async function openPage() {
  console.log("uarai kanai");
  container.classList.remove("closed");
  document.querySelector("#closerSect").classList.remove("visible");
  textoIntro.classList.remove("inactive");
  triggerContainer.classList.remove("closed");
  for (let i = 0; i < contentItems.length; i++) {
    contentItems[i].classList.remove("showing");
  }
  console.log("this is the container", container);
  container.scrollTo(0, 0);
  for (let i = 0; i < skews.length; i++) {
    skews[i].scrollTo(0, 0);
  }
  let element = event.target;
  let modifier = element.getAttribute("rel");
  let newState = element.dataset.url;
  let elementToChange = document.querySelector(modifier);
  let visibles = document.getElementsByClassName("no-visible");
  container.classList.remove("closed");
  for (let i = 0; i < visibles.length; i++) {
    console.log(visibles[0]);
    visibles[i].classList.remove("visible");
  }
  for (let i = 0; i < closers.length; i++) {
    console.log(closers[0]);
    closers[i].classList.remove("visible");
  }
  for (let i = 0; i < skews.length; i++) {
    skews[i].classList.remove("normal");
    skews[i].style.zIndex = "0";
  }
  console.log("there is the modifier", modifier, elementToChange);
  elementToChange.classList.add("normal");
  elementToChange.style.zIndex = "1000";
  let child = elementToChange.getElementsByClassName("no-visible")[0];
  let child2 = elementToChange.getElementsByClassName("closer")[0];
  child.classList.add("visible");
  child2.classList.add("visible");
  container.classList.add("closed");
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].classList.remove("showing");
  }

  if (newState === "#presentacion" && globalIdiom === "english") {
    newState = "#presentation";
  }

  if (newState === "#listafaros" && globalIdiom === "english") {
    newState = "#lighthouseslist";
  }

  if (newState === "#proceso" && globalIdiom === "english") {
    newState = "#process";
  }

  if (newState === "#partitura" && globalIdiom === "english") {
    newState = "#score";
  }

  if (newState === "#piezassonoras" && globalIdiom === "english") {
    newState = "#soundpieces";
  }

  if (newState === "#podcasts" && globalIdiom === "english") {
    newState = "#podcast";
  }

  if (newState === "#creditos" && globalIdiom === "english") {
    newState = "#credits";
  }

  window.history.pushState(
    "page 2",
    "Todos los faros de la costa peruana",
    newState
  );
}

function showTabs() {
  let element = event.target;
  let targ = element.getAttribute("rel");
  let targetted = document.querySelector(targ);
  let closer1 = document.getElementById("closerNav");
  let closer2 = document.getElementById("closerSect");
  closer1.classList.remove("visible");
  closer2.classList.add("visible");
  triggerContainer.classList.add("closed");
  textoIntro.classList.add("inactive");
  targetted.classList.add("showing");
}

function hideTabs() {
  textoIntro.classList.remove("inactive");
  triggerContainer.classList.remove("closed");
  for (let i = 0; i < contentItems.length; i++) {
    contentItems[i].classList.remove("showing");
  }
  let closer1 = document.getElementById("closerNav");
  let closer2 = document.getElementById("closerSect");
  console.log("this are the closers", closer1, closer2);
  closer1.classList.add("visible");
  closer2.classList.remove("visible");
}

function flipbox() {
  let targetted = event.target;
  targetted.classList.toggle("hover");
}

function mapLaunch() {
  let targetted = event.target;
  let coordinates = targetted.dataset.coords;
  let url = coordinates;
  window.open(url, "_blank");
}

function docGet() {
  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      db.collection("interpretations")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            element = doc.data();
            let elementToAdd = /*html */ `
              <div class="c-tab--items">
                <div class="c-tab--items--header">
                  <p class="autor-text">${element.autor}</p>
                  <div class="info">
                    <img class="arrow" src="./static/assets/img/arrow.svg" alt="" />
                    <span class="c-gray ml-5">${element.date}</span>
                  </div>
                </div>
                <div class="c-tab--items--content">
                  <div class="doble-desktop">
                    <div class="doble-desktop--fijo list-podcast">
                      <ul class="podcast-items">
                        <li class="podcast-item">
                          <p class="m-0" data-translatable><span><u>Vocal interpretation</u></span><span><u>Interpretación
                              vocal</u></span></p>
                          <p class="m-0">${element.autor}</p>
                        </li>
                        <li class="podcast-item">
                          <p class="m-0" data-translatable><span><u>Binaural recording and mixing</u></span><span><u>Grabación y
                              mezcla binaural</u></span></p>
                          <p class="m-0">${element.mezcla}</p>
                        </li>
                        <li class="podcast-item">
                          <p class="m-0" data-translatable><span><u>Direction</u></span><span><u>Dirección</u></span></p>
                          <p class="m-0">${element.composicion}</p>
                        </li>
                      </ul>
                    </div>
                    <div class="doble-desktop--item paragraphs">
                      <p class="text-3" data-translatable>
                        <span>${element.p1eng}</span>
                        <span>${element.p1esp}</span>
                      </p>
                      <div class="reproductor text-3">${element.link}</div>
                      <p class="text-3" data-translatable>
                        <span>${element.p2eng}</span>
                        <span>${element.p2esp}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          `;
            let parent = document.querySelector("#accordion1");
            parent.insertAdjacentHTML("beforeend", elementToAdd);
            if (globalIdiom === "spanish") {
              this.toSpanishChange();
            } else {
              this.toEnglishChange();
            }

            var accordions = document.getElementsByClassName("c-tab--items");

            for (let i = 0; i < accordions.length; i++) {
              accordions[i].addEventListener("click", accord);
              console.log(accordions[i]);
            }
          });
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

async function reversePotence() {
  let parent = document.querySelector("#potenceItems");
  let items = parent.getElementsByClassName("box-container-items");
  if (activePotence) {
    let spanished = potenceChanger.querySelectorAll(".spanish")[0];
    let englished = potenceChanger.querySelectorAll(".english")[0];
    spanished.classList.remove("active");
    englished.classList.add("active");
    activePotence = false;
    console.log("welcome");
    for (let i = 0; i < items.length; i++) {
      let cat1son = items[i].getElementsByClassName("cat1")[0];
      let cat2son = items[i].getElementsByClassName("cat2")[0];
      let neonson = cat2son.querySelectorAll(".graphic-black")[0];
      cat1son.classList.remove("active");
      cat2son.classList.add("active");
      await sleep(100);
      neonson.classList.add("neon");
    }
  } else {
    console.log("goodbye");
    let spanished = potenceChanger.querySelectorAll(".spanish")[0];
    let englished = potenceChanger.querySelectorAll(".english")[0];
    spanished.classList.add("active");
    englished.classList.remove("active");
    activePotence = true;
    for (let i = 0; i < items.length; i++) {
      let cat1son = items[i].getElementsByClassName("cat1")[0];
      let cat2son = items[i].getElementsByClassName("cat2")[0];
      let neonson = cat2son.querySelectorAll(".graphic-black")[0];
      cat1son.classList.add("active");
      cat2son.classList.remove("active");
      neonson.classList.remove("neon");
    }
  }
}

function reverseAltura() {
  let parent = document.querySelector("#alturaboxes");
  let items = parent.getElementsByClassName("box-container-items");
  if (activeAltura) {
    let spanished = alturaChanger.querySelectorAll(".spanish")[0];
    let englished = alturaChanger.querySelectorAll(".english")[0];
    spanished.classList.remove("active");
    englished.classList.add("active");
    activeAltura = false;
    console.log("welcome");
    for (let i = 0; i < items.length; i++) {
      let cat1son = items[i].getElementsByClassName("cat1")[0];
      let cat2son = items[i].getElementsByClassName("cat2")[0];
      let hideson = cat1son.querySelectorAll(".box-1--item");
      let showson = cat2son.querySelectorAll(".box-1--item");
      cat1son.classList.remove("active");
      cat2son.classList.add("active");
      for (let i = 0; i < hideson.length; i++) {
        let sonof = hideson[i].getElementsByTagName("span")[0];
        sonof.classList.add("hide");
      }
      for (let i = 0; i < showson.length; i++) {
        let sonof = showson[i].getElementsByTagName("span")[0];
        sonof.classList.add("show");
      }
    }
  } else {
    console.log("goodbye");
    let spanished = alturaChanger.querySelectorAll(".spanish")[0];
    let englished = alturaChanger.querySelectorAll(".english")[0];
    spanished.classList.add("active");
    englished.classList.remove("active");
    activeAltura = true;
    for (let i = 0; i < items.length; i++) {
      let cat1son = items[i].getElementsByClassName("cat1")[0];
      let cat2son = items[i].getElementsByClassName("cat2")[0];
      let hideson = cat1son.querySelectorAll(".box-1--item");
      let showson = cat2son.querySelectorAll(".box-1--item");
      cat1son.classList.add("active");
      cat2son.classList.remove("active");
      for (let i = 0; i < hideson.length; i++) {
        let sonof = hideson[i].getElementsByTagName("span")[0];
        sonof.classList.remove("hide");
      }
      for (let i = 0; i < showson.length; i++) {
        let sonof = showson[i].getElementsByTagName("span")[0];
        sonof.classList.remove("show");
      }
    }
  }
}

function reverseRange() {
  let parent = document.querySelector("#rangeBoxes");
  let items = parent.getElementsByClassName("box-container-items");
  if (activeRange) {
    let spanished = rangeChanger.querySelectorAll(".spanish")[0];
    let englished = rangeChanger.querySelectorAll(".english")[0];
    spanished.classList.remove("active");
    englished.classList.add("active");
    activeRange = false;
    console.log("welcome");
    for (let i = 0; i < items.length; i++) {
      let cat1son = items[i].getElementsByClassName("cat1")[0];
      let cat2son = items[i].getElementsByClassName("cat2")[0];
      let sons2 = cat2son.querySelectorAll(".graphic-tono");
      let class1 = cat1son.dataset.param1;
      let class2 = cat1son.dataset.param2;
      cat1son.classList.remove("active");
      cat2son.classList.add("active");
      sons2[0].classList.add(class1);
      sons2[1].classList.add(class2);
    }
  } else {
    console.log("goodbye");
    let spanished = rangeChanger.querySelectorAll(".spanish")[0];
    let englished = rangeChanger.querySelectorAll(".english")[0];
    spanished.classList.add("active");
    englished.classList.remove("active");
    activeRange = true;
    for (let i = 0; i < items.length; i++) {
      let cat1son = items[i].getElementsByClassName("cat1")[0];
      let cat2son = items[i].getElementsByClassName("cat2")[0];
      let sons1 = cat1son.querySelectorAll(".margin-top-move");
      for (let i = 0; i < sons1.length; i++) {
        sons1[i].classList.remove("upper");
        sons1[i].classList.remove("downer");
      }
      let sons2 = cat2son.querySelectorAll(".graphic-tono");
      let class1 = cat1son.dataset.param1;
      let class2 = cat1son.dataset.param2;
      cat1son.classList.add("active");
      cat2son.classList.remove("active");
      sons2[0].classList.remove(class1);
      sons2[1].classList.remove(class2);
    }
  }
}

async function changePotence() {
  let element = event.target;
  let parent = element.parentNode;
  if (element.classList.contains("cat1")) {
    let sibling = parent.getElementsByClassName("cat2")[0];
    element.classList.remove("active");
    sibling.classList.add("active");
    let firstSon = sibling.getElementsByClassName("box-1--graphic")[0];
    let secondSon = firstSon.getElementsByClassName("graphic-black")[0];
    await sleep(100);
    secondSon.classList.add("neon");
  } else {
    let sibling = parent.getElementsByClassName("cat1")[0];
    element.classList.remove("active");
    sibling.classList.add("active");
    let firstSon = element.getElementsByClassName("box-1--graphic")[0];
    let secondSon = firstSon.getElementsByClassName("graphic-black")[0];
    await sleep(100);
    secondSon.classList.remove("neon");
  }
}

async function changeAltura() {
  let element = event.target;
  let parent = element.parentNode;
  if (element.classList.contains("cat1")) {
    let sibling = parent.getElementsByClassName("cat2")[0];
    element.classList.remove("active");
    sibling.classList.add("active");
    await sleep(100);
    let hideson = element.querySelectorAll(".box-1--item");
    let showson = sibling.querySelectorAll(".box-1--item");
    for (let i = 0; i < hideson.length; i++) {
      let sonof = hideson[i].getElementsByTagName("span")[0];
      sonof.classList.add("hide");
    }
    for (let i = 0; i < showson.length; i++) {
      let sonof = showson[i].getElementsByTagName("span")[0];
      sonof.classList.add("show");
    }
  } else {
    let sibling = parent.getElementsByClassName("cat1")[0];
    let element = parent.getElementsByClassName("cat2")[0];
    let hideson = sibling.querySelectorAll(".box-1--item");
    let showson = element.querySelectorAll(".box-1--item");
    for (let i = 0; i < hideson.length; i++) {
      let sonof = hideson[i].getElementsByTagName("span")[0];
      sonof.classList.remove("hide");
    }
    for (let i = 0; i < showson.length; i++) {
      let sonof = showson[i].getElementsByTagName("span")[0];
      sonof.classList.remove("show");
    }
    element.classList.remove("active");
    sibling.classList.add("active");
  }
}

async function changeRange() {
  let element = event.target;
  let parent = element.parentNode;
  if (element.classList.contains("cat1")) {
    let sibling = parent.getElementsByClassName("cat2")[0];
    let sons = element.getElementsByClassName("box-1--item");
    let param1 = element.dataset.param1;
    let param2 = element.dataset.param2;
    for (let i = 0; i < sons.length; i++) {
      let eltomove = sons[i].getElementsByTagName("span")[0];
      eltomove.classList.add("margin-top-move");
    }
    await sleep(500);
    element.classList.remove("active");
    sibling.classList.add("active");
    let reciver1 = sibling.getElementsByClassName("graphic-tono")[0];
    let reciver2 = sibling.getElementsByClassName("graphic-tono")[1];
    await sleep(200);
    reciver1.classList.add(param1);
    reciver2.classList.add(param2);
  } else {
    let sibling = parent.getElementsByClassName("cat1")[0];
    let sons = sibling.getElementsByClassName("box-1--item");
    let param1 = sibling.dataset.param1;
    let param2 = sibling.dataset.param2;
    for (let i = 0; i < sons.length; i++) {
      let eltomove = sons[i].getElementsByTagName("span")[0];
      eltomove.classList.remove("margin-top-move");
    }
    let reciver1 = element.getElementsByClassName("graphic-tono")[0];
    let reciver2 = element.getElementsByClassName("graphic-tono")[1];
    await sleep(200);
    reciver1.classList.remove(param1);
    reciver2.classList.remove(param2);
    element.classList.remove("active");
    sibling.classList.add("active");
  }
}

async function changeBox() {
  let element = event.target;
  let parent = element.parentNode;
  if (element.classList.contains("cat1")) {
    let sibling = parent.getElementsByClassName("cat2")[0];
    element.classList.remove("active");
    sibling.classList.add("active");
    let delayed = sibling.dataset.delay;
    let show = sibling.dataset.show;
    let hide = sibling.dataset.hide;
    let repeat = sibling.dataset.times;
    let son = sibling.getElementsByClassName("box-1--item")[0];
    for (let i = 0; i < 20; i++) {
      for (let i = 0; i < repeat; i++) {
        son.classList.add("show");
        await sleep(show);
        son.classList.remove("show");
        await sleep(hide);
      }
      await sleep(delayed);
    }
  } else {
    let sibling = parent.getElementsByClassName("cat1")[0];
    element.classList.remove("active");
    sibling.classList.add("active");
  }
}

function reverseFlip() {
  console.log("flippy");
  let parent = document.querySelector("#imagesBox");
  let fliper = parent.querySelectorAll(".flip-container");
  if (activeFlip) {
    let spanished = flipChanger.querySelectorAll(".spanish")[0];
    let englished = flipChanger.querySelectorAll(".english")[0];
    spanished.classList.remove("active");
    englished.classList.add("active");
    for (let i = 0; i < fliper.length; i++) {
      fliper[i].classList.add("hover");
    }
    activeFlip = false;
  } else {
    let spanished = flipChanger.querySelectorAll(".spanish")[0];
    let englished = flipChanger.querySelectorAll(".english")[0];
    spanished.classList.add("active");
    englished.classList.remove("active");
    for (let i = 0; i < fliper.length; i++) {
      fliper[i].classList.remove("hover");
    }
    activeFlip = true;
  }
}

async function reversePeriod() {
  let parent = document.querySelector("#periodsItems");
  let items = parent.getElementsByClassName("box-container-items");
  if (activePeriod) {
    let spanished = periodChanger.querySelectorAll(".spanish")[0];
    let englished = periodChanger.querySelectorAll(".english")[0];
    spanished.classList.remove("active");
    englished.classList.add("active");
    activePeriod = false;
    console.log("welcome");
    for (let i = 0; i < items.length; i++) {
      let cat1son = items[i].getElementsByClassName("cat1")[0];
      let cat2son = items[i].getElementsByClassName("cat2")[0];
      cat1son.classList.remove("active");
      cat2son.classList.add("active");
      console.log("letsons");
      let delayed = cat2son.dataset.delay;
      let show = cat2son.dataset.show;
      let hide = cat2son.dataset.hide;
      let repeat = cat2son.dataset.times;
      let son = cat2son.getElementsByClassName("box-1--item")[0];
      son.classList.add("show");
      animationEnd(son, delayed, show, hide, repeat);
    }
  } else {
    console.log("goodbye");
    let spanished = periodChanger.querySelectorAll(".spanish")[0];
    let englished = periodChanger.querySelectorAll(".english")[0];
    spanished.classList.add("active");
    englished.classList.remove("active");
    activePeriod = true;
    for (let i = 0; i < items.length; i++) {
      let cat1son = items[i].getElementsByClassName("cat1")[0];
      let cat2son = items[i].getElementsByClassName("cat2")[0];
      cat1son.classList.add("active");
      cat2son.classList.remove("active");
    }
  }
}

async function animationEnd(son, delayed, show, hide, repeat) {
  for (let i = 0; i < 20; i++) {
    for (let i = 0; i < repeat; i++) {
      son.classList.add("show");
      await sleep(show);
      son.classList.remove("show");
      await sleep(hide);
    }
    await sleep(delayed);
  }
}

function docPod() {
  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      console.log("signed in");
      db.collection("podcasts")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            element = doc.data();
            let elementToAdd = /*html */ `
              <div class="c-tab--items">
                <div class="c-tab--items--header">
                  <p class="autor-text" data-translatable><span>${element.tituloEng}</span><span>${element.titulo}</span></p>
                  <div class="info">
                    <img class="arrow" src="./static/assets/img/arrow.svg" alt="" />
                    <span class="c-gray ml-5">${element.date}</span>
                  </div>
                </div>
                <div class="c-tab--items--content">
                  <div class="doble-desktop">
                    <div class="doble-desktop--fijo list-podcast">
                      <ul class="podcast-items">
                        <li class="podcast-item">
                          <p class="m-0" data-translatable><span><u>Text</u></span><span><u>Texto</u></span></p>
                          <p class="m-0">${element.texto}</p>
                        </li>
                        <li class="podcast-item">
                          <p class="m-0" data-translatable><span><u>Binaural recording and mixing</u></span><span><u>Paisaje sonoro</u></span></p>
                          <p class="m-0">${element.paisaje}</p>
                        </li>
                      </ul>
                      <a
                        class="c-gray"
                        href="./static/assets/pdf/${element.pdf}"
                        download
                        data-translatable
                        ><span>Download PDF</span><span>Descargar PDF</span></a
                      >
                    </div>
                    <div class="doble-desktop--item paragraphs">
                      <p class="text-3" data-translatable>
                        <span>${element.p1eng}</span>
                        <span>${element.p1esp}</span>
                      </p>
                      <div class="reproductor text-3">${element.link}</div>
                      <p class="text-3" data-translatable>
                        <span>${element.p2eng}</span>
                        <span>${element.p2esp}</span>
                      </p>
                      <p class="text-3" data-translatable>
                        <span>${element.p3eng}</span>
                        <span>${element.p3esp}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          `;
            let parent = document.querySelector("#accordion2");
            parent.insertAdjacentHTML("beforeend", elementToAdd);
            if (globalIdiom === "english") {
              this.toEnglishChange();
            } else {
              this.toSpanishChange();
            }

            var accordions = document.getElementsByClassName("c-tab--items");

            for (let i = 0; i < accordions.length; i++) {
              accordions[i].addEventListener("click", accord);
              console.log(accordions[i]);
            }
          });
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

async function openPageFromElsewhere(idiom, toState, reference) {
  if (idiom === "english") {
    toEnglishChange();
  } else {
    toSpanishChange();
  }
  globalIdiom = idiom;
  container.classList.remove("closed");
  document.querySelector("#closerSect").classList.remove("visible");
  textoIntro.classList.remove("inactive");
  triggerContainer.classList.remove("closed");
  for (let i = 0; i < contentItems.length; i++) {
    contentItems[i].classList.remove("showing");
  }
  console.log("this is the container", container);
  container.scrollTo(0, 0);
  for (let i = 0; i < skews.length; i++) {
    skews[i].scrollTo(0, 0);
  }
  let elementToChange = document.querySelector(reference);
  let visibles = document.getElementsByClassName("no-visible");
  container.classList.remove("closed");
  for (let i = 0; i < visibles.length; i++) {
    console.log(visibles[0]);
    visibles[i].classList.remove("visible");
  }
  for (let i = 0; i < closers.length; i++) {
    console.log(closers[0]);
    closers[i].classList.remove("visible");
  }
  for (let i = 0; i < skews.length; i++) {
    skews[i].classList.remove("normal");
    skews[i].style.zIndex = "0";
  }
  elementToChange.classList.add("normal");
  elementToChange.style.zIndex = "1000";
  let child = elementToChange.getElementsByClassName("no-visible")[0];
  let child2 = elementToChange.getElementsByClassName("closer")[0];
  child.classList.add("visible");
  child2.classList.add("visible");
  container.classList.add("closed");
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].classList.remove("showing");
  }
  window.history.pushState(
    "page 2",
    "Todos los faros de la costa peruana",
    toState
  );
}
