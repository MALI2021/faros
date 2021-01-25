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
    coords: "40.71427,-74.00597",
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
  let url = "https://www.google.com.sa/maps/search/" + coordinates + "?hl=en";
  window.open(url, "_blank");
}

function getData() {
  var docRef = db.collection("interpretations").doc("taKpBE7oskWHq7uGTTYu");

  docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        // console.log("Document data:", doc.data());
        let dataObtained = doc.data();
        var dataGot = Object.entries(dataObtained);
        // console.log(dataGot);
        debugger;
        for (let i = 0; i < dataObtained.length; i++) {
          debugger;
          console.log(dataObtained[i]);
        }
        dataGot.forEach((element) => {
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
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
}

function docGet() {
  db.collection("interpretations")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc);
      });
    });
}
