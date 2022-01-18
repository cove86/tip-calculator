const billInput = document.querySelector(".bill-input");
const tipButtonContainer = document.querySelector(".tip-btns");
const tipButtons = document.querySelectorAll(".tip-btn");
const numOfPeople = document.querySelector("#num-people-input");

let tipAmount = document.querySelector(".tip-amount-total");
let totalAmount = document.querySelector(".total-amount");

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
  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;

  const totalPer = total / people + tip;
  totalAmount.textContent = `$${totalPer.toFixed(2)}`;
};

billInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") calculate();
});
