import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css'],
})
export class AssignmentThreeComponent implements OnInit {

  count = 0;
  showParagraph = false;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.showParagraph = true;
  }

}
