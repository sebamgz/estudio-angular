import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  constructor(private taskService: TaskService){}

  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task) => {
      this.tasks = task;
    });
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
