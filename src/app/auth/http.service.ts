import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = '${environment.apiUrl}/users';

  constructor(private http: HttpClient) { }

  addRegDetails(regDetails:any){
    // let payload: any={
    //   item: regDetails
    // }
    console.log(regDetails)
     return this.http.post<any>(environment.apiBaseUrl+'/register',regDetails);
  }
}