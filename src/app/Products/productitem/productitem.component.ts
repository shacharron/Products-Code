import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { product } from "src/app/Models/Product";

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input()  Product : product ;
  @Input()  idClick : number ;
  constructor() { }

  ngOnInit() {

  }

}
