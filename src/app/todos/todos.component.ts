import { Component } from '@angular/core';
import { Todos } from '../common/models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  // Initial app logic:
  // 1. Render todos list
  // 2. Select a todo
  // 3. Render selected todo

  todos: Todos[] = [
    {
      id: 0,
      title: 'Finish initial app logic',
      description: 'Finish yet another todo app, but angular style!',
      progress: 0.1,
      complete: false,
    },
    {
      id: 1,
      title: 'Add random Angular features',
      description:
        'Add random features to use more advanced Angular primitives',
      progress: 0,
      complete: false,
    },
    {
      id: 2,
      title: 'Add random NgRx and RxJs features',
      description:
        'Add random features that use NgRx and RxJs more extensively',
      progress: 0,
      complete: false,
    },
    {
      id: 3,
      title: 'Write a bunch of tests',
      description:
        'Write unit tests and e2e tests which achieve 90% test coverage',
      progress: 0,
      complete: false,
    },
  ];
}
