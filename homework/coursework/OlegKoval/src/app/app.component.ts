import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
/**
 * Application component
 */
export class AppComponent {
    public title: string = 'Course work of Oleg Koval';

    constructor() {}

    ngOnInit() {}
}
