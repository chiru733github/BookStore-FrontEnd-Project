import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http:HttpService) { }
  getAllBooks(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.http.GetMethodreset(`https://localhost:7103/api/Book/GetAllBooks`,false,head);
  }
  getById(data:any){
    let head={
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.http.GetMethodreset(`https://localhost:7103/api/Book/GetByBookId?id=`+data,false,head)
  }
}
