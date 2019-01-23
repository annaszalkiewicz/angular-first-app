import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-six',
  templateUrl: './assignment-six.component.html',
  styleUrls: ['./assignment-six.component.css']
})
export class AssignmentSixComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
