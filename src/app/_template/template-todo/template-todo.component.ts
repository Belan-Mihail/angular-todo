import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../_interface/todo';
import { EventPing } from '../../_interface/eventping';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrl: './template-todo.component.sass'
})
export class TemplateTodoComponent implements OnInit {

    @Input() ToDo:Todo
    @Output() ping: EventEmitter<any> = new EventEmitter<any>()

    constructor() {
      
    }

    ngOnInit(): void {
      
    }

    public changeCheck(event?: any): void {
      this.ToDo.status = !this.ToDo.status
      const eventObject: EventPing = {
        label: 'check',
        objekt: this.ToDo
      }
      this.ping.emit(eventObject)
    }

    public changeLabel(event?: any): void {
      const eventObject: EventPing = {
        label: 'label',
        objekt: this.ToDo
      }
      this.ping.emit(eventObject)
    }

    public deleteToDo(event?: any): void {
      const eventObject: EventPing = {
        label: 'delete',
        objekt: this.ToDo
      }
      this.ping.emit(eventObject)
    }


}
