import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { XLargeDirective } from './directives/x-large';
import { KsValidatorDirective, KsEqualValidatorDirective, KsValidationErrorMessage } from './directives/form-validator';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    KsValidatorDirective,
    KsEqualValidatorDirective,
    KsValidationErrorMessage,
    XLargeDirective
  ],
  exports: [
    KsValidatorDirective,
    KsEqualValidatorDirective,
    KsValidationErrorMessage,
    XLargeDirective
  ]
})
export class KsNgComponentsModule {
}

export * from './directives/x-large';
export * from './directives/form-validator';
