import { Injectable } from '@angular/core';
import{ Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class SignupService{
    constructor(private http : Http) {}
    SignupSubmission(data) {
        let url = "http://localhost:8080/MVP/user/add";
        return this.http.post(url,data).map(signUpresponse => signUpresponse.json());
    }
}
