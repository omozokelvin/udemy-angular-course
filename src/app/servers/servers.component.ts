import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'TestSever';
  username: string = '';
  serverCreated: boolean = false;
  servers = ['Test Server', 'Test Server 2'];

  details: string = 'Secret Password= tuna';
  showDetails: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  clearUsername() {
    this.username = '';
  }

  logs: string[] = [];
  toggleDetails(): void {
    this.showDetails = !this.showDetails;
    this.logs.push(`${new Date()}`);
  }
}
