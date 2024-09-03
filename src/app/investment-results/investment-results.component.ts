import {Component, computed} from '@angular/core';
import {InvestmentService} from "../investment.service";
import {inject} from "@angular/core";

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService)

  results = this.investmentService.resultsData.asReadonly()
}
