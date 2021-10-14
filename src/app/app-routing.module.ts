import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './home/home-page/home-page.component';
import {GalleryPageComponent} from './gallery/gallery-page/gallery-page.component';
import {ContactUsPageComponent} from './contact-us/contact-us-page/contact-us-page.component';
import {OrdersComponent} from './admin/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'gallery' , component: GalleryPageComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'contact', component: ContactUsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
