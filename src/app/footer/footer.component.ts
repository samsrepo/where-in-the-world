import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


/**
 * Main footer component
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  /**
   *  Get current year
   */
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
