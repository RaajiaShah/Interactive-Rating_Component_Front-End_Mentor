let btn = document.querySelector("#btn");
btn.onclick = function () {
  toggleVisibility(container);
  toggleVisibility(rescard);
};

let rating = document.querySelector("#rating");
let rates = document.querySelectorAll(".rating-nums");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    setRating(rating, rate.innerHTML);
  });
});

function toggleVisibility(element) {
  element.classList.toggle("hide");
}

function setRating(element, value) {
  element.innerHTML = value;
}
