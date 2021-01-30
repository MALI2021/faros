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

var db = firebase.firestore();

var i18n = window.domI18n({
  languages: ["es", "en"],
  selector: "[data-translatable]",
  defaultLanguage: "es",
});

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
    coords:
      "https://www.google.com/maps/place/3%C2%B024'43.0%22S+80%C2%B018'46.0%22W/@-3.411939,-80.3149719,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-3.4119444!4d-80.3127778#",
  },
  {
    number: "02",
    title: "CONTRALMIRANTE VILLAR",
    subtitle: "Puerto Zorritos, Tumbes",
    year: "1975",
    s: "03º40’52”",
    w: "80º40’59”",
    coords:
      "https://www.google.com/maps/place/3%C2%B040'52.0%22S+80%C2%B040'59.0%22W/@-3.6811057,-80.6852497,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-3.6811111!4d-80.6830556#",
  },
  {
    number: "03",
    title: "MÁNCORA",
    subtitle: "Caleta Máncora, Piura",
    year: "1975",
    s: "04º06’29”",
    w: "81º03’25”",
    coords:
      "https://www.google.com.sa/maps/place/4%C2%B006'29.0%22S+81%C2%B003'25.0%22W/@-4.1080502,-81.0591385,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-4.1080556!4d-81.0569444?hl=en#",
  },
  {
    number: "04",
    title: "CABO BLANCO",
    subtitle: "Caleta Cabo Blanco, Piura",
    year: "1978",
    s: "04º15’09”",
    w: "81º14’16”",
    coords:
      "https://www.google.com/maps/place/4%C2%B015'09.0%22S+81%C2%B014'16.0%22W/@-4.2524946,-81.2399719,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-4.2525!4d-81.2377778#",
  },
  {
    number: "05",
    title: "PUNTA TALARA",
    subtitle: "Puerto Talara, Piura",
    year: "1942",
    s: "04º34’27”",
    w: "81º17’05”",
    coords:
      "https://www.google.com.sa/maps/place/4°34'27.0%22S+81°17'05.0%22W/@-4.5741613,-81.2869163,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-4.5741667!4d-81.2847222?hl=en",
  },
  {
    number: "06",
    title: "PUNTA PARIÑAS",
    subtitle: "Punta Pariñas, Piura",
    year: "1974",
    s: "04º40’12”",
    w: "81º19’38”",
    coords:
      "https://www.google.com/maps/place/4%C2%B040'12.0%22S+81%C2%B019'38.0%22W/@-4.6699946,-81.3294163,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-4.67!4d-81.3272222#",
  },
  {
    number: "07",
    title: "PUNTA TELÉGRAFO",
    subtitle: "Puerto Paita, Piura",
    year: "1974",
    s: "05º04’26”",
    w: "81º07’36”",
    coords:
      "https://www.google.com.sa/maps/place/5%C2%B004'26.0%22S+81%C2%B007'36.0%22W/@-5.0772071,-81.1294938,814m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-5.0738889!4d-81.1266667?hl=en#",
  },
  {
    number: "08",
    title: "ISLA FOCA",
    subtitle: "Isla Foca, Piura",
    year: "1931",
    s: "05º12’36”",
    w: "81º12’19”",
    coords:
      "https://www.google.com/maps/place/5%C2%B012'36.0%22S+81%C2%B012'19.0%22W/@-5.2100853,-81.2086791,16.37z/data=!4m5!3m4!1s0x0:0x0!8m2!3d-5.21!4d-81.2052778#",
  },
  {
    number: "09",
    title: "BAYÓVAR",
    subtitle: "Puerto Bayóvar, Piura",
    year: "1977",
    s: "05º47’54”",
    w: "81º04’00”",
    coords:
      "https://www.google.com/maps/place/5%C2%B047'54.0%22S+81%C2%B004'00.0%22W/@-5.7972072,-81.0672622,813m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-5.7983333!4d-81.0666667#",
  },
  {
    number: "10",
    title: "PUNTA LA NEGRA",
    subtitle: "Punta La Negra, Piura",
    year: "1981",
    s: "07º48’52”",
    w: "59º29’79”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "11",
    title: "ISLA LOBOS DE TIERRA",
    subtitle: "Isla Lobos de Tierra, Lambayeque",
    year: "1937",
    s: "06º25’15”",
    w: "80º51’20”",
    coords:
      "https://www.google.com/maps/place/6%C2%B025'15.0%22S+80%C2%B051'20.0%22W/@-6.420828,-80.8577496,812m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-6.4208333!4d-80.8555556#",
  },
  {
    number: "12",
    title: "SAN JOSÉ",
    subtitle: "Caleta San José, Lambayeque",
    year: "1998",
    s: "06º46’09”",
    w: "79º58’13”",
    coords:
      "https://www.google.com/maps/place/6%C2%B046'09.0%22S+79%C2%B058'13.0%22W/@-6.7691614,-79.9724718,812m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-6.7691667!4d-79.9702778#",
  },
  {
    number: "13",
    title: "SANTA ROSA",
    subtitle: "Caleta Santa Rosa, Lambayeque",
    year: "1998",
    s: "06º46’09”",
    w: "79º58’13”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "14",
    title: "ISLA LOBOS DE AFUERA",
    subtitle: "Isla Lobos de Afuera, Lambayeque",
    year: "1975",
    s: "06º56’35”",
    w: "80º43’23”",
    coords:
      "https://www.google.com/maps/place/6°56'35.0%22S+80°43'23.0%22W/@-6.9430503,-80.7252443,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-6.9430556!4d-80.7230556",
  },
  {
    number: "15",
    title: "ETÉN",
    subtitle: "Puerto Etén, Lambayeque",
    year: "1975",
    s: "06º57’27”",
    w: "79º51’09”",
    coords:
      "https://www.google.com/maps/place/6%C2%B057'27.0%22S+79%C2%B051'09.0%22W/@-6.9574947,-79.854694,811m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-6.9575!4d-79.8525#",
  },
  {
    number: "16",
    title: "PUNTA PACASMAYO",
    subtitle: "Puerto Pacasmayo, La Libertad",
    year: "1935",
    s: "07º24’50”",
    w: "79º35’13”",
    coords:
      "https://www.google.com/maps/place/7%C2%B024'50.0%22S+79%C2%B035'13.0%22W/@-7.4138836,-79.5891385,773m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-7.4138889!4d-79.5869444#",
  },
  {
    number: "17",
    title: "ISLA MACABÍ",
    subtitle: "Isla Macabí, La libertad",
    year: "1930",
    s: "07º48’52”",
    w: "79º29’59”",
    coords:
      "https://www.google.com/maps/place/7%C2%B048'52.0%22S+79%C2%B029'59.0%22W/@-7.8144386,-79.5906271,32111m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-7.8144444!4d-79.4997222#",
  },
  {
    number: "18",
    title: "MORRO CARRETAS",
    subtitle: "Puerto Salaverry, La Libertad",
    year: "1874",
    s: "08º13’38”",
    w: "78º58’42”",
    coords:
      "https://www.google.com/maps/place/8%C2%B013'38.0%22S+78%C2%B058'42.0%22W/@-8.2272169,-78.9805274,771m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-8.2272222!4d-78.9783333#",
  },
  {
    number: "19",
    title: "ISLA GUAÑAPE",
    subtitle: "Isla Guañape Sur, La Libertad",
    year: "1930",
    s: "08º13’38”",
    w: "78º58’42”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "20",
    title: "ISLA FERROL DEL NORTE",
    subtitle: "Puerto Chimbote, Ancash",
    year: "1973",
    s: "09º08’22”",
    w: "78º37’15”",
    coords:
      "https://www.google.com/maps/place/9%C2%B008'22.0%22S+78%C2%B037'15.0%22W/@-9.1394391,-78.6230274,769m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-9.1394444!4d-78.6208333#",
  },
  {
    number: "21",
    title: "MORRO CALVARIO",
    subtitle: "Puerto Casma, Ancash",
    year: "1978",
    s: "09º28’02”",
    w: "09º23’29”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "22",
    title: "PUNTA CABEZA DE LAGARTO",
    subtitle: "Puerto Huarmey, Ancash",
    year: "1930",
    s: "10º06’28”",
    w: "78º11’04”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "23",
    title: "PUNTA THOMAS",
    subtitle: "Puerto Supe, Lima",
    year: "1930",
    s: "10º48’16”",
    w: "77º45’15”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "24",
    title: "PUNTA HUACHO",
    subtitle: "Puerto Huacho, Lima",
    year: "1974",
    s: "11º07’34”",
    w: "77º37’05”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "25",
    title: "SALINAS",
    subtitle: "Salinas, Lima",
    year: "1973",
    s: "11º13’06”",
    w: "77º38’12”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "26",
    title: "ISLA MAZORCA",
    subtitle: "Grupo de Huaura, Lima",
    year: "1928",
    s: "11º23’01”",
    w: "77º44’39”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "27",
    title: "ISLOTE PELADO",
    subtitle: "Grupo de Huaura, Lima",
    year: "1973",
    s: "11º26’30”",
    w: "70º50’38”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "28",
    title: "PUNTA CHANCAY",
    subtitle: "Puerto Chancay, Lima",
    year: "1973",
    s: "11º35’13”",
    w: "77º16’55”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "29",
    title: "ANCÓN",
    subtitle: "Ancón, Lima",
    year: "1986",
    s: "11º46’23”",
    w: "77º11’36”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "30",
    title: "ISLA GRANDE",
    subtitle: "Ancón, Lima",
    year: "1973",
    s: "11º46’31”",
    w: "77º15’52”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "31",
    title: "ISLOTE HUAQUILLO",
    subtitle: "Ancón, Lima",
    year: "1973",
    s: "11º46’45”",
    w: "77º11’50”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "32",
    title: "ISLA HORMIGAS DE AFUERA",
    subtitle: "Isla Hormigas de Afuera, Lima",
    year: "1973",
    s: "11º57’29”",
    w: "77º43’58”",
    coords:
      "https://www.google.com/maps/place/9%C2%B028'02.0%22S+9%C2%B023'29.0%22W/@-9.4672163,-9.482651,31882m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-9.4672222!4d-9.3913889#",
  },
  {
    number: "33",
    title: "TORRE RELOJ",
    subtitle: "Puerto Callao, Lima",
    year: "1930",
    s: "12º03’29”",
    w: "77º08’56”",
    coords:
      "https://www.google.com/maps/place/12%C2%B003'29.0%22S+77%C2%B008'56.0%22W/@-12.0580503,-77.1510776,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-12.0580556!4d-77.1488889#",
  },
  {
    number: "34",
    title: "GRAN ALMIRANTE GRAU",
    subtitle: "Isla San Lorenzo, Lima, Callao",
    year: "1973",
    s: "12º03’45”",
    w: "77º14’45”",
    coords:
      "https://www.google.com/maps/place/12%C2%B003'45.0%22S+77%C2%B014'45.0%22W/@-12.0624947,-77.248022,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-12.0625!4d-77.2458333#",
  },
  {
    number: "35",
    title: "LA PUNTA",
    subtitle: "Escuela Naval, Lima, Callao",
    year: "1973",
    s: "12º04’18”",
    w: "77º09’58”",
    coords:
      "https://www.google.com/maps/place/12%C2%B004'18.0%22S+77%C2%B009'58.0%22W/@-12.0716614,-77.1682998,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-12.0716667!4d-77.1661111#",
  },
  {
    number: "36",
    title: "LA MARINA",
    subtitle: "Bahía Miraflores, Lima",
    year: "1974",
    s: "12º07’25”",
    w: "77º02’24”",
    coords:
      "https://www.google.com/maps/place/12%C2%B007'25.0%22S+77%C2%B002'24.0%22W/@-12.1236058,-77.0421887,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-12.1236111!4d-77.04#",
  },
  {
    number: "37",
    title: "ISLA CHILCA",
    subtitle: "Puerto Pucusana, Lima",
    year: "1974",
    s: "12º28’31”",
    w: "76º48’06”",
    coords:
      "https://www.google.com/maps/place/12%C2%B028'31.0%22S+76%C2%B048'06.0%22W/@-12.4752726,-76.8038554,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-12.4752778!4d-76.8016667#",
  },
  {
    number: "38",
    title: "ISLA ASIA",
    subtitle: "Isla Asia, Lima",
    year: "2008",
    s: "12º47’41”",
    w: "76º37’25”",
    coords:
      "https://www.google.com/maps/place/12%C2%B047'41.0%22S+76%C2%B037'25.0%22W/@-12.7947171,-76.6411206,14z/data=!4m5!3m4!1s0x0:0x0!8m2!3d-12.7947222!4d-76.6236111#",
  },
  {
    number: "39",
    title: "CERRO AZUL",
    subtitle: "Cañete, Lima",
    year: "1974",
    s: "13º01’48”",
    w: "76º29’22”",
    coords:
      "https://www.google.com/maps/place/13%C2%B001'48.0%22S+76%C2%B029'22.0%22W/@-13.0299948,-76.4916331,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-13.03!4d-76.4894444#",
  },
  {
    number: "40",
    title: "ISLA CHINCHA DEL CENTRO",
    subtitle: "Isla Chincha, Ica",
    year: "1928",
    s: "13º38’26”",
    w: "76º24’07”",
    coords:
      "https://www.google.com/maps/place/13%C2%B038'26.0%22S+76%C2%B024'07.0%22W/@-13.6405504,-76.4041331,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-13.6405556!4d-76.4019444#",
  },
  {
    number: "41",
    title: "ISLA BLANCA",
    subtitle: "Puerto Pisco, Ica",
    year: "-",
    s: "13º44’09”",
    w: "76º18’43”",
    coords:
      "https://www.google.com/maps/place/13%C2%B044'09.0%22S+76%C2%B018'43.0%22W/@-13.7358412,-76.4520239,11z/data=!4m5!3m4!1s0x0:0x0!8m2!3d-13.7358333!4d-76.3119444#",
  },
  {
    number: "42",
    title: "ISLA SAN GALLÁN",
    subtitle: "Isla San Galián, Ica",
    year: "1981",
    s: "13º50’45”",
    w: "76º27’47”",
    coords:
      "https://www.google.com/maps/place/13%C2%B050'45.0%22S+76%C2%B027'47.0%22W/@-13.8458283,-76.4805651,14z/data=!4m5!3m4!1s0x0:0x0!8m2!3d-13.8458333!4d-76.4630556#",
  },
  {
    number: "43",
    title: "CERRO CARRETAS",
    subtitle: "Bahía Independencia, Ica",
    year: "1978",
    s: "14º11’40”",
    w: "76º16’18”",
    coords:
      "https://www.google.com/maps/place/14%C2%B011'40.0%22S+76%C2%B016'18.0%22W/@-14.1944392,-76.2738554,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-14.1944444!4d-76.2716667#",
  },
  {
    number: "44",
    title: "INFIERNILLOS",
    subtitle: "Infiernillos, Ica",
    year: "1961",
    s: "14º40’11”",
    w: "75º53’08”",
    coords:
      "https://www.google.com/maps/place/14%C2%B040'11.0%22S+75%C2%B053'08.0%22W/@-14.669717,-75.8877443,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-14.6697222!4d-75.8855556#",
  },
  {
    number: "45",
    title: "PUNTA SAN NICOLÁS",
    subtitle: "Puerto San Nicolás, Ica",
    year: "1959",
    s: "15º15’22”",
    w: "75º15’23”",
    coords:
      "https://www.google.com/maps/place/15%C2%B015'22.0%22S+75%C2%B015'23.0%22W/@-15.2561059,-75.2585776,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-15.2561111!4d-75.2563889#",
  },
  {
    number: "46",
    title: "PUNTA SAN JUAN",
    subtitle: "Puerto San Juan de Marcona, Ica",
    year: "1935",
    s: "15º21’40”",
    w: "75º10’50”",
    coords:
      "https://www.google.com/maps/place/15%C2%B021'40.0%22S+75%C2%B010'50.0%22W/@-15.3611059,-75.1827443,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-15.3611111!4d-75.1805556#",
  },
  {
    number: "47",
    title: "PUNTA LOMAS",
    subtitle: "Caleta Lomas, Arequipa",
    year: "1935",
    s: "15º34’17”",
    w: "74º51’10”",
    coords:
      "https://www.google.com/maps/place/15%C2%B034'17.0%22S+74%C2%B051'10.0%22W/@-15.5713837,-74.8549665,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-15.5713889!4d-74.8527778#",
  },
  {
    number: "48",
    title: "CHALA",
    subtitle: "Caleta Chala, Arequipa",
    year: "1974",
    s: "15º52’27”",
    w: "74º14’16”",
    coords:
      "https://www.google.com/maps/place/15%C2%B052'27.0%22S+74%C2%B014'16.0%22W/@-15.8741615,-74.2399665,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-15.8741667!4d-74.2377778#",
  },
  {
    number: "49",
    title: "PUNTA ÁTICO",
    subtitle: "Caleta Ático, Arequipa",
    year: "1979",
    s: "16º24’36”",
    w: "74º13’30”",
    coords:
      "https://www.google.com/maps/place/16%C2%B014'13.0%22S+73%C2%B041'55.0%22W/@-16.2369392,-73.7007998,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-16.2369444!4d-73.6986111#",
  },
  {
    number: "50",
    title: "LA PLANCHADA",
    subtitle: "Caleta La Plancha, Arequipa",
    year: "1976",
    s: "16º24’36”",
    w: "74º13’30”",
    coords:
      "https://www.google.com/maps/place/16%C2%B024'36.0%22S+73%C2%B013'30.0%22W/@-16.4099948,-73.2271887,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-16.41!4d-73.225#",
  },
  {
    number: "51",
    title: "PUNTA QUILCA",
    subtitle: "Caleta Quilca, Arequipa",
    year: "1936",
    s: "16º42’59”",
    w: "72º26’10”",
    coords:
      "https://www.google.com/maps/place/16%C2%B042'59.0%22S+72%C2%B026'10.0%22W/@-16.7163838,-72.4382998,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-16.7163889!4d-72.4361111#",
  },
  {
    number: "52",
    title: "PUNTA ISLAY",
    subtitle: "Matarani-Islay, Arequipa",
    year: "1930",
    s: "13º38’26”",
    w: "72º24’07”",
    coords:
      "https://www.google.com/maps/place/13%C2%B038'26.0%22S+76%C2%B024'07.0%22W/@-13.6405504,-76.4041331,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-13.6405556!4d-76.4019444#",
  },
  {
    number: "53",
    title: "PUNTA COLES",
    subtitle: "Puerto Ilo, Moquegua",
    year: "1958",
    s: "17º42’26”",
    w: "71º22’51”",
    coords:
      "https://www.google.com/maps/place/17%C2%B042'26.0%22S+71%C2%B022'51.0%22W/@-17.7072171,-71.383022,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-17.7072222!4d-71.3808333#",
  },
  {
    number: "54",
    title: "PUNTA SAMA",
    subtitle: "Puerto Grau, Tacna",
    year: "1978",
    s: "18º00’20”",
    w: "70º53’16”",
    coords:
      "https://www.google.com/maps/place/18%C2%B000'20.0%22S+70%C2%B053'16.0%22W/@-18.0055505,-70.8899665,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.0055556!4d-70.8877778#",
  },
  {
    number: "55",
    title: "BOCA DEL RÍO",
    subtitle: "Río Sama, Tacna",
    year: "1982",
    s: "18º09’26”",
    w: "70º40’12”",
    coords:
      "https://www.google.com/maps/place/18%C2%B009'26.0%22S+70%C2%B040'12.0%22W/@-18.1572171,-70.6721887,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.1572222!4d-70.67#",
  },
  {
    number: "56",
    title: "LOS PALOS",
    subtitle: "Tacna",
    year: "1967",
    s: "18º17’53”",
    w: "70º25’41”",
    coords:
      "https://www.google.com/maps/place/18%C2%B017'53.0%22S+70%C2%B025'41.0%22W/@-18.2980505,-70.4302443,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.2980556!4d-70.4280556#",
  },
];

