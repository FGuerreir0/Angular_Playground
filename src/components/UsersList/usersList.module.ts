import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { usersListComponent } from './usersList.component';

@NgModule({
  declarations: [usersListComponent],
  imports: [CommonModule],
  exports: [usersListComponent],
})
export class UsersListModule {}
