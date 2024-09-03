import {Component} from '@angular/core';
import {CurrencyPipe, DecimalPipe} from "@angular/common";
import {InvestmentService} from "../investment.service";
import {inject} from "@angular/core";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    DecimalPipe,
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService)

  results = this.investmentService.resultsData.asReadonly()
}
