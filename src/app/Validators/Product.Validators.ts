import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";


export class ProductValidators {

    static CustomRequired(control: AbstractControl): ValidationErrors | null {
        return control.value ? null : { 'CustomRequired': true };
    }

    static JustNumbers(control: AbstractControl): ValidationErrors | null {
        if (control.value) {
            var reg = /^\d+$/;
            return reg.test(control.value) ? null :{ 'JustNumbers': true } ;
        }
    }
}