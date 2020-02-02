import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../country.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Country } from '../../models/country';
import { Router } from '@angular/router';
import { AppRoutes, PageSize } from 'src/app/global';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-list-container',
  templateUrl: './country-list-container.component.html',
  styleUrls: ['./country-list-container.component.scss']
})
export class CountryListContainerComponent implements OnInit {

  listSize: number;

  filterForm: FormGroup;

  regionDrop: Observable<any>;

  countries: Observable<Country[]>;

  constructor(private countryService: CountryService, private formBuilder: FormBuilder, private router: Router) {
    this.filterForm = this.formBuilder.group({
      country: [''],
      region: ['']
    });
    this.resetListSize();
    this.detectSearchChange();
    this.detectRegionChange();
  }

  ngOnInit() {
    this.regionDrop = this.countryService.getRegions();
    this.countries = this.countryService.getAllCountries();
  }

  detectRegionChange() {
    this.filterForm.get('region').valueChanges.subscribe((value) => {
      this.resetListSize();
      this.countries = this.countryService.findCountry(value, 'region');
      this.filterForm.patchValue({country: ''}, {emitEvent: false, onlySelf: true});
    });
  }

  detectSearchChange() {
    this.filterForm.get('country').valueChanges.pipe(debounceTime(100)).subscribe((value) => {
      this.resetListSize();
      this.countries = this.countryService.findCountry(value, 'name');
      this.filterForm.patchValue({region: ''}, {emitEvent: false, onlySelf: true});
    });
  }

  clearRegion() {
    this.filterForm.patchValue({region: ''});
  }

  loadCountry(code) {
    this.router.navigate([AppRoutes.COUNTRIES + '/', code]);
  }

  loadMoreCountries() {
    this.listSize += PageSize;
  }

  resetListSize() {
    this.listSize = PageSize;
  }

}
