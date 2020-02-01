import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../country.service';
import { Country } from '../../models/country';
import { AppRoutes } from 'src/app/global';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-detail-container',
  templateUrl: './country-detail-container.component.html',
  styleUrls: ['./country-detail-container.component.scss']
})
export class CountryDetailContainerComponent implements OnInit {

  country: Observable<Country>;

  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.country = this.countryService.getCountry(params.get(AppRoutes.NAME_PARAM));
    });
  }

}
