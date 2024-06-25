import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpService) { }

  Login(data: any){
    let header={
      head: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpservice.PostMethod(`https://localhost:7103/api/Users/Login`,data,false,header);
  }

  register(data:any){
    let header={
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpservice.PostMethod(`https://localhost:7103/api/Users/SignIn`,data,false,header);
  }
}
