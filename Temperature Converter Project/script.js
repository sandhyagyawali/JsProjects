const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function computeTemp(event) {
  const current_value = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      fahrenheit.value = (current_value * 1.8 + 32).toFixed(2);
      kelvin.value = (current_value + 273.15).toFixed(2);
      break;

    case "fahrenheit":
      celsius.value = ((current_value - 32) / 1.8).toFixed(2);
      kelvin.value = ((current_value - 32) / 1.8 + 273.15).toFixed(2);
      break;

    case "kelvin":
      celsius.value = (current_value - 273.15).toFixed(2);
      fahrenheit.value((current_value - 273.15) * 1.8 + 32).toFixed(2);
      break;

    default:
      break;
  }
}
