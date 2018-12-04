import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/services/product.service';
import { SimpleChanges } from "@angular/core";
import { OnChanges } from "@angular/core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  @Input() Products: product[];
  @Output() Edit = new EventEmitter();
  isFinishLoad: boolean = false;
  idClick: number = -1;
  constructor() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.Products && this.Products.length == 0) {
      this.isFinishLoad = true;
    }
    else
    this.isFinishLoad = false;
  }
  ngOnInit(): void {
    this.isFinishLoad = false;
  }

  EditProduct(id) {
    this.idClick=id;
    this.Edit.emit(id);
  }

}
