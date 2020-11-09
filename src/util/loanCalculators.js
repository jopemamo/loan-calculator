
export const houseLoan = (amount, years, interest = 3.5) => {
  let amortisationSchedule = [];
    if ( amount === 0 || amount === '') {
      return amortisationSchedule;
    }
  const totalInstalments = Math.round(years * 12);
  const monthlyInterest = interest / 12 / 100;
  const monthlyRepayment = amount / totalInstalments;
  let principal = amount;
  for (let i = 0; i < totalInstalments; i++) {
    let monthlyAmortisation = {};
    let interestPayment = principal * monthlyInterest;
    principal -= monthlyRepayment;
    monthlyAmortisation.principalLeft = principal;
    monthlyAmortisation.principalPayment = monthlyRepayment;
    monthlyAmortisation.interestPayment = interestPayment
    monthlyAmortisation.totalPayment = monthlyRepayment + interestPayment;
    monthlyAmortisation.instalment = i + 1;
    amortisationSchedule.push(monthlyAmortisation);
  }
  return amortisationSchedule;
}