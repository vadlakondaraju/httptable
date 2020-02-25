import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
employee:any;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.employee=this.userservice.getData().subscribe((data)=>{this.employee=data;});
  }

}
