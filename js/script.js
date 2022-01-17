const billInput = document.querySelector(".bill-input");
const tipButtonContainer = document.querySelector(".tip-btns");
const tipButtons = document.querySelectorAll(".tip-btn");
const numOfPeople = document.querySelector("#num-people-input");
const tipAmount = document.querySelector(".tip-amount-total");
const totalAmount = document.querySelector(".total-amount");

tipButtonContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tip-btn");

  if (!clicked) return;

  tipButtons.forEach((b) => b.classList.remove("tip-btn-selected"));

  clicked.classList.add("tip-btn-selected");
});

const calculate = () => {
  console.log(billInput.value);
  console.log(numOfPeople.value);
  const selected = tipButtons.forEach((b) =>
    b.classList.contains(".tip-btn-selected")
  );
  console.log(selected);
};

billInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") calculate();
});
