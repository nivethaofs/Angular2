import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ReviewComponent } from './review/review.component';
import { CommentsComponent } from './comments/comments.component';
import { HistoryofbookingsComponent } from './historyofbookings/historyofbookings.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login.service';
import { HttpModule } from '@angular/http';
import { BookingdateComponent } from './bookingdate/bookingdate.component';
import { CityComponent } from './city/city.component';
import { SignupService } from './signup.service';
import { CityService } from './city.service';
import { HotelService } from './hotel.service';
import { HomeComponent } from './home/home.component';
import { RoomService } from './rooms.service';
import { HistoryofBookingService } from './historyofbookings.service';
import { CommentsService } from './comments.service';
import { HotelReview } from './review.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HotelComponent,
    RoomsComponent,
    ReviewComponent,
    CommentsComponent,
    HistoryofbookingsComponent,
    BookingdateComponent,
    CityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, SignupService, CityService, HotelService, RoomService, HistoryofBookingService, CommentsService, HotelReview],
  bootstrap: [AppComponent]
})
export class AppModule { }
