import { Component, OnInit } from '@angular/core';
import { ThemeList, ThemeService } from '@app/@core/services/theme';
import { Path } from '@core/structs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  path = Path;
  theme = ThemeList;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  onClickChangeTheme(theme: ThemeList): void {
    this.themeService.setTheme(theme);
  }
}
