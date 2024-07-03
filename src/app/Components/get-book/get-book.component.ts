import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../Services/cart/cart.service';
import { WishListService } from '../../Services/wishList/wish-list.service';
import { FeedbackService } from '../../Services/feedback/feedback.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrl: './get-book.component.scss'
})
export class GetBookComponent implements OnInit{
  bookObject:any;
  id:any;
  rating:any;
  comment:any;
  ListofFeedbacks:any;
  constructor(private book:BookService,
              private route: ActivatedRoute,
              private router:Router,
              private cart:CartService,
              private wish:WishListService,
              private Feedback:FeedbackService)
  { 
    this.id = this.route.snapshot.params['bookId'];
  }
  ngOnInit(): void {
    this.getByBookId();
    this.GetAllFeedBack();
  }
  getByBookId(){
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
  AddFeedBack(){
    let data={
      comment:this.comment,
      rating: this.rating,
      bookId:this.id
    }
    this.Feedback.AddFeedBack(data).subscribe((result:any)=>{
      console.log(result);
      this.GetAllFeedBack();
      this.getByBookId();
    })
  }
  GetAllFeedBack(){
    this.Feedback.GetAllFeedbackByBookId().subscribe((response:any)=>{
      console.log(response);
      this.ListofFeedbacks=response.data;
  })
  }
  haveFeedbacks(): boolean{
    return this.ListofFeedbacks !== undefined;
  }
  hasBook(): boolean{
    return this.bookObject !== undefined;
  }
  AddToWishList(){
    if(!localStorage.getItem('Token'))
      {
        this.router.navigate(['/loginandSignIn']);
        return 'login';
      }
    else{
    let data={
      bookId:this.id
    }
    return this.wish.AddWishList(data).subscribe((response:any)=>{
      console.log(response);
    })
    }
  }
}
