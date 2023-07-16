import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CurrrencyExchangeData,
  CurrrencyExchangePairData,
} from '../models/currency-exchange-data';

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeService {
  constructor(private http: HttpClient) {}

  getCurrencyExchangeData(baseCode: string): Observable<CurrrencyExchangeData> {
    return this.http.get<CurrrencyExchangeData>(
      `https://v6.exchangerate-api.com/v6/105f5064d6569c4fc89689ec/latest/${baseCode}`
    );
  }

  getCurrencyExchangePairData(
    from: string,
    to: string,
    amount: string
  ): Observable<CurrrencyExchangePairData> {
    return this.http.get<CurrrencyExchangePairData>(
      `https://v6.exchangerate-api.com/v6/105f5064d6569c4fc89689ec/pair/${from}/${to}/${amount}`
    );
  }
}
