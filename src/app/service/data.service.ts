import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlData = 'https://oikos-page.firebaseio.com';

  constructor(private http: HttpClient) { }

  getDataAbout(): Observable<any> {
    return this.http.get<any>(`${this.urlData}/about.json`);
  }
}
