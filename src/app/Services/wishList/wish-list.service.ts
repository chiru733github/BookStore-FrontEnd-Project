import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  token:any;
  constructor(private http:HttpService) 
  {
    this.token=localStorage.getItem('Token');
  }
  AddWishList(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostMethodreset(`https://localhost:7103/api/WishList/AddBookToWishList?bookId=`+data.bookId,{},true,head);
    }
    GetWishListByUserId()
    {
      let head={
        headers: new HttpHeaders({
          'content-type':'application/json',
          'Authorization':'Bearer '+this.token
        })
      }
      return this.http.GetMethod(`https://localhost:7103/api/WishList/GetAllWishListByUserId`,true,head);
    }
    removeWishList(data:any)
    {
      let head={
        headers: new HttpHeaders({
          'content-type':'application/json',
          'Authorization':'Bearer '+this.token
        })
      }
      return this.http.DeleteMethod(`https://localhost:7103/api/WishList/RemoveBookFromWishList?WishListId=`+data.wishListId,true,head);
    }
}
