import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserCatalogService{
  public newUserSubject$ = new Subject<any>();
  constructor(public http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  sendNewUser(user: any) {
    this.newUserSubject$.next(user);
  }

}
