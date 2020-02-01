import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryCardComponent implements OnInit {

  @Input() country: Country;

  constructor() { }

  ngOnInit() {
  }

}
