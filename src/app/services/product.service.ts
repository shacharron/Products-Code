import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = "https://msbit-exam-products-store.firebaseio.com/products.json";
  constructor(private http: HttpClient) { }

  Get(): Observable<product[]> {
    return this.http.get<product[]>(this.url)
      .pipe(map(response => response)
      );  
  }
}
