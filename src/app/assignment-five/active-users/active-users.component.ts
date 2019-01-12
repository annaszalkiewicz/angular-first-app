import { CounterService } from './../../counter.service';
import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {

  users: string[];
  counts: number;

  constructor(private usersService: UsersService,
              private counterService: CounterService) { }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
    this.counts = this.counterService.activeToInactiveCounter;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.counterService.activeToInactiveCount();
  }
}
