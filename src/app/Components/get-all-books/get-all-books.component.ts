import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrl: './get-all-books.component.scss'
})
export class GetAllBooksComponent implements OnInit{
  ListofBooks:any;
  constructor(private book:BookService,private router:Router){}
  ngOnInit(): void {
    this.GetAllBook();
  }
  GetAllBook(){
    this.book.getAllBooks().subscribe((response:any)=>{
      console.log(response);
      this.ListofBooks=response;
    })
  }
  viewBook(Book:any){
    this.router.navigate(['dashboard/getBook',+Book.bookId]);
  }
  BooksPresented() : boolean{
    return this.ListofBooks !== undefined;
  }
}
