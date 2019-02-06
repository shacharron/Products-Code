import { ProductValidators } from './../Validators/Product.Validators';
import { ProductitemComponent } from './productitem/productitem.component';
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './productList/products.component';

import { ProductComponent } from './product/product.component';
import { ProductmediatorComponent } from './productmediator/productmediator.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PannelComponent } from './pannel/pannel.component';
import { WrapperServiceService, CarService2, BROWSER_STORAGE } from './wrapper-service.service';
import { RETRIES } from './export';
import { HttpInterceptorService } from '../HttpInterceptorService';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
export class  interFace 
{
  public getDoIt () : void {};
}

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    ProductmediatorComponent
  ],
  providers :[
   {provide : HTTP_INTERCEPTORS , useClass : HttpInterceptorService, multi: true},
  // WrapperServiceService,
    {provide : RETRIES , useValue: 5}
  ],

  declarations: [
    ProductmediatorComponent,
    PannelComponent,
    ProductListComponent,
    ProductComponent,
    ProductitemComponent,
  ]
})
export class ProductsModule { }

 