const questions = document.getElementsByTagName("h2");
const plus = document.getElementsByClassName("plus");
const answers = document.getElementsByClassName("answer");

for (let i = 0; i < plus.length; i++) {
  const element = answers[i];
  if (i > 0) {
    element.style.display = "none";
    element.style.height = null;
    plus[i].src = './images/icon-plus.svg';
  }else{
    element.style.display = "block";
    element.style.height = element.scrollHeight + "px";
    plus[i].src = './images/icon-minus.svg';
  }
  const on = function () {
    if (element.style.height) {
      element.style.display = "none";
      element.style.height = null;
      plus[i].src = './images/icon-plus.svg';
    } else {
      element.style.display = "block";
      element.style.height = element.scrollHeight + "px";
      plus[i].src = './images/icon-minus.svg';
    }
  };

  plus[i].onclick = on;
  questions[i].onclick = on;
}