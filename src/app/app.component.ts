import { Component } from '@angular/core';
import { UserInterface } from './types/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  userData: UserInterface[] = [
    {
      id: 1,
      name: 'Fabio',
      age: 27,
    },
    {
      id: 2,
      name: 'Mara',
      age: 26,
    },
    {
      id: 3,
      name: 'Lucas',
      age: 29,
    },
    {
      id: 4,
      name: 'Sam',
      age: 5,
    },
    {
      id: 5,
      name: 'Filipa',
      age: 90,
    },
    {
      id: 6,
      name: 'João',
      age: 19,
    },
    {
      id: 7,
      name: 'Antónia',
      age: 45,
    },
    {
      id: 8,
      name: 'Daniela',
      age: 60,
    },
  ];
  removeFunction(id: Number): void {
    this.userData = this.userData.filter((user) => user.id !== id);
  }

  sortFunction(search: String): void {
    if (search === 'name') {
      this.userData.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        else return 0;
      });
    } else {
      this.userData.sort((a, b) => {
        if (a.age < b.age) return -1;
        else if (a.age > b.age) return 1;
        else return 0;
      });
    }
  }
  submitNewUser(data): void {
    if (data.newAge > 0 && data.newUserName.length > 0) {
      let newData: UserInterface = {
        id: Math.random() * 100,
        name: data.newUserName,
        age: data.newAge,
      };

      this.userData.push(newData);
    }
  }
}
