import { Injectable } from '@angular/core';
import {Todo} from "./todo.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[] = [
  ];
  constructor() { }

  getAllTodos(){
    return this.todos;
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  deleteTodos(index: number){
    this.todos.splice(index, 1)
  }
}
