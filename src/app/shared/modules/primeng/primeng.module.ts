import { NgModule } from '@angular/core';
import {ColorPickerModule} from 'primeng/colorpicker';

const primeModules = [
  ColorPickerModule
]

@NgModule({
  declarations: [],
  imports: [primeModules],
  exports: [primeModules]
})
export class PrimengModule { }
