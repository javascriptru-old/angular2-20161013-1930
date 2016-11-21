import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Message } from '../types/message.type';

@Injectable()
/**
 * Contact form service
 */
export class ContactService {
    private _baseUrl: string = 'https://formspree.io/';
    private _contactEmail: string = 'oleh.koval@gmail.com';

    /**
     * @param {Http} private _http
     */
    constructor(private _http: Http) {
    }

    /**
     * Send message
     * @param {Message} data
     */
    public sendMessage(data: Message):void {
        /**
         * commented out this feature - need to research why service return 403 error
         * at this moment just write a form data into console log
         */
        // let headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        // });
        // let options = new RequestOptions({ headers: headers });
        // this._http.post(
        //     this._baseUrl + this._contactEmail,
        //     JSON.stringify(data),
        //     options
        // ).subscribe(result => console.log(result));
        console.log(data);
    }
}
