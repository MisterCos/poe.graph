import { NgModule } from '@angular/core';
import {ColorPickerModule} from 'primeng/colorpicker';
import {MegaMenuModule} from 'primeng/megamenu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';


const primeModules = [
  ColorPickerModule,
  MegaMenuModule,
  ContextMenuModule,
  MenubarModule,
  TabMenuModule

]

@NgModule({
  declarations: [],
  imports: [primeModules],
  exports: [primeModules]
})
export class PrimengModule { }
