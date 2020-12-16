import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Navbar } from './navbar.component';

@NgModule({
  declarations: [Navbar],
  imports: [CommonModule],
  exports: [Navbar],
})
export class NavbarModule {}
