import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Country } from '../../models/country';


/**
 * Presentation component for list countries
 */
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {


  /**
   * Passed in list of country objects
   */
  @Input() countries: Country[];

  /**
   * Setup event emitter to alert parent when
   * country has been selected
   */
  @Output() countrySelected = new EventEmitter();
}
