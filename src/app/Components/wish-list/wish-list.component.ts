import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../Services/wishList/wish-list.service';
import { response } from 'express';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit{
  WishLists:any;
  constructor(private wish:WishListService){}
  ngOnInit(): void {
    this.GetAllWishList();
  }
  GetAllWishList(){
    this.wish.GetWishListByUserId().subscribe((response:any)=>{
      console.log(response);
      this.WishLists=response.data;
    })
  }
  removeWishList(Eachwish:any){
    this.wish.removeWishList(Eachwish).subscribe((response:any)=>{
      console.log(response);
      this.GetAllWishList();
    })
  }  
  haveWishList(){
    return this.WishLists !== undefined;
  }
}
