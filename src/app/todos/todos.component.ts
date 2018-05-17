import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  tasks = [];
  descValue = '';

  constructor() { }

  ngOnInit() {
  }

  createTask() {
    let newTask = {
      id: this.tasks.length, 
      description: this.descValue, 
      completed: false
    };
    this.tasks.push(newTask);
    this.descValue = '';
  }

  checkItem(task) {
    task.completed = !task.completed;
    console.log(task.completed);
  }

  clearCompleted() {
    let newArr = [];
    this.tasks.forEach(task => {
      if (task.completed == false) {
        newArr.push(task);
      }
    });
    this.tasks = newArr;
  }

  deleteTask(task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
