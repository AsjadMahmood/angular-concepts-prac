import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class StarWarsService {

  private counter = new BehaviorSubject<Number>(0);
  counter$ = this.counter.asObservable();

  constructor(private http: HttpClient) {
    console.log('service from root module');
   }

  public getStarwarCharacter(){
    return this.http.get('https://api.coingecko.com/api/v3/exchange_rates');
  }

  public getWazir(){
    return this.http.get('https://api.wazirx.com/sapi/v1/tickers/24hr');
  }

  updateCounter(num){
    this.counter.next(num);
  }

}