import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public taskservices : TasksService , private title : Title){
    this.title.setTitle('Home Commponent');

  }
  deleteTask(i:number){
    this.taskservices.deleteTask(i)
  }
}
