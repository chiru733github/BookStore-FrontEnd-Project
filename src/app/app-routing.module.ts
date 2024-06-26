import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { GetBookComponent } from './Components/get-book/get-book.component';

const routes: Routes = [
  {path:'loginandSignIn',component:LoginComponent},
  {path:'dashboard',component:DashBoardComponent,
    children:[
      {path:'',redirectTo:'/dashboard/books',pathMatch:'full'},
      {path:'books',component:GetAllBooksComponent},
      {path:'getBook/:bookId',component:GetBookComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
