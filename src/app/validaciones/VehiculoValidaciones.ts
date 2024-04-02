import { AbstractControl } from "@angular/forms";
import { ValidatorFn } from "@angular/forms";
import { ValidationErrors} from "@angular/forms";

export function validadorCodigo(): ValidatorFn{
    return (control: AbstractControl):ValidationErrors|null =>{
      const codigoV = /^\d{4}$/;
      let value = control.value;
      if(codigoV.test(value)){
        return null;
      }
      return {'codigoValidated': true};
  }
  }
  