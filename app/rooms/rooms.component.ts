import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { RoomService } from '../rooms.service';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'room-component',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @Input() selectedHotelid : String;
  public rooms : String;
  public id;
  public userdetails ;
  public checkin;
  public checkout;
  public userid;
  public data;

  constructor(private roomService : RoomService, private hotelService : HotelService ) { }

  ngOnInit() {
    
  }
  ngOnChanges(changes : SimpleChanges) {
    for(let property in changes) {
      this.id = changes[property].currentValue;
      this.roomService.getAllRooms(this.hotelService.getHotelId()).subscribe(
        res => {
          this.successResponse(res);
        },
        err => {
          this.errorMessage (err);
        }
      );
    }
  }
  successResponse(res) {
    console.log(res);
    this.rooms = res;
  }
  errorMessage(err) {
    console.log(err);
  }
  bookroom(id) {
    let Details = sessionStorage.getItem("userDetails");
    this.userdetails = JSON.parse(Details);
    this.userid = this.userdetails.uid;
    this.checkin = sessionStorage.getItem("usercheckin");
    this.checkout = sessionStorage.getItem("usercheckout");
    this.data = {
      checkin: this.checkin,
      checkout: this.checkout,
      user: {
        uid: this.userid
      },
      room: {
        id: id
      },
      status: "Booked"
    }
    console.log(this.data);
    this.roomService.bookRoom(this.data)
    .subscribe(
      res => {
        this.bookingSuccess(res);
      },
      err => {
        this.bookingError(err);
      }
    );
  }
  bookingSuccess(res) {
    console.log("Booked Successfully!!");
    alert("Successfully Booked!!");
  }
  bookingError(err) {
    console.log("Error in Booking!!");
  }
  
}
