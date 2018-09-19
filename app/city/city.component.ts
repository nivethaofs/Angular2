import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['../app.component.css']
})
export class CityComponent implements OnInit {
  alertMessage : String;
  selectedCityId : String;
  public city ;

  constructor(private cityService : CityService, private router : Router, private route : ActivatedRoute ) { }

  ngOnInit() {  
   
    this.cityService.getAllcities()
    .subscribe(
      res => {
        this.successResponse(res);
      },
      err => {
        this.alertMessage ="Oops Server Error!";
      }
    );
  }

  successResponse(res) {
    console.log(res);
    this.city = res;
  }
  selectCity(id) {
    this.cityService.setHotelid(id);
    this.selectedCityId = id; 
  }
  signout() { 
    this.router.navigate(['login']);
    sessionStorage.clear();
  }
  history() {
    this.router.navigate(['/home/history']);
  }
}
