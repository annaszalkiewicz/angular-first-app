import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  @Output() gameEnded = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onGameEnd(count) {
    this.gameEnded.emit(count);
  }

  onGameStart(count) {
    this.gameStarted.emit(count);
  }
}
