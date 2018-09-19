import { Component, OnInit } from '@angular/core';
import { HotelReview } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public hotelReviews; 
  constructor(private hotelreview : HotelReview) { }
  
  ngOnInit() {
    let hotelid = sessionStorage.getItem("hotelId");
    console.log(hotelid);
    this.hotelreview.getAllReviews(hotelid).subscribe(
      res => {
        this.reviewsuccessResponse(res);
      },
      err => {
        this.reviewerrorMessage (err);
      }
    );
  }
  reviewsuccessResponse(res) {
    this.hotelReviews = res;
  }
  reviewerrorMessage(err) {
    console.log("Error in reviews");
  }
}
