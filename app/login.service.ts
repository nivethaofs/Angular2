import { Injectable } from '@angular/core';
import{ Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LoginService {
    constructor(private http : Http){}
    loginAuthentication(data) {
        let url = "http://localhost:8080/MVP/user/auth";
        return this.http.post(url,data).map(loginresponse => loginresponse.json());
    }
} 