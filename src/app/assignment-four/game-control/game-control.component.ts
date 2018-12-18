import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit() {
  }

  onGameStarted() {
    setInterval(() => {
      this.count += 1;
    }, 1000);
  }

  onGameEnded() {
    console.log('Game ended!');
  }

}
