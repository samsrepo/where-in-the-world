import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListContainerComponent } from './containers/country-list-container/country-list-container.component';
import { CountryDetailContainerComponent } from './containers/country-detail-container/country-detail-container.component';


const routes: Routes = [
  {path: '', component: CountryListContainerComponent},
  {path: ':name', component: CountryDetailContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
