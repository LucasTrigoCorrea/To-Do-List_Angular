import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
    {path: "to-do-list", component:TasksComponent},
    {path: "", redirectTo: "to-do-list", pathMatch: "full"}
];
