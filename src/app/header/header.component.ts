import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from '../shared/theme-service';
import { AppThemes } from '../global';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  darkMode: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.darkMode = this.themeService.isDarkMode();
  }

  setTheme() {
    this.themeService.toggleDarkMode();
  }

}
