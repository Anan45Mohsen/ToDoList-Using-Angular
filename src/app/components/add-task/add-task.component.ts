import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  constructor(private tasksService :TasksService , private router :Router ,private title : Title){
    this.title.setTitle('Adding a New Task')

  }
saveTask(title:any, description:any){
   this.tasksService.saveTask(title.value , description.value);
   this.router.navigate(['/'])
}
}
