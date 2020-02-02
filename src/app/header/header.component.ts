import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from '../shared/theme-service';
import { AppThemes } from '../global';
import { Observable } from 'rxjs';


/**
 * Main header component
 * Allows user to switch between themes
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {


  /**
   * Observable darkMode state
   */
  darkMode: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  /**
   * Initialise darkMode state listener
   */
  ngOnInit() {

    this.darkMode = this.themeService.isDarkMode();
  }


  /**
   * Toggle the theme
   */
  setTheme() {
    this.themeService.toggleDarkMode();
  }

}
