import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrrencyExchangeData } from 'src/app/models/currency-exchange-data';
import { CurrencyExchangeService } from 'src/app/services/currency-exchange.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currencyExchangeData: CurrrencyExchangeData;

  constructor(private currencyExchangeService: CurrencyExchangeService) {}

  ngOnInit(): void {
      this.currencyExchangeService.getCurrencyExchangeData('UAH').subscribe(data => this.currencyExchangeData = data);
  }
}
