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
    period: "1",
    destellos: 1,
    lines: ["L. 05 -- Ecl. 1.5", "L. 05 -- Ecl. 1.5", "L. 05 -- Ecl. 10.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
  },
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
    period: "1",
    destellos: 1,
    lines: ["L. 05 -- Ecl. 1.5", "L. 05 -- Ecl. 1.5", "L. 05 -- Ecl. 10.5"],
    delay: "8000",
    show: "500",
    hide: "1500",
    time: 1,
    image: "./static/assets/img/triangulo-negro.svg",
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
];

var ranges = [
  {
    param1: "semi-alto-medio",
    param2: "alto-medio",
    millas1: 13,
    millas2: 9,
    imagen: "./static/assets/img/triangulo-rojo.svg",
  },
];

window.onload = function () {
  langChanger.addEventListener("click", toEnglishChange);
  langChanger2.addEventListener("click", toSpanishChange);

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
  container.scrollTo(0, 0);
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
