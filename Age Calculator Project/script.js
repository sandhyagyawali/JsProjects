console.log("Age Calculator");

const date_birth = document.querySelector(".date");
const btn_age = document.querySelector(".btn");
const age_no = document.querySelector(".result");

const ageCalculate = () => {
  const birthdayValue = date_birth.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = get_birthdate(birthdayValue);
    age_no.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
};

const get_birthdate = (birthdayValue) => {
  const current_date = new Date();
  const birthdat_date = new Date(birthdayValue);
  let age = current_date.getFullYear() - birthdat_date.getFullYear();
  const month = current_date.getMonth() - birthdat_date.getMonth();
  if (
    month < 0 ||
    (month === 0 && current_date.getDate() < birthdat_date.getDate())
  ) {
    age--;
  }
  return age;
};
btn_age.addEventListener("click", ageCalculate);
