import { Component, OnInit } from '@angular/core';
import { UserService } from './nav/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  postId:any;
  constructor(private userservice: UserService){}
  ngOnInit(){
    this.postId=this.userservice.postData().subscribe((data)=>{this.postId=data.id;});
  }
}
