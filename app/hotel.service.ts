import { Injectable } from '@angular/core';
import{ Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class HotelService {
    public hotelId : String;
    constructor(private http : Http){}
    getAllhotels(id) {
        let url = "http://localhost:8080/MVP/hotel/getAllHotels?cityid="+id;
        return this.http.get(url).map(hotelresponse => hotelresponse.json());
    }
    getAllImages(id) { 
        let url = "http://localhost:8080/MVP/image/getAllImages?cityid="+id;
        return this.http.get(url).map(imageresponse => imageresponse.json());
    }
    setHotelId(id) {
        this.hotelId = id;
    }
    getHotelId() {
        return this.hotelId;
    }
}