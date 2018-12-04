import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './Products/productList/products.component';
import { ProductComponent } from './Products/product/product.component';
import { ProductmediatorComponent } from './Products/productmediator/productmediator.component';
import { PannelComponent } from './Products/pannel/pannel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductitemComponent } from './Products/productitem/productitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    SidebarComponent,
    ProductComponent,
    ProductmediatorComponent,
    PannelComponent,
    ProductitemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
