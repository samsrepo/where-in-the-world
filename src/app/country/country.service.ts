import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { END_POINTS } from '../global';
import { ReplaySubject, Observable, from, zip, of } from 'rxjs';
import { Country } from './models/country';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryCache: any = new ReplaySubject(1);

  public countries: Observable<Country[]> = this.countryCache.asObservable();

  constructor(private httpService: HttpService) {
    this.refreshCountries();
  }

  refreshCountries() {
    this.httpService.performGet(END_POINTS.ALL).subscribe({
      next: (response) => this.countryCache.next(response)
    });
  }

  getRegions(): Observable<string[]> {
    return this.countries.pipe(
      map(countries => {
        return [...new Set(countries.filter(country => country.region).map(country => country.region))];
      })
    );
  }

  findCountry(searchTerm: string, field: string): Observable<Country[]> {
    return this.countries.pipe(
      map(countries => countries.filter(i => i[field].toLowerCase().startsWith(searchTerm.toLowerCase())))
    );
  }

  getAllCountries(): Observable<Country[]> {
    return this.countries;
  }

  getCountry(countryCode: string): Observable<Country> {
    return this.countries.pipe(
      map(countries => {
        const country: Country = countries.find(c => c.alpha3Code === countryCode);
        country.borders_format = [];
        country.language_names = [...new Set(country.languages.filter(language => language.name).map(language => language.name))];
        country.currency_names = [...new Set(country.currencies.filter(currency => currency.name).map(currency => currency.name))];
        for (const i in country.borders) {
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
