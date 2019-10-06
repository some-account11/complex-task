import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {User} from "../interfaces/user-interface";

@Injectable({
  providedIn: 'root'
})
export class UserCatalogService {
  public newUserSubject$ = new Subject<User>();

  constructor(public http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  sendNewUser(user: any) {
    this.newUserSubject$.next(user);
  }

  addUser(user: any) {
    this.newUserSubject$.subscribe(user);
    console.log(user);
    console.log(this.newUserSubject$);
  }
}
