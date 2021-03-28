const form = document.querySelector("form");
const formInput = document.querySelector(".input");
const container = document.querySelector(".container");
const APP_ID = "196768a6";
const APP_key = "59fcbf111edd78f275847579232877cb";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formInput.value);
  fetchAPI();
});

const fetchAPI = async () => {
  const baseURL = `https://api.edamam.com/search?q=lasagna&app_id=${APP_ID}&app_key=${APP_key}&to=5`;

  const response = await fetch(baseURL);
  console.log(response);
  const data = await response.json();
  console.log(data.hits);
  generateFn(data.hits);
};

const generateFn = (results) => {
  let html = "";
  results.map((result) => {
    html += `<div class="card">
    <div class="cards">
    <img src="./images/Biryani.jpg" alt="" class="recipe-img" />
    <div class="recipe-info">
    <h2 class="recipe-title">Biryani</h2>
    <div class="line"></div>
    <button class="recipe-btn">Read More</button>
    </div>
    </div>
    <div class="popup-view">
    <div class="popup-card">
    <a href="#"><i class="close fas fa-times"></i></a>
    <div class="food-img">
    <img src="./images/Biryani.jpg" alt="" />
    </div>
    <div class="food-info">
    <h2 class="food-name">Biryani</h2>
    <div class="line_br"></div>
    <ul class="food-details">
    <li class="detail">
    <i class="icon far fa-2x fa-clock"></i>
    <h4 class="time">20</h4>
    <p class="mean-text">minutes</p>
    </li>
    <li class="detail">
    <i class="fas icon fa-2x fa-fire-alt"></i>
    <h4 class="time">20</h4>
    <p class="mean-text">calories</p>
    </li>
    <li class="detail">
    <i class="fas fa-2x icon fa-weight"></i>
    
    <p class="mean-text a">high fat</p>
    </li>
    </ul>
    
    <button class="visit"><a href="#">Visit Site</a></button>
    </div>
    </div>
    </div>
    </div>`;
  });
  container.innerHTML = html;
  const closeBtn = document.querySelectorAll(".close");
  const popUp = document.querySelectorAll(".popup-view");
  const recipeBtn = document.querySelectorAll(".recipe-btn");
  console.log(recipeBtn);
  recipeBtn.forEach((el, i) => {
    el.addEventListener("click", () => {
      popShow(i);
    });

    var popShow = function (element) {
      popUp[element].classList.toggle("active");
    };
    closeBtn.forEach((el, i) => {
      el.addEventListener("click", () => {
        console.log("hello");
        popShow(i);
      });
    });
  });
};
