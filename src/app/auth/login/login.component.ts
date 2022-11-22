import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl,FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form: LoginForm ={
  //   name: '',
  //   mobilenumber: '',
  //   email: '',
  //   password:'',
  //   address:''
  // };

  myGroup = new FormGroup({
    'name': new FormControl(''),
    'mobilenumber':new FormControl(''),
    'email':new FormControl('',[Validators.required]),
    'password': new FormControl('',[Validators.required]),
    'address':new FormControl(''),
});
// 'email':new FormControl('',[Validators.required,Validators.email]),
// 'password': new FormControl('',[Validators.required,Validators.minLength(4)]),
  get email()
  {
    return this.myGroup.get('email')
  }

  get password()
  {
    return this.myGroup.get('password')
  }


  constructor(private router: Router){ }

  ngOnInit(): void {
    
  }

  submit(){
    let obj = {
      email: this.email!.value,
      password:this.password!.value
    }
    localStorage.setItem('user1',JSON.stringify(obj))
    this.router.navigateByUrl('books')
  }

  onClick(){
    this.router.navigateByUrl('register');
  }
}
