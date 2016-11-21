import { FormControl } from '@angular/forms';
import { ValidationResult } from '../types/validationResult.type';

/**
 * Custom email validator
 */
export class EmailValidator {
    /**
     * Validate email format
     * @param  {FormControl}      control
     * @return {ValidationResult}
     */
    static emailFormat(control: FormControl): ValidationResult {
        let emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

        if (!emailRegex.test(control.value)) {
            return {isEmail: false}
        }

        return null;
    }
}