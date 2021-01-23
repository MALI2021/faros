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

window.onload = function () {
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", changePosition);
    // console.log(triggers[i]);
  }

  for (let i = 0; i < closers.length; i++) {
    closers[i].addEventListener("click", closePage);
    // console.log(triggers[i]);
  }

  for (let i = 0; i < tabTrigger.length; i++) {
    tabTrigger[i].addEventListener("click", showTabs);
  }

  for (let i = 0; i < animatedBoxes.length; i++) {
    animatedBoxes[i].addEventListener("click", changeBox);
    // console.log(animatedBoxes[i]);
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function closePage_() {
  //   elementParent.classList.remove("normal");
  //   await sleep(400);
  for (let i = 0; i < triggers.length; i++) {
    console.log(i);
    triggers[i].classList.remove("normal");
    for (let i = 0; i < visibles.length; i++) {
      visibles[i].classList.remove("visible");
      closers[i].classList.remove("visible");
      // console.log(triggers[i]);
    }
    container.classList.remove("closed");
    triggers[i].style.zIndex = "0";
    // await sleep(200);
    // console.log(triggers[i]);
  }
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
}

async function changePosition() {
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
}

function showTabs() {
  let element = event.target;
  let targ = element.getAttribute("rel");
  let targetted = document.querySelector(targ);
  triggerContainer.classList.add("closed");
  textoIntro.classList.add("inactive");
  targetted.classList.add("showing");
}

async function changeBox() {
  let element = event.target;
  let parent = element.parentNode;
  element.classList.remove("active");
  if (element.classList.contains("cat1")) {
    let sibling = parent.getElementsByClassName("cat2")[0];
    sibling.classList.add("active");
    if (sibling.classList.contains("percent")) {
      let up = sibling.dataset.percentage;
      let firstSon = sibling.getElementsByClassName("box-1--graphic")[0];
      let secondSon = firstSon.getElementsByClassName("graphic-black")[0];
      await sleep(100);
      secondSon.classList.add("height" + up + "");
    }
  } else {
    let sibling = parent.getElementsByClassName("cat1")[0];
    sibling.classList.add("active");
  }
}
