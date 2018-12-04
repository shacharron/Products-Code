import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/Models/Product';


@Component({
  selector: 'app-productmediator',
  templateUrl: './productmediator.component.html',
  styleUrls: ['./productmediator.component.css']
})
export class ProductmediatorComponent implements OnInit {
  Products: product[];
  Product: product;
  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.ProductService.Get().subscribe(
      result => this.Products = result
    );
  }

  EditProduct(id) {
    let obj = this.Products.find(obj => obj.id === id);
    this.Product = obj;
   
  }
  GetFilterData(data) {
    this.ProductService.Get()
      .subscribe(res => {
        this.Products = this.filterByValue(res, data);
         // clear the edit component 
       this.Product= null;
      });
  }



  private filterByValue(array, string) {
    return array.filter(o =>
      Object.keys(o).some(k => o["name"].toLowerCase().includes(string.toLowerCase())
        || o["description"].toLowerCase().includes(string.toLowerCase())
      )
    );
  }

    GetSortData(data) {
      this.Products = this.Products.sort(this.sortByProperty(data));
  }
  private sortByProperty = function (property) {
    return function (x, y) {
      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
  };
}
