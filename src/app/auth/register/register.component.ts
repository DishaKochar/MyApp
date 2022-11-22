import { PasswordValidators } from './../PasswordValidators';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl,FormGroup,Validators,FormGroupDirective,NgForm} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private toastr: ToastrService,private user:HttpService ) { } //,private user:HttpService

  register = new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'mobilenumber':new FormControl('',[Validators.required,Validators.minLength(10)]),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'password': new FormControl
      (
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
            requiresDigit: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
            requiresUppercase: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
            requiresLowercase: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), {
            requiresSpecialChars: true
          })
        ])
      ),
    //'password': new FormControl('',[Validators.required,Validators.minLength(4)]),
    'confirmpassword': new FormControl('',[Validators.required,Validators.minLength(4)]),
    'address':new FormControl('',[Validators.required,Validators.minLength(10)]),
  });

  get name()
  {
    return this.register.get('name')
  }

  get mobilenumber()
  {
    return this.register.get('mobilenumber')
  }

  get email()
  {
    return this.register.get('email')
  }
  get password()
  {
    return this.register.get('password')
  }
  get confirmpassword()
  {
    return this.register.get('confirmpassword')
  }
  get address()
  {
    return this.register.get('address')
  }

  // regDetails(regDetails: any){
  //   this.user.addRegDetails(regDetails).subscribe(res=>{
  //     console.log("register response for post",res);
  //   })
  // }


  submit(){

    let obj = {
      name:this.name!.value,
      mobilenumber:this.mobilenumber!.value,
      email:this.email!.value,
      password:this.password!.value,
      confirmpassword: this.confirmpassword!.value,
      address:this.address!.value,
    }

    this.user.addRegDetails(obj).subscribe(res=>{
      console.log("register response for post",res);
    })
    
    if(obj.password==obj.confirmpassword){
      localStorage.setItem('user1',JSON.stringify(obj))
      this.toastr.success("You have successfully registered ! \n Login to get started!!")
      this.router.navigateByUrl('')
    }
    else{
      this.toastr.error("Password and Confirm Password are different. ")
    }
  }

  onClick(){
    this.router.navigateByUrl('');
  }

  
  ngOnInit(): void {
  }

}