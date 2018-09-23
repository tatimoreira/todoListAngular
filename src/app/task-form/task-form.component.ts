import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {Task} from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

 // tasks : {{tasks}}

  constructor() { }

  ngOnInit() {
    //this.getTasks();
  }

 /* getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  addTask(text: string):void {
    text = text.trim();
    if (!text) { return; }
    this.taskService.addTask( {text} as Task)
    .subscribe(task =>{
      this.tasks.push(task);
    })
  }*/

}
