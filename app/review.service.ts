import { Injectable } from '@angular/core';
import{ Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class HotelReview {
    constructor(private http : Http) {}
    getAllReviews(id) {
        let url = "http://localhost:8080/MVP/review/getAllReviews?hotelid=" + id;
        return this.http.get(url).map(reviewresponse => reviewresponse.json());
    }
}