import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { MaskAccountPipe } from '../components/pipes/mask-account-pipe';

@NgModule({

  imports: [
    CommonModule,
    MaskAccountPipe
  ],

  exports: [
    CommonModule,
    MaskAccountPipe
  ],

  providers: [
    CurrencyPipe
  ]

})

export class SharedModule {}