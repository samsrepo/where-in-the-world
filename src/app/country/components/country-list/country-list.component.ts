import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  @Input() countries: Country[];
  @Output() countrySelected = new EventEmitter();
  @Output() loadMore = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1) {
      this.loadMore.emit();
    }
}

}
