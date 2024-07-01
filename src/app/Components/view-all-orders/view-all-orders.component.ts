import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../Services/order/order.service';

@Component({
  selector: 'app-view-all-orders',
  templateUrl: './view-all-orders.component.html',
  styleUrl: './view-all-orders.component.scss'
})
export class ViewAllOrdersComponent implements OnInit{
  ListofOrders:any;
  constructor(private order:OrderService){}
  ngOnInit(): void {
    this.GetAllOrders();
  }
  GetAllOrders(){
    this.order.GetAllOrdersById().subscribe((response:any)=>{
      console.log(response);
      this.ListofOrders=response.data;
    })
  }
  haveOrders():boolean{
    return this.ListofOrders!==undefined;
  }
}
