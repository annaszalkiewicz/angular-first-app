import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-only-odd',
  templateUrl: './only-odd.component.html',
  styleUrls: ['./only-odd.component.css']
})
export class OnlyOddComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;

  constructor() { }

  ngOnInit() {
  }

}
