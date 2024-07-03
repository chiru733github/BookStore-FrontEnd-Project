import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  token: any;

  constructor(private http:HttpService) {
    this.token=localStorage.getItem('Token');
  }

  AddFeedBack(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostMethodreset('https://localhost:7103/api/FeedBack/AddFeedBack', data, true, head);
  }
  GetAllFeedbackByBookId(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.http.GetMethod('https://localhost:7103/api/FeedBack/ViewAllFeedBacks', true, head);
  }
}
