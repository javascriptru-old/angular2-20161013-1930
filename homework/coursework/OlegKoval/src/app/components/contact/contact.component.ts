import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email.validator';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
/**
 * Contact form component
 */
export class ContactComponent implements OnInit {
    public form: FormGroup;
    public firstNameValid: boolean = true;
    public lastNameValid: boolean = true;
    public emailValid: boolean = true;
    public messageValid: boolean = true;

    /**
     * @param {FormBuilder}    private _fb
     * @param {ContactService} private _service
     */
    constructor(private _fb: FormBuilder, private _service: ContactService) {
        this.form = this._fb.group({
            firstname: ['', [Validators.required, Validators.minLength(2)]], 
            lastname: ['', [Validators.required, Validators.minLength(2)]], 
            email: ['', [Validators.required, EmailValidator.emailFormat]],
            message: ['', Validators.required]
        });
        this.form.controls['firstname'].valueChanges.subscribe(value => {
            this.firstNameValid = this.form.controls['firstname'].valid;
        });
        this.form.controls['lastname'].valueChanges.subscribe(value => {
            this.lastNameValid = this.form.controls['lastname'].valid;
        });
        this.form.controls['email'].valueChanges.subscribe(value => {
            this.emailValid = this.form.controls['email'].valid;
        });
        this.form.controls['message'].valueChanges.subscribe(value => {
            this.messageValid = this.form.controls['message'].valid;
        });
    }

    ngOnInit() {
    }

    /**
     * Handle form submit action
     */
    public onSubmit(): void {
        this._service.sendMessage(this.form.value);
        
        //clear form
        this.form.reset();
        this.firstNameValid = 
        this.lastNameValid =
        this.emailValid =
        this.messageValid = true;
    }
}
