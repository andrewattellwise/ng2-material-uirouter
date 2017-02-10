import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

/**
 *
 */
@Directive({
  selector: '[ksValidateEqual][formControlName],[ksValidateEqual][formControl],[ksValidateEqual][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: KsValidateEqualDirective, multi: true}]
})
export class KsValidateEqualDirective implements Validator {

  @Input() public ksValidateEqual: string;
  @Input() public ksTarget: string;

  public validate(c: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    let v = c.value;

    // control value (e.g. password)
    let e = c.parent.controls[this.ksValidateEqual];
    if (e) {
      // set on target
      if (this.ksTarget) {
        // value equal and reverse
        if (v === e.value) {
          delete e.errors['ksValidateEqual'];
          if (!Object.keys(e.errors).length) {
            e.setErrors(null);
          }
        } else {
          // value not equal
          e.setErrors({
            ksValidateEqual: false
          });
        }
      } else {
        // value not equal
        if (v !== e.value) {
          return {
            ksValidateEqual: false
          };
        }
      }
    }
    return null;
  }
}
