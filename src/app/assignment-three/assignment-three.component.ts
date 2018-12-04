import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

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

  getColor() {
    return this.count >= 5 ? 'blue' : 'none';
  }

}
