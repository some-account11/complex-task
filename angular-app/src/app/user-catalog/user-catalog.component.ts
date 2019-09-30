import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserCatalogService} from "../user-catalog.service";

@Component({
  selector: 'app-user-catalog',
  templateUrl: './user-catalog.component.html',
  styleUrls: ['./user-catalog.component.scss']
})
export class UserCatalogComponent implements OnInit, OnChanges {
  term: string = '';
  users: any = [];
  newUser: any;

  constructor(public userCatalogService: UserCatalogService) {
  }

  ngOnInit() {
    this.userCatalogService.getUsers().subscribe((users: any[]) => {
      this.users = users.map(user => {
        return {'name': user['name'], 'username': user['username'], 'email': user['name'], 'phone': user['phone']};
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
