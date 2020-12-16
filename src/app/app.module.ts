import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersListModule } from 'src/components/UsersList/usersList.module';
import { NavbarModule } from 'src/components/Navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UsersListModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
