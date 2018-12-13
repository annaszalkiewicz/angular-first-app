import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent implements OnInit {

  serverElements = [{type: 'server', name: 'Testserver', content: 'This is test server'}];

  constructor() { }

  ngOnInit() {
  }

}
