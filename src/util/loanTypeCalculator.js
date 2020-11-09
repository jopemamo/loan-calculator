import { houseLoan } from './loanCalculators';

export const loanTypeCalculator = (loanData) => {
  switch(loanData.type.name.toLowerCase()) {
    case 'house':
      return houseLoan(loanData.amount, loanData.years, loanData.type.interest);
    case 'car':
      return houseLoan(loanData.amount, loanData.years, loanData.type.interest);
    default:
      return houseLoan(loanData.amount, loanData.years);
  }
}

