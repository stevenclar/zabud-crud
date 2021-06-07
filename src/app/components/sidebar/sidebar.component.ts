import { Component, OnInit } from '@angular/core';
import { Path } from '@app/@core/structs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  path = Path;
  
  constructor() { }

  ngOnInit(): void {
  }

}
