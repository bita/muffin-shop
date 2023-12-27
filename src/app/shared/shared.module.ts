import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from '../directives/dropdown.directive';
import { ModalComponent } from './modal/modal.component';
import { LoadingSpinnerComponent } from './spinner/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [DropdownDirective, LoadingSpinnerComponent, ModalComponent],
  imports: [CommonModule],
  exports: [
    DropdownDirective,
    LoadingSpinnerComponent,
    ModalComponent,
    CommonModule,
  ],
})
export class SharedModule {}
