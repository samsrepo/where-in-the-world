import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
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

  @Output() clearSelection = new EventEmitter();

  constructor(private eRef: ElementRef) { }

  disabled = false;

  value: string;

  writeValue(value) {
    this.value = value;
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  clear(event) {
    event.stopPropagation();
    this.clearSelection.emit();
  }

  registerOnTouched() {}

  dropClick() {
    if (this.value) {
      this.clearSelection.emit();
    } else {
      this.dropOpen = !this.dropOpen;
    }
  }

  itemSelected(item) {
    this.dropOpen = false;
    this.value = item;
    this.propagateChange(this.value);
  }

    // Hide about info if click outside about text
    @HostListener('document:click', ['$event'])
    clickout(event) {
      if(!this.eRef.nativeElement.contains(event.target)) {
        this.dropOpen = false;
      }
    }

}
