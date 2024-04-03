import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HubtelService {

  constructor(private http: HttpClient) { }

  sendMoney(data: any): Observable<any> {
    const url =     `https://devp-reqsendmoney-230622-api.hubtel.com/request-money/0540552725`;
    const auth = 'Basic ' + btoa('yikmilrr:kzzmntmb');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post<any>(url, data, { headers: headers });
  }
}
