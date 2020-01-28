import { NgModule } from '@angular/core';
import {ColorPickerModule} from 'primeng/colorpicker';
import {MegaMenuModule} from 'primeng/megamenu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {DataViewModule} from 'primeng/dataview';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';


const primeModules = [
  ColorPickerModule,
  MegaMenuModule,
  ContextMenuModule,
  MenubarModule,
  TabMenuModule,
  DataViewModule,
  InputTextModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  TableModule
]

@NgModule({
  declarations: [],
  imports: [primeModules],
  exports: [primeModules]
})
export class PrimengModule { }
