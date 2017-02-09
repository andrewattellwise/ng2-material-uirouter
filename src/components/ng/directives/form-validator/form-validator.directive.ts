import { Component, Directive, Attribute, Input, DoCheck, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl, AbstractControl, Validator, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

/**
 *
 */
@Directive({
  selector: '[ksValidate][formControlName],[ksValidate][formControl],[ksValidate][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => KsValidatorDirective), multi: true}]
})
export class KsValidatorDirective implements Validator, OnChanges {

  private valFn = Validators.nullValidator;

  private validators = {
    'email': (c: FormControl) => {
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      return c.value && c.value.length < 64 && EMAIL_REGEXP.test(c.value) ? null : {
          invalidEmail: true
        };
    },

    'password': (c: FormControl) => {
      return c.value && c.value.length > 6 && c.value.length < 31 ? null : {
          invalidPassword: true
        };
    },

    'integer': (c: FormControl) => {
      let INTEGER_REGEXP = /^\-?\d+$/;

      return c.value && INTEGER_REGEXP.test(c.value) ? null : {
        invalidInteger: true
      };
    },

    'name': (c: FormControl) => {
      let MAX_NAME = 64;
      return c.value && c.value.length < MAX_NAME ? null : {
          invalidName: true
        };
    },
  };

  constructor( @Attribute('ksValidate') public ksValidate: string) {
    console.debug('ksValidate: ' + this.ksValidate);
    this.valFn = this.validators[this.ksValidate];
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['ksValidate'];
    if (change) {
      this.valFn = this.validators[change.currentValue];
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}

/**
 *
 */
@Directive({
  selector: '[ksValidateEqual][formControlName],[ksValidateEqual][formControl],[ksValidateEqual][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => KsEqualValidatorDirective), multi: true}]
})
export class KsEqualValidatorDirective implements Validator {

  constructor( @Attribute('ksValidateEqual') public ksValidateEqual: string,
               @Attribute('ksTarget') public ksTarget: string) {
  }

  validate(c: AbstractControl): { [key: string]: any } {
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

/**
 *
 */
@Component({
  selector: 'ks-input-error',
  styles: [`
    p {
      display: block;
      color: red;
      position: absolute;
      font-size: 75%;
    }
  `],
  template: `
    <p *ngIf="errorMessage && (ksTarget.dirty || ksTarget.touched)">{{errorMessage}}</p>
  `
})
export class KsValidationErrorMessage implements DoCheck {

  private errorMessages = {
    required: 'This field is required.',
    min: 'This field value is too small.',
    max: 'This field value is too large.',
    minlength: 'This field value is too short.',
    maxlength: 'This field value is too long.',
    invalidEmail: 'Invalid email address format.',
    invalidInteger: 'Invalid integer value.',
    invalidName: 'Please provide a valid Name value.',
    invalidPassword: 'The password must have between 6 and 31 characters.',
    invalidUrl: 'Invalid URL. It should start with http://',
    invalidHttps: 'Invalid URL. It should start with https://',
  };

  private subscription: Subscription = null;
  public errorMessage: string = null;

  @Input()
  public ksTarget: AbstractControl;

  ngDoCheck(): void {
    // reset
    this.errorMessage = null;

    let errors = this.ksTarget.errors ? Object.keys(this.ksTarget.errors) : null;
    if (errors && errors.length) {
      let error = errors[0];
      this.errorMessage = this.errorMessages[error] || 'Invalid value.';
    }
  }
}
