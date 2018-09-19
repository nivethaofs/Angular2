import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public userdetails;
  public userid;
  constructor(private commentsService : CommentsService) { }

  ngOnInit() {
  }
  submit(value,id) {
    
    console.log(value);
    let Details = sessionStorage.getItem("userDetails");
    let hotelid = sessionStorage.getItem("commentHotel");
    this.userdetails = JSON.parse(Details);
    this.userid = this.userdetails.uid;
    let data = {
      rating : value.rating,
      feedback : value.comment,
      user : {
          uid : this.userid,
      },
      hotel : {
          id :hotelid
      }
      
    }
    console.log(data);
    this.commentsService.Comments(data).subscribe(
      res => {
        this.commentssuccessResponse(res);
      },
      err => {
        this.commentserrorMessage(err);
      }
    );
  }
  commentssuccessResponse(res) {
    console.log("The comments response" + res);
    alert("Successfully posted your comment!!");
  }
  commentserrorMessage(err) {
    console.log("Error in posting your comment");
  }
}
