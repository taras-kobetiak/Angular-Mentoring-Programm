import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingBlockComponent } from './loading-block/loading-block.component';




@NgModule({
  declarations: [
    LoadingBlockComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [LoadingBlockComponent]
})
export class SharedModule { }
