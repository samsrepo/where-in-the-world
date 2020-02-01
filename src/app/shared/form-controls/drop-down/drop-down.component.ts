import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownComponent),
      multi: true
    }
  ]
})
export class DropDownComponent implements ControlValueAccessor {

  dropOpen = false;

  @Input() values: string[];

  @Input() selectText = 'Select...';

  constructor() { }

  disabled = false;

  value: string;

  writeValue(value) {
    this.value = value;
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  toggleDrop() {
    this.dropOpen = !this.dropOpen;
  }

  itemSelected(item) {
    this.dropOpen = false;
    this.value = item;
    this.propagateChange(this.value);
  }

}
