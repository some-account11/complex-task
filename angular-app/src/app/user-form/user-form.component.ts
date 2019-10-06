import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserCatalogService } from '../services/user-catalog.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [ UserCatalogService ]
})

export class UserFormComponent {
  user: FormGroup;

  constructor(private userCatalogService: UserCatalogService){
    this.user = new FormGroup({
      "firstName": new FormControl("", Validators.required),
      "lastName": new FormControl("", Validators.required),
      "email": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "password": new FormControl("", Validators.required)
    });
  }

  submit(){
    this.userCatalogService.addUser(this.user.value);
  }
}
