import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../shared/todo.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
 @Input() todo !: Todo;
 @Output() todoClicked = new EventEmitter<void>;
 @Output() deleteClicked = new EventEmitter<void>;
  toggleCompleted() {
    this.todoClicked.emit();
  }

  onDeleteClicked(){
   this.deleteClicked.emit();
  }
}
