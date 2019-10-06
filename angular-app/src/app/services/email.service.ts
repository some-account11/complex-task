import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  postData(url: string, value: any): Observable<any> {
    return this.http.post(url, value, {responseType: 'text'});
  }
}
