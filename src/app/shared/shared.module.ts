import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBlockComponent } from './loading-block/loading-block.component';




@NgModule({
  declarations: [
    LoadingBlockComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    // BrowserAnimationsModule,

  ],
  exports: [LoadingBlockComponent]
})
export class SharedModule { }
