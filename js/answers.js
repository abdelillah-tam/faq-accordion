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

/*var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var nextToContent = content.nextElementSibling;
    console.log(nextToContent);
    if (
      content.style.display === "block" &&
      nextToContent.style.display === "block"
    ) {
      content.style.display = "none";
      nextToContent.style.display = "none";
      content.style.maxHeight = null;
      nextToContent.style.maxHeight = null;
    } else {
      content.style.display = "block";
      nextToContent.style.display = "block";
      content.style.maxHeight = content.scrollHeight + "px";
      nextToContent.style.maxHeight = nextToContent.scrollHeight + "px";
    }
  });
}*/
