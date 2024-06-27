import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { response } from 'express';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit{
  Listofcarts:any;
  constructor(private cart:CartService){}
  ngOnInit(): void {
    this.getCartById();
  }
  getCartById(){
    this.cart.GetCartByUserId().subscribe((response)=>{
      console.log(response);
      this.Listofcarts=response;
    })
  }
  haveCart(){
    return this.Listofcarts !== undefined;
  }
  remove(id:any){

  }
}
