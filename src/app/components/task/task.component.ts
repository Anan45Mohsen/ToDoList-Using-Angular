import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 taskId:any;
 task:any;
 constructor(private route: ActivatedRoute , private tasksService : TasksService , private router:Router){}
 ngOnInit():void{
  this.taskId = this.route.snapshot.paramMap.get('id');
  this.task=this.tasksService.tasks[this.taskId];

 }
 updateTask(){
  this.tasksService.updateTask(this.taskId , this.task);
  this.router.navigate(['/'])
 }
 deleteTask(){
  this.tasksService.deleteTask(this.taskId )
  this.router.navigate(['/'])
 }
}
