import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {Task} from '../task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
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
  }

  deleteTask(task:Task) : void{
    let taskId = task.id;
    
    var idx = this.tasks.indexOf(task); // 1
    this.taskService.deleteTask(taskId)
    .subscribe(task => {
      if (idx !== -1) {
        this.tasks.splice(idx, 1);
      }
    })
  }

  updateTask():void{

  }


 
}
