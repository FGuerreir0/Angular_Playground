import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: '/src/components/UsersList/usersList.component.html',
  styleUrls: ['/src/components/UsersList/usersList.component.scss'],
})
export class usersListComponent {
  newUserName: string = '';
  newAge: number = 0;
  @Input() userData: UserInterface[];
  @Output() removeFunctionEvent = new EventEmitter<number>();
  @Output() sortFunctionEvent = new EventEmitter();
  @Output() submitNewUserEvent = new EventEmitter<{
    newAge: number;
    newUserName: string;
  }>();

  newUserSubmission(name: string): void {
    this.newUserName = name;
  }
  newAgeSubmission(age: number): void {
    this.newAge = age;
  }
  submitNewUser(): void {
    this.submitNewUserEvent.emit({
      newAge: this.newAge,
      newUserName: this.newUserName,
    }); // TEM DE SE ENVIAR SÓ UMA PROPRIEDADE PARA O PARENT, FAZENDO DESTE MODO EM OBJECT

    this.newAge = 0;
    this.newUserName = '';
  }
}
