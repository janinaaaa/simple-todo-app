import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DataService} from "../shared/data.service";
import {Todo} from "../shared/todo.model";

@Component({
    selector: 'app-add-box',
    templateUrl: './add-box.component.html',
    styleUrls: ['./add-box.component.scss']
})
export class AddBoxComponent {
   constructor(private dataService: DataService) {
   }
  onFormSubmit(form: NgForm) {
    if(form.valid){
      this.dataService.addTodo(new Todo(form.value.text))
    }

  }
}
