import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryListContainerComponent } from './containers/country-list-container/country-list-container.component';
import { CountryDetailContainerComponent } from './containers/country-detail-container/country-detail-container.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { SharedModule } from '../shared/shared.module';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { FieldComponent } from './components/field/field.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    CountryListContainerComponent,
    CountryDetailContainerComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryCardComponent,
    FieldComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class CountryModule { }
