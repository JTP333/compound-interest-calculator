import {
  calculator,
  initialAmount,
  monthlyContribution,
  numberOfYears,
  interestRate,
  result,
  compoundInterest,
  calculateRegularAmount,
  formatNumber,
  modal,
  closeModal,
  fadeIn
} from "./script.js";

export const printSummary = () => {
  // const amount = Number(initialAmount.value);
  // const contibution = Number(monthlyContribution.value);
  // const years = Number(numberOfYears.value);
  // const rate = Number(interestRate.value);

  // const compoundedTotal = compoundInterest(amount, contibution, years, rate);

  // const regularTotal = calculateRegularAmount(amount, contibution, years);

  // const difference = compoundedTotal - regularTotal;

  calculator.classList.add("hidden");
  modal.style.animation = fadeIn;
  modal.classList.remove("hidden");

  result.textContent = `INITIAL AMOUNT: $${formatNumber(initialAmount.value)}\r\nMONTHLY CONTRIBUTION: $${formatNumber(monthlyContribution.value)}\r\nNUMBER OF YEARS: ${numberOfYears.value}\r\nINTEREST RATE: ${interestRate.value}%\r\n\nFINAL COMPOUNDED VALUE: $${formatNumber(compoundedTotal)}\r\nREGULAR AMOUNT: $${formatNumber(regularTotal)}\r\nDIFFERENCE: $${formatNumber(difference)}`;

  return result;
};

printSummary();

closeModal.addEventListener("click", (e) => {
  e.preventDefault();

  modal.classList.add("hidden");
  calculator.style.animation = fadeIn;
  calculator.classList.remove("hidden");
});
