
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './Products/productList/products.component';
import { ProductmediatorComponent } from './Products/productmediator/productmediator.component';
 


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 // { path: 'detail/:id', component: ProductsComponent },
  { path: 'Products', component: ProductmediatorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
