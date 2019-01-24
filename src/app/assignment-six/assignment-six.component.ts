import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-six',
  templateUrl: './assignment-six.component.html',
  styleUrls: ['./assignment-six.component.css']
})
export class AssignmentSixComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'advanced';
  submitted = false;
  user = {
    email: '',
    password: '',
    subscription: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.subscription = this.signupForm.value.dropdown;
  }

}
