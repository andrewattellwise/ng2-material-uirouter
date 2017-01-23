import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XLargeDirective } from './directives/x-large';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    XLargeDirective,
  ],
  exports: [
    XLargeDirective
  ]
})
export class ExNgComponentsModule {
}

export * from './directives/x-large';
