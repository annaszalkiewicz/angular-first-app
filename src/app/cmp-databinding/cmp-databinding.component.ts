import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cmp-databinding",
  templateUrl: "./cmp-databinding.component.html",
  styleUrls: ["./cmp-databinding.component.css"]
})
export class CmpDatabindingComponent implements OnInit {
  serverElements = [
    { type: "server", name: "Testserver", content: "This is test server" }
  ];

  constructor() {}

  ngOnInit() {}

  onServerCreated(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintCreated(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
