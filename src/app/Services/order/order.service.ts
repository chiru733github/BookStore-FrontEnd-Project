import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  token: any;

  constructor(private http:HttpService) {
    this.token=localStorage.getItem('Token');
  }

  PlaceOrder(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostMethodreset('https://localhost:7103/api/Orders/AddOrder', data, true, head);
  }
}
