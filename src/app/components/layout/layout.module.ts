import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '../header/header.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { PrivateLayoutComponent } from './private-layout/layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
  declarations: [PublicLayoutComponent, PrivateLayoutComponent],
  imports: [CommonModule, HeaderModule, SidebarModule],
  exports: [PublicLayoutComponent, PrivateLayoutComponent],
})
export class LayoutModule {}
