const recipeBtn = document.querySelectorAll(".recipe-btn");
const closeBtn = document.querySelectorAll(".close");
const popUp = document.querySelectorAll(".popup-view");
const form = document.querySelector("form");
const formInput = document.querySelector(".input");
const APP_ID = "196768a6";
const APP_key = "59fcbf111edd78f275847579232877cb";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formInput.value);
  fetchAPI();
});

const fetchAPI = async () => {
  const baseURL = `https://api.edamam.com/search?q=biryani&app_id=${APP_ID}&app_key=${APP_key}`;

  const response = await fetch(baseURL);
  console.log(response);
  const data = await response.json();
  console.log(data);
};

var popShow = function (element) {
  popUp[element].classList.toggle("active");
};

recipeBtn.forEach((el, i) => {
  el.addEventListener("click", () => {
    console.log("hello");
    popShow(i);
  });
});

closeBtn.forEach((el, i) => {
  el.addEventListener("click", () => {
    console.log("hello");
    popShow(i);
  });
});
