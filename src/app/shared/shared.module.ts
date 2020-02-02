import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DropDownComponent } from './form-controls/drop-down/drop-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './form-controls/text-input/text-input.component';
import { PaginatePipe } from './paginate.pipe';

@NgModule({
  declarations: [
    DropDownComponent,
    TextInputComponent,
    PaginatePipe
  ],
  exports: [
    DropDownComponent,
    TextInputComponent,
    FormsModule,
    ReactiveFormsModule,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
