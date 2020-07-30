import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../interfaces/model.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlData = 'https://oikos-page.firebaseio.com';
  urlEmail = 'https://desolate-fortress-32287.herokuapp.com';
  
  constructor(private http: HttpClient) { }

  getDataAbout(): Observable<any> {
    return this.http.get<any>(`${this.urlData}/about.json`);
  }

  sendEmail(body: any) {
    return this.http.post(this.urlEmail + '/mail', body);
  }
}
