import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  logs: string[] = [];
  showChild: boolean = true;
  
  constructor() {
    this.name = 'Alice';
    setTimeout(() => this.updateName(), 3000);
    setTimeout(() => this.hideChild(), 4000);
  }
  
  updateName() {
    this.name = 'Bob';
  }
  
  hideChild() {
    this.showChild = false;
    this.logs.push(`onDestroy`);
  }
  
  onLog(data) {
    this.logs.push(data);
  }
}