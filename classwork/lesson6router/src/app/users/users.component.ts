import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs'
import 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public id: Observable<number>;

  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe(params => console.log(params))
    this.id = this._route.params.map((params:{id:number}) => params.id);

    this._route.navigate(...);
  }

  ngOnInit() {
  }

}
