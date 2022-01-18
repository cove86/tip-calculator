const billInput = document.querySelector(".bill-input");
const tipButtonContainer = document.querySelector(".tip-btns");
const tipButtons = document.querySelectorAll(".tip-btn");
const numOfPeople = document.querySelector("#num-people-input");

const tipAmount = document.querySelector(".tip-amount-total");
const totalAmount = document.querySelector(".total-amount");
const resetBtn = document.querySelector(".reset-btn");

let tipPercentage;

tipButtonContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tip-btn");

  if (!clicked) return;

  tipButtons.forEach((b) => b.classList.remove("tip-btn-selected"));

  clicked.classList.add("tip-btn-selected");
  tipPercentage = clicked.value;
});

const calculate = () => {
  const total = billInput.value;
  const tip = tipPercentage;
  const people = numOfPeople.value;

  const tipPerPerson = ((total / 100) * tip) / people;
  tipAmount.textContent = `$${Math.floor(tipPerPerson * 100) / 100}`;

  const totalPer = total / people + tipPerPerson;

  totalAmount.textContent = `$${Math.round(totalPer * 100) / 100}`;

  resetBtn.classList.add("reset-btn-active");
  resetBtn.disabled = false;
};

const reset = () => {
  billInput.value = "";
  numOfPeople.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  tipButtons.forEach((b) => b.classList.remove("tip-btn-selected"));
  resetBtn.classList.remove("reset-btn-active");
  resetBtn.disabled = true;
};

billInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") calculate();
});

numOfPeople.addEventListener("keydown", function (e) {
  if (e.key === "Enter") calculate();
});

resetBtn.addEventListener("click", () => reset());
