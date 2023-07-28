import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  [x: string]: any;
  private URL: string = 'http://localhost:3000/todos';
  constructor() {}

  get(url: string = this.URL): Promise<Todo[]> {
    return fetch(url).then((res) => res.json());
  }

  create(todo: Todo): Promise<Todo> {
    return fetch(this.URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((res) => res.json());
  }

  edit(todo: Todo) {
    return fetch(this.URL + '/' + todo.id, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((res) => res.json());
  }

  delete(todo: Todo) {
    this['todoSvc'].delete(todo).then(() => {
      this['todo'] = this['Todo'].filter(
        (p: { id: number | undefined }) => p.id != todo.id
      );
    });
  }
}
