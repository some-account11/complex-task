import { Component } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  listStatus: string = 'notification_important';
  taskStatus: string = 'DONE'
  todoList: string[] = ['Learn HTML', 'Learn CSS', 'Learn JS', 'Learn Angular'];

  changeStatus(i){
    console.log(i);
    // this.taskStatus. [i] = 'DO IT!!!'
  }

}

