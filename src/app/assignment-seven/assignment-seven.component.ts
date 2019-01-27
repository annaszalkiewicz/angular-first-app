import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-assignment-seven',
  templateUrl: './assignment-seven.component.html',
  styleUrls: ['./assignment-seven.component.css']
})
export class AssignmentSevenComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
      'status': new FormControl('stable')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
