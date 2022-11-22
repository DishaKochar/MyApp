import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginForm } from './auth';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router,private toastr: ToastrService){} //,private toastr: ToastrService
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {

      
      
      let data: LoginForm[]= [
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
      

      let user = JSON.parse(localStorage.getItem('user1') || '{}');
      for (let id =0; id <2; id++) {
  
        if(user.email == data[id].email && user.password == data[id].password ){
          //localStorage.setItem('ans','true')
          //this.router.navigateByUrl('cart')

          this.toastr.success("You have successfully logged in !");
            return true;
        }
      }
      // localStorage.clear();
      //localStorage.setItem('ans','false')
      //alert("Invalid email or password !! \nPlease enter valid details.")

      this.toastr.error("Invalid email or password !! \nPlease enter valid details.")
      this.router.navigateByUrl('')
      return false;
    }
  
}
