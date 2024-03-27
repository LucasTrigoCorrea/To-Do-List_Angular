import { Injectable } from '@angular/core';
import { ITask, tasks } from './tasks';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: ITask[] = tasks;

  constructor(
    private router: Router
  ) { }


  obterLista(){
    this.tasks = JSON.parse(localStorage.getItem("to-do-list") || "[]");
    return this.tasks;
  }

  adicionarTarefa(task: ITask){
    this.tasks.push(task);
    localStorage.setItem("to-do-list", JSON.stringify(this.tasks));
    return this.tasks;
  }

  limparLista(){
    this.tasks= [];
    localStorage.clear();
    window.location.reload();
  }

  limparTarefa(taskName: string){
    this.tasks = this.tasks.filter(task => task.name != taskName);
    localStorage.setItem("to-do-list", JSON.stringify(this.tasks));
    window.location.reload();
    return this.tasks;

  }
}
