import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
employee:any;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.employee=this.userservice.getData().subscribe((data)=>{this.employee=data;});
  }

}
