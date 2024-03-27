import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask, tasks } from '../tasks';
import { TasksService } from '../tasks.service';
import { Element } from '@angular/compiler';
import { elementAt } from 'rxjs';
import { style } from '@angular/animations';
import { TableComponent } from '../table/table.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, NgFor, TableComponent, RouterOutlet],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
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

  adicionarTarefa(){
    const task: ITask = {
      name: this.name,
      description: this.description
    };
    this.tasksService.adicionarTarefa(task);
  }

  limparLista(){
    this.tasksService.limparLista();
    
  }



}
