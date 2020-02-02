import { Injectable } from '@angular/core';
import { AppThemes } from '../global';
import { of, Observable, Subject, BehaviorSubject } from 'rxjs';


/**
 * Service responsible for changing the active theme
 * Only dark/light themes are available now but more
 * could be added in future
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = false;
  // Use behaviour subject so components can subscribe to active theme
  private themeTracker = new BehaviorSubject<boolean>(this.darkMode);

  constructor() {}

  /**
   * Toggles dark mode
   */
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.themeTracker.next(this.darkMode);
    if (this.darkMode) {
      this.setTheme(AppThemes.DARK);
    } else {
      this.setTheme(AppThemes.LIGHT);
    }
  }


  /**
   * Sets theme by changing the document's CSS variables
   * @param theme The selected theme object
   */
  private setTheme(theme: any[]) {
    theme.forEach((style) => {
      // Iterate through each theme property and change the global CSS variables
      document.documentElement.style.setProperty(style.property, style.value);
    });
  }


  /**
   * Determines whether dark mode is enabled
   * @returns darkMode An observable of the active theme
   */
  isDarkMode(): Observable<boolean> {
    return this.themeTracker.asObservable();
  }

}
