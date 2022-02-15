//Element Selector Variables

const billInput = document.querySelector(".bill-input");
const billLabelErr = document.querySelector(".bill-label-error");
const tipLabelErr = document.querySelector(".tip-label-error");
const peopleLabelErr = document.querySelector(".num-label-error");
const tipButtonContainer = document.querySelector(".tip-btns");
const tipButtons = document.querySelectorAll(".tip-btn");
const numOfPeople = document.querySelector("#num-people-input");
const tipAmount = document.querySelector(".tip-amount-total");
const totalAmount = document.querySelector(".total-amount");
const calculateBtn = document.querySelector(".calculate-btn");
const resetBtn = document.querySelector(".reset-btn");
let tipPercentage;

const customTip = document.querySelector(".custom-btn");

// Change custom button to input field
customTip.addEventListener("click", function (e) {
  customTip.outerHTML = `
  <input type="text" id="custom" placeholder="0" autofocus/>
  `;
});

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
  const tip = tipPercentage
    ? tipPercentage
    : document.getElementById("custom").value;
  const people = numOfPeople.value;

  billLabelErr.textContent = "";
  tipLabelErr.textContent = "";
  peopleLabelErr.textContent = "";

  if (isNaN(total) || total === 0 || total === "") {
    billLabelErr.textContent = "Must be number > 0";
    billLabelErr.classList.add("error");
    return;
  }

  if (!tip) {
    // alert("Please select tip");
    tipLabelErr.textContent = "Please Select Tip";
    tipLabelErr.classList.add("error");
    return;
  }

  if (isNaN(people) || people === 0 || people === "") {
    peopleLabelErr.textContent = "Must be number > 0";
    peopleLabelErr.classList.add("error");
    return;
  }

  const tipPerPerson = ((total / 100) * tip) / people;
  console.log(tipPerPerson);
  const totalPer = total / people + tipPerPerson;
  console.log(totalPer);

  if (isNaN(tipPerPerson) || isNaN(totalPer)) {
    alert("Please check entered information");
    return;
  }

  tipAmount.textContent = `$${((tipPerPerson * 100) / 100).toFixed(2)}`;
  totalAmount.textContent = `$${((totalPer * 100) / 100).toFixed(2)}`;

  resetBtn.classList.add("reset-btn-active");
  resetBtn.disabled = false;
};

// Function to change all values back to original state
const reset = () => {
  location.reload();
};

// Add calculate & reset functions to buttons
calculateBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);
