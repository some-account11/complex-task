import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


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
export class TodoComponent implements OnInit {
  form: FormGroup;
  tasks = TodoList;
  formButton = 'Add task';
  inputLabel = 'Add new task';
  newTask: any;
  tempIndex: number;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      inputField: ['']
    })
  }

  changeTask(index: number, inputTaskName: string) {
    this.tasks[index].onEdit = !this.tasks[index].onEdit;
    this.form.setValue({inputField:inputTaskName});
    this.tempIndex = index;
    for (let i = 0; i < this.tasks.length; i++){
      document.getElementsByClassName('edit')[i].setAttribute('disabled', 'true');
    }
  }

  deleteRow(i) {
    this.tasks.splice(i, 1);
  }

  selected(index) {
    this.tasks[index].selected = !this.tasks[index].selected;
    if (this.tasks[index].selected && !this.tasks[index].onEdit) {
      this.tasks[index].taskStatus = 'Done !!!';
      this.tasks[index].listStatus = 'done_outline';
      document.getElementsByClassName('edit')[index].setAttribute('disabled', 'true');
    } else if (this.tasks[index].selected && this.tasks[index].onEdit) {
      this.formButton = 'Edit task';
      this.inputLabel = 'Edit task';
      this.tasks[index].taskStatus = 'Editing...';
      this.tasks[index].listStatus = 'edit';
      document.getElementById('todosList').setAttribute('disabled', 'true');
    } else {
      this.tasks[index].taskStatus = 'In progress';
      this.tasks[index].listStatus = 'notification_important';
      document.getElementsByClassName('edit')[index].removeAttribute('disabled');
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else if (!this.form.invalid && this.formButton === 'Add task') {
        this.newTask = {
          taskName: this.form.value.inputField,
          taskStatus: 'In progress',
          listStatus: 'notification_important',
          selected: false,
          onEdit: false
        };
        this.tasks.push(this.newTask);
    } else {
      this.tasks[this.tempIndex].taskName = this.form.value.inputField;
      this.tasks[this.tempIndex].onEdit = !this.tasks[this.tempIndex].onEdit;
      this.tasks[this.tempIndex].taskStatus = 'In progress';
      this.tasks[this.tempIndex].listStatus = 'notification_important';
      this.tasks[this.tempIndex].selected = !this.tasks[this.tempIndex].selected;
      this.formButton = 'Add task';
      this.inputLabel = 'Add new task';
      for (let i = 0; i < this.tasks.length; i++){
        document.getElementsByClassName('edit')[i].removeAttribute('disabled');
      }
    }

    this.form.controls.inputField.setValue('');
    // this.form.controls.inputField.markAsDirty({onlySelf:true});
  }
}

