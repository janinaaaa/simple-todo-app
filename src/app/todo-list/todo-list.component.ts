import {Component, OnInit} from '@angular/core';
import {DataService} from "../shared/data.service";
import {Todo} from "../shared/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  todoList : Todo[] = [];
  constructor(private dataService: DataService) {
  }

  ngOnInit(){
    this.todoList = this.getAllTodos()
  }

  getAllTodos(){
    return this.dataService.getAllTodos()
  }
}
