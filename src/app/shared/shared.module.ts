import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DropDownComponent } from './form-controls/drop-down/drop-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './form-controls/text-input/text-input.component';

@NgModule({
  declarations: [
    DropDownComponent,
    TextInputComponent
  ],
  exports: [
    DropDownComponent,
    TextInputComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
