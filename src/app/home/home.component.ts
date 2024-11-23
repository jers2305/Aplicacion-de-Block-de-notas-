import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';
import { ListaTareasComponent } from '../lista-tareas/lista-tareas.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, AddTareaComponent, ListaTareasComponent, SearchBarComponent]
})
export class HomeComponent { }
