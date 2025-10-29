import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'; // Endpoint de Forismatic

  constructor(private http: HttpClient) {}

  getQuote(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // Realiza la solicitud GET a la API
  }
}
