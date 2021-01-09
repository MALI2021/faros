var triggers = document.getElementsByClassName("page");
var container = document.getElementById("container");
var closers = document.getElementsByClassName("closer");

window.onload = async function () {
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

async function closePage() {
  //   elementParent.classList.remove("normal");
  //   await sleep(400);
  for (let i = 0; i < triggers.length; i++) {
    console.log(i);
    triggers[i].classList.remove("normal");
    container.classList.remove("closed");
    triggers[i].style.zIndex = "0";
    await 250;
    // console.log(triggers[i]);
  }
}

async function changePosition() {
  let element = event.target;
  element.style.zIndex = "1000";
  element.classList.add("normal");
  await sleep(800);
  let child = element.getElementsByClassName("no-visible")[0];
  child.classList.add("visible");
  container.classList.add("closed");
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].classList.add("normal");
    // console.log(triggers[i]);
  }
}
