import { Component, OnInit, Input } from '@angular/core';
import { HistoryofBookingService } from '../historyofbookings.service';
import { Router } from '@angular/router';
import { CityService } from '../city.service';

@Component({
  selector: 'app-historyofbookings',
  templateUrl: './historyofbookings.component.html',
  styleUrls: ['./historyofbookings.component.css']
})
export class HistoryofbookingsComponent implements OnInit {
  public userdetails;
  public userid;
  public historyDetails;
  constructor(private historyofbookings : HistoryofBookingService,private city:CityService,  private router : Router) { }

  // @Input() selectedCityId ;

  ngOnInit() {
    let Details = sessionStorage.getItem("userDetails");
    this.userdetails = JSON.parse(Details);
    this.userid = this.userdetails.uid;
    console.log(this.userid);
    this.historyofbookings.getAllHistories(this.userid).subscribe(
      res => {
        this.historysuccessResponse(res);
      },
      err => {
        this.historyerrorMessage(err);
      }

    );
  }
  historysuccessResponse(res) {
    if (res == '') {
      alert("you have not yet booked!");
    }else {
      alert("Here is your booking details!!");
    }
    this.historyDetails = res;
  }
  historyerrorMessage(err) {
    console.log("Error in your history");
  }
  cancelBooking(id) {
    this.historyofbookings.cancelBooking(id).subscribe(
      res => {
        this.cancelsuccessResponse(res);
      },
      err => {
        this.cancelerrorMessage(err);
      }
    );
  }
  cancelsuccessResponse(res) {
    alert("Your booking has been cancelled");
    this.router.navigate(['/home/city'])

  }
  cancelerrorMessage(err) {
    console.log("Error in cancelling");
  }
  comments(id) {
    console.log(id);
    sessionStorage.setItem("commentHotel",id);
    this.router.navigate(['/home/comments']);
    // this.commentscomponent.submit(id);
  }
}
