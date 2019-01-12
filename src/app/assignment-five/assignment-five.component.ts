import { CounterService } from './../counter.service';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-five',
  templateUrl: './assignment-five.component.html',
  styleUrls: ['./assignment-five.component.css'],
  providers: [UsersService, CounterService]
})
export class AssignmentFiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
