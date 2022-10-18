var elForm = document.querySelector("#form");
var elInput = document.querySelector("#input");
var elSelect = document.querySelector("#select");
var elHeading = document.querySelector("#heading");
var piyodaKM = 3.6;
var velosipedKM = 20.1;
var mashinaKM = 70;
var samolyotKM = 800;
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elSelect.value === "piyoda") {
    elHeading.textContent = `vaqt ${(elInput.value / piyodaKM).toFixed(2)}`;
  } else if (elSelect.value === "velosiped") {
    elHeading.textContent = `vaqt ${(elInput.value / velosipedKM).toFixed(2)}`;
  } else if (elSelect.value === "mashina") {
    elHeading.textContent = `vaqt ${(elInput.value / mashinaKM).toFixed(2)}`;
  } else if (elSelect.value === "samolyot") {
    elHeading.textContent = `vaqt ${(elInput.value / samolyotKM).toFixed(2)}`;
  }
});