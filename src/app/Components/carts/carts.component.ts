import { Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressService } from '../../Services/address/address.service';
import { OrderService } from '../../Services/order/order.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit{
  
  Listofcarts:any;
  AddressForm!:FormGroup;
  flags:boolean=true;
  count:any;
  address:boolean=false;
  order:boolean=false;
  cartOrder:any;
  addressId:any;

  constructor(
    private cart:CartService,
    private formbuilder:FormBuilder,
    private addressService:AddressService,
    private orderService:OrderService
  ){}

  ngOnInit(): void {
    this.getCartById();
    this.AddressForm=this.formbuilder.group({
      fullName:[''],
      mobileNumber:[''],
      address:[''],
      city:[''],
      state:[''],
      type:['']
    });
  }
  
  getCartById(){
    this.cart.GetCartByUserId().subscribe((response)=>{
      console.log(response);
      this.Listofcarts=response;
      this.cart.CartsCount().subscribe((response:any)=>{
        console.log(response.data);
        this.count=response.data;
      })
    })
  }
  haveCart(){
    return this.Listofcarts !== undefined;
  }
  updateQuantity(cart:any){
    
    let data={
      cartId:cart.cartId,
      quantity:this.flags?(cart.quantity+1):(cart.quantity-1)
    }
    if(data.quantity>=1 && data.quantity<=5){
    this.cart.updateQuantity(data).subscribe((response:any)=>{
      console.log(response);
      this.getCartById();
    })
  }
  }
  remove(id:any){
    this.cart.removeCart(id).subscribe((response:any)=>{
      console.log(response);
      this.getCartById();
    })
  }
  AddAddress(){
    let data={
      fullName:this.AddressForm.value.fullName,
      mobileNumber:this.AddressForm.value.mobileNumber,
      address:this.AddressForm.value.address,
      city:this.AddressForm.value.city,
      state:this.AddressForm.value.state,
      type:this.AddressForm.value.type
    }
    this.addressService.AddAddress(data).subscribe((response:any)=>{
      console.log(response);
      this.addressId=response.data.addressId;
    })
  }
  checkout(cart:any){
    console.log(cart);
    this.cartOrder=cart;
  }
  placeOrder(){
    let data={
      cartId:this.cartOrder.cartId,
      addressId:this.addressId
    }
    this.orderService.PlaceOrder(data).subscribe((response:any)=>{
      console.log(response);
    })
  }
}
