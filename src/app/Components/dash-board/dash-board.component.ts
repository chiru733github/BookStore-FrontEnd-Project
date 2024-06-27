import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { response } from 'express';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent implements OnInit {
  countCart:any;
  constructor(private cart:CartService){}
  ngOnInit(): void {
    this.NoOfCarts();
  }
  NoOfCarts(){
    this.cart.CartsCount().subscribe((response:any)=>{
      console.log(response);
      this.countCart=response.data;
    })
  }
  searchingBook($event:any){}
  countpresent(){
    return this.countCart>=1;
  }
}
