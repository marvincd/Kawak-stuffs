import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { OrdersComponent } from './orders/orders.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavigationComponent,
    ManagePostComponent,
    OrdersComponent,
    UpdatePostComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
