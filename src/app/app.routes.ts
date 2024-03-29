import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
export const routes: Routes = [
{path:'' , component:HomeComponent},
{path:'add-task' , component: AddTaskComponent},
{path:'task', component:TaskComponent},
{path:'task/:id', component:TaskComponent},
{path:'**' ,component:NotFoundComponent}
];