window.onload = function () {
  langChanger.addEventListener("click", toEnglishChange);
  langChanger2.addEventListener("click", toSpanishChange);

  docGet();

  places.forEach((element) => {
    let addPlace = /*html */ `
        <div class="list-faros--item">
          <div class="list-faros--item--title">
            <div>
              <p class="m-0"><span class="c-gray">${element.number}</span> ${element.title}</p>
              <p class="m-0">${element.subtitle}</p>
            </div>
            <span>${element.year}</span>
          </div>
          <div class="list-faros--item--info">
            <span class="c-gray">${element.s} S - ${element.w} W</span>
            <img src="./static/assets/img/point.svg" class="coords-launcher" data-coords="${element.coords}" alt="" />
          </div>
        </div>
    `;
    let parent = document.querySelector("#placesList");
    parent.insertAdjacentHTML("beforeend", addPlace);
  });

  var maptrigger = document.getElementsByClassName("coords-launcher");

  for (let i = 0; i < maptrigger.length; i++) {
    maptrigger[i].addEventListener("click", mapLaunch);
  }

  periods.forEach((element) => {
    let toAdd = /*html*/ `
          <div class="box-container-items bb-dkt-3">
          <div class="box-2 cat1 active">
            <div class="grid-box-text">
              <p class="pt-0">Periodo ${element.period} segundos</p>
              <p>${element.destellos} destellos</p>`;

    for (let i = 0; i < element.destellos; i++) {
      toAdd = toAdd + `<p class="m-0">${element.lines[i]}</p>`;
    }

    toAdd =
      toAdd +
      `</div>
          </div>
          <div class="box-2 cat2 upper titilating" data-delay="${element.delay}" data-show="${element.show}" data-hide="${element.hide}" data-times="${element.time}">
            <div class="box-1--item">
              <img class="w-80" src="${element.image}" alt="" />
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
        <div class="box-1 cat1 active">
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
        <div class="box-1 cat2 percent" data-percentage="${element.percentage}">
          <div class="box-1--graphic">
            <div class="graphic-black"></div>
          </div>
        </div>
      </div>
    `;
    let parent = document.querySelector("#potenceItems");
    parent.insertAdjacentHTML("beforeend", addPotence);
  });

  alturas.forEach((element) => {
    let addAltura = /* html */ `
    <div class="box-container-items bb-dkt-3">
      <div class="box-1 cat1 active">
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
      <div class="box-1 cat2">
        <div class="box-1--item">
          <span class="${element.clase1b}">Muy lento</span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase2b}">Lento</span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase3b}">Moderado</span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase4b}">Rápido</span>
        </div>
        <div class="box-1--item">
          <span class="${element.clase5b}">Muy rápido</span>
        </div>
      </div> 
    </div> 
    `;
    let parent = document.querySelector("#alturaboxes");
    parent.insertAdjacentHTML("beforeend", addAltura);
  });

  ranges.forEach((element) => {
    let addRange = /* html */ `
    <div class="box-container-items bb-dkt-3">
      <div class="box-1 cat1 moving active" data-param1="${element.param1}" data-param2="${element.param2}">
        <div class="box-1--item" style="overflow: hidden;">
          <span class="upper">Alcance nominal<br /> ${element.millas1} millas</span>
        </div>
        <div class="box-1--item" style="overflow: hidden;">
          <span class="downer">Alcance geográfico<br /> ${element.millas2} millas</span>
        </div>
      </div>
      <div class="box-1 cat2 double">
        <div class="box-1--item"></div>
        <div class="box-1--item"></div>
        <div class="box-1--item"></div>
        <div class="box-1--item"></div>
        <div class="box-1--item"></div>
        <img class="graphic-tono" src="${element.imagen}" alt="" />
        <img class="graphic-tono" src="${element.imagen}" alt="" />
      </div>
    </div>
    `;
    let parent = document.querySelector("#rangeBoxes");
    parent.insertAdjacentHTML("beforeend", addRange);
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

  for (let i = 0; i < animatedBoxes.length; i++) {
    animatedBoxes[i].addEventListener("click", changeBox);
    // console.log(animatedBoxes[i]);
  }

  for (let i = 0; i < flippers.length; i++) {
    flippers[i].addEventListener("click", flipbox);
    // console.log(animatedBoxes[i]);
  }

  document.getElementById("closerSect").addEventListener("click", hideTabs);
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toEnglishChange() {
  langChanger.classList.remove("active");
  langChanger2.classList.add("active");
  i18n.changeLanguage("es");
}

function toSpanishChange() {
  langChanger2.classList.remove("active");
  langChanger.classList.add("active");
  i18n.changeLanguage("en");
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
}

async function changePosition() {
  container.scrollTo(0, 0);
  for (let i = 0; i < skews.length; i++) {
    skews[i].scrollTo(0, 0);
  }
  let element = event.target;
  let modifier = element.getAttribute("rel");
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
}

async function openPage() {
  container.classList.remove("closed");
  console.log("this is the container", container);
  container.scrollTo(0, 0);
  for (let i = 0; i < skews.length; i++) {
    skews[i].scrollTo(0, 0);
  }
  let element = event.target;
  let modifier = element.getAttribute("rel");
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

async function changeBox() {
  let element = event.target;
  let parent = element.parentNode;
  if (element.classList.contains("cat1")) {
    let sibling = parent.getElementsByClassName("cat2")[0];
    if (element.classList.contains("moving")) {
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
      element.classList.remove("active");
      sibling.classList.add("active");
    }
    if (sibling.classList.contains("percent")) {
      let up = sibling.dataset.percentage;
      let firstSon = sibling.getElementsByClassName("box-1--graphic")[0];
      let secondSon = firstSon.getElementsByClassName("graphic-black")[0];
      await sleep(100);
      secondSon.classList.add("height" + up + "");
    } else if (sibling.classList.contains("titilating")) {
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
    }
  } else {
    let sibling = parent.getElementsByClassName("cat1")[0];
    sibling.classList.add("active");
    element.classList.remove("active");
    if (element.classList.contains("percent")) {
      let up = element.dataset.percentage;
      let firstSon = element.getElementsByClassName("box-1--graphic")[0];
      let secondSon = firstSon.getElementsByClassName("graphic-black")[0];
      let classToUse = "height" + up + "";
      await sleep(100);
      secondSon.classList.remove(classToUse);
    }
    if (element.classList.contains("titilating")) {
      let son = sibling.getElementsByClassName("box-1--item")[0];
      son.classList.remove("show");
    }

    if (element.classList.contains("double")) {
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
    }
  }
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
  db.collection("interpretations")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        element = doc.data();
        let elementToAdd = /*html */ `
              <div class="c-tab--items active">
                <div class="c-tab--items--header">
                  <p>${element.autor}</p>
                  <div class="info">
                    <img class="arrow" src="./static/assets/img/arrow.svg" alt="" />
                    <span class="c-gray ml-5">${element.date}</span>
                  </div>
                </div>
                <div class="c-tab--items--content">
                  <div class="doble-desktop">
                    <div class="doble-desktop--fijo">
                      <div class="pt-20">
                        <p class="m-0" data-translatable><span>Vocal interpretation</span><span>Interpretación
                            vocal</span></p>
                        <p class="m-0">${element.autor}</p>
                      </div>
                      <div class="pt-20">
                        <p class="m-0" data-translatable><span>Binaural recording and mixing</span><span>Grabación y
                            mezcla binaural</span></p>
                        <p class="m-0">${element.mezcla}</p>
                      </div>
                      <div class="pt-20 pb-dsk-20">
                        <p class="m-0" data-translatable><span>Direction</span><span>Dirección</span></p>
                        <p class="m-0">${element.composicion}</p>
                      </div>
                      <div class="reproductor">${element.link}</div>
                    </div>
                    <div class="doble-desktop--item">
                      <p class="text-3 pt-20" data-translatable>
                        <span>${element.p1eng}</span>
                        <span>${element.p1esp}</span>
                      </p>
                      <p class="text-3 pt-20" data-translatable>
                        <span>${element.p2eng}</span>
                        <span>${element.p2esp}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          `;
        console.log(elementToAdd);
        let parent = document.querySelector("#accordion1");
        parent.insertAdjacentHTML("beforeend", elementToAdd);
        this.toSpanishChange();
      });
    });
}
