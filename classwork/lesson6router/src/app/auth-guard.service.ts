import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    return Observable.of(false);
  }

}
