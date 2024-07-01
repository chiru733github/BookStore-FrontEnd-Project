import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { GetBookComponent } from './Components/get-book/get-book.component';
import { authGuard } from './shared/authguard.guard';
import { CartsComponent } from './Components/carts/carts.component';
import { ViewAllOrdersComponent } from './Components/view-all-orders/view-all-orders.component';
import { OrderSuccessPageComponent } from './Components/order-success-page/order-success-page.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';

const routes: Routes = [
  {path:'loginandSignIn',component:LoginComponent},
  {path:'dashboard',component:DashBoardComponent,
    children:[
      {path:'',redirectTo:'/dashboard/books',pathMatch:'full'},
      {path:'books',component:GetAllBooksComponent},
      {path:'getBook/:bookId',component:GetBookComponent},
      {path:'ViewCart',component:CartsComponent,canActivate:[authGuard]},
      {path:'ViewOrders',component:ViewAllOrdersComponent},
      {path:'orderSuccess',component:OrderSuccessPageComponent},
      {path:'ViewWishList',component:WishListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
