import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list.component'
import { ListDataViewComponent } from './list-data-view/list-data-view.component';

const routes: Routes = [
  {
    path:'',
    component:ListComponent,
    children:[
      {
        path:'dataview',
        component:ListDataViewComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
