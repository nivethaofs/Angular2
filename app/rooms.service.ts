import { Injectable } from '@angular/core';
import{ Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class RoomService {
    public roomId : String;
    public data;
    
    constructor(private http : Http ){}
    getAllRooms(id) {
        let url = "http://localhost:8080/MVP/room/getAllRooms?hotelid=" +id;
        return this.http.get(url).map(roomresponse => roomresponse.json());
    }
   bookRoom(data) {
        console.log(data);
        let url = "http://localhost:8080/MVP/book/add";
        return this.http.post(url,data).map(bookingresponse => bookingresponse.json());
   }
} 
