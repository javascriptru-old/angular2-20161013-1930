import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';


@Injectable()
export class AsyncValidatorService {

  constructor(private _http: Http) { }

  public asyncValidator(controls: FormControl): Observable<any> {
    return this._http.get('http://test-api.javascript.ru/v1/stevermeister/tasks')
      .map(res => res.json())
      .switchMap((arr: any[]): Observable<any> => {
        let arr1 = arr.filter(item => item.title === controls.value)
        if (arr1.length) {
          return Observable.of(null);
        }
        return Observable.of({ username: {message: 'Does not exist in database'} })
      })
      .catch(err => {
        console.log(err)
        return Observable.of({ username: {message: 'No response from server'} })
      })
  }

}




