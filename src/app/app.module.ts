import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Prime Ng module
import { PrimengModule } from './shared/modules/primeng/primeng.module';
import { NavbarComponent } from './components/commons/navbar/navbar.component';
import { WellcomeComponent } from './components/commons/wellcome/wellcome.component';

// End prime ng
import { HttpClientModule } from '@angular/common/http';
import { TradeComponent } from './components/trade/trade.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WellcomeComponent,
    TradeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
