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

  verifyLoginDetails(Details: any) {
    return this.http.post<any>(environment.apiBaseUrl+'/',Details);
  }


  getBooks(){
    return this.http.get<any>(environment.apiBaseUrl+'/books');

  }

  addBooks(BookDetails: any){
    return this.http.post<any>(environment.apiBaseUrl+'/book/add',BookDetails);

  }
  getProfileDetails(email: any){
    console.log("http-profile-email:",email)
    return this.http.get<any>(environment.apiBaseUrl+`/profile/${email}`);

  }
}
// login(data):Observable<any>{
//   console.log("I am Server");
//   return this.http.post<any>(environment.apiBaseUrl+'/',Details);
//}