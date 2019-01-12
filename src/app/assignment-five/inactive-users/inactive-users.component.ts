import { CounterService } from './../../counter.service';
import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {

  users: string[];
  counts: number;

  constructor(private usersService: UsersService,
              private counterService: CounterService) { }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
    this.counts = this.counterService.inactiveToActiveCounter;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.counterService.inactiveToActiveCount();
  }
}
