import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { PannelComponent } from './Products/pannel/pannel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductitemComponent } from './Products/productitem/productitem.component';
import { ProductsModule } from './Products/products.module';
 

@NgModule({
  declarations: [
    AppComponent,


  
  ],
  imports: [
    ProductsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
