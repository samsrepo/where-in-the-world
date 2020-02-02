import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../country.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Country } from '../../models/country';
import { Router } from '@angular/router';
import { AppRoutes, PageSize } from 'src/app/global';
import { debounceTime } from 'rxjs/operators';

/**
 * Main UI logic for displaying list of countries
 */
@Component({
  selector: 'app-country-list-container',
  templateUrl: './country-list-container.component.html',
  styleUrls: ['./country-list-container.component.scss']
})
export class CountryListContainerComponent implements OnInit {

  /**
   * Stores how many countries should be shown in list
   */
  listSize: number;

  /**
   * Declares form for filtering countries
   */
  filterForm: FormGroup;

  /**
   * Declares property to store regions
   */
  regionDrop: Observable<any>;

  /**
   * Declares main list of countries
   */
  countries: Observable<Country[]>;


  /**
   * Creates an instance of country list container component.
   * Sets up the form fields, sets the default list size and
   * starts change detectors on filter fields
   * @param countryService Injection of CountryService
   * @param formBuilder Injection of FormBuilder
   * @param router Injection of Angular Router
   */
  constructor(private countryService: CountryService, private formBuilder: FormBuilder, private router: Router) {
    this.filterForm = this.formBuilder.group({
      country: [''],
      region: ['']
    });
    this.resetListSize();
    this.detectSearchChange();
    this.detectRegionChange();
  }

  /**
   * Initialise regions and countries on start
   */
  ngOnInit() {
    this.regionDrop = this.countryService.getRegions();
    this.countries = this.countryService.getAllCountries();
  }

  /**
   * On change of region:
   * -Filter results
   * -Clear search field
   * -Reset list size
   */
  detectRegionChange() {
    this.filterForm.get('region').valueChanges.subscribe((value) => {
      this.resetListSize();
      this.countries = this.countryService.findCountry(value, 'region');
      this.filterForm.patchValue({country: ''}, {emitEvent: false, onlySelf: true});
    });
  }

  /**
   * On change of search field:
   * -Filter results
   * -Clear search field
   * -Reset list size
   */
  detectSearchChange() {
    this.filterForm.get('country').valueChanges.pipe(debounceTime(100)).subscribe((value) => {
      this.resetListSize();
      this.countries = this.countryService.findCountry(value, 'name');
      this.filterForm.patchValue({region: ''}, {emitEvent: false, onlySelf: true});
    });
  }

  /**
   * Clear selected region when requested by form control
   */
  clearRegion() {
    this.filterForm.patchValue({region: ''});
  }

  /**
   * Navigate to selected country using the country code provided
   * @param code Selected alpha3 country code
   */
  loadCountry(code) {
    this.router.navigate([AppRoutes.COUNTRIES + '/', code]);
  }

  /**
   * Called when list is scrolled to bottom
   * Increases list size
   */
  loadMoreCountries() {
    this.listSize += PageSize;
  }

  /**
   * Resets list size to default
   */
  resetListSize() {
    this.listSize = PageSize;
  }

}
