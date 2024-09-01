import { Component, OnInit } from '@angular/core';
import { Todo } from '../../_interface/todo';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrl: './template-todo-form.component.sass'
})
export class TemplateTodoFormComponent implements OnInit {


  public ToDo:Todo

  constructor() {
    this.ToDo = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
  }

  ngOnInit(): void {
      
  }

  public createToDo(event?: any): void {
    
    console.log(this.ToDo)
    this.ToDo = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
  }
}
