import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './Components/login/login.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import {MatIconModule} from '@angular/material/icon';
import { GetBookComponent } from './Components/get-book/get-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { CartsComponent } from './Components/carts/carts.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { OrderSuccessPageComponent } from './Components/order-success-page/order-success-page.component';
import { ViewAllOrdersComponent } from './Components/view-all-orders/view-all-orders.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { ProfileComponent } from './Components/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    GetAllBooksComponent,
    GetBookComponent,
    CartsComponent,
    OrderSuccessPageComponent,
    ViewAllOrdersComponent,
    WishListComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,MatRadioModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
