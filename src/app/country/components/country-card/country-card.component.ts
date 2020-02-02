import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Country } from '../../models/country';


/**
 * UI component to display country card for lists
 */
@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryCardComponent implements OnInit {


  /**
   * Passed in country object
   */
  @Input() country: Country;

  constructor() { }

  ngOnInit() {
  }

}
