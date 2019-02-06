import { Injectable, InjectionToken,  Inject } from '@angular/core';
import { RETRIES } from './export';
import { interFace } from './products.module';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});
 

@Injectable({
  providedIn: 'root'
})
export class WrapperServiceService  {

protected name : number;
  constructor(@Inject(RETRIES) public ret: number) {
   alert(ret);

   

  }

}

@Injectable({
  providedIn: 'root'
})
export class CarService2 extends WrapperServiceService {
  constructor()  {  super(name);
    console.log(":b");
  }

}
