import { Component, Input, forwardRef, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


/**
 * Custom dropdown component
 */
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


  /**
   * States whether section is displayed
   */
  dropOpen = false;

  /**
   * List of options
   */
  @Input() values: string[];

  /**
   * Help text to be displayed if no selection
   */
  @Input() selectText = 'Select...';


  /**
   * Alerts parent component to clear selection from form
   */
  @Output() clearSelection = new EventEmitter();


  /**
   * The selected value
   */
  value: string;

  constructor(private eRef: ElementRef) { }


  /**
   *  Clears selection if value is entered, opens drop otherwise
   */
  dropClick() {
    if (this.value) {
      this.clearSelection.emit();
    } else {
      this.dropOpen = !this.dropOpen;
    }
  }

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

  /**
   * Set selected item, close drop and trigger change
   * @param item The selected item
   */
  itemSelected(item) {
    this.dropOpen = false;
    this.value = item;
    this.propagateChange(this.value);
  }

  /**
   * Hide about info if click outside dropdown
   * @param event Click event
   */
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropOpen = false;
    }
  }

}
