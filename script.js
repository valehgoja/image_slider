let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let img1 = document.querySelector(".img1");
btn1.addEventListener("click", function () {
  turnOff();
  img1.style.marginLeft = "0";
  btn1.className = "active";
});

btn2.addEventListener("click", function () {
  turnOff();
  img1.style.marginLeft = "-20%";
  btn2.className = "active";
});

btn3.addEventListener("click", function () {
  turnOff();
  img1.style.marginLeft = "-40%";
  btn3.className = "active";
});

btn4.addEventListener("click", function () {
  turnOff();
  img1.style.marginLeft = "-60%";
  btn4.className = "active";
});
btn5.addEventListener("click", function () {
  turnOff();
  img1.style.marginLeft = "-80%";
  btn5.className = "active";
});
function turnOff() {
  btn1.className = "";
  btn2.className = "";
  btn3.className = "";
  btn4.className = "";
  btn5.className = "";
}
