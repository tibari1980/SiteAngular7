import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceGalleryService {

  API_KEY: string = "11333529-9123bf8057cdef0e0c3c18ed5";
  urlConfig: string = "https://pixabay.com/api/?key=" + this.API_KEY;

  constructor(private http: HttpClient) { }
  getData(m: string, s: number, p: number) {
    return this.http.get(this.urlConfig + "&q=" + m + "&per_page=" + s + "&page=" + p);
  }
}
