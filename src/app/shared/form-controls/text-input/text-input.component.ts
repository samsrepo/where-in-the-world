import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor  {

  @Input() placeholder: string;

  private controlValue: string;

  onChange = (_: any) => { };
  onTouched = () => { };

  constructor() { }

  registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  registerOnTouched(fn: () => {}): void { this.onTouched = fn; }

  writeValue(obj: any): void {
    this.controlValue = obj;
  }
  pushChanges(value: any) {
    this.onChange(value);
  }

  public get value() {
    return this.controlValue;
  }

  public set value(v) {
    this.controlValue = v;
    this.onChange(this.controlValue);
    this.onTouched();
  }
}
