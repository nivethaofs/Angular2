import { Injectable } from '@angular/core';
import{ Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HistoryofBookingService {
    constructor(private http : Http) {}
    getAllHistories(userid) {
       let  url = "http://localhost:8080/MVP/book/getAllBookings?userid=" + userid;
       return this.http.get(url).map(historyresponse => historyresponse.json());
    }
    cancelBooking(id) {
        let url = "http://localhost:8080/MVP/book/cancel?bookid=" + id;
        return this.http.get(url).map(cancelresponse => cancelresponse.json());
    }
    
}