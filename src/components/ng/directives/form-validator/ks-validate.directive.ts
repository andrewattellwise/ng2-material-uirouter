import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, FormControl, AbstractControl, Validator, Validators } from '@angular/forms';

/**
 *
 */
@Directive({
  selector: '[ksValidate][formControlName],[ksValidate][formControl],[ksValidate][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: KsValidateDirective, multi: true}]
})
export class KsValidateDirective implements Validator, OnChanges {

  @Input() public ksValidate: string;

  private valFn = Validators.nullValidator;

  private validators = {
    email: (c: FormControl) => {
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      return c.value && c.value.length < 64 && EMAIL_REGEXP.test(c.value) ? null : {
          invalidEmail: true
        };
    },

    password: (c: FormControl) => {
      return c.value && c.value.length > 6 && c.value.length < 31 ? null : {
          invalidPassword: true
        };
    },

    integer: (c: FormControl) => {
      let INTEGER_REGEXP = /^\-?\d+$/;

      return c.value && INTEGER_REGEXP.test(c.value) ? null : {
        invalidInteger: true
      };
    },

    name: (c: FormControl) => {
      let MAX_NAME = 64;
      return c.value && c.value.length < MAX_NAME ? null : {
          invalidName: true
        };
    },
  };

  public ngOnChanges(changes: SimpleChanges): void {
    const change = changes['ksValidate'];
    if (change) {
      // console.debug('ksValidate.ngOnChanges: ' + change.currentValue);
      this.valFn = this.validators[change.currentValue];
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  public validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}
