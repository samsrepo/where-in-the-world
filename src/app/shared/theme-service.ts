import { Injectable } from '@angular/core';
import { AppThemes } from '../global';
import { of, Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = false;
  private themeTracker = new BehaviorSubject<boolean>(this.darkMode);

  constructor() {}

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.themeTracker.next(this.darkMode);
    if (this.darkMode) {
      this.setTheme(AppThemes.DARK);
    } else {
      this.setTheme(AppThemes.LIGHT);
    }
  }

  private setTheme(theme: any[]) {
    theme.forEach((style) => {
      document.documentElement.style.setProperty(style.property, style.value);
    });
  }

  isDarkMode(): Observable<boolean> {
    return this.themeTracker.asObservable();
  }

}
