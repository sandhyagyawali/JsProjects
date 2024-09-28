const bill_amount = document.querySelector(".amount");
const tip_amount = document.querySelector(".tip");
const total_span = document.querySelector(".total");
const btn = document.querySelector("button");

const calculate = () => {
  const bill_value = bill_amount.value;
  const tip_value = tip_amount.value;
  const total = bill_value * (1 + tip_value / 100);
  console.log("total:", total);
  total_span.innerText = total.toFixed(2);
};
btn.addEventListener("click", calculate);
