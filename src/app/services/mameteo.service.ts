import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MameteoService {
  API_KEY: string = "&appid=9032915cf9e04ec82bacc99ab938904b";
  CONFIG_URL: string = "https://api.openweathermap.org/data/2.5/weather?q=";
  constructor(private http: HttpClient) {

  }
  getMaMeteo(v: string) {
    return this.http.get(this.CONFIG_URL + v + "&cnt=14&mode=json&units=metric&lang=fr" + this.API_KEY);
  }
}
