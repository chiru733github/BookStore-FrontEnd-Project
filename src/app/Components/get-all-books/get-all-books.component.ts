import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrl: './get-all-books.component.scss'
})
export class GetAllBooksComponent implements OnInit{
  ListofBooks:any;
  constructor(private book:BookService){}
  ngOnInit(): void {
    this.GetAllBook();
  }
  GetAllBook(){
    this.book.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.ListofBooks=response;
    })
  }
  ViewBook(Book:any){

  }
}
