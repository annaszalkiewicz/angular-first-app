import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment-seven',
  templateUrl: './assignment-seven.component.html',
  styleUrls: ['./assignment-seven.component.css']
})
export class AssignmentSevenComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  user = {
    name: '',
    email: '',
    status: ''
  };

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required], this.forbiddenName),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('stable')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.name = this.signupForm.value.name;
    this.user.email = this.signupForm.value.email;
    this.user.status = this.signupForm.value.status;
    this.signupForm.reset();
  }

  forbiddenName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'nameIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

}
