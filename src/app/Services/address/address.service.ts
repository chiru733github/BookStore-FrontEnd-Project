import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  token: any;

  constructor(private http:HttpService) {
    this.token=localStorage.getItem('Token');
  }

  AddAddress(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostMethodreset('https://localhost:7103/api/Address/AddAddress', data, true, head);
  }
  getAllAddress(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.GetMethod(`https://localhost:7103/api/Address/GetAllAddressByUserId`,true,head);
  }
  EditAddress(id:any,reqdata:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutMethod(`https://localhost:7103/api/Address/EditAddress?AddressId=`+id,reqdata,true,head); 
  }
}
