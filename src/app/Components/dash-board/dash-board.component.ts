import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent implements OnInit {
  countCart:any;
  constructor(private cart:CartService,private route:Router){}
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
  logOut(){
    localStorage.clear();
    this.route.navigate(['/loginandSignIn']);
  }
  gotoHome(){
    this.route.navigateByUrl('/dashboard');
  }
}
