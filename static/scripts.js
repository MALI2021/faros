var triggers = document.getElementsByClassName("triggerFunction");
var skews = document.getElementsByClassName("page");
var container = document.getElementById("wrapper");
var closers = document.getElementsByClassName("closer");
var visibles = document.getElementsByClassName("no-visible");

window.onload = function () {
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", changePosition);
    // console.log(triggers[i]);
  }

  for (let i = 0; i < closers.length; i++) {
    closers[i].addEventListener("click", closePage);
    // console.log(triggers[i]);
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
  element.classList.remove("visible");
  siblin.classList.remove("visible");
  parent.parentNode.classList.remove("normal");
  parent.parentNode.style.zIndex = 0;
}

// async function changePosition_() {
//   let element = event.target;
//   element.style.zIndex = "1000";
//   element.classList.add("normal");
//   await sleep(800);
//   let child = element.getElementsByClassName("no-visible")[0];
//   let child2 = element.getElementsByClassName("closer")[0];
//   child.classList.add("visible");
//   child2.classList.add("visible");
//   container.classList.add("closed");
//   for (let i = 0; i < triggers.length; i++) {
//     triggers[i].classList.add("normal");
//     // console.log(triggers[i]);
//   }
// }

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
