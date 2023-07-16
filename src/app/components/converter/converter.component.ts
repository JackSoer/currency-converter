import { Component } from '@angular/core';
import { CurrencyExchangeService } from 'src/app/services/currency-exchange.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  from: string = 'USD';
  to: string = 'UAH';
  amount1: string = '0';
  amount2: string = '0';

  constructor(private currencyExchangeService: CurrencyExchangeService) {}

  onInputChange(isAmount1: boolean): void {
    if (isAmount1) {
      this.currencyExchangeService
        .getCurrencyExchangePairData(this.from, this.to, this.amount1)
        .subscribe((data) => (this.amount2 = String(data.conversion_result)));
    } else {
      this.currencyExchangeService
        .getCurrencyExchangePairData(this.to, this.from, this.amount2)
        .subscribe((data) => (this.amount1 = String(data.conversion_result)));
    }
  }
}
