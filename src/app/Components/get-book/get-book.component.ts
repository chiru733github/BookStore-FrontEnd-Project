import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../Services/cart/cart.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrl: './get-book.component.scss'
})
export class GetBookComponent implements OnInit{
  bookObject:any;
  id:any;
  constructor(private book:BookService,private route: ActivatedRoute,private router:Router,private cart:CartService)
  { 
    this.id = this.route.snapshot.params['bookId'];
  }
  ngOnInit(): void {
    this.book.getById(this.id).subscribe((response:any)=>{
      console.log(response);
      this.bookObject=response.data;
    })
  }
  AddToCart(){
    if(!localStorage.getItem('Token'))
      {
        this.router.navigate(['/loginandSignIn']);
      }
    else{
    let data={
      bookId:this.id
    }
    this.cart.AddCart(data).subscribe((response)=>{
      console.log(response);
    })
  }
  }
  hasBook(): boolean{
    return this.bookObject !== undefined;
  }
}
