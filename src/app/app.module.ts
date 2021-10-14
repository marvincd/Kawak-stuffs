import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationShellComponent } from './navigation-shell/navigation-shell/navigation-shell.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { GalleryPageComponent } from './gallery/gallery-page/gallery-page.component';
import { ContactUsPageComponent } from './contact-us/contact-us-page/contact-us-page.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { UpdatePostsComponent } from './admin/update-posts/update-posts.component';
import { ManagePostsComponent } from './admin/manage-posts/manage-posts.component';
import { OrdersComponent } from './admin/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationShellComponent,
    HomePageComponent,
    GalleryPageComponent,
    ContactUsPageComponent,
    AdminPageComponent,
    UpdatePostsComponent,
    ManagePostsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
