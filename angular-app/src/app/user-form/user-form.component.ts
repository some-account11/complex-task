import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [DataService]
})

export class UserFormComponent implements OnInit {
  user: string[] = [];

  constructor(private dataService: DataService){}

  ngOnInit() {
  }

  create() {

    //DOM
    let firstName         = document.querySelector('#first-name'),
        lastName          = document.querySelector('#last-name'),
        email             = document.querySelector('#email'),
        password          = document.querySelector('#password'),

        firstNameSubtitle = document.querySelector('#first-name-subtitle'),
        lastNameSubtitle  = document.querySelector('#last-name-subtitle'),
        emailSubtitle     = document.querySelector('#email-subtitle'),
        passwordSubtitle  = document.querySelector('#password-subtitle'),

        reg               = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,

        checkFirstName    = false,
        checkLastName     = false,
        checkEmail        = false,
        checkPassword     = false;
    // Check First Name
    if(firstName.value == '') {
      firstName.style.borderColor = 'red';
      firstNameSubtitle.innerHTML = 'Enter a first name';
    } else {
      firstName.style.borderColor = 'green';
      firstNameSubtitle.innerHTML = '';
      checkFirstName = true;
    }
    // Check Last Name
    if(lastName.value == '') {
      lastName.style.borderColor = 'red';
      lastNameSubtitle.innerHTML = 'Enter a last name';
    } else {
      lastName.style.borderColor = 'green';
      lastNameSubtitle.innerHTML = '';
      checkLastName = true;
    }
    // Check Email
    if(reg.test(email.value) == false) {
      email.style.borderColor = 'red';
      emailSubtitle.innerHTML = 'Please enter the correct email !!!';
    } else {
      email.style.borderColor = 'green';
      emailSubtitle.innerHTML = '';
      checkEmail = true;
    }
    // Check Password
    if(password.value.length < 6) {
      password.style.borderColor = 'red';
      passwordSubtitle.innerHTML = 'Password must be at least 6 characters long !!!';
    } else {
      password.style.borderColor = 'green';
      passwordSubtitle.innerHTML = '';
      checkPassword = true;
    }
    // Check All
    if(checkFirstName && checkLastName && checkEmail && checkPassword) {
      this.user.push({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
      });
      // Push to Data Service
      this.dataService.addData(this.user);
      console.log(this.dataService.getData());
      // Alert
      setTimeout(() => {
        alert('New User Added !!!');
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';

        firstName.style.borderColor = 'black';
        lastName.style.borderColor = 'black';
        email.style.borderColor = 'black';
        password.style.borderColor = 'black';
      }, 500);
    }
  }
}
