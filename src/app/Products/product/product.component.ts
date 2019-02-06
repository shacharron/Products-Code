import { Component, OnInit, Input, OnChanges, Inject, Self } from '@angular/core';
import { product } from 'src/app/Models/Product';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductValidators } from 'src/app/Validators/Product.Validators';
import { WrapperServiceService, BROWSER_STORAGE, CarService2 } from '../wrapper-service.service';
import { RETRIES } from '../export';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers :[
   // {provide : WrapperServiceService , useClass : CarService2},
   // WrapperServiceService,
   //  {provide : RETRIES , useValue: 5}
   ],
 
})
export class ProductComponent implements OnInit,OnChanges {


  @Input() Product: product;
  form: FormGroup;
   Showsuccess : boolean =false;
  constructor(public fb: FormBuilder,   private wrapperServiceService:WrapperServiceService) { }
 
  ngOnInit() {
     
  }

  ngOnChanges() {
    this.Showsuccess = false;
    if (typeof this.Product !== "undefined" && this.Product !== null) {
      this.form = this.fb.group({
        thumbnailUrl: [this.Product.thumbnailUrl],
        name: [this.Product.name, ProductValidators.CustomRequired],
        description: [this.Product.description, ProductValidators.CustomRequired],
        price: [this.Product.price, [ProductValidators.JustNumbers,ProductValidators.CustomRequired]],
      });
    }
  }

  get name() {
    return this.form.get('name');
  }
  get description() {
    return this.form.get('description');
  }
  get price() {
    return this.form.get('price');
  }

  onSubmit() {

    if (this.form.valid) {
      console.log('form submitted');
      this.Showsuccess = true;
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        this.form.get(field).valid ? false : this.form.get(field).markAsDirty();
      }
    });
  }
}
