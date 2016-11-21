import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AsyncValidatorService } from './async-validator.service'

@Component({
  selector: 'app-async-validation',
  templateUrl: './async-validation.component.html',
  providers: [AsyncValidatorService]
})
export class AsyncValidationComponent {

  username: FormControl;

  constructor(private _asyncValidatorService: AsyncValidatorService) {
    this.username = new FormControl('', [], (control: FormControl) => this._asyncValidatorService.asyncValidator(control));
  }
}

