import { Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import { HotelService } from '../hotel.service';
import { CityService } from '../city.service';
import { CityComponent } from '../city/city.component';
import { Router,ActivatedRoute } from '@angular/router';
import { HotelReview } from '../review.service';
@Component({
  selector: 'hotel-component',
  templateUrl: './hotel.component.html',
  styleUrls: ['../app.component.css']

})
export class HotelComponent implements OnInit,OnChanges {
  @Input() selectedCityId : string;
  private id;
  public alertMessage;
  public hotel;
  public image;

  constructor(private hotelService : HotelService, private cityservice : CityService, private router : Router, private route : ActivatedRoute, private hotelreview: HotelReview ) { }
  selectedHotelid : String;
  ngOnInit() {

  }
  ngOnChanges(changes : SimpleChanges) {
    for(let property in changes) {
      
      this.id =changes[property].currentValue
      this.hotelService.getAllhotels(this.id)
      .subscribe(
        res => {
          this.successResponse(res);
        },
        err => {
          this.alertMessage ="Oops Server Error!";
        }
      );
      this.hotelService.getAllImages(this.id)
      .subscribe(
        res => {
          this.imagesuccessResponse(res);
        },
        err => {
          this.alertMessage ="Oops Server Error!";
        }
      );
    }
  }
  successResponse(res) {
    console.log(res);
    this.hotel = res;
  }
  imagesuccessResponse(res) {
    console.log(res);
    this.image = res;
  }
  selectedHotel(id) {
    this.hotelService.setHotelId(id);
    this.selectedHotelid = id;
    }
    hotelReviews(id) {
      // this.hotelreview.getAllReviews(id);
      sessionStorage.setItem("hotelId",id);
      this.router.navigate(['/home/review']);
      
    }
}

