import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


/**
 * Generic component to display lable and field values
 */
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit {


  /**
   * Label of field
   */
  @Input() label: string;

  /**
   * Value of field
   */
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
