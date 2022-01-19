//Element Selector Variables

const billInput = document.querySelector(".bill-input");
const tipLabel = document.querySelector(".tip-label");
const tipButtonContainer = document.querySelector(".tip-btns");
const tipButtons = document.querySelectorAll(".tip-btn");
const numOfPeople = document.querySelector("#num-people-input");
const tipAmount = document.querySelector(".tip-amount-total");
const totalAmount = document.querySelector(".total-amount");
const calculateBtn = document.querySelector(".calculate-btn");
const resetBtn = document.querySelector(".reset-btn");
let tipPercentage;

// Add class to tip button, button value to tipPercentage variable
tipButtonContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tip-btn");

  if (!clicked) return;

  tipButtons.forEach((b) => b.classList.remove("tip-btn-selected"));

  clicked.classList.add("tip-btn-selected");
  tipPercentage = clicked.value;
});

// Function to calculate the amounts
const calculate = () => {
  const total = billInput.value;
  const tip = tipPercentage;
  const people = numOfPeople.value;

  if (!tip) {
    // alert("Please select tip");
    tipLabel.classList.add("error");
    return;
  }

  const tipPerPerson = ((total / 100) * tip) / people;
  const totalPer = total / people + tipPerPerson;

  if (isNaN(tipPerPerson) || isNaN(totalPer)) {
    alert("Please check entered information");
    return;
  }

  tipAmount.textContent = `$${Math.floor((tipPerPerson * 100) / 100).toFixed(
    2
  )}`;
  totalAmount.textContent = `$${Math.round(totalPer * 100) / 100}`;

  resetBtn.classList.add("reset-btn-active");
  resetBtn.disabled = false;
};

// Function to change all values back to original state
const reset = () => {
  billInput.value = "";
  numOfPeople.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  tipButtons.forEach((b) => b.classList.remove("tip-btn-selected"));
  resetBtn.classList.remove("reset-btn-active");
  resetBtn.disabled = true;
};

// Add calculate & reset functions to buttons
calculateBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);
