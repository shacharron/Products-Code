import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductmediatorComponent } from "./productmediator.component";
import { product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/services/product.service';
import { MockProducts } from 'src/app/services/Mock.service';
 
 
 

describe('ProductListComponent', () => {
  let component: ProductmediatorComponent;
  let productService: ProductService;

  beforeEach(() => {
    component = new ProductmediatorComponent(productService);
    component.Products = MockProducts;

  });

  describe('Check edit  value', () => {
    it('should be name  product  1 ', () => {
      component.EditProduct(1);
      expect(component.Product["name"]).toBe("product 1");
    });
  })

  describe('Check edit worng value', () => {
    it('should not be name product 1 ', () => {
      component.EditProduct(2);
      expect(component.Product["name"]).not.toBe("product 1");
    })
  })

  describe('Check sort data', () => {
    it('should sort by name ', () => {
      var result = MockProducts.sort(component.GetSortData("name"));
      expect(result[1]["name"]).toBe("product 10");
    })
  })

  describe('Check sort data', () => {
    it('should sort by price ', () => {
      var result = MockProducts.sort(component.GetSortData("price"));
      expect(result[1]["name"]).toBe("product 6");
    })
  })

})
