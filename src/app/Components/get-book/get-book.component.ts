import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrl: './get-book.component.scss'
})
export class GetBookComponent implements OnInit{
  bookObject:any;
  id:any;
  constructor(private book:BookService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['bookId'];
    this.GetBook(this.id);
  }
  GetBook(id:any){
    this.book.getById(id).subscribe((response:any)=>{
      console.log(this.id);
      console.log(response);
      this.bookObject=response.data;
    })
  }
}
