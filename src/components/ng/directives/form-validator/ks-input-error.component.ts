import { Component, Directive, Attribute, Input, DoCheck, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl, AbstractControl, Validator, Validators } from '@angular/forms';

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
export class KsErrorMessageComponent implements DoCheck {

  public errorMessage: string = null;

  @Input() public ksTarget: AbstractControl;

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

  public ngDoCheck(): void {
    // reset
    this.errorMessage = null;

    let errors = this.ksTarget.errors ? Object.keys(this.ksTarget.errors) : null;
    if (errors && errors.length) {
      let error = errors[0];
      this.errorMessage = this.errorMessages[error] || 'Invalid value.';
    }
  }
}
