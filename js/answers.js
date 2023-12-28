const questions = document.getElementsByTagName("h2");
const plus = document.getElementsByClassName("plus");
const answers = document.getElementsByClassName("answer");

const img = document.getElementById("background");

function changeImgBackground() {
  const screenWidth = window.screen.width;
  if (screenWidth > 375) {
    img.src = "./images/background-pattern-desktop.svg";
  } else {
    img.src = "./images/background-pattern-mobile.svg";
  }
}
changeImgBackground();
window.onresize = changeImgBackground;

for (let i = 0; i < plus.length; i++) {
  const element = answers[i];
  if (i > 0) {
    element.style.display = "none";
    element.style.height = null;
    plus[i].src = "./images/icon-plus.svg";
  } else {
    element.style.display = "block";
    element.style.height = element.scrollHeight + "px";
    plus[i].src = "./images/icon-minus.svg";
  }
  const on = function () {
    if (element.style.height) {
      element.style.display = "none";
      element.style.height = null;
      plus[i].src = "./images/icon-plus.svg";
    } else {
      element.style.display = "block";
      element.style.height = element.scrollHeight + "px";
      plus[i].src = "./images/icon-minus.svg";
    }
  };

  plus[i].onclick = on;
  plus[i].addEventListener("keypress", (event) => {
    if(event.key === 'enter'){
      on();
    }
  });
  questions[i].onclick = on;
}
