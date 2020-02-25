import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
employee:any;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.employee=this.userservice.getData().subscribe((data)=>{this.employee=data;});
  }

}
