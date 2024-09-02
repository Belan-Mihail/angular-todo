import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../_interface/todo';
import { EventPing } from '../../_interface/eventping';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrl: './template-todo-form.component.sass'
})
export class TemplateTodoFormComponent implements OnInit {


  public ToDo:Todo
  @Output() ping: EventEmitter<Todo> = new EventEmitter<Todo>()

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
    
    this.ping.emit(this.ToDo)
    this.ToDo = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
  }
}
