import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { END_POINTS } from '../global';
import { ReplaySubject, Observable, from, zip, of } from 'rxjs';
import { Country } from './models/country';
import { map } from 'rxjs/operators';


/**
 * Main service to call Countries API and
 * manipulate the data
 */
@Injectable({
  providedIn: 'root'
})
export class CountryService {


  /**
   * All country data is provided on first call so cache it for later
   */
  private countryCache: any = new ReplaySubject(1);


  /**
   * Make countries cache available as an observable
   */
  public countries: Observable<Country[]> = this.countryCache.asObservable();

  /**
   * Creates an instance of country service.
   * Refreshes country list
   * @param httpService Injection of shared HttpService
   */
  constructor(private httpService: HttpService) {

    this.refreshCountries();
  }


  /**
   * Calls Countries API and caches the result
   */
  refreshCountries() {
    this.httpService.performGet(END_POINTS.ALL).subscribe({
      next: (response) => this.countryCache.next(response)
    });
  }


  /**
   * Gets distinct regions from country cache
   * @returns regions String[] of regions
   */
  getRegions(): Observable<string[]> {
    return this.countries.pipe(
      map(countries => {
        return [...new Set(countries.filter(country => country.region).map(country => country.region))];
      })
    );
  }


  /**
   * Queries country cache for countries which match specified criteria
   * @param searchTerm The term to look for
   * @param field The field to search on
   * @returns An observable list of matching countries
   */
  findCountry(searchTerm: string, field: string): Observable<Country[]> {
    return this.countries.pipe(
      map(countries => countries.filter(i => i[field].toLowerCase().startsWith(searchTerm.toLowerCase())))
    );
  }


  /**
   * Returns entire country list as an observable
   * @returns Observable array of countries
   */
  getAllCountries(): Observable<Country[]> {
    return this.countries;
  }


  /**
   * Gets specific country and formats it for presentation
   * @param countryCode The alpha3 code of the requested country
   * @returns The reuqested country after formatting
   */
  getCountry(countryCode: string): Observable<Country> {
    return this.countries.pipe(
      map(countries => {
        const country: Country = countries.find(c => c.alpha3Code === countryCode);
        country.borders_format = [];
        // Format language names as string array
        country.language_names = [...new Set(country.languages.filter(language => language.name).map(language => language.name))];
        // Format currency names as string array
        country.currency_names = [...new Set(country.currencies.filter(currency => currency.name).map(currency => currency.name))];
        for (const i in country.borders) {
          // For each border, get its name using the country cache
          if (country.borders[i]) {
            country.borders_format.push({
              code: country.borders[i],
              name: countries.find(n => n.alpha3Code === country.borders[i]).name
            });
          }
        }
        return country;
      })
    );
  }

}
