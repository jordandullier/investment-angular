import {Component, Input} from '@angular/core';
import {InvestmentInputResults} from "../investment-input.model";
import {CurrencyPipe, DecimalPipe} from "@angular/common";

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
  @Input() results?: InvestmentInputResults[];
}
