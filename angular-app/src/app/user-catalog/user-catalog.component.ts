import {Component, OnInit} from '@angular/core';
import {UserCatalogService} from "../user-catalog.service";
import {User} from "../interfaces/user-interface";

@Component({
  selector: 'app-user-catalog',
  templateUrl: './user-catalog.component.html',
  styleUrls: ['./user-catalog.component.scss']
})

export class UserCatalogComponent implements OnInit {
  term: string = '';
  users: User[] = [];

  constructor(public userCatalogService: UserCatalogService) {
  }

  ngOnInit() {
    this.userCatalogService.getUsers().subscribe((users: any[]) => {
      debugger;
      this.users = users.map(user => {
        return {
          'firstName': user['name'].split(' ', 1),
          'lastName': user['name'].split(' ', 2)[1],
          'email': user['name'],
          'password': user['phone']
        };
      });
      console.log(this.users);
    });

    this.userCatalogService.newUserSubject$.subscribe((newUser: User) => {
      this.users.push(newUser);
    })
  }
}
