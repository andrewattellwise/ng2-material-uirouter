import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { XLargeDirective } from './directives/x-large';
import { KsValidateDirective, KsValidateEqualDirective, KsErrorMessageComponent } from './directives/form-validator';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    KsValidateDirective,
    KsValidateEqualDirective,
    KsErrorMessageComponent,
    XLargeDirective
  ],
  exports: [
    KsValidateDirective,
    KsValidateEqualDirective,
    KsErrorMessageComponent,
    XLargeDirective
  ]
})
export class KsNgComponentsModule {
}

export * from './directives/x-large';
export * from './directives/form-validator';
