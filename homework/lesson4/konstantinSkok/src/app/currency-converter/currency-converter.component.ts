import { Component, OnInit } from '@angular/core';
import {Currency, CurrencyType} from '../currency';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers : [Currency]
})
export class CurrencyConverterComponent implements OnInit {
  public error: string;
  public currency: string[] = [];

  constructor(private _currency: Currency) {
    for (let currency in _currency.staticCurrencyRate) {
      this.currency.push(currency);
    };
  }

  ngOnInit() {}

  public convert (form: HTMLFormElement) {

    let rateType: string = form.elements['rateType'].value;
    let currency: string = form.elements['currency'].value;
    let currencySum: number = +form.elements['currencySum'].value.trim() || 0;
    let rubleSum: number = +form.elements['rubleSum'].value.trim() || 0;
    let convertType: string = form.elements['convertType'].value;

    if (rateType === 'STATIC') {
      doConvertation(this._currency.staticCurrencyRate);
    } else {
      this._currency.getCurrencyRate().subscribe((currency: CurrencyType) => doConvertation(currency));
    }

    function doConvertation(rate: CurrencyType) {
      if (convertType === 'CR') { // currency -> rub
        form.elements['rubleSum'].value = (currencySum * rate[currency]).toFixed(2);
      } else if (convertType === 'RC') { //// rub -> currency
        form.elements['currencySum'].value = rubleSum ? (rubleSum / rate[currency]).toFixed(2) : 0;
      }
    }

  }

}
