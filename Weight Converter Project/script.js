console.log("Weight Converter");

const pound = document.querySelector(".weight");
const weight_kg = document.querySelector(".kg");

const alert_msg = document.querySelector(".alert");

let errorTime;
let resultTime;

const weight_converter = () => {
  if (pound.value <= 0 || isNaN(pound.value)) {
    alert_msg.innerText = "Please enter valid number!.";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      alert_msg.innerText = "";
      pound.value = "";
    }, 2000);
  } else {
    weight_kg.innerText = `${(pound.value * 0.454).toFixed(2)}kg`;
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      weight_kg.innerText = "";
      pound.value = "";
    }, 10000);
  }
};

pound.addEventListener("input", weight_converter);
