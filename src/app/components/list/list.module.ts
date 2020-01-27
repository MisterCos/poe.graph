import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListDataViewComponent } from './list-data-view/list-data-view.component';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';


@NgModule({
  declarations: [
    ListComponent,
    ListDataViewComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    PrimengModule
  ]
})
export class ListModule { }
