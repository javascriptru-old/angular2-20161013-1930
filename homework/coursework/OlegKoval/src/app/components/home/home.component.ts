import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
/**
 * Home page component
 */
export class HomeComponent implements OnInit {
    public title:string = 'Course work';

    constructor() { }

    ngOnInit() {
    }
}
