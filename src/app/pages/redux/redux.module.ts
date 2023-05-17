import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReduxRoutingModule } from './redux-routing.module';
import { ReduxComponent } from './redux.component';


@NgModule({
  declarations: [
    ReduxComponent
  ],
  imports: [
    CommonModule,
    ReduxRoutingModule,
    SharedModule
  ]
})
export class ReduxModule { }
