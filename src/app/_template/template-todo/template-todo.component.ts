import { Component, OnInit } from '@angular/core';
import { Todo } from '../../_interface/todo';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrl: './template-todo.component.sass'
})
export class TemplateTodoComponent implements OnInit {

    public ToDo:Todo

    constructor() {
      this.ToDo = {
        id: 1,
        label: 'Wie geht',
        status: false,
        position: 1
      }
    }

    ngOnInit(): void {
      
    }

    public changeCheck(event?: any): void {
      this.ToDo.status = !this.ToDo.status
    }
}
