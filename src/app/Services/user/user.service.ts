import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  constructor(private httpservice:HttpService) { this.token=localStorage.getItem('Token'); }

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
  GetById(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.GetMethod(`https://localhost:7103/api/Users/FetchById`,true,head);
  }
  UpdateProfile(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.PutMethod(`https://localhost:7103/api/Users/UpdateDetails`,data,true,head);
  }
}
