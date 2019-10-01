import { Component } from '@angular/core';


interface todoList {
  taskName: string,
  taskStatus: string,
  listStatus: string,
  selected: boolean,
}

const TodoList: todoList[] = [
  {
    taskName: 'Learn HTML',
    taskStatus: 'In progress',
    listStatus: 'notification_important',
    selected: false
  },
  {
    taskName: 'Learn CSS',
    taskStatus: 'In progress',
    listStatus: 'notification_important',
    selected: false
  },
  {
    taskName: 'Learn JS',
    taskStatus: 'In progress',
    listStatus: 'notification_important',
    selected: false
  },
  {
    taskName: 'Learn Angular',
    taskStatus: 'In progress',
    listStatus: 'notification_important',
    selected: false
  },
];

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  tasks = TodoList;
  formButton = 'Add task';
  changeStatus(i, inputTaskName){
  }
  deleteRow(i){
    this.tasks.splice(i,1);
  }
  selected(index){
    this.tasks[index].selected = !this.tasks[index].selected;
    if (this.tasks[index].selected){
      this.tasks[index].taskStatus = 'DONE!!!';
      this.tasks[index].listStatus = 'done_outline';
      document.getElementsByClassName('edit')[index].setAttribute('disabled','true');
    } else {
      this.tasks[index].taskStatus = 'In progress';
      this.tasks[index].listStatus = 'notification_important';
      document.getElementsByClassName('edit')[index].removeAttribute('disabled');
    }
}

}

