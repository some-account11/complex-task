import { Component } from '@angular/core';


interface todoList {
  taskName: string,
  taskStatus: string,
  listStatus: string,
  selected: boolean,
  onEdit: boolean
}

const TodoList: todoList[] = [
  {
    taskName: 'Learn HTML',
    taskStatus: 'In progress',
    listStatus: 'notification_important',
    selected: false,
    onEdit: false
  },
  {
    taskName: 'Learn CSS',
    taskStatus: 'In progress',
    listStatus: 'notification_important',
    selected: false,
    onEdit: false
  },
  {
    taskName: 'Learn JS',
    taskStatus: 'In progress',
    listStatus: 'notification_important',
    selected: false,
    onEdit: false
  },
  {
    taskName: 'Learn Angular',
    taskStatus: 'In progress',
    listStatus: 'notification_important',
    selected: false,
    onEdit: false
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
  inputLabel = 'Add new task';

  changeTask(index, inputTaskName){
    this.tasks[index].onEdit = !this.tasks[index].onEdit;
    // if (this.tasks[index].onEdit){
    //   this.formButton = 'Edit task';
    //   this.inputLabel = 'Edit task';
    //   this.tasks[index].taskStatus = 'Editing...';
    // } else{
    //   this.formButton = 'Add task';
    //   this.inputLabel = 'Add new task';
    //   this.tasks[index].taskStatus = 'In progress';
    // }

  }
//todo  this.tasks[index].onEdit = !this.tasks[index].onEdit ON SAVE BUTTON!!!
  deleteRow(i){
    this.tasks.splice(i,1);
  }
  selected(index){
    this.tasks[index].selected = !this.tasks[index].selected;
    if (this.tasks[index].selected == true && this.tasks[index].onEdit == false){
      this.tasks[index].taskStatus = 'Done !!!';
      this.tasks[index].listStatus = 'done_outline';
      document.getElementsByClassName('edit')[index].setAttribute('disabled','true');
    } else if(this.tasks[index].selected && this.tasks[index].onEdit){
      this.formButton = 'Edit task';
      this.inputLabel = 'Edit task';
      this.tasks[index].taskStatus = 'Editing...';
      this.tasks[index].listStatus = 'edit';
    } else {
      this.tasks[index].taskStatus = 'In progress';
      this.tasks[index].listStatus = 'notification_important';
      document.getElementsByClassName('edit')[index].removeAttribute('disabled');
    }
}

}

