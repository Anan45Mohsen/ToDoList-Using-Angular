import { Injectable } from '@angular/core';
import {Task} from '../interfaces/task'
@Injectable({
  providedIn: 'root'
})
export class TasksService {
   tasks : Task[] =[
    {
      title:"asignment",
      description:'this is my todo today'
    },
    {
      title:"writing",
      description:"this day i wanna to writing book"
    },
    {
      title:"developing",
      description:'react developing program'
    },
    {
      title:'running',
      description:'run 5 times in beni suef club'
    }
   ]
  constructor() {
    let storedTasks = localStorage.getItem('tasks')
    if(storedTasks){
      this.tasks= JSON.parse(storedTasks);
    }
    else{
      this.tasks = []
    }
      
   }
  deleteTask(i:number){
    this.tasks.splice(i ,1);
    this.storeTasks()
  }
  saveTask(title:any, description:any){
       this.tasks.push({
        title,
        description
       })
      this.storeTasks()
  }
  updateTask(id:any, item :any){
    this.tasks[id] = item;
   this.storeTasks()

  }
  storeTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));

  }

}
