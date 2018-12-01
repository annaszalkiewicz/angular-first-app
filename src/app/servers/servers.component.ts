import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServer = false;
  newServerStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 3000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.newServerStatus = 'New server was created';
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
