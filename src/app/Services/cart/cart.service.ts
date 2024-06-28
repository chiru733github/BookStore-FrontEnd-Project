import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token:any
  constructor(private http:HttpService) { this.token=localStorage.getItem('Token') }
  AddCart(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostMethodreset(`https://localhost:7103/api/Cart/AddBookToCart?bookId=`+data.bookId,{},true,head);
    }
  GetCartByUserId()
  {
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.GetMethod(`https://localhost:7103/api/Cart/GetAllCartsByUserId`,true,head);
  }
  CartsCount(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.GetMethod(`https://localhost:7103/api/Cart/NoofCartCountByUserId`,true,head);
  }
  updateQuantity(data:any){
    let head={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutMethod(`https://localhost:7103/api/Cart/UpdateQuantity`,data,true,head);
  }
  removeCart(data:any){
    let head={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.DeleteMethod(`https://localhost:7103/api/Cart/RemoveBookFromCart?cartId=`+data,true,head);
  }
}
