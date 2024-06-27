import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }
  gettoken(){
    return !!localStorage.getItem('Token');
  }
}
