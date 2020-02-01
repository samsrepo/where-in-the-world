import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../country.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Country } from '../../models/country';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/global';

@Component({
  selector: 'app-country-list-container',
  templateUrl: './country-list-container.component.html',
  styleUrls: ['./country-list-container.component.scss']
})
export class CountryListContainerComponent implements OnInit {

  filterForm: FormGroup;

  regionDrop: Observable<any>;

  countries: Observable<Country[]>;

  constructor(private countryService: CountryService, private formBuilder: FormBuilder, private router: Router) {
    this.filterForm = this.formBuilder.group({
      country: [''],
      region: ['']
    });

    this.detectSearchChange();
    this.detectRegionChange();
  }

  ngOnInit() {
    this.regionDrop = this.countryService.getRegions();
    this.countries = this.countryService.getAllCountries();
  }

  detectRegionChange() {
    this.filterForm.get('region').valueChanges.subscribe((value) => {
      this.countries = this.countryService.findCountry(value, 'region');
    });
  }

  detectSearchChange() {
    this.filterForm.get('country').valueChanges.subscribe((value) => {
      this.countries = this.countryService.findCountry(value, 'name');
    });
  }

  loadCountry(code) {
    this.router.navigate([AppRoutes.COUNTRIES + '/', code]);
  }

}
