import { Component } from '@angular/core';

@Component ({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 100;
  status: string = 'online';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getStatus() {
    return this.status;
  }
 }
