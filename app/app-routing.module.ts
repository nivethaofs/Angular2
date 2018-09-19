import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ReviewComponent } from './review/review.component';
import { CommentsComponent } from './comments/comments.component';
import { HistoryofbookingsComponent } from './historyofbookings/historyofbookings.component';
import { BookingdateComponent } from './bookingdate/bookingdate.component';
import { CityComponent } from './city/city.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path : '', redirectTo: 'login',pathMatch: 'full'},
    { path : 'login', component : LoginComponent },
    { path : 'signup', component : SignupComponent},
    { path : 'home', component : HomeComponent ,
        children : [
            { path : 'date', component : BookingdateComponent},
            { path : 'city', component :CityComponent ,
                children : [
                    { path : 'hotel', component : HotelComponent ,
                        children : [
                            { path : 'room' , component : RoomsComponent }
                        ]
                    },
                ]},
                    { path : 'history', component : HistoryofbookingsComponent },
                    { path : 'comments', component : CommentsComponent },
                    { path : 'review', component : ReviewComponent }
               
            
            
        ] 
    }
];
@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [RouterModule]
})
export class AppRoutingModule{}
export const routingComponent = [AppComponent]
