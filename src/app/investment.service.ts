import {Injectable} from "@angular/core";
import {InvestmentInput, InvestmentInputResults} from "./investment-input.model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  resultsData?: InvestmentInputResults[]

  calculateInvestmentResults(data : InvestmentInput) {
    const annualData = [];
    const { initialInvestment, duration, expectedReturn, annualInvestment} = data
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultsData = annualData;
  }

}
