import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.css']
})
export class AssignmentFourComponent implements OnInit {

  timer;
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  onGameStarted() {

    this.timer = setInterval(() => {
        this.count += 1;
    }, 1000);

  }

}
