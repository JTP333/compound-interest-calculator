const calculator = document.querySelector(".calculator");
const initialAmount = document.querySelector("#init-amount");
const monthlyContribution = document.querySelector("#contrib");
const numberOfYears = document.querySelector("#yrs");
const interestRate = document.querySelector("#int-rate");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

const compoundInterest = (amount, contribution, years, rate) => {
  let total = amount;
  const annualContribution = contribution * 12;

  for (let i = 0; i < years; i++) {
    total += annualContribution;
    total *= (100 + rate) / 100;
  }

  console.log(total);
  return Number(total.toFixed(2));
};

const calculateRegularAmount = (amount, contribution, years) => {
  const annualContribution = contribution * 12;
  const total = amount + annualContribution * years;

  return Number(total.toFixed(2));
};

const clearFields = () => {
  initialAmount.value = "";
  monthlyContribution.value = "";
  numberOfYears.value = "";
  interestRate.value = "";
};

const formatNumber = (
  value,
  locale = "en-US",
  options = { minimumFractionDigits: 2, maximumFractionDigits: 2 }
) => {
  return new Intl.NumberFormat(locale, options).format(value);
};

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    initialAmount.value === "" ||
    monthlyContribution.value === "" ||
    numberOfYears.value === "" ||
    interestRate.value === ""
  ) {
    result.innerText =
      "All fields are required -\nplease enter numerical values";

    return false;
  }

  const amount = Number(initialAmount.value);
  const contibution = Number(monthlyContribution.value);
  const years = Number(numberOfYears.value);
  const rate = Number(interestRate.value);

  const compoundedTotal = compoundInterest(amount, contibution, years, rate);

  const regularTotal = calculateRegularAmount(amount, contibution, years);

  const difference = compoundedTotal - regularTotal;

  calculator.classList.add("hidden");
  modal.classList.remove("hidden");

  result.textContent = `INITIAL AMOUNT: $${formatNumber(initialAmount.value)}\r\nMONTHLY CONTRIBUTION: $${formatNumber(monthlyContribution.value)}\r\nNUMBER OF YEARS: ${numberOfYears.value}\r\nINTEREST RATE: ${interestRate.value}%\r\n\nFINAL COMPOUNDED VALUE: $${formatNumber(compoundedTotal)}\r\nREGULAR AMOUNT: $${formatNumber(regularTotal)}\r\nDIFFERENCE: $${formatNumber(difference)}`;

  return result;
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();

  modal.classList.add("hidden");
  calculator.classList.remove("hidden");
});

reset.addEventListener("click", (e) => {
  e.preventDefault();

  clearFields();

  result.innerText = "";

  return result;
});
