import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserCatalogService} from "../user-catalog.service";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: number;
}

@Component({
  selector: 'app-user-catalog',
  templateUrl: './user-catalog.component.html',
  styleUrls: ['./user-catalog.component.scss']
})

export class UserCatalogComponent implements OnInit, OnChanges {
  term: string = '';
  users: User;
  newUser: User;

  constructor(public userCatalogService: UserCatalogService) {
  }

  ngOnInit() {
    this.userCatalogService.getUsers().subscribe((users: any[]) => {
      this.users = users.map(user => {
        return {'firstName': user['firstName'], 'lastName': user['lastName'], 'email': user['name'], 'password': user['password']};
      });
      console.log(this.users);
    });

    this.userCatalogService.newUserSubject$.subscribe(newUser => {
      this.newUser = newUser;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.newUser.currentValue) {
      this.users.push(this.newUser.currentValue);
    }
  }
}
