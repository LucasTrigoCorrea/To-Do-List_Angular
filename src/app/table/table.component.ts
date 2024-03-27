import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks';
import { TasksService } from '../tasks.service';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, RouterOutlet, TasksComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  name = "";
  description = "";
  tasks = tasks;

  constructor(
    private tasksService: TasksService
  ){
  }

  ngOnInit(): void {
    this.tasks = this.tasksService.obterLista();
  }


  limparTarefa(nameTask: string){
    this.tasks = this.tasks.filter(task => task.name !== nameTask);
    this.tasksService.limparTarefa(nameTask);
  }
}
