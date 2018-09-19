import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bookingdate',
  templateUrl: './bookingdate.component.html',
  styleUrls: ['../app.component.css']
})
export class BookingdateComponent implements OnInit {
  public userName : String = JSON.parse(sessionStorage.getItem("userDetails"));
  constructor(private router : Router,  private route : ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
    sessionStorage.setItem("usercheckin",value.checkin);
    sessionStorage.setItem("usercheckout",value.checkout);
    
    if(value.checkin && value.checkout != "") {
      this.router.navigate(['/home/city']);
    }else {
      alert("Please fill the fields");
    }
  }
}
