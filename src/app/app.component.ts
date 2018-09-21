import { Component } from '@angular/core';
import { Task } from './task';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Task[];

  private tasksUrl = 'http://localhost:3000/tasks';  // URL to web api

  constructor(private http: Http) { }

  /*getTasksData() {
    this.http.get('http://localhost:3000/tasks')
      .subscribe(res => this.todoList =
        res.json() as TodoList[]);
  }*/

  getTasksData() {
    this.http.get(this.tasksUrl)
      .subscribe(res => this.todoList =
        res.json() as Task[]);
  }

}
