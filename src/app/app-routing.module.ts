import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ManagePostComponent} from './manage-post/manage-post.component';
import {OrdersComponent} from './orders/orders.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {UpdatePostComponent} from './update-post/update-post.component';
const routes: Routes = [
  { path: '', redirectTo:'manage-posts', pathMatch: 'full'},
  {path: 'manage-posts', component: ManagePostComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'manage-posts/update-post', component: UpdatePostComponent},
  {path: 'change-password', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
