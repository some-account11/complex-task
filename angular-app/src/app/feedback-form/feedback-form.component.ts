import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {
  angForm: FormGroup;
  url: string;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.createForm();
    this.url = 'http://localhost:3000/data';
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.angForm.value) {
      this.postData().subscribe();
      this.angForm.reset();
      alert('Thank you');
    }
  }

  postData(): Observable<any> {
    return this.http.post(this.url, this.angForm.value, {responseType: 'text'});
  }
}
