const recipeBtn = document.querySelectorAll(".recipe-btn");
const closeBtn = document.querySelectorAll(".close");
const popUp = document.querySelectorAll(".popup-view");

var popShow = function (element) {
  popUp[element].classList;
};

recipeBtn.forEach((el, i) => {
  el.addEventListener("click", () => {
    console.log("hello");
    popShow(i);
  });
});
