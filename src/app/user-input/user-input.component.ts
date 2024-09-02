import {Component, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInput} from "../investment-input.model";
import {InvestmentService} from "../investment.service";

const DEFAULT_INITIAL_INVESTMENT = '10000'
const DEFAULT_ANNUAL_INVESTMENT = '0'
const DEFAULT_EXPECTED_RETURN = '6'
const DEFAULT_DURATION = '5'

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {

  initialInvestment = signal(DEFAULT_INITIAL_INVESTMENT)
  annualInvestment = signal(DEFAULT_ANNUAL_INVESTMENT)
  expectedReturn = signal(DEFAULT_EXPECTED_RETURN)
  duration = signal(DEFAULT_DURATION)

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment()
    })
    this.initialInvestment.set(DEFAULT_INITIAL_INVESTMENT)
    this.duration.set(DEFAULT_DURATION)
    this.expectedReturn.set(DEFAULT_EXPECTED_RETURN)
    this.annualInvestment.set(DEFAULT_ANNUAL_INVESTMENT)
  }
}
