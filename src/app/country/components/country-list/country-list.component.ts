import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  @Input() countries: Country[];
  @Output() countrySelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
