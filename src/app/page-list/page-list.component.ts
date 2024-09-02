import { Component, OnInit } from '@angular/core';
import { Todo } from '../_interface/todo';
import { EventPing } from '../_interface/eventping';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.sass'
})
export class PageListComponent implements OnInit {

    public toDoShow: boolean;
    public toDoDoneShow: boolean;
    public todos$: Todo[];
    public todosdone$: Todo[]

    constructor() {
      this.toDoShow = true
      this.toDoDoneShow = false
      this.todos$ = [
        {
          id: 0,
          label: 'test',
          status: false,
          position: 1
        },
        {
          id: 1,
          label: 'test 2',
          status: false,
          position: 2
        }
      ]
      this.todosdone$ = []
    }

    ngOnInit(): void {
    
    }

    public create(event:Todo) : void {
      event.position = this.todos$.length + 1
      this.todos$.push(event)
      console.log(this.todos$)
    }

    public update(event:EventPing): void {
      if ('check' === event.label) {
        if (!event.objekt.status) {
          this.todosdone$.splice(this.todosdone$.indexOf(event.objekt), 1)
          this.todos$.push(event.objekt)
        } else {
          this.todos$.splice(this.todos$.indexOf(event.objekt), 1)
          this.todosdone$.push(event.objekt)
        }
      }
      if ('delete' === event.label) {
        if (event.objekt.status) {
          this.todosdone$.splice(this.todosdone$.indexOf(event.objekt), 1)
          
        } else {
          this.todos$.splice(this.todos$.indexOf(event.objekt), 1)
          
        }
      }
      if ('label' === event.label) {
        if (event.objekt.status) {
          this.todosdone$.forEach((toDo:Todo) => {
            if (toDo.id === event.objekt.id) {
              toDo.label = event.objekt.label
            }
          })
          
        } else {
          this.todos$.forEach((toDo:Todo) => {
            if (toDo.id === event.objekt.id) {
              toDo.label = event.objekt.label
            }
          })
          
          
        }
      }
    }

}
