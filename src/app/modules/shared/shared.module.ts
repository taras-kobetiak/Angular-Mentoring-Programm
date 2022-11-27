import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingBlockComponent } from './loading-block/loading-block.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    LoadingBlockComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    LoadingBlockComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
