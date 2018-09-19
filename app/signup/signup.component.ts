import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css']
})
export class SignupComponent implements OnInit {
  public alertMessage : String;
  constructor(private signupService : SignupService, private router : Router) { }

  ngOnInit() {
  }
  onSubmit(userDetails) {
    console.log(userDetails);
    this.signupService.SignupSubmission(userDetails).subscribe(
      res => {
        this.successResponse(res);
      },
      err => {
        this.alertMessage ="Oops Server Error!";
      }
    );
  }
  successResponse(response){
    console.log(response);
    console.log("Successfully signed up");
    alert("You have been registered successfully");
    this.router.navigate(['login']);
  }
}
