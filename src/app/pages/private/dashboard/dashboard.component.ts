import { Component, OnInit } from '@angular/core';
import { ThemeList, ThemeService } from '@app/@core/services/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  theme = ThemeList;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }


  onClickChangeTheme(theme: ThemeList): void {
    this.themeService.setTheme(theme);
  }

}
