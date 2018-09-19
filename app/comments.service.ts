import { Injectable } from '@angular/core';
import{ Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CommentsService {
    constructor(private http : Http) {}
    Comments(data) {
        let url="http://localhost:8080/MVP/review/add";
        return this.http.post(url,data).map(signUpresponse => signUpresponse.json());
    }
}