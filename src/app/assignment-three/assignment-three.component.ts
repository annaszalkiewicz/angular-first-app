import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css'],
})
export class AssignmentThreeComponent implements OnInit {

  showParagraph = false;
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.showParagraph = true;
    this.count++;
  }

}
