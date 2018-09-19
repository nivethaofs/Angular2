import { Injectable } from '@angular/core';
import{ Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CityService {
    private cityId : number;
    constructor(private http : Http) {}
    getAllcities() {
        let url = "http://localhost:8080/MVP/city/getAllCities";
        return this.http.get(url).map(cityresponse => cityresponse.json());
    }
    setHotelid(id) {
        this.cityId = id;
    }
    getHotelid() {
        return this.cityId;
    }
   
} 