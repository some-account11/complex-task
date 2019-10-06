import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {
  angForm: FormGroup;
  url: string;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              public emailService: EmailService) {
    this.createForm();
    this.url = 'http://localhost:3000/data';
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      comment: [''],
    });
  }

  onSubmit() {
    if (this.angForm.value) {
      this.emailService.postData(this.url, this.angForm.value).subscribe((result) => {
        this.angForm.reset();
      });
    }
  }
}
