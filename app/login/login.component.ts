import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {
  public alertMessage : String;
  userResponse : String ;
  constructor(private loginService : LoginService,private router : Router) { }

  ngOnInit() {
  }
  login(loginDetails) {
    console.log(loginDetails);
    this.loginService.loginAuthentication(loginDetails)
    .subscribe(
      res => {
        this.successResponse(res);
      },
      err => {
        this.alertMessage ="Oops Server Error!";
      }
    );   
  }
  successResponse(res){
    alert("Welcome!!");
    console.log(JSON.parse(res));
   this.userResponse = JSON.parse(res);
    sessionStorage.setItem("userDetails",res);
    this.router.navigate(["home"]);
  }
}
