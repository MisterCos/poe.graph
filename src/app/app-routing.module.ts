import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WellcomeComponent } from './components/commons/wellcome/wellcome.component';
import { TradeComponent } from './components/trade/trade.component';


const routes: Routes = [
  {
    path: 'home',
    component: WellcomeComponent
  },
  {
    path: 'trade',
    component: TradeComponent
  },
  {
    path:'list',
    loadChildren:'./components/list/list.module#ListModule'
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
