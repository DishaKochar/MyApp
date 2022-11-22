import { Component, Input, OnInit } from '@angular/core';
import { LoginForm} from "../auth/auth";
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  constructor() { }
  @Input() data: LoginForm[]= [
    {
      name:'Disha Kochar',
      mobilenumber:'8078607585',
      email: 'disha@gmail.com',
      password:'1234',
      address:'Sanganeri Gate'
    },
    {
      name:'Harshita Singh',
      mobilenumber:'8078607585',
      email: 'happy@gmail.com',
      password:'4321',
      address:'Durgapura'
    } 
  ]


  
  ngOnInit(): void {
  }

}
