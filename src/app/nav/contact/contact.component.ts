import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
employee:any;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.employee=this.userservice.getData().subscribe((data)=>{this.employee=data;});
  }

}
